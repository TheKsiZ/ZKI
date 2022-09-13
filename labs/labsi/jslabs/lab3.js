let textC = document.getElementById('textC');
let textT = document.getElementById('textT');
let textP = document.getElementById('textP');
let btnClaimC = document.getElementById('claimC');
let btnClaimT = document.getElementById('claimT');
let btnClaimP = document.getElementById('claimP');
let resultC = document.getElementById('resultC');
let resultT = document.getElementById('resultT');
let resultP = document.getElementById('resultP');
let btnDeleteC = document.getElementById('deleteC');
let btnDeleteT = document.getElementById('deleteT');
let btnDeleteP = document.getElementById('deleteP');
let keyC = document.getElementById('keyC');
let keyP = document.getElementById('keyP');
//Cesar
let rusalph = "абвгдеёжзийклмнопрстуфхцчшщьыъэюя";
let engalph = "abcdefghijklmnopqrstuvwxyz";
function Cesar(text, check) {
    let keya;
    if (Number.isInteger(Number(keyC.value))) {
        if (check == 0) {
            keya = Number(keyC.value);
        }
        else if (check == 1) {
            keya = Number(keyC.value) * (-1);
        }
    } else if (keyC.value == "") {
        keya = 0;
        alert('Введите ключ');
    }
    else {
        keya = 0;
        alert('Введите число');
    }
    let a = 0;
    let cresult = "";
    for (let i = 0; i < text.length; i++) {
        //rus   
        if (rusalph.indexOf(text[i].toLowerCase()) != -1) {
            if (rusalph.indexOf(text[i].toLowerCase()) + keya >= 33) {
                let c = (rusalph.indexOf(textC[i].toLowerCase()) + keya) % 33;
                if (text[i] == text[i].toUpperCase()) {
                    cresult += rusalph[c].toUpperCase();
                } else {
                    cresult += rusalph[c];
                }
            } else if (rusalph.indexOf(text[i].toLowerCase()) + keya < 0) {
                a = 33 - Math.floor(Math.abs(keya % 33)) - rusalph.indexOf(text[i].toLowerCase());
                if (textC[i] == text[i].toUpperCase()) {
                    cresult += rusalph[a].toUpperCase();
                } else {
                    cresult += rusalph[a];
                }
            }
            else {
                if (text[i] == text[i].toUpperCase()) {
                    cresult += rusalph[rusalph.indexOf(text[i].toLowerCase()) + keya].toUpperCase();
                } else {
                    cresult += rusalph[rusalph.indexOf(text[i]) + keya];
                }
            }
        }
        //eng
        else {
            if (engalph.indexOf(text[i].toLowerCase()) + keya >= 26) {
                let c = (engalph.indexOf(text[i].toLowerCase()) + keya) % 26;
                if (text[i] == text[i].toUpperCase()) {
                    cresult += engalph[c].toUpperCase();
                } else {
                    cresult += engalph[c];
                }
            } else if (engalph.indexOf(text[i].toLowerCase()) + keya < 0) {
                a = 26 - Math.floor(Math.abs(keya % 26)) - engalph.indexOf(text[i].toLowerCase());
                if (text[i] == text[i].toUpperCase()) {
                    cresult += engalph[a].toUpperCase();
                } else {
                    cresult += engalph[a];
                }
            }
            else {
                if (text[i] == text[i].toUpperCase()) {
                    cresult += engalph[engalph.indexOf(text[i].toLowerCase()) + keya].toUpperCase();
                } else {
                    cresult += engalph[engalph.indexOf(text[i]) + keya];
                }
            }
        }
    }
    return cresult;
}

//Tricemus
let alphtricemus = document.getElementById('alphtricemus');
let rusalphtricemus = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя ,.";
let engalphtricemus = "abcdefghijklmnopqrstuvwxyz ,.";

let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');

function Tricemus(text, check) {
    let tresult = "";
    let A, B, C;
    if (Number.isInteger(Number(a.value)) && Number.isInteger(Number(b.value)) && Number.isInteger(Number(c.value))) {
        A = Number(a.value);
        B = Number(b.value);
        C = Number(c.value);
    } else if (a.value == "" || b.value == "" || c.value == "") {
        A = 0; B = 0; C = 0;
        alert('Введите переменнные');
    }
    else {
        A = 0; B = 0; C = 0;
        alert('Введите переменнные');
    }
    //rus
    if (alphtricemus.selectedIndex == 0) {
        let flag = true;
        for (let i = 0; i < text.length; i++) {
            if (text[i] == "," || text[i] == ".") continue;
            if (rusalphtricemus.indexOf(text[i].toLowerCase()) == -1) {
                alert('В тексте присутсвует сторонний алфавит');
                flag = false;
                break;
            }
        }
        if (flag) {
            for (let i = 0; i < text.length; i++) {
                //small
                if (text[i].toLowerCase() == text[i]) {
                    let k = A * Math.pow(i, 2) + B * i + C;
                    if (check == 0) {
                        let m = rusalphtricemus.indexOf(text[i].toLowerCase());
                        let l = (m + k) % 36;
                        tresult += rusalphtricemus[l];
                    }
                    else {
                        let l = rusalphtricemus.indexOf(text[i].toLowerCase());
                        let m = (l - k) % 36;
                        if (m < 0) {
                            m = m + 36;
                        }
                        tresult += rusalphtricemus[m];
                    }
                }
                //big
                else {
                    let k = A * Math.pow(i, 2) + B * i + C;
                    if (check == 0) {
                        let m = rusalphtricemus.indexOf(text[i].toLowerCase());
                        let l = (m + k) % 36;
                        tresult += rusalphtricemus[l].toUpperCase();
                    }
                    else {
                        let l = rusalphtricemus.indexOf(text[i].toLowerCase());
                        let m = (l - k) % 36;
                        if (m < 0) {
                            m = m + 36;
                        }
                        tresult += rusalphtricemus[m].toUpperCase();
                    }
                }
            }
        }
    }
    //eng
    else {
        let flag = true;
        for (let i = 0; i < text.length; i++) {
            if (text[i] == "," || text[i] == ".") continue;
            if (engalphtricemus.indexOf(text[i].toLowerCase()) == -1) {
                alert('В тексте присутсвует сторонний алфавит');
                flag = false;
                break;
            }
        }
        if (flag) {
            for (let i = 0; i < text.length; i++) {
                //small
                if (text[i].toLowerCase() == text[i]) {
                    let k = A * Math.pow(i, 2) + B * i + C;
                    if (check == 0) {
                        let m = engalphtricemus.indexOf(text[i].toLowerCase());
                        let l = (m + k) % 29;
                        tresult += engalphtricemus[l];
                    }
                    else {
                        let l = engalphtricemus.indexOf(text[i].toLowerCase());
                        let m = (l - k) % 36;
                        if (m < 0) {
                            m = m + 36;
                        }
                        tresult += engalphtricemus[m];
                    }
                }
                //big
                else {
                    let k = A * Math.pow(i, 2) + B * i + C;
                    if (check == 0) {
                        let m = engalphtricemus.indexOf(text[i].toLowerCase());
                        let l = (m + k) % 29;
                        tresult += engalphtricemus[l].toUpperCase();
                    }
                    else {
                        let l = engalphtricemus.indexOf(text[i].toLowerCase());
                        let m = (l - k) % 36;
                        if (m < 0) {
                            m = m + 36;
                        }
                        tresult += engalphtricemus[m].toUpperCase();
                    }
                }
            }
        }
    }
    return tresult;
}
// --------


//Playfair
let alphplayfair = document.getElementById('alphplayfair');

let keyplayfair = document.getElementById('keyP');

let engarr = [[], [], [], [], []];
let rusarr = [[], [], [], [], [], [], [], []];

function Playfair(text, check) {
    let presult = "";

    let version = "";
    //make key
    let key = "";

    if (keyplayfair.value == "") {
        alert("Введите ключевое слово");
    }
    else if (alphplayfair.selectedIndex == 0) {
        let flag = true;
        for (let i = 0; i < keyplayfair.value.length; i++) {
            if (keyplayfair.value[i] == " ") {
                continue;
            }
            if (rusalph.indexOf(keyplayfair.value[i].toLowerCase()) == -1) {
                alert("Неверный алфавит");
                flag = false;
                break;
            }
            key += keyplayfair.value[i];
        }
        if (flag) {
            rusarr = [[], [], [], [], [], [], [], []];
            //key in arr
            for (let k = 0; k < key.length; k++) {
                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 4; j++) {
                        if (rusarr[i][j] == null && rusarr[i][j] != key[k]) {
                            rusarr[i][j] = key[k];
                            i = 9;
                            break;
                        }
                        if (key[k] == rusarr[i][j]) {
                            i = 9;
                            break;
                        }
                    }
                }
            }
            //alph in arr
            for (let k = 0; k < rusalph.length; k++) {
                if (rusalph[k] == "ё") {
                    continue;
                }
                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 4; j++) {
                        if (rusarr[i][j] == null && rusarr[i][j] != rusalph[k]) {
                            rusarr[i][j] = rusalph[k];
                            i = 9;
                            break;
                        }
                        if (rusalph[k] == rusarr[i][j]) {
                            i = 9;
                            break;
                        }
                    }
                }
            }
            console.log(rusarr);
        }
    }
    else {
        engarr = [[], [], [], [], []];
        let flag = true;
        //x or q
        if (keyplayfair.value.indexOf("x") == -1 && keyplayfair.value.indexOf("q") == -1) {
            version = "x";
        } else if (keyplayfair.value.indexOf("x") != -1) {
            version = "x";
        } else if (keyplayfair.value.indexOf("q") != -1) {
            version = "q";
        }
        for (let i = 0; i < keyplayfair.value.length; i++) {
            if (keyplayfair.value[i] == " ") {
                continue;
            }
            if (engalph.indexOf(keyplayfair.value[i].toLowerCase()) == -1) {
                alert("Неверный алфавит");
                flag = false;
                break;
            }
            key += keyplayfair.value[i];
        }
        if (flag) {
            //key in arr
            for (let k = 0; k < key.length; k++) {
                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 5; j++) {
                        if (engarr[i][j] == null && engarr[i][j] != key[k]) {
                            engarr[i][j] = key[k];
                            i = 5;
                            break;
                        }
                        if (key[k] == engarr[i][j]) {
                            i = 5;
                            break;
                        }
                    }
                }
            }
            //alph in arr
            for (let k = 0; k < engalph.length; k++) {
                if ((version == "x" && engalph[k] == "q") || (version == "q" && engalph[k] == "x")) {
                    continue;
                }
                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 5; j++) {
                        if (engarr[i][j] == null && engarr[i][j] != engalph[k]) {
                            engarr[i][j] = engalph[k];
                            i = 5;
                            break;
                        }
                        if (engalph[k] == engarr[i][j]) {
                            i = 5;
                            break;
                        }
                    }
                }
            }
            console.log(version);
            console.log(engarr);
        }
    }

    //code with key
    if (text == "") {
        alert("Введите текст");
    }
    else if (alphplayfair.selectedIndex == 0) {
        let flag = true;
        for (let i = 0; i < text.length; i++) {
            if (text[i] == " ") {
                continue;
            }
            if (rusalph.indexOf(text[i].toLowerCase()) == -1) {
                alert("Неверный алфавит");
                flag = false;
                break;
            }
        }
        //rus
        if (flag) {
            text = text.replace(/\s/g, '');
            text = text.toLowerCase();
            if (text.length % 2 != 0) {
                text += "я";
            }
            let k1 = [0, 0];
            let k2 = [0, 0];
            if (check == 0) {
                for (let k = 0; k < text.length; k += 2) {
                    //одинаковые символы
                    if (text[k] == text[k + 1]) {
                        text = text.substring(0, k + 1) + "я" + text.substring(k + 2);
                    }

                    console.log(text[k] + text[k + 1])

                    for (let i = 0; i < 8; i++) {
                        for (let j = 0; j < 4; j++) {
                            if (text[k] == rusarr[i][j]) {
                                k1[0] = i;
                                k1[1] = j;
                            }
                            if (text[k + 1] == rusarr[i][j]) {
                                k2[0] = i;
                                k2[1] = j;
                            }
                        }
                    }

                    //одинаковая строка
                    if (k1[0] == k2[0]) {
                        if (k1[1] == 3) {
                            k1[1] = 0;
                        } else {
                            k1[1]++;
                        }
                        if (k2[1] == 3) {
                            k2[1] = 0;
                        } else {
                            k2[1]++;
                        }
                        //костыль
                        presult += rusarr[k2[0]][k1[1]];
                        presult += rusarr[k1[0]][k2[1]];
                    }
                    //одинаковый столбец
                    else if (k1[1] == k2[1]) {
                        if (k1[0] == 7) {
                            k1[0] = 0;
                        } else {
                            k1[0]++;
                        }
                        if (k2[0] == 7) {
                            k2[0] = 0;
                        } else {
                            k2[0]++;
                        }
                        //костыль
                        presult += rusarr[k2[0]][k1[1]];
                        presult += rusarr[k1[0]][k2[1]];
                    }
                    else {
                        presult += rusarr[k1[0]][k2[1]];
                        presult += rusarr[k2[0]][k1[1]];
                    }


                    console.log(k1[0] + ":" + k1[1] + " " + k2[0] + ":" + k2[1]);
                }
            }

            //decoding
            else if (check == 1) {
                for (let k = 0; k < text.length; k += 2) {
                    //одинаковые символы
                    if (text[k] == text[k + 1]) {
                        text = text.substring(0, k + 1) + "я" + text.substring(k + 2);
                    }

                    console.log(text[k] + text[k + 1])

                    for (let i = 0; i < 8; i++) {
                        for (let j = 0; j < 4; j++) {
                            if (text[k] == rusarr[i][j]) {
                                k1[0] = i;
                                k1[1] = j;
                            }
                            if (text[k + 1] == rusarr[i][j]) {
                                k2[0] = i;
                                k2[1] = j;
                            }
                        }
                    }

                    //одинаковая строка
                    if (k1[0] == k2[0]) {
                        if (k1[1] == 0) {
                            k1[1] = 3;
                        } else {
                            k1[1]--;
                        }
                        if (k2[1] == 0) {
                            k2[1] = 3;
                        } else {
                            k2[1]--;
                        }
                        //костыль
                        presult += rusarr[k2[0]][k1[1]];
                        presult += rusarr[k1[0]][k2[1]];
                    }
                    //одинаковый столбец
                    else if (k1[1] == k2[1]) {
                        if (k1[0] == 0) {
                            k1[0] = 7;
                        } else {
                            k1[0]--;
                        }
                        if (k2[0] == 0) {
                            k2[0] = 7;
                        } else {
                            k2[0]--;
                        }
                        //костыль
                        presult += rusarr[k2[0]][k1[1]];
                        presult += rusarr[k1[0]][k2[1]];
                    }
                    else {
                        presult += rusarr[k1[0]][k2[1]];
                        presult += rusarr[k2[0]][k1[1]];
                    }


                    console.log(k1[0] + ":" + k1[1] + " " + k2[0] + ":" + k2[1]);
                }
            }
            console.log(text)
        }
    }
    else if (alphplayfair.selectedIndex == 1) {
        let flag = true;
        for (let i = 0; i < text.length; i++) {
            if (text[i] == " ") {
                continue;
            }
            if (engalph.indexOf(text[i].toLowerCase()) == -1) {
                alert("Неверный алфавит");
                flag = false;
                break;
            }
            if ((version != "q" && text[i] == "q") || (version == "q" && text[i] == "x")) {
                alert("Проверьте ключ на Q(X)");
                flag = false;
                break;
            }
        }
        //eng
        if (flag) {
            text = text.replace(/\s/g, '');
            text = text.toLowerCase();
            if (text.length % 2 != 0) {
                if (version == "x") {
                    text += "x";
                } else {
                    text += "q";
                }
            }
            let k1 = [0, 0];
            let k2 = [0, 0];

            //coding
            if (check == 0) {
                for (let k = 0; k < text.length; k += 2) {
                    //одинаковые символы
                    if (text[k] == text[k + 1]) {
                        text = text.substring(0, k + 1) + version + text.substring(k + 2);
                    }

                    console.log(text[k] + text[k + 1])

                    for (let i = 0; i < 5; i++) {
                        for (let j = 0; j < 5; j++) {
                            if (text[k] == engarr[i][j]) {
                                k1[0] = i;
                                k1[1] = j;
                            }
                            if (text[k + 1] == engarr[i][j]) {
                                k2[0] = i;
                                k2[1] = j;
                            }
                        }
                    }

                    //одинаковая строка
                    if (k1[0] == k2[0]) {
                        if (k1[1] == 4) {
                            k1[1] = 0;
                        } else {
                            k1[1]++;
                        }
                        if (k2[1] == 4) {
                            k2[1] = 0;
                        } else {
                            k2[1]++;
                        }
                        //костыль
                        presult += engarr[k2[0]][k1[1]];
                        presult += engarr[k1[0]][k2[1]];
                    }
                    //одинаковый столбец
                    else if (k1[1] == k2[1]) {
                        if (k1[0] == 4) {
                            k1[0] = 0;
                        } else {
                            k1[0]++;
                        }
                        if (k2[0] == 4) {
                            k2[0] = 0;
                        } else {
                            k2[0]++;
                        }
                        //костыль
                        presult += engarr[k2[0]][k1[1]];
                        presult += engarr[k1[0]][k2[1]];
                    }
                    else {
                        presult += engarr[k1[0]][k2[1]];
                        presult += engarr[k2[0]][k1[1]];
                    }

                    console.log(k1[0] + ":" + k1[1] + " " + k2[0] + ":" + k2[1]);
                }
            }

            //decoding
            else if (check == 1) {
                for (let k = 0; k < text.length; k += 2) {
                    //одинаковые символы
                    if (text[k] == text[k + 1]) {
                        text = text.substring(0, k + 1) + version + text.substring(k + 2);
                    }

                    console.log(text[k] + text[k + 1])

                    for (let i = 0; i < 5; i++) {
                        for (let j = 0; j < 5; j++) {
                            if (text[k] == engarr[i][j]) {
                                k1[0] = i;
                                k1[1] = j;
                            }
                            if (text[k + 1] == engarr[i][j]) {
                                k2[0] = i;
                                k2[1] = j;
                            }
                        }
                    }

                    //одинаковая строка
                    if (k1[0] == k2[0]) {
                        if (k1[1] == 0) {
                            k1[1] = 4;
                        } else {
                            k1[1]--;
                        }
                        if (k2[1] == 0) {
                            k2[1] = 4;
                        } else {
                            k2[1]--;
                        }
                        //костыль
                        presult += engarr[k2[0]][k1[1]];
                        presult += engarr[k1[0]][k2[1]];
                    }
                    //одинаковый столбец
                    else if (k1[1] == k2[1]) {
                        if (k1[0] == 4) {
                            k1[0] = 0;
                        } else {
                            k1[0]++;
                        }
                        if (k2[0] == 4) {
                            k2[0] = 0;
                        } else {
                            k2[0]++;
                        }
                        //костыль
                        presult += engarr[k2[0]][k1[1]];
                        presult += engarr[k1[0]][k2[1]];
                    }
                    else {
                        presult += engarr[k1[0]][k2[1]];
                        presult += engarr[k2[0]][k1[1]];
                    }

                    console.log(k1[0] + ":" + k1[1] + " " + k2[0] + ":" + k2[1]);
                }
            }
            console.log(text)
        }
    }

    return presult;
}

document.addEventListener("DOMContentLoaded", function () {
    resultC.value = "";
    resultP.value = "";
    resultT.value = "";
    textC.value = "";
    textP.value = "";
    textT.value = "";
    a.value = "";
    b.value = "";
    c.value = "";
    keyC.value = "";
    keyP.value = "";
})
btnDeleteC.addEventListener('click', function () {
    resultC.value = "";
    keyC.value = "";
    textC.value = "";
})
btnDeleteT.addEventListener('click', function () {
    resultT.value = "";
    textT.value = "";
    a.value = "";
    b.value = "";
    c.value = "";
})
btnDeleteP.addEventListener('click', function () {
    resultP.value = "";
    textP.value = "";
    keyP.value = "";
})
let btnDecodeC = document.getElementById('resetC');
let btnDecodeT = document.getElementById('resetT');
let btnDecodeP = document.getElementById('resetP');
btnDecodeC.addEventListener('click', function(){
    resultC.value = Cesar(textC.value, 1);
})
btnDecodeT.addEventListener('click', function(){
    resultT.value = Tricemus(textT.value, 1);
})
btnDecodeP.addEventListener('click', function(){
    resultP.value = Playfair(textP.value, 1);
})
btnClaimC.addEventListener("click", function(){
    resultC.value = Cesar(textC.value, 0);
})
btnClaimT.addEventListener('click',function(){
    resultT.value = Tricemus(textT.value, 0);
})
btnClaimP.addEventListener('click', function(){
    resultP.value = Playfair(textP.value, 0);
})