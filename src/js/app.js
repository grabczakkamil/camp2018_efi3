    'use strict'
    document.getElementById("client-password").style.display = "none";
    document.getElementById("sign-in-back").style.display = "none";
    document.getElementById("select-other").style.display = "none";
    document.getElementById("keyboard-2").style.display = "none";
document.getElementById("go-2").style.display = "none";
    (function () {

        var buttonGo = document.querySelector("#go-1");
        var buttonGoTwo = document.querySelector("#go-2");

        buttonGo.addEventListener("click", hideElement);

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
//
//        function login() {
//            const data = {
//                login: "efi",//TODO: ZAMIENIC NA WARTOŚĆ Z INPUTA
//                password: "camp"//TODO: ZAMIENIC NA WARTOŚĆ Z INPUTA
//            }
//
//            const options = {
//                method: 'POST',
//                headers: {
//                    'content-type': 'application/x-www-form-urlencoded'
//                },
//                data: Qs.stringify(data),
//                url: "https://efigence-camp.herokuapp.com/api/login",
//            };
//            
//            axios(options).then(function (response) {
//                console.log("success", response);
//            }).catch(function (error) {
//                 console.log("error", error);
//            })
//
////            axios.post('https://efigence-camp.herokuapp.com/api/login', {
////                login: 'efi',
////                password: 'camp'
////            }).then(function (response) {
////                console.log("success", response);
////            }).catch(function (error) {
////                console.log("error", error);
////            })
//        }
//
//        buttonGo.addEventListener("click", login);
        function login() {
            const xhttp = new XMLHttpRequest();
            const clientNumber = document.getElementById("set-client-number").value;
            const password = document.getElementById("client-password").value;
           xhttp.onreadystatechange = function() {
                if(xhttp.status == false) {
                    if(xhttp.code = "l1") {
                        alert("No login/password");
                    }
                    else if(xhttp.code = "l2") {
                        alert("Wrong login/password");
                    }
            }
             
           };
            xhttp.open('POST', 'https://efigence-camp.herokuapp.com/api/login', true);
            xhttp.send(clientNumber, password);
        }
buttonGoTwo.addEventListener("click", login);
    })();
