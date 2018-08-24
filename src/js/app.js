//    'use strict'
//    document.getElementById("client-password").style.display = "none";
//    document.getElementById("sign-in-back").style.display = "none";
//    document.getElementById("select-other").style.display = "none";
//    document.getElementById("keyboard-2").style.display = "none";
//    document.getElementById("go-2").style.display = "none";
    (function () {
    'use strict';

//        var buttonGo = document.querySelector("#go-1");
//        var buttonGoTwo = document.querySelector("#go-2");
//
//        buttonGo.addEventListener('click', function (event) {
//            var textBox1 = document.getElementById("set-client-number");
//
//            if (textBox1.value === "") {
//                alert('Wprowadź Numer Klienta!');
//            } else {
//                hideElement();
//            }
//            event.preventDefault();
//        });
//
//        function hideElement() {
//
//            var clientNumber = document.getElementById("set-client-number");
//            clientNumber.style.display = "none";
//            document.getElementById("client-number").innerHTML = clientNumber.value;
//            document.getElementById("client-password").style.display = "inline-block";
//            document.getElementById("sign-in-back").style.display = "block";
//            document.getElementById("instruction-for-client").innerHTML = "Aby zaimportować dane zaloguj się do swojego banku";
//            document.getElementById("select-other").style.display = "inline-block";
//            document.getElementById("keyboard-2").style.display = "block";
//            document.getElementById("keyboard-1").style.display = "none";
//            buttonGo.style.display = "none";
//            buttonGoTwo.style.display = "inline-block";
//        };
//
//        var cross = document.getElementById("sign-in-back");
//        var selectOther = document.getElementById("select-other");
//
//        cross.addEventListener("click", back);
//        selectOther.addEventListener("click", back);
//
//        function back() {
//            document.getElementById("client-number").innerHTML = "";
//            document.getElementById("set-client-number").value = "";
//            document.getElementById("client-password").style.display = "none";
//            document.getElementById("client-password").value = "";
//            document.getElementById("sign-in-back").style.display = "none";
//            document.getElementById("select-other").style.display = "none";
//            document.getElementById("set-client-number").style.display = "inline-block";
//            document.getElementById("instruction-for-client").innerHTML = "Aby rozpocząć logowanie należy wprowadzić swój Numer Klienta";
//            document.getElementById("keyboard-2").style.display = "none";
//            document.getElementById("keyboard-1").style.display = "block";
//            buttonGo.style.display = "inline-block";
//            buttonGoTwo.style.display = "none";
//        };
//
//        function login() {
//
//            const clientNumber = document.getElementById("set-client-number").value;
//            const password = document.getElementById("client-password").value;
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
//                window.location.href = 'http://localhost:3000/dashboard.html';
//            }).catch(function (error) {
//                alert('Podane dane są nieprawidłowe');
//            })
//        }

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

//        buttonGoTwo.addEventListener('click', function (event) {
//            var textBox2 = document.getElementById("client-password");
//
//            if (textBox2.value == null) {
//                alert('Wprowadź hasło!');
//            } else {
//                login();
//            }
//            event.preventDefault();
//        });
        
    const burgerBtn = document.getElementById("hamburger-items");
    burgerBtn.addEventListener('click', function () {
      const element = document.querySelector(".dashboard");
        element.classList.toggle("burger-active");
        console.log("test");
    });    

    })();