const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const MESSAGES_DIR = './received_messages';

// Middleware to parse raw body data
app.use(express.raw({ type: '*/*', limit: '10mb' }));

// Create messages directory if it doesn't exist
if (!fs.existsSync(MESSAGES_DIR)) {
    fs.mkdirSync(MESSAGES_DIR, { recursive: true });
}

// Main endpoint for receiving messages from Domibus
app.post('/domibus/message', (req, res) => {
    const timestamp = new Date().toISOString();
    const messageId = req.headers['message-id'] || `msg_${Date.now()}`;

    console.log(`[${timestamp}] Received message from Domibus:`);
    console.log(`  Message ID: ${messageId}`);
    console.log(`  Content-Type: ${req.headers['content-type'] || 'unknown'}`);
    console.log(`  Content-Length: ${req.body ? req.body.length : 0} bytes`);

    // Log additional headers that might be relevant
    const relevantHeaders = ['from-party-id', 'to-party-id', 'service', 'action', 'conversation-id'];
    relevantHeaders.forEach(header => {
        if (req.headers[header]) {
            console.log(`  ${header}: ${req.headers[header]}`);
        }
    });

    try {
        // Save message body to file
        const filename = `${timestamp.replace(/[:.]/g, '-')}_${messageId}.xml`;
        const filepath = path.join(MESSAGES_DIR, filename);

        fs.writeFileSync(filepath, req.body);

        console.log(`  Saved to: ${filepath}`);
        console.log('---');

        // Send success response
        res.status(200).json({
            status: 'success',
            messageId: messageId,
            timestamp: timestamp,
            savedTo: filename
        });

    } catch (error) {
        console.error(`[${timestamp}] Error saving message:`, error.message);
        res.status(500).json({
            status: 'error',
            message: 'Failed to save message',
            error: error.message
        });
    }
});

// Catch-all for other requests
app.use((req, res) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Received ${req.method} request to ${req.path}`);
    console.log(`  Content-Type: ${req.headers['content-type'] || 'unknown'}`);
    console.log(`  Content-Length: ${req.body ? req.body.length : 0} bytes`);

    res.status(200).json({
        status: 'received',
        method: req.method,
        path: req.path,
        timestamp: timestamp
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Domibus backend listening on port ${PORT}`);
    console.log(`Messages will be saved to: ${path.resolve(MESSAGES_DIR)}`);
    console.log(`Main endpoint: http://localhost:${PORT}/domibus/message`);
});
