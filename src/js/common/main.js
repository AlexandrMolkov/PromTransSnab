import {burgInit, burgResize} from './burger.js'
import '../libs/inputmask.js'
import AOS from 'aos';




document.addEventListener('DOMContentLoaded', () => {


 


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





    ///////// input mask

    const inputTel = document.querySelector('input[type="tel"]')
    const maskTel = new Inputmask('+7 (999) 999-99-99')
    if(inputTel) maskTel.mask(inputTel)



    ////////// animations
    
    AOS.init();


    
    ////////// ymaps

    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            zoom: 7
        });

        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point", 
                coordinates: [55.8, 37.8] 
            }
        });

        var myPlacemark = new ymaps.Placemark([55.76, 37.56], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'place-point-svgrepo-com.svg',
            iconImageSize: [30, 42],
            iconImageOffset: [-3, -42]
            });

        // Размещение геообъекта на карте.
        myMap.geoObjects.add(myGeoObject); 
        myMap.geoObjects.add(myPlacemark); 
    }



        ////////// form

        document.querySelector('#form').addEventListener('submit', e => {
            e.preventDefault()
            let formData = new FormData(e.target)
            let xhr = new XMLHttpRequest()

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 ) {
                        console.log('Отправлено')
                    }
                }
            }
            xhr.open('POST', 'mail.php', true)
            xhr.send(formData)
        })

})




