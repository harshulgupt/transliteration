function convertDevToBrah(){
    var inputText, outputText;
    inputText = document.getElementById("dev-input").value;
    outputText = "";
    var i;
    for (i = 0; i < inputText.length; i++) {
        var n = inputText.codePointAt(i);
        switch(n){
            case 0x902:
                outputText += "&#x11001";
                break;
            case 0x905: //A
                outputText += "&#x11005";
                break;
            case 0x906: //AA
                outputText += "&#x11006";
                break;
            case 0x907: //I
                outputText += "&#x11007";
                break;
            case 0x908: //II
                outputText += "&#x11008";
                break;
            case 0x909: //U
                outputText += "&#x11009";
                break;
            case 0x90A: // UU
                outputText += "&#x1100A";
                break;
            case 0x90B: //Vocalic R
                outputText += "&#x1100B";
                break;
            case 0x90C: //Vocalic L
                outputText += "&#x1100D";
                break;
            case 0x90F: // E
                outputText += "&#x1100F";
                break;
            case 0x910: // AI
                outputText += "&#x11010";
                break;
            case 0x913: // O
                outputText += "&#x11011";
                break;
            case 0x914: // AU
                outputText += "&#x11012";
                break;
            case 0x915: // KA
                outputText += "&#x11013";
                break;
            case 0x916: // KHA
                outputText += "&#x11014";
                break;
            case 0x917: // GA
                outputText += "&#x11015";
                break;
            case 0x918: // GHA
                outputText += "&#x11016";
                break;
            case 0x919: // NGA
                outputText += "&#x11017";
                break;
            case 0x91A: // CA
                outputText += "&#x11018";
                break;
            case 0x91B: // CHA
                outputText += "&#x11019";
                break;
            case 0x91C: // JA
                outputText += "&#x1101A";
                break;
            case 0x91D: // JHA
                outputText += "&#x1101B";
                break;
            case 0x91E: // NYA
                outputText += "&#x1101C";
                break;
            case 0x91F: // TTA
                outputText += "&#x1101D";
                break;
            case 0x920: // TTHA
                outputText += "&#x1101E";
                break;
            case 0x921: // DDA
                outputText += "&#x1101F";
                break;
            case 0x922: // DDHA
                outputText += "&#x11020";
                break;
            case 0x923: // NNA
                outputText += "&#x11021";
                break;
            case 0x924: // TA
                outputText += "&#x11022";
                break;
            case 0x925: // THA
                outputText += "&#x11023";
                break;
            case 0x926: // DA
                outputText += "&#x11024";
                break;
            case 0x927: // DHA
                outputText += "&#x11025";
                break;
            case 0x928: // NA
                outputText += "&#x11026";
                break;
            case 0x92A: //PA
                outputText += "&#x11027";
                break;
            case 0x92B: //PHA
                outputText += "&#x11028";
                break;
            case 0x92C: // BA
                outputText += "&#x11029";
                break;
            case 0x92D: // BHA
                outputText += "&#x1102A";
                break;
            case 0x92E: // MA
                outputText += "&#x1102B";
                break;
            case 0x92F: // YA
                outputText += "&#x1102C";
                break;
            case 0x930: // RA
                outputText += "&#x1102D";
                break;
            case 0x932: // LA
                outputText += "&#x1102E";
                break;
            case 0x933: // LLA
                outputText += "&#x11034";
                break;
            case 0x935: // VA
                outputText += "&#x1102F";
                break;
            case 0x936: // SHA
                outputText += "&#x11030";
                break;
            case 0x937: // SSA
                outputText += "&#x11031";
                break;
            case 0x938: // SA
                outputText += "&#x11032";
                break;
            case 0x939: // HA
                outputText += "&#x11033";
                break;
            case 0x93E: // AA
                outputText += "&#x11038";
                break;
            case 0x93F: // I
                outputText += "&#x1103A";
                break;
            case 0x940: // II
                outputText += "&#x1103B";
                break;
            case 0x941: // U
                outputText += "&#x1103C";
                break;
            case 0x942: //UU
                outputText += "&#x1103D";
                break;
            case 0x943: //R
                outputText += "&#x1103E";
                break;
            case 0x944: //RR
                outputText += "&#x1103F";
                break;
            case 0x962: //L
                outputText += "&#x11040";
                break;
            case 0x963: //LL
                outputText += "&#x11041";
                break;
            case 0x947: //E
                outputText += "&#x11042";
                break;
            case 0x948: //AI
                outputText += "&#x11043";
                break;
            case 0x94B: //O
                outputText += "&#x11044";
                break;
            case 0x94C: //AU
                outputText += "&#x11045";
                break;
            case 0x94D: //virama
                outputText += "&#x11046";
                break;
            case 0x964: // danda
                outputText += "&#x11047";
                break;
            case 0x965: // double danda
                outputText += "&#x11048";
                break;
            case 0x966: //0
                outputText += "&#x11066";
                break;
            case 0x967: //1
                outputText += "&#x11067";
                break;
            case 0x968: //2
                outputText += "&#x11068";
                break;
            case 0x969: //3
                outputText += "&#x11069";
                break;
            case 0x96A: //4
                outputText += "&#x1106A";
                break;
            case 0x96B: //5
                outputText += "&#x1106B";
                break;
            case 0x96C: //6
                outputText += "&#x1106C";
                break;
            case 0x96D: //7 
                outputText += "&#x1106D";
                break;
            case 0x96E: //8
                outputText += "&#x1106E";
                break;
            case 0x96F: //9
                outputText += "&#x1106F";
                break;
            default:
                outputText += "&#"+n;
                break;
        }
    }
    document.getElementById("brah-output").innerHTML= outputText;
}

function convertBrahToDev(){
    var inputText, outputText;
    inputText = document.getElementById("brah-input").value;
    outputText = "";
    var i;
    for (i=0; i<inputText.length; i++){
        var n = inputText.codePointAt(i);
        switch(n){
            case 0x11001:
                outputText += "&#x902";
                i++;
                break;
            case 0x11005:
                outputText += "&#x00905";
                i++;
                break;
            case 0x11006: //AA
                outputText += "&#x906";
                i++;
                break;
            case 0x11007: //I
                outputText += "&#x907";
                i++;
                break;
            case 0x11008: //II
                outputText += "&#x908";
                i++;
                break;
            case 0x11009: //U
                outputText += "&#x909";
                i++;
                break;
            case 0x1100A: // UU
                outputText += "&#x90A";
                i++;
                break;
            case 0x1100B: //Vocalic R
                outputText += "&#x90B";
                i++;
                break;
            case 0x1100D: //Vocalic L
                outputText += "&#x90C";
                i++;
                break;
            case 0x1100F: // E
                outputText += "&#x90F";
                i++;
                break;
            case 0x11010: // AI
                outputText += "&#x910";
                i++;
                break;
            case 0x11011: // O
                outputText += "&#x913";
                i++;
                break;
            case 0x11012: // AU
                outputText += "&#x914";
                i++;
                break;
            case 0x11013: // KA
                outputText += "&#x915";
                i++;
                break;
            case 0x11014: // KHA
                outputText += "&#x916";
                i++;
                break;
            case 0x11015: // GA
                outputText += "&#x917";
                i++;
                break;
            case 0x11016: // GHA
                outputText += "&#x918";
                i++;
                break;
            case 0x11017: // NGA
                outputText += "&#x919";
                i++;
                break;
            case 0x11018: // CA
                outputText += "&#x91A";
                i++;
                break;
            case 0x11019: // CHA
                outputText += "&#x91B";
                i++;
                break;
            case 0x1101A: // JA
                outputText += "&#x91C";
                i++;
                break;
            case 0x1101B: // JHA
                outputText += "&#x91D";
                i++;
                break;
            case 0x1101C: // NYA
                outputText += "&#x91E";
                i++;
                break;
            case 0x1101D: // TTA
                outputText += "&#x91F";
                i++;
                break;
            case 0x1101E: // TTHA
                outputText += "&#x920";
                i++;
                break;
            case 0x1101F: // DDA
                outputText += "&#x921";
                i++;
                break;
            case 0x11020: // DDHA
                outputText += "&#x922";
                i++;
                break;
            case 0x11021: // NNA
                outputText += "&#x923";
                i++;
                break;
            case 0x11022: // TA
                outputText += "&#x924";
                i++;
                break;
            case 0x11023: // THA
                outputText += "&#x925";
                i++;
                break;
            case 0x11024: // DA
                outputText += "&#x926";
                i++;
                break;
            case 0x11025: // DHA
                outputText += "&#x927";
                i++;
                break;
            case 0x11026: // NA
                outputText += "&#x928";
                i++;
                break;
            case 0x11027: //PA
                outputText += "&#x92A";
                i++;
                break;
            case 0x11028: //PHA
                outputText += "&#x92B";
                i++;
                break;
            case 0x11029: // BA
                outputText += "&#x92C";
                i++;
                break;
            case 0x1102A: // BHA
                outputText += "&#x92D";
                i++;
                break;
            case 0x1102B: // MA
                outputText += "&#x92E";
                i++;
                break;
            case 0x1102C: // YA
                outputText += "&#x92F";
                i++;
                break;
            case 0x1102D: // RA
                outputText += "&#x930";
                i++;
                break;
            case 0x1102E: // LA
                outputText += "&#x932";
                i++;
                break;
            case 0x11034: // LLA
                outputText += "&#x933";
                i++;
                break;
            case 0x1102F: // VA
                outputText += "&#x935";
                i++;
                break;
            case 0x11030: // SHA
                outputText += "&#x936";
                i++;
                break;
            case 0x11031: // SSA
                outputText += "&#x937";
                i++;
                break;
            case 0x11032: // SA
                outputText += "&#x938";
                i++;
                break;
            case 0x11033: // HA
                outputText += "&#x939";
                i++;
                break;
            case 0x11038: // AA
                outputText += "&#x93E";
                i++;
                break;
            case 0x1103A: // I
                outputText += "&#x93F";
                i++;
                break;
            case 0x1103B: // II
                outputText += "&#x940";
                i++;
                break;
            case 0x1103C: // U
                outputText += "&#x941";
                i++;
                break;
            case 0x1103D: //UU
                outputText += "&#x942";
                i++;
                break;
            case 0x1103E: //R
                outputText += "&#x943";
                i++;
                break;
            case 0x1103F: //RR
                outputText += "&#x944";
                i++;
                break;
            case 0x11040: //L
                outputText += "&#x962";
                i++;
                break;
            case 0x11041: //LL
                outputText += "&#x963";
                i++;
                break;
            case 0x11042: //E
                outputText += "&#x947";
                i++;
                break;
            case 0x11043: //AI
                outputText += "&#x948";
                i++;
                break;
            case 0x11044: //O
                outputText += "&#x94B";
                i++;
                break;
            case 0x11045: //AU
                outputText += "&#x94C";
                i++;
                break;
            case 0x11046: //virama
                outputText += "&#x94D";
                i++;
                break;
            case 0x11047: // danda
                outputText += "&#x964";
                i++;
                break;
            case 0x11048: // double danda
                outputText += "&#x965";
                i++;
                break;
            case 0x11066: //0
                outputText += "&#x966";
                i++;
                break;
            case 0x11067: //1
                outputText += "&#x967";
                i++;
                break;
            case 0x11068: //2
                outputText += "&#x968";
                i++;
                break;
            case 0x11069: //3
                outputText += "&#x969";
                i++;
                break;
            case 0x1106A: //4
                outputText += "&#x96A";
                i++;
                break;
            case 0x1106B: //5
                outputText += "&#x96B";
                i++;
                break;
            case 0x1106C: //6
                outputText += "&#x96C";
                i++;
                break;
            case 0x1106D: //7 
                outputText += "&#x96D";
                i++;
                break;
            case 0x1106E: //8
                outputText += "&#x96E";
                i++;
                break;
            case 0x1106F: //9
                outputText += "&#x96F";
                i++;
                break;
            default:
                outputText += "&#"+n;
        }
    }
    document.getElementById("dev-output").innerHTML= outputText;
};