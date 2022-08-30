const dn = document.querySelectorAll('.downer')
const up = document.querySelectorAll('.upper')
const svg = document.querySelector('svg')
const img = document.querySelector('img')


svg.onclick = function () {
    up[0].style.transform = "translate(0, -270px)"
    up[1].style.transform = "translate(0, -270px)"
    dn[0].style.transform = "translate(0, 20px)"
    dn[1].style.transform = "translate(0, 20px)"
    dn[2].style.transform = "translate(0, 20px)"
    img.style.translate = "0 -180px"
    img.style.transform = "scale(5.5)"
}