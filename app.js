const dn = document.querySelectorAll('.downer')
const up = document.querySelectorAll('.upper')
const svg = document.querySelector('svg')
const img = document.querySelector('img')
let open = false;

svg.onclick = function () {
    reder()
}

img.onclick = function(){
    reder()
}

function reder() {
    if (open) {
    up[0].style.opacity = "1"
    up[1].style.opacity = "1"
    setTimeout(()=>{up[0].style.transform = "translate(0, 0)"}, 300)
    setTimeout(()=>{up[1].style.transform = "translate(0, 0)"}, 300)
    dn[0].style.transform = "translate(0, 0)"
    dn[1].style.transform = "translate(0, 0)"
    dn[2].style.transform = "translate(0, 0)"
    img.style.transform = "scale(1)"
    setTimeout(()=>{img.style.translate = "0 -0"}, 100)
    open = false;
    } else{
    up[0].style.transform = "translate(0, -270px)"
    up[1].style.transform = "translate(0, -270px)"
    setTimeout(()=>{up[0].style.opacity = "0"}, 200)
    setTimeout(()=>{up[1].style.opacity = "0"}, 200)
    dn[0].style.transform = "translate(0, 20px)"
    dn[1].style.transform = "translate(0, 20px)"
    dn[2].style.transform = "translate(0, 20px)"
    img.style.translate = "0 -180px"
    img.style.transform = "scale(5.5)"
    open = true;
    }
}