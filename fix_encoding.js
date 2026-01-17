
const fs = require('fs');

const filePath = String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\kra\hr-kra.html`;

try {
    // Try reading as UTF-16LE (PowerShell default)
    let content = fs.readFileSync(filePath, 'utf16le');

    // Check if it looks like HTML
    if (content.includes('<html')) {
        console.log("Read successfully as UTF-16LE. Converting to UTF-8...");
        fs.writeFileSync(filePath, content, 'utf8'); # Write back as UTF - 8
        console.log("Conversion complete.");
    } else {
        console.log("Did not look like valid HTML when read as UTF-16LE. Trying UTF-8...");
        content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('<html')) {
            console.log("File is already valid UTF-8.");
        } else {
            console.log("Unknown encoding or corrupted.");
        }
    }
} catch (e) {
    console.error("Error:", e.message);
}
