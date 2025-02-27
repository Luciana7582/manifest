const novaImagem = chrome.runtime.getURL("img/image.jpg")

function substituirImagens(){
const imagens = document.getElementsByTagName("img")
for(const img of imagens){
    if(img.classList.contains("substituida")) continue 

    const novaImg = new Image()
    novaImg.src = novaImagem
    novaImg.style.width = img.offsetWidth + "px"
    novaImg.style.height = img.offsetHeight + "px"
    novaImg.style.objectFit = "cover"
    novaImg.classList.add("substituida")

    img.parentNode.replaceChild(novaImg,img)
}    
}

function substituirFundos(){
    const elementosComFundo = document.querySelectorAll("*")
    for(const elemento of elementosComFundo){
        if(elemento.style.backgroundImage){
            elemento.style.backgroundImage = `url('${novaImagem }')`
        elemento.style.backgroundSize = "cover"   
        }
    }
}

function substituirVideos(){
    const videos = document.getElementsByName("videos")
    for(const video of videos){
const img = document.createElement("img")
img.src =novaImagem
img,style.width = video.offsetwidth + "px"
img.style.height = video.offsetHeight + "px"
img.objectFit = "cover"
video.parentNode.replaceChild(img,video)
    }
}

function substituirIframe (){
    const iframes = document.getElementsByName("iframe")
    for(const iframe of iframes){
        const img = document.createElement("img")
        img.src = novaImagem
        img,style.width = video.offsetwidth + "px"
        img.style.height = video.offsetHeight + "px"
        img.objectFit = "cover"
        iframe.parentNode.replaceChildren(img,iframe)
    }
}

function substituirTodasMidias(){
    substituirImagens()
    substituirFundos()
    substituirIframe()
}

substituirTodasMidias()

let timeoutId

const observador = new MutationObserver((mutacoes)=>{
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
     substituirTodasMidias   
    },100)
})

const config = {childList:true, subtree:true}
observador.observe(document.body, config)