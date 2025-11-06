// --- 1. Conversion Logic (UPDATED with robust for...of loops) ---

function convertDevanagariToBrahmi() {
    var inputText = document.getElementById("input-a").value;
    var outputText = "";
    
    // Use for...of to correctly iterate over characters
    for (const char of inputText) {
        var n = char.codePointAt(0); // Get codepoint
        switch (n) {
            case 0x902: outputText += "&#x11001"; break;
            case 0x905: outputText += "&#x11005"; break;
            case 0x906: outputText += "&#x11006"; break;
            case 0x907: outputText += "&#x11007"; break;
            case 0x908: outputText += "&#x11008"; break;
            case 0x909: outputText += "&#x11009"; break;
            case 0x90A: outputText += "&#x1100A"; break;
            case 0x90B: outputText += "&#x1100B"; break;
            case 0x90C: outputText += "&#x1100D"; break;
            case 0x90F: outputText += "&#x1100F"; break;
            case 0x910: outputText += "&#x11010"; break;
            case 0x913: outputText += "&#x11011"; break;
            case 0x914: outputText += "&#x11012"; break;
            case 0x915: outputText += "&#x11013"; break;
            case 0x916: outputText += "&#x11014"; break;
            case 0x917: outputText += "&#x11015"; break;
            case 0x918: outputText += "&#x11016"; break;
            case 0x919: outputText += "&#x11017"; break;
            case 0x91A: outputText += "&#x11018"; break;
            case 0x91B: outputText += "&#x11019"; break;
            case 0x91C: outputText += "&#x1101A"; break;
            case 0x91D: outputText += "&#x1101B"; break;
            case 0x91E: outputText += "&#x1101C"; break;
            case 0x91F: outputText += "&#x1101D"; break;
            case 0x920: outputText += "&#x1101E"; break;
            case 0x921: outputText += "&#x1101F"; break;
            case 0x922: outputText += "&#x11020"; break;
            case 0x923: outputText += "&#x11021"; break;
            case 0x924: outputText += "&#x11022"; break;
            case 0x925: outputText += "&#x11023"; break;
            case 0x926: outputText += "&#x11024"; break;
            case 0x927: outputText += "&#x11025"; break;
            case 0x928: outputText += "&#x11026"; break;
            case 0x92A: outputText += "&#x11027"; break;
            case 0x92B: outputText += "&#x11028"; break;
            case 0x92C: outputText += "&#x11029"; break;
            case 0x92D: outputText += "&#x1102A"; break;
            case 0x92E: outputText += "&#x1102B"; break;
            case 0x92F: outputText += "&#x1102C"; break;
            case 0x930: outputText += "&#x1102D"; break;
            case 0x932: outputText += "&#x1102E"; break;
            case 0x933: outputText += "&#x11034"; break;
            case 0x935: outputText += "&#x1102F"; break;
            case 0x936: outputText += "&#x11030"; break;
            case 0x937: outputText += "&#x11031"; break;
            case 0x938: outputText += "&#x11032"; break;
            case 0x939: outputText += "&#x11033"; break;
            case 0x93E: outputText += "&#x11038"; break;
            case 0x93F: outputText += "&#x1103A"; break;
            case 0x940: outputText += "&#x1103B"; break;
            case 0x941: outputText += "&#x1103C"; break;
            case 0x942: outputText += "&#x1103D"; break;
            case 0x943: outputText += "&#x1103E"; break;
            case 0x944: outputText += "&#x1103F"; break;
            case 0x962: outputText += "&#x11040"; break;
            case 0x963: outputText += "&#x11041"; break;
            case 0x947: outputText += "&#x11042"; break;
            case 0x948: outputText += "&#x11043"; break;
            case 0x94B: outputText += "&#x11044"; break;
            case 0x94C: outputText += "&#x11045"; break;
            case 0x94D: outputText += "&#x11046"; break;
            case 0x964: outputText += "&#x11047"; break;
            case 0x965: outputText += "&#x11048"; break;
            case 0x966: outputText += "&#x11066"; break;
            case 0x967: outputText += "&#x11067"; break;
            case 0x968: outputText += "&#x11068"; break;
            case 0x969: outputText += "&#x11069"; break;
            case 0x96A: outputText += "&#x1106A"; break;
            case 0x96B: outputText += "&#x1106B"; break;
            case 0x96C: outputText += "&#x1106C"; break;
            case 0x96D: outputText += "&#x1106D"; break;
            case 0x96E: outputText += "&#x1106E"; break;
            case 0x96F: outputText += "&#x1106F"; break;
            default: outputText += "&#" + n; break;
        }
    }
    document.getElementById("output-a").innerHTML = outputText;
}

function convertBrahmiToDevanagari() {
    var inputText = document.getElementById("input-b").value;
    var outputText = "";

    // Use for...of to correctly iterate over characters (handles surrogate pairs)
    for (const char of inputText) {
        var n = char.codePointAt(0); // Get codepoint
        switch (n) {
            // NOTE: All the "i++" are removed, as for...of handles iteration
            case 0x11001: outputText += "&#x902"; break;
            case 0x11005: outputText += "&#x00905"; break;
            case 0x11006: outputText += "&#x906"; break;
            case 0x11007: outputText += "&#x907"; break;
            case 0x11008: outputText += "&#x908"; break;
            case 0x11009: outputText += "&#x909"; break;
            case 0x1100A: outputText += "&#x90A"; break;
            case 0x1100B: outputText += "&#x90B"; break;
            case 0x1100D: outputText += "&#x90C"; break;
            case 0x1100F: outputText += "&#x90F"; break;
            case 0x11010: outputText += "&#x910"; break;
            case 0x11011: outputText += "&#x913"; break;
            case 0x11012: outputText += "&#x914"; break;
            case 0x11013: outputText += "&#x915"; break;
            case 0x11014: outputText += "&#x916"; break;
            case 0x11015: outputText += "&#x917"; break;
            case 0x11016: outputText += "&#x918"; break;
            case 0x11017: outputText += "&#x919"; break;
            case 0x11018: outputText += "&#x91A"; break;
            case 0x11019: outputText += "&#x91B"; break;
            case 0x1101A: outputText += "&#x91C"; break;
            case 0x1101B: outputText += "&#x91D"; break;
            case 0x1101C: outputText += "&#x91E"; break;
            case 0x1101D: outputText += "&#x91F"; break;
            case 0x1101E: outputText += "&#x920"; break;
            case 0x1101F: outputText += "&#x921"; break;
            case 0x11020: outputText += "&#x922"; break;
            case 0x11021: outputText += "&#x923"; break;
            case 0x11022: outputText += "&#x924"; break;
            case 0x11023: outputText += "&#x925"; break;
            case 0x11024: outputText += "&#x926"; break;
            case 0x11025: outputText += "&#x927"; break;
            case 0x11026: outputText += "&#x928"; break;
            case 0x11027: outputText += "&#x92A"; break;
            case 0x11028: outputText += "&#x92B"; break;
            case 0x11029: outputText += "&#x92C"; break;
            case 0x1102A: outputText += "&#x92D"; break;
            case 0x1102B: outputText += "&#x92E"; break;
            case 0x1102C: outputText += "&#x92F"; break;
            case 0x1102D: outputText += "&#x930"; break;
            case 0x1102E: outputText += "&#x932"; break;
            case 0x11034: outputText += "&#x933"; break;
            case 0x1102F: outputText += "&#x935"; break;
            case 0x11030: outputText += "&#x936"; break;
            case 0x11031: outputText += "&#x937"; break;
            case 0x11032: outputText += "&#x938"; break;
            case 0x11033: outputText += "&#x939"; break;
            case 0x11038: outputText += "&#x93E"; break;
            case 0x1103A: outputText += "&#x93F"; break;
            case 0x1103B: outputText += "&#x940"; break;
            case 0x1103C: outputText += "&#x941"; break;
            case 0x1103D: outputText += "&#x942"; break;
            case 0x1103E: outputText += "&#x943"; break;
            case 0x1103F: outputText += "&#x944"; break;
            case 0x11040: outputText += "&#x962"; break;
            case 0x11041: outputText += "&#x963"; break;
            case 0x11042: outputText += "&#x947"; break;
            case 0x11043: outputText += "&#x948"; break;
            case 0x11044: outputText += "&#x94B"; break;
            case 0x11045: outputText += "&#x94C"; break;
            case 0x11046: outputText += "&#x94D"; break;
            case 0x11047: outputText += "&#x964"; break;
            case 0x11048: outputText += "&#x965"; break;
            case 0x11066: outputText += "&#x966"; break;
            case 0x11067: outputText += "&#x967"; break;
            case 0x11068: outputText += "&#x968"; break;
            case 0x11069: outputText += "&#x969"; break;
            case 0x1106A: outputText += "&#x96A"; break;
            case 0x1106B: outputText += "&#x96B"; break;
            case 0x1106C: outputText += "&#x96C"; break;
            case 0x1106D: outputText += "&#x96D"; break;
            case 0x1106E: outputText += "&#x96E"; break;
            case 0x1106F: outputText += "&#x96F"; break;
            default: outputText += "&#" + n; break;
        }
    }
    document.getElementById("output-b").innerHTML = outputText;
};


// --- 2. Configuration Object (No changes here, but included for completeness) ---

const converterConfig = {
    mainTitle: "Transliteration",
    subTitle: "Devanagari ↔ Brahmi",
    
    boxA: {
        title: "Devanagari to Brahmi || देवनागरी to 𑀤𑁂i𑀯𑀦𑀸𑀕𑀭𑀻",
        inputPlaceholder: "Text in Devanagari script",
        fontClass: "font-devanagari",
        buttonText: "Convert",
        outputLabel: "Result in Brahmi:",
        outputFontClass: "font-brahmi text-4xl text-orange-900",
        convertFunction: convertDevanagariToBrahmi 
    },
    
    boxB: {
        title: "Brahmi to Devanagari || 𑀤𑁂𑀯𑀦𑀸𑀕𑀭𑀻 to देवनागरी",
        inputPlaceholder: "Text in Brahmi script",
        fontClass: "font-brahmi",
        buttonText: "Convert",
        outputLabel: "Result in Devanagari:",
        outputFontClass: "font-devanagari text-3xl text-indigo-900",
        convertFunction: convertBrahmiToDevanagari 
    }
};