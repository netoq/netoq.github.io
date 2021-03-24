document.addEventListener('DOMContentLoaded', ()=>{
    'use strict'

    function smoothScroll(target, duration){
        let target = document.querySelector(target);
        
        console.log(target);
    }


    console.log('hola mundo');
    smoothScroll('#section1', 1000);

})