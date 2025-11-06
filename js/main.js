document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the 'pair' from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const pair = urlParams.get('pair');

    if (!pair) {
        document.getElementById('main-title').innerText = "Error";
        document.getElementById('sub-title').innerText = "No converter pair specified in URL. Try ?pair=dev-brah";
        return;
    }

    // 2. Create a script tag to load the specific converter logic
    const script = document.createElement('script');
    script.src = `js/converters/${pair}.js`;
    
    // 3. When the script loads, run the setup function
    script.onload = () => {
        // 'converterConfig' is now available from the loaded script
        if (typeof converterConfig !== 'undefined') {
            initializeConverter(converterConfig);
        } else {
            document.getElementById('main-title').innerText = "Error";
            document.getElementById('sub-title').innerText = `Could not load config for '${pair}'.`;
        }
    };
    
    // 4. Add the script tag to the page
    document.head.appendChild(script);
});

function initializeConverter(config) {
    // Populate main titles
    document.getElementById('main-title').innerText = config.mainTitle;
    document.getElementById('sub-title').innerText = config.subTitle;

    // --- Configure Box A ---
    const boxA = config.boxA;
    document.getElementById('title-a').innerHTML = boxA.title; // Use innerHTML for unicode
    document.getElementById('input-a').placeholder = boxA.inputPlaceholder;
    document.getElementById('input-a').className += ` ${boxA.fontClass}`; // Add font
    document.getElementById('button-a').innerText = boxA.buttonText;
    document.getElementById('label-a').innerText = boxA.outputLabel;
    document.getElementById('output-a').className += ` ${boxA.outputFontClass}`;
    document.getElementById('button-a').onclick = boxA.convertFunction; // Assign the function

    // --- Configure Box B ---
    const boxB = config.boxB;
    document.getElementById('title-b').innerHTML = boxB.title; // Use innerHTML for unicode
    document.getElementById('input-b').placeholder = boxB.inputPlaceholder;
    document.getElementById('input-b').className += ` ${boxB.fontClass}`; // Add font
    document.getElementById('button-b').innerText = boxB.buttonText;
    document.getElementById('label-b').innerText = boxB.outputLabel;
    document.getElementById('output-b').className += ` ${boxB.outputFontClass}`;
    document.getElementById('button-b').onclick = boxB.convertFunction; // Assign the function
}