    'use strict'
    document.getElementById("client-password").style.display = "none";
    document.getElementById("sign-in-back").style.display = "none";
    document.getElementById("select-other").style.display = "none";
    document.getElementById("keyboard-2").style.display = "none";
    document.getElementById("go-2").style.display = "none";

/*function test(aaa) {
var patternClientNumber = new RegExp("^[a-z]{3}$");  
            if (patternClientNumber.test(aaa) === true) {
                return "spełnia";
            }
else {
    return "niespełnia"
}
    
    };
console.log(test("efis"));*/

    (function () {
    

        var buttonGo = document.querySelector("#go-1");
        var buttonGoTwo = document.querySelector("#go-2");

        buttonGo.addEventListener('click', function (event) {
            
            var textBox1 = document.getElementById("set-client-number").value;
            
            var patternClientNumber = new RegExp("^[a-z]{3}$");
            
            if (textBox1 === "") {
                alert('Wprowadź Numer Klienta!');
            } 
            else if (patternClientNumber.test(textBox1) === false) {
                alert('Numer Klienta musi składać się z 3 małych liter');
            }
            else {
                hideElement();
            }
            event.preventDefault();
        });
        
        /*buttonGo.addEventListener('click', function (event) {
            var textBox1 = document.getElementById("set-client-number");

            if (textBox1.value === "") {
                alert('Wprowadź Numer Klienta!');
            } else {
                hideElement();
            }
            event.preventDefault();
        });*/
        
        

        function hideElement() {

            var clientNumber = document.getElementById("set-client-number");
            clientNumber.style.display = "none";
            document.getElementById("client-number").innerHTML = clientNumber.value;
            document.getElementById("client-password").style.display = "inline-block";
            document.getElementById("sign-in-back").style.display = "block";
            document.getElementById("instruction-for-client").innerHTML = "Aby zaimportować dane zaloguj się do swojego banku";
            document.getElementById("select-other").style.display = "inline-block";
            document.getElementById("keyboard-2").style.display = "block";
            document.getElementById("keyboard-1").style.display = "none";
            buttonGo.style.display = "none";
            buttonGoTwo.style.display = "inline-block";
        };

        var cross = document.getElementById("sign-in-back");
        var selectOther = document.getElementById("select-other");

        cross.addEventListener("click", back);
        selectOther.addEventListener("click", back);

        function back() {
            document.getElementById("client-number").innerHTML = "";
            document.getElementById("set-client-number").value = "";
            document.getElementById("client-password").style.display = "none";
            document.getElementById("client-password").value = "";
            document.getElementById("sign-in-back").style.display = "none";
            document.getElementById("select-other").style.display = "none";
            document.getElementById("set-client-number").style.display = "inline-block";
            document.getElementById("instruction-for-client").innerHTML = "Aby rozpocząć logowanie należy wprowadzić swój Numer Klienta";
            document.getElementById("keyboard-2").style.display = "none";
            document.getElementById("keyboard-1").style.display = "block";
            buttonGo.style.display = "inline-block";
            buttonGoTwo.style.display = "none";
        };

        function login() {

            const clientNumber = document.getElementById("set-client-number").value;
            const password = document.getElementById("client-password").value;
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
                window.location.href = 'http://localhost:3000/dashboard.html';
            }).catch(function (error) {
                alert('Podane dane są nieprawidłowe');
            })
        }

//       - inny zapis tego co powyżej -
        
            //                    axios.post('https://efigence-camp.herokuapp.com/api/login', {
            //                        login: 'efi',
            //                        password: 'camp'
            //                    }).then(function (response) {
            //                        console.log("success", response);
            //                    }).catch(function (error) {
            //                        console.log("error", error);
            //                    })


/*zapytanie do API javasrciptem, żeby działało trzeba podpiać skrypt ajax w pliku html*/

        /*function login() {
            const xhttp = new XMLHttpRequest();
            const clientNumber = document.getElementById("set-client-number").value;
            const password = document.getElementById("client-password").value;
            
            
            const data = {
                login: clientNumber,
                password: password
            }
            
            xhttp.onreadystatechange = function () {
                if (xhttp.status == 400) {

                    alert('Podane dane są nieprawidłowe');
                }
                else if (xhttp.status == 200) {
                    
                    window.location.href = 'http://localhost:3000/dashboard.html';
                }
            };
            
            xhttp.open('POST', 'https://efigence-camp.herokuapp.com/api/login', true);
            xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            xhttp.send(Qs.stringify(data));
        }*/

        buttonGoTwo.addEventListener('click', function (event) {
            var textBox2 = document.getElementById("client-password").value;
            var patternPassword = new RegExp("^[a-z]{4}$");

            if (textBox2 === "") {
                alert('Wprowadź hasło!');
            } 
            else if (patternPassword.test(textBox2) === false) {
                alert('Hasło musi składać się z 4 małych liter');
            }
            
            else {
                login();
            }
            event.preventDefault();
        });
        
//    
//   KONFIGURACJA WYKRESU START             
//    var ctx = document.getElementById('myChart').getContext('2d');
//var chart = new Chart(ctx, {
    // The type of chart we want to create
//    type: 'line',

    // The data for our dataset
//    data: {
//        labels: ["January", "February", "March", "April", "May", "June", "July"],
//        datasets: [{
//            label: "My First dataset",
//            backgroundColor: 'rgb(255, 99, 132)',
//            borderColor: 'rgb(255, 99, 132)',
//            data: [0, 10, 5, 2, 20, 30, 45],
//        }]
//    },

    // Configuration options go here
//    options: {}
//});
//        KONFIGURCJA WYKRESU - END
        
//        Funkcja tymczasowa dla wykresu - START
        
        
//                function chartLoad() {
//
//            const clientNumber = "efi";
//            const password = "camp";
//            const data = {
//                login: clientNumber,
//                password: password
//            }
//const formData = new FormData();
//            
//            formData.append('login', clientNumber);
//            formData.append('password', password);
//            
//            const options = {
//                method: 'POST',
//                headers: {
//                    'content-type': 'application/x-www-form-urlencoded'
//                },
//                data: formData,
//                url: "https://efigence-camp.herokuapp.com/api/login",
//            };
//
//            axios(options).then(function (response) {
//                const optionsHistory = {
//                method: 'GET',
//                headers: {
//                    'content-type': 'application/x-www-form-urlencoded'
//                },
//                url: "https://efigence-camp.herokuapp.com/api/data/history",
//            };
//               axios(optionsHistory).then(function (response) {
//                   console.log(response.data);
//               });
//                                   
//            }).catch(function (error) {
//                alert('Podane dane są nieprawidłowe');
//            })
//        }
//chartLoad();
        //        Funkcja tymczasowa dla wykresu - END
        
    })();