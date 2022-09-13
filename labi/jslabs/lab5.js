let Text = document.getElementById('text');
let btnEncrypt = document.getElementById('encrypt1');
var Result = document.getElementById('output1');
var btnDecrypt = document.getElementById('decrypt1');
var Skey = document.getElementById('key');
var gridSizes = [1, 2];
var gridi = [1, 2, 3];
var RusTable = [
    ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё'],
    ['Ж', 'З', 'И', 'Й', 'К', 'Л', 'М'],
    ['Н', 'О', 'П', 'Р', 'С', 'Т', 'У'],
    ['Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ'],
    ['Ы', 'Ь', 'Э', 'Ю', 'Я', '0', '1'],
    ['2', '3', '4', '5', '6', '7', '8'],
    ['9', ' ', ',', '.', '!', '?', ';']
];
var EngTable = [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    ['H', 'I', 'J', 'K', 'L', 'M', 'N'],
    ['O', 'P', 'Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z', '0', '1'],
    ['2', '3', '4', '5', '6', '7', '8'],
    ['9', ' ', ',', '.', ':', ';', '!'],
    ['$', '*', '?', '&', '^', '#', '№']
];
let rusalp = "абвгдееёжзийклмнопрстуфхцчшщъыьэюя0123456789 ,.!?;";
let engalp = "abcdefghijklmnopqrstuvwxyz0123456789 ,.:;!$*?&^#№";
function process(action){
    var colsKey = document.getElementById('colsKey').value;
    var rowsKey = document.getElementById('rowsKey').value;
    var inputMessage = document.getElementById('inputMessage').value; 
    inputMessage = inputMessage.replace(/\s/g,'').toUpperCase(); 
    for (var i = inputMessage.length; i <colsKey.length * rowsKey.length; i++) {
        inputMessage += '_';
    };

    if(action == 'encrypt'){
        var cryptResult = encrypt(inputMessage, colsKey, rowsKey);
    }else if(action == 'decrypt'){
        var cryptResult = decrypt(inputMessage, colsKey, rowsKey);
    }
     
    var regExp = new RegExp('.{'+ colsKey.length +'}','g');
    var resultLine = cryptResult.right.join('').replace(regExp,'$& ');
    var leftTableView = '';
    var middleTableView = '';
    var rightTableView = '';
    for(var j =0;j<rowsKey.length; j++){
        leftTableView += '<tr>' + cryptResult.left.splice(0,colsKey.length).join('').replace(/./g,'<td>$&</td>') + '</tr>'
        middleTableView += '<tr>' + cryptResult.middle.splice(0,colsKey.length).join('').replace(/./g,'<td>$&</td>') + '</tr>'
        rightTableView += '<tr>' + cryptResult.right.splice(0,colsKey.length).join('').replace(/./g,'<td>$&</td>') + '</tr>';
    }
    leftTableView = '<table><caption>Исходное сообщение</caption>' + leftTableView + '</table>';
    middleTableView = '<table><caption>Перестановка строк</caption>' + middleTableView + '</table>';
    rightTableView = '<table><caption>Перестановка столбцов</caption>' + rightTableView + '</table>';
    document.getElementById('output').innerHTML = leftTableView + middleTableView + rightTableView; 
    document.getElementById('outputLine').innerText = ((action=='encrypt')?'Шифровка':'Дешифровка')+': '+resultLine;
}
function encrypt(message, colsKey, rowsKey){
    var result = [];
    var middle = []; 
    var left = []; 
    var colsCount = colsKey.length;
    var rowsCount = rowsKey.length; 
    for(var row = 0; row<rowsCount; row++) {
        for(var col = 0; col<colsCount; col++){ 
            var newCol = colsKey[col]-1;
            var newRow = rowsKey[row]-1;
            left[row*colsCount + col] = message[row*colsCount + col];
            middle[row*colsCount + newCol] = message[row*colsCount + col];
            result[newRow*colsCount + newCol] = message[row*colsCount + col];
        }
    }
    return {left: left, middle: middle, right: result };
}
function decrypt(message, colsKey, rowsKey){
    var result = [];
    var middle = []; 
    var left = []; 
    var colsCount = colsKey.length;
    var rowsCount = rowsKey.length; 
    for(var row = rowsCount-1; 0 <= row; row--) {
        for(var col = colsCount-1; 0 <= col; col--){ 
            var newCol = colsKey[col]-1;
            var newRow = rowsKey[row]-1;
            left[row*colsCount + col] = message[row*colsCount + col];
            middle[row*colsCount + newCol] = message[row*colsCount + col];
            result[newRow*colsCount + newCol] = message[row*colsCount + col];
        }
    }
    return {left: left, middle: middle, right: result };
}


function unique(str1, alp) {
    var result = '';
    var str = str1 + alp;
    for (var i = 0; i < str.length; i++) {
        if (result.indexOf(str[i]) < 0) {
            result += str[i];
        }
    }
    return result;
}
function CreateKeyTable(k, m, n) {
    let key = unique(k);
    var colls = m, rows = n;
    var mas = [];
    for (var i = 0; i < rows; i++) {
        mas[i] = [];
        for (var j = 0; j < colls; j++) {
            mas[i][j] = null;
        }
    }
    for (let i = 0; i < key.length; i++) {
        for (let j = 0; j < rows; j++) {
            for (let k = 0; k < colls; k++) {
                if (mas[j][k] == null && mas[j][k] != key[i]) {
                    mas[j][k] = key[i];
                    j = 9; break;
                }
                if (key[i] == mas[j][k]) {
                    j = 9; break;
                }
            }
        }
    }
    return mas;
}
function PolibiusMethod(message) {
    var gridSize = gridSizes[document.getElementById("system").selectedIndex];
    var methods = gridi[document.getElementById("method").selectedIndex];
    var table;
    if (gridSize == gridSizes[0]) {
        table = RusTable;
    }
    if (gridSize == gridSizes[1]) {
        table = EngTable;
    }
    if(methods == gridi[2]){
        if(gridSize == gridSizes[0]){
            var per = unique(Skey.value, rusalp);
            table = CreateKeyTable(per, 7, 7);
        }
        if(gridSize == gridSizes[1]){
            var per = unique(Skey.value, engalp);
            table = CreateKeyTable(per, 7, 7);
        }
    }
    let part1 = []; let part2 = [];
    for (var i = 0; i < message.length; i++) {
        for (var j = 0; j < table[0].length; j++) {
            for (var k = 0; k < table[1].length; k++) {
                if (table[j][k].toLowerCase() == message[i] || table[j][k].toUpperCase() == message[i]) {
                    part1.push(j);
                    part2.push(k);
                    break;
                }
            }
        }
    }
    let part3 = part1.concat(part2);
    if (methods == gridi[1]) {
        var s = part3.shift();
        part3.push(s);
    }
    let result = "";
    let mas1 = []; let mas2 = [];
    for (var i = 0; i < part3.length; i++) {
        if (i % 2 == 0) { mas1.push(part3[i]); }
        else if (i % 2 != 0) { mas2.push(part3[i]); }
    }
    for (var i = 0; i < part1.length; i++) {
        result += table[mas1[i]][mas2[i]];
    }
    return result;
}
function DecryptionMethod(message) {
    var gridSize = gridSizes[document.getElementById("system").selectedIndex];
    var methods = gridi[document.getElementById("method").selectedIndex];
    var table;
    if (gridSize == gridSizes[0]) {
        table = RusTable;
    }
    if (gridSize == gridSizes[1]) {
        table = EngTable;
    }
    if(methods == gridi[2]){
        if(gridSize == gridSizes[0]){
            var per = unique(Skey.value, rusalp);
            table = CreateKeyTable(per, 7, 7);
        }
        if(gridSize == gridSizes[1]){
            var per = unique(Skey.value, engalp);
            table = CreateKeyTable(per, 7, 7);
        }
    }
    let part1 = []; let part2 = [];
    for (var i = 0; i < message.length; i++) {
        for (var j = 0; j < table[0].length; j++) {
            for (var k = 0; k < table[1].length; k++) {
                if (table[j][k].toLowerCase() == message[i] || table[j][k].toUpperCase() == message[i]) {
                    part1.push(j);
                    part2.push(k);
                    break;
                }
            }
        }
    }
    let result = "";
    let fin = [];
    let mas1 = []; let mas2 = [];
    for (var i = 0; i < part2.length; i++) {
        fin.push(part1[i]);
        fin.push(part2[i]);
    }
    if (methods == gridi[1]) {
        var popped = fin.pop();
        fin.unshift(popped);
    }
    let half = Math.ceil(fin.length / 2);
    mas1 = fin.slice(0, half);
    mas2 = fin.slice(-half);
    for (var i = 0; i < part1.length; i++) {
        result += table[mas1[i]][mas2[i]];
    }
    return result;
}
btnEncrypt.addEventListener('click', function () {
    Result.value = PolibiusMethod(Text.value);
})
btnDecrypt.addEventListener('click', function () {
    Result.value = DecryptionMethod(Text.value);
})
