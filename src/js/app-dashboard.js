(function () {
    'use strict';
        
    const burgerBtn = document.getElementById("hamburger-items");
    burgerBtn.addEventListener('click', function () {
      const element = document.querySelector(".burger-item-top");
        element.classList.toggle("burger-active");
        console.log("test");
    });    

    })();