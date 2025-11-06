/*
 * Transliteration logic for Brahmi <-> Malayalam
 *
 * This file uses a hybrid approach:
 * 1. Brahmi-to-Malayalam: Uses a fast `switch` statement (1-to-many mapping).
 * 2. Malayalam-to-Brahmi: Uses a map-replacement (many-to-1 mapping)
 * to handle sequences like 'രി' (Vocalic R).
 */


// --- Function 1: Brahmi to Malayalam (using 'switch') ---

function convertBrahmiToMalayalam() {
    const inputText = document.getElementById('input-a').value;
    const outputDiv = document.getElementById('output-a');
    let outputText = "";

    for (const char of inputText) {
        var n = char.codePointAt(0); // Get codepoint
        switch (n) {
            // Vowels
            case 0x11005: outputText += "അ"; break; // 𑀅 A
            case 0x11006: outputText += "ആ"; break; // 𑀆 AA
            case 0x11007: outputText += "ഇ"; break; // 𑀇 I
            case 0x11008: outputText += "ഈ"; break; // 𑀈 II
            case 0x11009: outputText += "ഉ"; break; // 𑀉 U
            case 0x1100A: outputText += "ഊ"; break; // 𑀊 UU
            case 0x1100B: outputText += "ഋ"; break; // 𑀋 Vocalic R
            case 0x1100C: outputText += "ൠ"; break; // 𑀌 Vocalic RR
            case 0x1100D: outputText += "ഌ"; break; // 𑀍 Vocalic L
            case 0x1100E: outputText += "ൡ"; break; // 𑀎 Vocalic LL
            case 0x1100F: outputText += "ഏ"; break; // 𑀏 E
            case 0x11010: outputText += "ഐ"; break; // 𑀐 AI
            case 0x11011: outputText += "ഓ"; break; // 𑀑 O
            case 0x11012: outputText += "ഔ"; break; // 𑀒 AU

            // Consonants
            case 0x11013: outputText += "ക"; break; // 𑀓 KA
            case 0x11014: outputText += "ഖ"; break; // 𑀔 KHA
            case 0x11015: outputText += "ഗ"; break; // 𑀕 GA
            case 0x11016: outputText += "ഘ"; break; // 𑀖 GHA
            case 0x11017: outputText += "ങ"; break; // 𑀗 NGA
            case 0x11018: outputText += "ച"; break; // 𑀘 CA
            case 0x11019: outputText += "ഛ"; break; // 𑀙 CHA
            case 0x1101A: outputText += "ജ"; break; // 𑀚 JA
            case 0x1101B: outputText += "ഝ"; break; // 𑀛 JHA
            case 0x1101C: outputText += "ഞ"; break; // 𑀜 NYA
            case 0x1101D: outputText += "ട"; break; // 𑀝 TTA
            case 0x1101E: outputText += "ഠ"; break; // 𑀞 TTHA
            case 0x1101F: outputText += "ഡ"; break; // 𑀟 DDA
            case 0x11020: outputText += "ഢ"; break; // 𑀠 DDHA
            case 0x11021: outputText += "ണ"; break; // 𑀡 NNA
            case 0x11022: outputText += "ത"; break; // 𑀢 TA
            case 0x11023: outputText += "ഥ"; break; // 𑀣 THA
            case 0x11024: outputText += "ദ"; break; // 𑀤 DA
            case 0x11025: outputText += "ധ"; break; // 𑀥 DHA
            case 0x11026: outputText += "ന"; break; // 𑀦 NA
            case 0x11027: outputText += "പ"; break; // 𑀧 PA
            case 0x11028: outputText += "ഫ"; break; // 𑀨 PHA
            case 0x11029: outputText += "ബ"; break; // 𑀩 BA
            case 0x1102A: outputText += "ഭ"; break; // 𑀪 BHA
            case 0x1102B: outputText += "മ"; break; // 𑀫 MA
            case 0x1102C: outputText += "യ"; break; // 𑀬 YA
            case 0x1102D: outputText += "ര"; break; // 𑀭 RA
            case 0x1102E: outputText += "ല"; break; // 𑀮 LA
            case 0x1102F: outputText += "ള"; break; // 𑀴 LLA
            case 0x11030: outputText += "വ"; break; // 𑀯 VA
            case 0x11031: outputText += "ശ"; break; // 𑀰 SHA
            case 0x11032: outputText += "ഷ"; break; // 𑀱 SSA
            case 0x11033: outputText += "സ"; break; // 𑀲 SA
            case 0x11034: outputText += "ഹ"; break; // 𑀳 HA
            
            // Matras
            case 0x11038: outputText += "ാ"; break; // 𑀸
            case 0x11039: outputText += "ി"; break; // 𑀺
            case 0x1103A: outputText += "ീ"; break; // 𑀻
            case 0x1103B: outputText += "ു"; break; // 𑀼
            case 0x1103C: outputText += "ൂ"; break; // 𑀽
            case 0x1103D: outputText += "ൃ"; break; // 𑀾 Matra R
            case 0x1103E: outputText += "ൄ"; break; // 𑀿 Matra RR
            case 0x1103F: outputText += "ൢ"; break; // 𑁀 Matra L
            case 0x11040: outputText += "ൣ"; break; // 𑁁 Matra LL
            case 0x11041: outputText += "േ"; break; // 𑁂
            case 0x11042: outputText += "ൈ"; break; // 𑁃
            case 0x11043: outputText += "ോ"; break; // 𑁄
            case 0x11044: outputText += "ൌ"; break; // 𑁅
            
            // Virama
            case 0x11046: outputText += "്"; break; // 𑁆
            
            // Punctuation
            case 0x11047: outputText += "।"; break; // 𑁇 Danda
            case 0x11048: outputText += "॥"; break; // 𑁈 Double Danda

            // Numbers
            case 0x11066: outputText += "൦"; break; // 𑁦 0
            case 0x11067: outputText += "൧"; break; // 𑁧 1
            case 0x11068: outputText += "൨"; break; // 𑁨 2
            case 0x11069: outputText += "൩"; break; // 𑁩 3
            case 0x1106A: outputText += "൪"; break; // 𑁪 4
            case 0x1106B: outputText += "൫"; break; // 𑁫 5
            case 0x1106C: outputText += "൬"; break; // 𑁬 6
            case 0x1106D: outputText += "൭"; break; // 𑁭 7
            case 0x1106E: outputText += "൮"; break; // 𑁮 8
            case 0x1106F: outputText += "൯"; break; // 𑁯 9

            default: outputText += char; // Keep original char if no match
        }
    }
    outputDiv.innerText = outputText;
}


// --- Function 2: Malayalam to Brahmi (using 'replace') ---

// This map MUST be ordered longest-key-first to work correctly.
const malayalamToBrahmiMap = {
    // Vowels
    "അ": "𑀅", "ആ": "𑀆", "ഇ": "𑀇", "ഈ": "𑀈", "ഉ": "𑀉", "ഊ": "𑀊",
    "ഋ": "𑀋", "ൠ": "𑀌", "ഌ": "𑀍", "ൡ": "𑀎",
    "എ": "𑀏", "ഏ": "𑀏", // Short/Long E -> E
    "ഐ": "𑀐",
    "ഒ": "𑀑", "ഓ": "𑀑", // Short/Long O -> O
    "ഔ": "𑀒",

    // Consonants
    "ക": "𑀓", "ഖ": "𑀔", "ഗ": "𑀕", "ഘ": "𑀖", "ങ": "𑀗",
    "ച": "𑀘", "ഛ": "𑀙", "ജ": "𑀚", "ഝ": "𑀛", "ഞ": "𑀜",
    "ട": "𑀝", "ഠ": "𑀞", "ഡ": "𑀟", "ഢ": "𑀠", "ണ": "𑀡",
    "ത": "𑀢", "ഥ": "𑀣", "ദ": "𑀤", "ധ": "𑀥", "ന": "𑀦",
    "പ": "𑀧", "ഫ": "𑀨", "ബ": "𑀩", "ഭ": "𑀪", "മ": "𑀫",
    "യ": "𑀬", "ര": "𑀭", "ല": "𑀮", "ള": "𑀴", "വ": "𑀯",
    "ശ": "𑀰", "ഷ": "𑀱", "സ": "𑀲", "ഹ": "𑀳",
    "ഩ": "𑀦", // (Malayalam NNNA -> Brahmi NA)
    "ഺ": "𑀢", // (Malayalam TTTa -> Brahmi TA)
    "഼": "𑀭", // (Malayalam RRA -> Brahmi RA)
    "ൟ": "𑀴", // (Malayalam LLLA -> Brahmi LLA)

    // Matras
    "ാ": "𑀸", "ി": "𑀺", "ീ": "𑀻", "ു": "𑀼", "ൂ": "𑀽",
    "ൃ": "𑀾", "ൄ": "𑀿", "ൢ": "𑁀", "ൣ": "𑁁",
    "െ": "𑁂", "േ": "𑁂", // Short/Long e matra
    "ൈ": "𑁃",
    "ൊ": "𑁄", "ോ": "𑁄", // Short/Long o matra
    "ൌ": "𑁅",
    
    // Virama
    "്": "𑁆", "഻": "𑁆", // Virama, Chillu N
    
    // Punctuation
    "।": "𑁇", "॥": "𑁈",
    
    // Numbers
    "൦": "𑁦", "൧": "𑁧", "൨": "𑁨", "൩": "𑁩", "൪": "𑁪",
    "൫": "𑁫", "൬": "𑁬", "൭": "𑁭", "൮": "𑁮", "൯": "𑁯"
}; // <-- The typo "Done:" was removed from here

// Helper function for replacement
function complexConvert(text, map) {
    let output = text;
    // Get keys (already sorted, longest first)
    const keys = Object.keys(map); 

    for (const key of keys) {
        // Escape special regex characters
        const escapedKey = key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(escapedKey, 'g');
        output = output.replace(regex, map[key]);
    }
    return output;
}

function convertMalayalamToBrahmi() {
    const inputText = document.getElementById('input-b').value;
    const outputDiv = document.getElementById('output-b');
    // We MUST use the replacement function here
    outputDiv.innerText = complexConvert(inputText, malayalamToBrahmiMap);
}


// --- Converter Configuration ---

const converterConfig = {
    mainTitle: "Brahmi ⇔ Malayalam Script Converter",
    subTitle: "Transliterate between Brahmi and modern Malayalam scripts.",
    
    boxA: {
        title: "Brahmi to Malayalam (𑀩𑁆𑀭𑀸𑀳𑁆𑀫𑀻 → മലയാളം)",
        inputPlaceholder: "Enter Brahmi text here... (e.g., 𑀅𑀰𑁄𑀓)",
        fontClass: "font-brahmi",
        outputLabel: "Malayalam Output:",
        outputFontClass: "", // Use default sans-serif for Malayalam
        buttonText: "Convert to Malayalam",
        convertFunction: convertBrahmiToMalayalam // Using the 'switch' function
    },
    
    boxB: {
        title: "Malayalam to Brahmi (മലയാളം → 𑀩𑁆𑀭𑀸𑀳𑁆𑀫𑀻)",
        inputPlaceholder: "Enter Malayalam text here... (e.g., അശോക)",
        fontClass: "", // Use default sans-serif for Malayalam
        outputLabel: "Brahmi Output:",
        outputFontClass: "font-brahmi",
        buttonText: "Convert to Brahmi",
        convertFunction: convertMalayalamToBrahmi // Using the 'replace' function
    }
};