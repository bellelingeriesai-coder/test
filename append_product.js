const fs = require('fs');
const zlib = require('zlib');

const filepath = 'c:\\Users\\hp\\Desktop\\Tweens Export\\TW-SB-938-1PC_TAI0226-SAME.xlsm';
const dbpath = 'c:\\Users\\hp\\Desktop\\Tweens Export\\products-data.js';

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

const HEX_MAP = {
    'BLACK': '#1A1A1A',
    'CORAL': '#FF7F50',
    'FAWN': '#E3C59E',
    'NAVY': '#1A2E4C',
    'RED': '#C0392B',
    'SKIN': '#E8C3A9',
    'WHITE': '#FFFFFF',
    'WINE': '#722F37'
};

const COLOR_NAME_MAP = {
    'BLK': 'BLACK',
    'CRL': 'CORAL',
    'FWN': 'FAWN',
    'NVY': 'NAVY',
    'RED': 'RED',
    'SKN': 'SKIN',
    'SK': 'SKIN',
    'WH': 'WHITE',
    'WIN': 'WINE'
};

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
    
    let productObject = null;
    
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
                const sizesSet = new Set();
                const colorsMap = {};
                
                targetRows.forEach(r => {
                    const sku = r.A;
                    const parts = sku.split('-');
                    const colorCode = parts[3];
                    const sizeCode = parts[5] ? parts[5].split('_')[0] : '';
                    if (sizeCode) sizesSet.add(sizeCode);
                    
                    const colorName = COLOR_NAME_MAP[colorCode] || colorCode;
                    if (!colorsMap[colorName]) {
                        colorsMap[colorName] = [];
                    }
                    
                    const imageCols = ['T', 'U', 'V', 'W', 'X', 'Y'];
                    imageCols.forEach(col => {
                        const val = r[col];
                        if (val && typeof val === 'string' && val.startsWith('http')) {
                            if (!colorsMap[colorName].includes(val)) {
                                colorsMap[colorName].push(val);
                            }
                        }
                    });
                });
                
                const sortedSizes = Array.from(sizesSet).sort((a, b) => {
                    const numA = parseInt(a);
                    const numB = parseInt(b);
                    if (numA !== numB) return numA - numB;
                    return a.localeCompare(b);
                });
                
                const colorsArray = Object.entries(colorsMap).map(([name, imgs]) => {
                    return {
                        name: name,
                        hex: HEX_MAP[name] || '#CCCCCC',
                        image: imgs[0] || '',
                        images: imgs
                    };
                });
                
                productObject = {
                    id: "sb-938",
                    name: "Tweens Cotton Padded Bonded Bra (SB-938)",
                    category: "bonded-bras",
                    description: "The Tweens Cotton Padded Bonded Bra is designed for women who want everyday comfort with smooth shaping and a clean, invisible finish under clothes. Made from breathable cotton fabric suited for Indian weather, it feels soft, lightweight, and gentle on the skin through long hours. The lightly padded cups provide natural shaping and reliable coverage without bulk. Its wire-free construction ensures pressure-free support and easy movement all day. Built with bonded seamless technology, it features an elastic-free bottom band and armholes to help reduce red marks, digging, and roll-up. The no-stitch finish sits flat under fitted outfits, while a supportive W-hold structure and broad seamless wings provide a secure, stable fit. No marks. No lines. Just comfort.",
                    details: [
                        "Elastic-free bottom band and armholes offer whole-day comfort without any digging or red marks.",
                        "Crafted with bonded, no-stitch technology, it stays seamless under outfits for a flawless look.",
                        "Built from premium breathable cotton spandex fabric suited for Indian weather.",
                        "Lightly padded cups provide natural shaping and reliable coverage without bulk.",
                        "Wire-free construction ensures pressure-free support and easy movement all day.",
                        "Supportive W-hold structure and broad seamless wings provide a secure, stable fit."
                    ],
                    sizes: sortedSizes,
                    colors: colorsArray,
                    features: {
                        padding: "Lightly Padded",
                        wire: "Wire-free",
                        coverage: "Full Coverage",
                        fabric: "Breathable Cotton Spandex"
                    }
                };
                break;
            }
        }
    }
    
    if (productObject) {
        // Read products-data.js
        let dbContent = fs.readFileSync(dbpath, 'utf8');
        
        // Find if sb-938 already exists in products-data.js (to avoid duplicate entries)
        if (dbContent.includes('"id": "sb-938"') || dbContent.includes("'id': 'sb-938'")) {
            console.log("sb-938 already exists in database.");
        } else {
            // Find insertion point before final bracket of PRODUCTS_DATA array
            const searchStr = '];\r\n\r\n// Dynamically generates a premium SVG';
            const searchStrUnix = '];\n\n// Dynamically generates a premium SVG';
            
            let isUnix = false;
            let index = dbContent.indexOf(searchStr);
            if (index === -1) {
                index = dbContent.indexOf(searchStrUnix);
                isUnix = true;
            }
            
            if (index === -1) {
                throw new Error("Could not find the end of PRODUCTS_DATA array in products-data.js");
            }
            
            // Format new product string with padding/formatting matching standard
            const productStr = ",\n" + JSON.stringify(productObject, null, 4).split('\n').map(line => "    " + line).join('\n');
            
            const insertPos = index;
            const updatedDbContent = dbContent.substring(0, insertPos) + productStr + "\n" + (isUnix ? searchStrUnix : searchStr);
            
            fs.writeFileSync(dbpath, updatedDbContent, 'utf8');
            console.log("Successfully appended sb-938 to products-data.js.");
        }
    } else {
        console.error("Failed to parse product data.");
    }
} catch (e) {
    console.error("Error appending product:", e);
}
