(function () {
    'use strict';
        
    const burgerBtn = document.getElementById("hamburger-items");
    burgerBtn.addEventListener('click', function () {
      const element = document.querySelector(".burger-item-top");
        element.classList.toggle("burger-active");
        console.log("test");
    });    
//   KONFIGURACJA WYKRESU START             
    var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
//    options: {}
});
//        KONFIGURCJA WYKRESU - END
        
//        Funkcja tymczasowa dla wykresu - START
        
        
                function chartLoad() {

            const clientNumber = "efi";
            const password = "camp";
            const data = {
                login: clientNumber,
                password: password
            }
const formData = new FormData();
            
            formData.append('login', clientNumber);
            formData.append('password', password);
            
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: formData,
                url: "https://efigence-camp.herokuapp.com/api/login",
            };

            axios(options).then(function (response) {
                const optionsHistory = {
                method: 'GET',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                url: "https://efigence-camp.herokuapp.com/api/data/history",
            };
               axios(optionsHistory).then(function (response) {
                   console.log(response.data);
               });
                                   
            }).catch(function (error) {
                alert('Podane dane są nieprawidłowe');
            })
        }
chartLoad();
        //        Funkcja tymczasowa dla wykresu - END
    })();