//Laba 2-1
let word = document.getElementById('word');
let btnClaim = document.getElementById('wordclaim');
let result2 = document.getElementById('resultword');
let btnClear = document.getElementById('clear');
let variant = document.getElementById('variant');
//stroki, stolbci

let btnDecode = document.getElementById('decode');

btnClaim.addEventListener('click',function(){
    let shifr = [[],[]];
    let a, b;
    if (variant.selectedIndex == 0){ //4x6
        shifr = [[],[],[],[]];
        a = 4;
        b = 6;
    }
    if(variant.selectedIndex == 1){ //2x12
        shifr = [[],[]];
        a = 2;
        b = 12;
    }
    if(variant.selectedIndex == 2){ //3x8
        shifr = [[],[],[]];
        a = 3;
        b = 8;
    }
    result2.value = "";
    let text = word.value;
    let count = 0;
    for(let i = 0; i < b; i++){
        for(let j = 0; j < a; j++){
            shifr[j][i] = text[count];
            count++;
        }
    }
    for(let i = 0; i < a; i++){
        for(let j = 0; j < b; j++){
            if (shifr[i][j] == undefined){
                result2.value += ".";
            }else{
                result2.value += shifr[i][j];
            }
        }
    }
})
btnDecode.addEventListener('click',function(){
    let shifr = [[],[]];
    let a, b;
    if (variant.selectedIndex == 0){ //4x6
        shifr = [[],[],[],[],[],[]];
        a = 6;
        b = 4;
    }
    if(variant.selectedIndex == 1){ //2x12
        shifr = [[],[],[],[],[],[],[],[],[],[],[],[]];
        a = 12;
        b = 2;
    }
    if(variant.selectedIndex == 2){ //3x8
        shifr = [[],[],[],[],[],[],[],[]];
        a = 8;
        b = 3;
    }
    result2.value = "";
    let text = word.value;
    let count = 0;
    for(let i = 0; i < b; i++){
        for(let j = 0; j < a; j++){
            if(text[count] == "."){
                shifr[i][j] == " ";
            }else{
                shifr[i][j] = text[count];
            }
            
            count++;
        }
    }
    for(let i = 0; i < a; i++){
        for(let j = 0; j < b; j++){
            if (shifr[j][i] == undefined){
                result2.value += "";
            }else{
                result2.value += shifr[j][i];
            }
        }
    }
})
btnClear.addEventListener('click', function(){
    word.value = "";
    result2.value = "";
})
//Laba 2
let btnClaimMagic = document.getElementById('claimmagic');
let btnDeleteMagic = document.getElementById('deletemagic');
let btnCleaner = document.getElementById('cleanmagic');
let magicText = document.getElementById('magictxt');
var result = document.getElementById('output');
var TextToWork;
var magiccube1 = [[2, 7, 6], [9, 5, 1], [4, 3, 8]];
var magiccube1_1 = [[5, 1, 3], [4, 6, 8], [9, 2, 7]];
var magiccube2 = [[15, 8, 1, 24, 17], [16, 14, 7, 5, 23], [22, 20, 13, 6, 4], [3, 21, 19, 12, 10], [9, 2, 25, 18, 11]];
var magiccube2_2 = [[21, 24, 2, 3, 15], [1, 6, 16, 22, 20], [14, 12, 19, 7, 13], [25, 5, 17, 10, 8], [4, 18, 11, 23, 9]];
var magiccube3 = [[22, 36, 7, 2, 9, 35], [26, 18, 31, 10, 5, 21], [13, 23, 15, 24, 28, 8], [12, 4, 14, 34, 30, 17], [6, 1, 33, 25, 19, 27], [32, 29, 11, 16, 20, 3]];
var magiccube3_3 = [[18, 28, 3, 12, 15, 35], [32, 11, 14, 17, 4, 33], [20, 9, 24, 13, 16, 29], [21, 27, 10, 25, 23, 5], [1, 30, 34, 8, 31, 7], [19, 6, 26, 36, 22, 2]];
var magiccube4 = [[28, 19, 10, 1, 48, 39, 30], [29, 27, 18, 9, 7, 47, 38], [37, 35, 26, 17, 8, 6, 46], [45, 36, 34, 25, 16, 14, 5], [4, 44, 42, 33, 24, 15, 13], [12, 3, 43, 41, 32, 23, 21], [20, 11, 2, 49, 40, 31, 22]];
var magiccube4_4 = [[44, 32, 20, 1, 38, 26, 14], [3, 40, 28, 9, 46, 34, 15], [11, 48, 29, 17, 5, 42, 23], [19, 7, 37, 25, 13, 43, 31], [27, 8, 45, 33, 21, 2, 39], [35, 16, 4, 41, 22, 10, 47], [36, 24, 12, 49, 30, 18, 6]];
var magiccubetext1 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var magiccubetext2 = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
var magiccubetext3 = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
var magiccubetext4 = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
var gridSizes = [3, 5, 6, 7];
var grids = [1, 2];


function CreateMagic(text) {
    let magiccube;
    var gridSize = gridSizes[document.getElementById("dd").selectedIndex];
    var gridi = grids[document.getElementById("ds").selectedIndex]
    var result = '';
    let magiccubetext = [];
    if (gridSize == gridSizes[0] && gridi == grids[0]) {
        magiccube = magiccube1;
        magiccubetext = magiccubetext1;
    }
    if (gridSize == gridSizes[0] && gridi == grids[1]) {
        magiccube = magiccube1_1;
        magiccubetext = magiccubetext1;
    }
    if (gridSize == gridSizes[1] && gridi == grids[0]) {
        magiccube = magiccube2;
        magiccubetext = magiccubetext2;
    }
    if (gridSize == gridSizes[1] && gridi == grids[1]) {
        magiccube = magiccube2_2;
        magiccubetext = magiccubetext2;
    }
    if (gridSize == gridSizes[2] && gridi == grids[0]) {
        magiccube = magiccube3;
        magiccubetext = magiccubetext3;
    }
    if (gridSize == gridSizes[2] && gridi == grids[1]) {
        magiccube = magiccub3_3;
        magiccubetext = magiccubetext3;
    }
    if (gridSize == gridSizes[3] && gridi == grids[0]) {
        magiccube = magiccube4;
        magiccubetext = magiccubetext4;
    } 
    if (gridSize == gridSizes[3] && gridi == grids[1]) {
        magiccube = magiccube4_4;
        magiccubetext = magiccubetext4;
    }
    else {
        console.log("kakogo?");
    }
    let count = 1;
    for (let i = magiccubetext.length; i < Math.pow(gridSize, 2); i++) {
        text += ".";
    }
    for (let k = 0; k < Math.pow(gridSize, 2); k++) {
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j <= gridSize; j++) {
                if (magiccube[i][j] == count) {
                    if (text[count - 1] == " ") {
                        magiccubetext[i][j] = ".";
                    }
                    else {
                        magiccubetext[i][j] = text[count - 1];
                    }
                    count = count + 1;
                }
            }
        }
    }
    for (var i = 0; i < gridSize; i++) {
        for (var j = 0; j < gridSize; j++) {
            if (magiccubetext[i][j] == undefined) {
                result += "";
            } else {
                result += magiccubetext[i][j];
            }
        }
    }
    return result;
}

function DeleteMagic(text) {
    let magiccube;
    var gridSize = gridSizes[document.getElementById("dd").selectedIndex];
    var gridi = grids[document.getElementById("ds").selectedIndex]
    let result = "";
    let magicindex = [];
    if (gridSize == gridSizes[0] && gridi == grids[0]) {
        magiccube = magiccube1;
        magicindex = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    }
    if (gridSize == gridSizes[0] && gridi == grids[1]) {
        magiccube = magiccube1_1;
        magicindex = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    }
    if (gridSize == gridSizes[1] && gridi == grids[0]) {
        magiccube = magiccube2;
        magicindex = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24]];
    }
    if (gridSize == gridSizes[1] && gridi == grids[1]) {
        magiccube = magiccube2_2;
        magicindex = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24]];
    }
    if (gridSize == gridSizes[2] && gridi == grids[0]) {
        magiccube = magiccube3;
        magicindex = [[0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 16, 17], [18, 19, 20, 21, 22, 23], [24, 25, 26, 27, 28, 29], [30, 31, 32, 33, 34, 35]];
    }
    if (gridSize == gridSizes[2] && gridi == grids[1]) {
        magiccube = magiccub3_3;
        magicindex = [[0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 16, 17], [18, 19, 20, 21, 22, 23], [24, 25, 26, 27, 28, 29], [30, 31, 32, 33, 34, 35]];
    }
    if (gridSize == gridSizes[3] && gridi == grids[0]) {
        magiccube = magiccube4;
        magicindex = [[0, 1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13], [14, 15, 16, 17, 18, 19, 20], [21, 22, 23, 24, 25, 26, 27], [28, 29, 30, 31, 32, 33, 34], [35, 36, 37, 38, 39, 40, 41], [42, 43, 44, 45, 46, 47, 48]];
    } 
    if (gridSize == gridSizes[3] && gridi == grids[1]) {
        magiccube = magiccube4_4;
        magicindex = [[0, 1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13], [14, 15, 16, 17, 18, 19, 20], [21, 22, 23, 24, 25, 26, 27], [28, 29, 30, 31, 32, 33, 34], [35, 36, 37, 38, 39, 40, 41], [42, 43, 44, 45, 46, 47, 48]];
    }
    else {
        console.log("kakogo?");
    }
    let count = 1;

    for (let k = 0; k < Math.pow(gridSize, 2); k++) {
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                if (magiccube[i][j] == count) {
                    if (text[magicindex[i][j]] == ".") {
                        result += " ";
                    }
                    else if (text[magicindex[i][j]] == undefined) {
                        result += "";
                    }
                    else {
                        result += text[magicindex[i][j]];
                    }
                    count = count + 1;
                }
            }
        }
    }

    return result;
}
btnClaimMagic.addEventListener('click', function () {
    TextToWork = magicText.value;
    result.value = CreateMagic(TextToWork);
})
btnDeleteMagic.addEventListener('click', function () {
    TextToWork = magicText.value;
    result.value = DeleteMagic(TextToWork);
})
btnCleaner.addEventListener('click', function () {
    result.value = "";
    magicText.value = "";
})