window.addEventListener("DOMContentLoaded", () => {
    // Trojan Button
    const trojanBtn = document.querySelector('#trojan');
    trojanBtn.addEventListener('click', () => {window.open('https://www.youtube.com/watch?v=S2wyM5DOWJU&t=309s', '_blank')});
    
    // Botnet Button
    const botnetBtn = document.getElementById('botnet');
    botnetBtn.addEventListener('click', () => {window.open('https://www.youtube.com/watch?v=2Id2hNfVjZQ', '_blank')});

    // PDF File button
    const PDFFileBtn = document.querySelector('#pdfFile');
    PDFFileBtn.addEventListener('click', () => {window.open('pathToFile', '_blank')});
});
