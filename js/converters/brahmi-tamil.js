/*
 * Transliteration logic for Brahmi <-> Tamil
 *
 * This file uses a hybrid approach:
 * 1. Brahmi-to-Tamil: Uses a fast `switch` statement, as this is a 1-to-many mapping.
 * 2. Tamil-to-Brahmi: Uses a map-replacement, as this is a many-to-1 mapping 
 * (e.g., "ரி" -> "𑀋") which a simple loop cannot handle.
 */


// --- Function 1: Brahmi to Tamil (using 'switch' as requested) ---

function convertBrahmiToTamil() {
    const inputText = document.getElementById('input-a').value;
    const outputDiv = document.getElementById('output-a');
    let outputText = "";

    for (const char of inputText) {
        var n = char.codePointAt(0); // Get codepoint
        switch (n) {
            // Vowels
            case 0x11005: outputText += "அ"; break; // 𑀅 A
            case 0x11006: outputText += "ஆ"; break; // 𑀆 AA
            case 0x11007: outputText += "இ"; break; // 𑀇 I
            case 0x11008: outputText += "ஈ"; break; // 𑀈 II
            case 0x11009: outputText += "உ"; break; // 𑀉 U
            case 0x1100A: outputText += "ஊ"; break; // 𑀊 UU
            case 0x1100B: outputText += "ரி"; break; // 𑀋 Vocalic R -> Ri
            case 0x1100C: outputText += "ரீ"; break; // 𑀌 Vocalic RR -> Ree
            case 0x1100D: outputText += "லு"; break; // 𑀍 Vocalic L -> Lu
            case 0x1100E: outputText += "லூ"; break; // 𑀎 Vocalic LL -> Loo
            case 0x1100F: outputText += "ஏ"; break; // 𑀏 E
            case 0x11010: outputText += "ஐ"; break; // 𑀐 AI
            case 0x11011: outputText += "ஓ"; break; // 𑀑 O
            case 0x11012: outputText += "ஔ"; break; // 𑀒 AU

            // Consonants
            case 0x11013: outputText += "க"; break; // 𑀓 KA
            case 0x11014: outputText += "க"; break; // 𑀔 KHA
            case 0x11015: outputText += "க"; break; // 𑀕 GA
            case 0x11016: outputText += "க"; break; // 𑀖 GHA
            case 0x11017: outputText += "ங"; break; // 𑀗 NGA
            case 0x11018: outputText += "ச"; break; // 𑀘 CA
            case 0x11019: outputText += "ச"; break; // 𑀙 CHA
            case 0x1101A: outputText += "ஜ"; break; // 𑀚 JA
            case 0x1101B: outputText += "ஜ"; break; // 𑀛 JHA
            case 0x1101C: outputText += "ஞ"; break; // 𑀜 NYA
            case 0x1101D: outputText += "ட"; break; // 𑀝 TTA
            case 0x1101E: outputText += "ட"; break; // 𑀞 TTHA
            case 0x1101F: outputText += "ட"; break; // 𑀟 DDA
            case 0x11020: outputText += "ட"; break; // 𑀠 DDHA
            case 0x11021: outputText += "ண"; break; // 𑀡 NNA
            case 0x11022: outputText += "த"; break; // 𑀢 TA
            case 0x11023: outputText += "த"; break; // 𑀣 THA
            case 0x11024: outputText += "த"; break; // 𑀤 DA
            case 0x11025: outputText += "த"; break; // 𑀥 DHA
            case 0x11026: outputText += "ந"; break; // 𑀦 NA
            case 0x11027: outputText += "ப"; break; // 𑀧 PA
            case 0x11028: outputText += "ப"; break; // 𑀨 PHA
            case 0x11029: outputText += "ப"; break; // 𑀩 BA
            case 0x1102A: outputText += "ப"; break; // 𑀪 BHA
            case 0x1102B: outputText += "ம"; break; // 𑀫 MA
            case 0x1102C: outputText += "ய"; break; // 𑀬 YA
            case 0x1102D: outputText += "ர"; break; // 𑀭 RA
            case 0x1102E: outputText += "ல"; break; // 𑀮 LA
            case 0x1102F: outputText += "ள"; break; // 𑀴 LLA
            case 0x11030: outputText += "வ"; break; // 𑀯 VA
            case 0x11031: outputText += "ஶ"; break; // 𑀰 SHA
            case 0x11032: outputText += "ஷ"; break; // 𑀱 SSA
            case 0x11033: outputText += "ஸ"; break; // 𑀲 SA
            case 0x11034: outputText += "ஹ"; break; // 𑀳 HA
            
            // Matras
            case 0x11038: outputText += "ா"; break; // 𑀸
            case 0x11039: outputText += "ி"; break; // 𑀺
            case 0x1103A: outputText += "ீ"; break; // 𑀻
            case 0x1103B: outputText += "ு"; break; // 𑀼
            case 0x1103C: outputText += "ூ"; break; // 𑀽
            case 0x1103D: outputText += "்ரு"; break; // 𑀾 Matra R
            case 0x1103E: outputText += "்ரூ"; break; // 𑀿 Matra RR
            case 0x1103F: outputText += "்லு"; break; // 𑁀 Matra L
            case 0x11040: outputText += "்லூ"; break; // 𑁁 Matra LL
            case 0x11041: outputText += "ே"; break; // 𑁂
            case 0x11042: outputText += "ை"; break; // 𑁃
            case 0x11043: outputText += "ோ"; break; // 𑁄
            case 0x11044: outputText += "ௌ"; break; // 𑁅
            
            // Virama
            case 0x11046: outputText += "்"; break; // 𑁆
            
            // Punctuation
            case 0x11047: outputText += "।"; break; // 𑁇 Danda
            case 0x11048: outputText += "॥"; break; // 𑁈 Double Danda

            // Numbers
            case 0x11066: outputText += "௦"; break; // 𑁦 0
            case 0x11067: outputText += "௧"; break; // 𑁧 1
            case 0x11068: outputText += "௨"; break; // 𑁨 2
            case 0x11069: outputText += "௩"; break; // 𑁩 3
            case 0x1106A: outputText += "௪"; break; // 𑁪 4
            case 0x1106B: outputText += "௫"; break; // 𑁫 5
            case 0x1106C: outputText += "௬"; break; // 𑁬 6
            case 0x1106D: outputText += "௭"; break; // 𑁭 7
            case 0x1106E: outputText += "௮"; break; // 𑁮 8
            case 0x1106F: outputText += "௯"; break; // 𑁯 9

            default: outputText += char; // Keep original char if no match
        }
    }
    outputDiv.innerText = outputText;
}


// --- Function 2: Tamil to Brahmi (using 'replace') ---

// This map MUST be ordered longest-key-first to work correctly.
const tamilToBrahmiMap = {
    // Multi-char sequences first
    "்ரூ": "𑀿",
    "்ரு": "𑀾",
    "்லூ": "𑁁",
    "்லு": "𑁀",
    "ரீ": "𑀌", // Vocalic RR
    "லூ": "𑀎", // Vocalic LL
    "ரி": "𑀋", // Vocalic R
    "லு": "𑀍", // Vocalic L

    // Vowels
    "அ": "𑀅", "ஆ": "𑀆", "இ": "𑀇", "ஈ": "𑀈", "உ": "𑀉", "ஊ": "𑀊",
    "ஏ": "𑀏", "ஐ": "𑀐", "ஓ": "𑀑", "ஔ": "𑀒",
    "எ": "𑀏", // Short E -> Long E
    "ஒ": "𑀑", // Short O -> Long O

    // Consonants
    "க": "𑀓", "ங": "𑀗", "ச": "𑀘", "ஜ": "𑀚", "ஞ": "𑀜",
    "ட": "𑀝", "ண": "𑀡", "த": "𑀢", "ந": "𑀦", "ன": "𑀦",
    "ப": "𑀧", "ம": "𑀫", "ய": "𑀬", "ர": "𑀭", "ல": "𑀮",
    "ள": "𑀴", "வ": "𑀯", "ஶ": "𑀰", "ஷ": "𑀱", "ஸ": "𑀲",
    "ஹ": "𑀳", "ற": "𑀭", "ழ": "𑀴",

    // Matras
    "ா": "𑀸", "ி": "𑀺", "ீ": "𑀻", "ு": "𑀼", "ூ": "𑀽",
    "ெ": "𑁂", "ே": "𑁂", "ை": "𑁃", "ொ": "𑁄", "ோ": "𑁄",
    "ௌ": "𑁅",
    
    // Virama
    "்": "𑁆",
    
    // Punctuation
    "।": "𑁇", "॥": "𑁈",
    
    // Numbers
    "௦": "𑁦", "௧": "𑁧", "௨": "𑁨", "௩": "𑁩", "௪": "𑁪",
    "௫": "𑁫", "௬": "𑁬", "௭": "𑁭", "௮": "𑁮", "௯": "𑁯",
};

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

function convertTamilToBrahmi() {
    const inputText = document.getElementById('input-b').value;
    const outputDiv = document.getElementById('output-b');
    // We MUST use the replacement function here
    outputDiv.innerText = complexConvert(inputText, tamilToBrahmiMap);
}


// --- Converter Configuration ---

const converterConfig = {
    mainTitle: "Transliteration",
    subTitle: "Tamil ↔ Brahmi",
    
    boxA: {
        title: "Brahmi to Tamil (𑀩𑁆𑀭𑀸𑀳𑁆𑀫𑀻 → தமிழ்)",
        inputPlaceholder: "Enter Brahmi text here... (e.g., 𑀅𑀰𑁄𑀓)",
        fontClass: "font-brahmi",
        outputLabel: "Tamil Output:",
        outputFontClass: "", // Use default sans-serif for Tamil
        buttonText: "Convert to Tamil",
        convertFunction: convertBrahmiToTamil // Using the 'switch' function
    },
    
    boxB: {
        title: "Tamil to Brahmi (தமிழ் → 𑀩𑁆𑀭𑀸𑀳𑁆𑀫𑀻)",
        inputPlaceholder: "Enter Tamil text here... (e.g., அஶோக)",
        fontClass: "", // Use default sans-serif for Tamil
        outputLabel: "Brahmi Output:",
        outputFontClass: "font-brahmi",
        buttonText: "Convert to Brahmi",
        convertFunction: convertTamilToBrahmi // Using the 'replace' function
    }
};