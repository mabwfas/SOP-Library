const fs = require('fs');
const fp = './sops/incentive-penalty.html';
let html = fs.readFileSync(fp, 'utf8');

// Process each table: wrap first <tr> (headers) in <thead>, rest in <tbody>, add data-label to <td>s
html = html.replace(/<table>([\s\S]*?)<\/table>/g, (match, inner) => {
    // Split into rows
    const rows = [];
    const rowRegex = /<tr>([\s\S]*?)<\/tr>/g;
    let m;
    while ((m = rowRegex.exec(inner)) !== null) {
        rows.push(m[0]);
    }

    if (rows.length === 0) return match;

    // First row is header - extract header labels
    const headerRow = rows[0];
    const headers = [];
    const thRegex = /<th>([\s\S]*?)<\/th>/g;
    let th;
    while ((th = thRegex.exec(headerRow)) !== null) {
        headers.push(th[1].trim());
    }

    // Process data rows - add data-label to each <td>
    const dataRows = rows.slice(1).map(row => {
        let colIndex = 0;
        return row.replace(/<td([^>]*)>/g, (tdMatch, attrs) => {
            const label = headers[colIndex] || '';
            colIndex++;
            // Don't add duplicate data-label
            if (attrs.includes('data-label')) return tdMatch;
            return `<td${attrs} data-label="${label}">`;
        });
    });

    return `<table>\n                <thead>${headerRow}</thead>\n                <tbody>\n${dataRows.join('\n')}\n                </tbody>\n            </table>`;
});

fs.writeFileSync(fp, html);
console.log('✅ Tables updated with thead/tbody and data-label attributes');

// Verify
const result = fs.readFileSync(fp, 'utf8');
const theadCount = (result.match(/<thead>/g) || []).length;
const tbodyCount = (result.match(/<tbody>/g) || []).length;
const dataLabelCount = (result.match(/data-label="/g) || []).length;
console.log(`  thead: ${theadCount}, tbody: ${tbodyCount}, data-labels: ${dataLabelCount}`);
