'use strict'
const body       = document.body

const footerBtn  = document.querySelector('.footer__btn')
const sup        = document.querySelector('.footer__sup')

const nav        = document.querySelector('.mid__nav')
const navBtn     = document.querySelector('.mobile__menu')

const grande     = document.querySelector('.slider__grande')
const slide      = document.querySelectorAll('.slider__slide')
const prev       = document.querySelector('.slider__btn--prev')
const next       = document.querySelector('.slider__btn--next')
let posicion = 0
let numSlides = slide.length


// Fixed Header
const mid  = document.querySelector('.header__mid') 
let midTop = mid.getBoundingClientRect().top 

window.addEventListener('scroll', ()=>{

    let pixel = window.scrollY
    
    if( pixel >= midTop ){
        body.classList.add('fixed')
    }else{
        body.classList.remove('fixed')
    }
})

// Cookies
const cookies    = document.querySelector('.cookies')
const cookiesBtn = document.querySelector('.cookies__cerrar')

cookiesBtn.addEventListener('click', ()=>{
    cookies.classList.add('hidden')
})

// Menu móvil
navBtn.addEventListener('click', ()=>{
    navBtn.classList.toggle('activo')
    nav.classList.toggle('activo')
    body.classList.toggle('no-scroll')
})

// Desplazamiento slider
prev.addEventListener('click', ()=>{
    if( posicion == 0 ){ posicion = numSlides}
    posicion --

    desplazar()
})
next.addEventListener('click', siguiente )

// Desplegar descripción en footer
footerBtn.addEventListener('click', ()=>{
    sup.classList.toggle('activo')
    footerBtn.classList.toggle('activo')
})

// Menú móvil footer
const dl = document.querySelectorAll('.submenu__col')
const dt = document.querySelectorAll('.submenu__title')

dt.forEach(( cadaTitle , i )=>{
    dt[i].addEventListener('click',()=>{
        dl[i].classList.toggle('activo')
    })
})

// Funciones
function desplazar(){
    let operacion = posicion * -( 100 / numSlides )
    grande.style.transform = `translateX(${operacion}%)`
}
function siguiente(){
    posicion++
    desplazar()

    if( posicion >= numSlides){
        posicion = 0
        desplazar()
    }
}

let automatico = setInterval(siguiente, 4500)