import express from 'express';
import http from 'http';
import https from 'https';
import path from 'path';
import xmlFormatter from 'xml-formatter';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));  // Use process.cwd() for ESM path resolution
});

// Handle SOAP message sending
app.post('/send-soap', async (req, res) => {
    try {
        const { url, soapAction, messageContent, payloadContent } = req.body;

        // Base64 encode the payload content
        let base64Payload = 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPGhlbGxvPndvcmxkPC9oZWxsbz4='; // default
        if (payloadContent) {
            base64Payload = Buffer.from(payloadContent, 'utf8').toString('base64');
        }

        // Create SOAP envelope by string concatenation
        const soapEnvelope = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ns="http://docs.oasis-open.org/ebxml-msg/ebms/v3.0/ns/core/200704/" xmlns:eu="http://eu.domibus.wsplugin/">
    <soap:Header>
        ${messageContent}
    </soap:Header>
    <soap:Body>
        <eu:submitRequest>
            <payload payloadId="cid:message" contentType="text/xml">
                <value>${base64Payload}</value>
            </payload>
        </eu:submitRequest>
    </soap:Body>
</soap:Envelope>`;

        // Parse URL to determine if HTTP or HTTPS
        const urlObj = new URL(url);
        const isHttps = urlObj.protocol === 'https:';
        const client = isHttps ? https : http;

        // Prepare request options
        const options = {
            hostname: urlObj.hostname,
            port: urlObj.port || (isHttps ? 443 : 80),
            path: urlObj.pathname + urlObj.search,
            method: 'POST',
            headers: {
                'Content-Type': 'text/xml; charset=utf-8',
                'SOAPAction': soapAction,
                'Content-Length': Buffer.byteLength(soapEnvelope)
            }
        };

        // Send the SOAP request
        const response = await sendSoapRequest(client, options, soapEnvelope);

        res.json({
            success: true,
            statusCode: response.statusCode,
            headers: response.headers,
            body: response.body,
            soapRequest: soapEnvelope // Include the full SOAP request
        });

    } catch (error) {
        res.json({
            success: false,
            error: error.message,
            soapRequest: null
        });
    }
});

// Helper function to send SOAP request
function sendSoapRequest(client, options, soapEnvelope) {
    return new Promise((resolve, reject) => {
        const req = client.request(options, (res) => {
            let body = '';

            res.on('data', (chunk) => {
                body += chunk;
            });

            res.on('end', () => {
                // Pretty print XML response if it's XML content
                let formattedBody = body;
                const contentType = res.headers['content-type'] || '';
                if (contentType.includes('xml') || body.trim().startsWith('<?xml') || body.trim().startsWith('<')) {
                    try {
                        formattedBody = xmlFormatter(body, {
                            indentation: '  ',
                            collapseContent: true,
                            lineSeparator: '\n'
                        });
                    } catch (error) {
                        // If XML formatting fails, keep original body
                        console.warn('Failed to format XML response:', error.message);
                    }
                }

                resolve({
                    statusCode: res.statusCode,
                    headers: res.headers,
                    body: formattedBody
                });
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.write(soapEnvelope);
        req.end();
    });
}

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
