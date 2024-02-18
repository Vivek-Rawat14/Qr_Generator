let texts = document.querySelector('#texts')
let imgs = document.querySelector('#qrcode_img')
let btn = document.querySelector('#sub')
let reload = document.querySelector('#rel')


btn.addEventListener('click',()=>{
    if(texts.value === ""){
        alert("Please enter url or text")
    }
    else{
        imgs.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + texts.value;
    }
})


reload.addEventListener('click',()=>{
    window.location.reload()
})











