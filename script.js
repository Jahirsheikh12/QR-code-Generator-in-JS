let URL = document.getElementById('url-input');

let generateBtn = document.getElementById('generate');

let qrContainer = document.querySelector('.qr-container');

let resetBtn = document.getElementById('reset');

let qrImage = document.getElementById('qrImage');

generateBtn.addEventListener('click' , () => {
    let encodeUrl = encodeURIComponent(URL.value);
    let apiUrl= `https://api.qrserver.com/v1/create-qr-code/?data=${encodeUrl}&size=100x100`;
    qrImage.src = apiUrl;
    if(URL.value === ''){
        alert("please enter a text or valid URL");
    } else {
        qrContainer.style.display = "inline";
    }
    generateBtn.style.display = "none";
    
    resetBtn.style.display = "block";

});

// resetBtn.addEventListener('click', () => {
//     URL.value = '';
//     qrContainer.remove();
//     generateBtn.style.display = 'block';
//     resetBtn.style.display = "none";
// });
