#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function jsonToMd(jsonFile) {
    const jsonPath = path.resolve(jsonFile);
    const mdFile = jsonPath.replace(/\.json$/, '.md');

    let obj;
    try {
        const content = fs.readFileSync(jsonPath, 'utf8');
        obj = JSON.parse(content);
    } catch (error) {
        throw new Error(`Failed to read JSON file: ${error.message}`);
    }

    const lines = [`# Verzija ${obj.version} (${obj.date})`];

    if (obj.description) {
        lines.push('');
        lines.push(`## ${obj.description}`);
    }

    lines.push('');

    if (!obj.data || obj.data.length === 0) {
        throw new Error(`No data found in JSON: ${jsonFile}`);
    }

    const headers = Object.keys(obj.data[0]);

    // Calculate column widths
    const colWidths = headers.map(h => h.length);
    for (const row of obj.data) {
        headers.forEach((h, i) => {
            const value = row[h] !== undefined ? String(row[h]) : '';
            colWidths[i] = Math.max(colWidths[i], value.length);
        });
    }

    function padCell(text, width) {
        return text + ' '.repeat(width - text.length);
    }

    // Header row
    const headerRow = '| ' + headers.map((h, i) => padCell(h, colWidths[i])).join(' | ') + ' |';
    lines.push(headerRow);

    // Separator row
    const sepRow = '|' + colWidths.map(w => '-'.repeat(Math.max(4, w + 2))).join('|') + '|';
    lines.push(sepRow);

    // Data rows
    for (const row of obj.data) {
        const rowLine = '| ' + headers.map((h, i) => {
            const value = row[h] !== undefined ? String(row[h]) : '';
            return padCell(value, colWidths[i]);
        }).join(' | ') + ' |';
        lines.push(rowLine);
    }

    fs.writeFileSync(mdFile, lines.join('\n') + '\n', 'utf8');
}

function processDirs() {
    const baseDir = path.join(__dirname, '..', '..', 'specifikacija');
    const subdirs = ['eracun', 'as4'];

    for (const subdir of subdirs) {
        const dirPath = path.join(baseDir, subdir);

        if (!fs.existsSync(dirPath)) continue;

        const stat = fs.statSync(dirPath);
        if (!stat.isDirectory()) continue;

        const files = fs.readdirSync(dirPath);
        for (const file of files) {
            if (!file.endsWith('.json')) continue;

            const jsonFile = path.join(dirPath, file);
            try {
                jsonToMd(jsonFile);
                console.log(`Converted: ${jsonFile}`);
            } catch (error) {
                console.error(`Failed: ${jsonFile} -> ${error.message}`);
            }
        }
    }
}

if (require.main === module) {
    processDirs();
}
