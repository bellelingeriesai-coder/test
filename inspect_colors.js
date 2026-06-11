const fs = require('fs');
const zlib = require('zlib');

const filepath = 'c:\\Users\\hp\\Desktop\\Tweens Export\\TW-SB-938-1PC_TAI0226-SAME.xlsm';

function extractZIP(buffer) {
    let offset = 0;
    const files = {};
    while (offset < buffer.length - 30) {
        const sig = buffer.readUInt32LE(offset);
        if (sig !== 0x04034b50) {
            const nextSig = buffer.indexOf(Buffer.from([0x50, 0x4b, 0x03, 0x04]), offset + 1);
            if (nextSig === -1) break;
            offset = nextSig;
            continue;
        }
        const compression = buffer.readUInt16LE(offset + 8);
        const compressedSize = buffer.readUInt32LE(offset + 18);
        const uncompressedSize = buffer.readUInt32LE(offset + 22);
        const nameLen = buffer.readUInt16LE(offset + 26);
        const extraLen = buffer.readUInt16LE(offset + 28);
        const filename = buffer.toString('utf8', offset + 30, offset + 30 + nameLen);
        const dataOffset = offset + 30 + nameLen + extraLen;
        const compressedData = buffer.subarray(dataOffset, dataOffset + compressedSize);
        let uncompressedData;
        if (compression === 8) {
            try { uncompressedData = zlib.inflateRawSync(compressedData); } catch (e) {}
        } else if (compression === 0) {
            uncompressedData = compressedData;
        }
        if (uncompressedData) {
            files[filename] = uncompressedData.toString('utf8');
        }
        offset = dataOffset + compressedSize;
    }
    return files;
}

try {
    const buffer = fs.readFileSync(filepath);
    const files = extractZIP(buffer);
    const sharedStringsXml = files['xl/sharedStrings.xml'];
    if (!sharedStringsXml) throw new Error("sharedStrings.xml not found");
    const sharedStrings = [];
    const tMatches = sharedStringsXml.matchAll(/<t[^>]*>(.*?)<\/t>/g);
    for (const match of tMatches) {
        sharedStrings.push(match[1]);
    }
    for (const [filename, content] of Object.entries(files)) {
        if (filename.startsWith('xl/worksheets/sheet') && filename.endsWith('.xml')) {
            const rows = [];
            const rowMatches = content.matchAll(/<row[^>]*>(.*?)<\/row>/g);
            for (const rowMatch of rowMatches) {
                const rowXml = rowMatch[0];
                const rAttr = rowXml.match(/r="(\d+)"/);
                if (!rAttr) continue;
                const rowNum = parseInt(rAttr[1]);
                const cells = {};
                const cellMatches = rowXml.matchAll(/<c r="([A-Z]+)\d+"[^>]*>(.*?)<\/c>/g);
                for (const cellMatch of cellMatches) {
                    const col = cellMatch[1];
                    const cellXml = cellMatch[0];
                    const isShared = cellXml.includes('t="s"');
                    const valMatch = cellXml.match(/<v>(.*?)<\/v>/);
                    if (valMatch) {
                        const rawVal = valMatch[1];
                        cells[col] = isShared ? (sharedStrings[parseInt(rawVal)] || '') : rawVal;
                    } else {
                        cells[col] = '';
                    }
                }
                rows[rowNum] = cells;
            }
            const hasTarget = rows.some(r => r && Object.values(r).some(v => typeof v === 'string' && v.includes('TW-SB-938')));
            if (hasTarget) {
                const targetRows = rows.filter((r, idx) => idx > 3 && r && r.A && r.A.startsWith('TW-SB-938'));
                const counts = {};
                targetRows.forEach(r => {
                    const sku = r.A;
                    const parts = sku.split('-');
                    const colorCode = parts[3];
                    counts[colorCode] = (counts[colorCode] || 0) + 1;
                });
                console.log(`Sheet: ${filename} - target rows: ${targetRows.length}, color counts:`, counts);
            }
        }
    }
} catch (e) {
    console.error(e);
}
