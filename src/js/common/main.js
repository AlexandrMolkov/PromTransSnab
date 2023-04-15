import {burgInit, burgResize} from './burger.js'
import '../libs/inputmask.js'
import AOS from 'aos';




document.addEventListener('DOMContentLoaded', () => {


    document.querySelectorAll('[data-background]').forEach( el => {
        el.style.backgroundImage = `url(${el.dataset.background})`
    })





    // filter mobile button

    document.querySelector('.catalog-page__filter-btn')?.addEventListener('click', () => {
        document.querySelector('.catalog-page__filter-mobile').classList.add('active')
        document.querySelector('header').classList.add('back')
        document.body.classList.add('lock')
    })

    document.querySelector('#closefilter')?.addEventListener('click', () => {
        document.querySelector('.catalog-page__filter-mobile').classList.remove('active')
        document.querySelector('header').classList.remove('back')
        document.body.classList.remove('lock')
    })






    //  add to cart
    document.addEventListener('click', e => {
        if(e.target.classList.contains('product-card__btn-add')) {
            let card
            const f = (target) => {
                if(target.parentNode.classList.contains('product-card')) card = target.parentNode
                else{
                    f(target.parentNode)
                }
            }
            f(e.target)
            card.classList.add('added')
        }
    })


    //  Catalog btn
    document.querySelector('.btn-catalog')?.addEventListener('click', e => {
        e.target.closest('.btn-catalog').classList.toggle('open')
       document.querySelector(e.target.closest('.btn-catalog').dataset.target)
            .classList.toggle('active', e.target.closest('.btn-catalog').classList.contains('open'))
    })



    //  smooth scroll
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
            anchor.addEventListener('click', function (e) {
            e.preventDefault()
        
            const blockID = anchor.getAttribute('href').substring(1)
            if(document.getElementById(blockID)) {
                document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
                })
            }
        })
    }


    // burger
    burgInit()

    window.addEventListener('resize', () =>  {
        burgResize()
        
    });




    // filter checkbox
    document.querySelectorAll('.filter-checkbox').forEach( cb =>{

        if(cb.querySelector('input').checked) {
            cb.classList.add('active')
        }

        cb.addEventListener('click', e => {
            if(cb.classList.contains('active')) {
                cb.querySelector('input').checked = false
            } else {
                cb.querySelector('input').checked = true
            }
            cb.classList.toggle('active')
        })
    })


    ///////// input mask

    const inputTel = document.querySelector('input[type="tel"]')
    const maskTel = new Inputmask('+7 (999) 999-99-99')
    if(inputTel) maskTel.mask(inputTel)



    ////////// animations
    
    AOS.init();




})




