
// Laba 1
/* 
    длина пароля
    английские буквы
    русские буквы
    прописные(маленькие) буквы
    строчные(большие) буквы
    цифры
    спец. знаки
*/
let textDlina = document.getElementById('dlina');
let checkEngLtr = document.getElementById('engletter');
let checkRuLtr = document.getElementById('ruletter');
let checkDownLtr = document.getElementById('downletter');
let checkUpLtr = document.getElementById('upletter');
let checkNumbers = document.getElementById('numbers');
let checkSymbols = document.getElementById('symbols');
let resultValue = document.getElementById('result');
let btnCreate = document.getElementById("create");

textDlina.value = 7

btnCreate.addEventListener("click",function(){
    if (textDlina.value == ""){
        alert("Введите длину пароля");
    }else if(textDlina.value < 0){
        alert("Введите положительное число");        
    } else{
        resultValue.value = generatePassword();
    }
});
let maxCap = 50;
function generatePassword() {
    let length = textDlina.value;
    if (length > maxCap){
        length = maxCap;
        alert('Максимальная длина 50 символов')
    }
    let pswValue = "";
    let symbollist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZабвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    if(checkSymbols.checked == false){          //символы
        symbollist = symbollist.substring(0,128);
    }
    if(checkNumbers.checked == false){          //цифры
        symbollist = symbollist.substring(0,118)+symbollist.substring(128, symbollist.length);
    }
    if(checkUpLtr.checked == false){            //строчные
        symbollist = symbollist.replace(/[А-ЯЁ]/g, '');
        symbollist = symbollist.replace(/[A-Z]/g, '');
    }
    if(checkDownLtr.checked == false){            //строчные
        symbollist = symbollist.replace(/[а-яё]/g, '');
        symbollist = symbollist.replace(/[a-z]/g, '');
    }
    if(checkRuLtr.checked == false){            //русские
       symbollist = symbollist.replace(/[а-яА-ЯЁё-і]/g, '');
    } 
    if(checkEngLtr.checked == false){            //английские
        symbollist = symbollist.replace(/[a-zA-Z]/g, '');
    } 
    for (var i = 0; i < length; ++i) {
        pswValue += symbollist.charAt(Math.floor(Math.random()*symbollist.length));
    }
    return pswValue;
}