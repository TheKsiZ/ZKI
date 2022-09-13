var n1 = document.getElementById("n1");
var k1 = document.getElementById("k1");
var s1 = document.getElementById("s1");
var m1 = document.getElementById("m1");
var v1 = document.getElementById("v1");
var n2 = document.getElementById("n2");
var t2 = document.getElementById('t2');
var s2 = document.getElementById("s2");
var k3 = document.getElementById("k3");
var t3 = document.getElementById("t3");
var s3 = document.getElementById("s3");
var btn1 = document.getElementById("claim1");
var btn2 = document.getElementById("claim2");
var btn3 = document.getElementById("claim3");
var res1 = document.getElementById("result1");
var res2 = document.getElementById("result2");
var res3 = document.getElementById("result3");
function Task1(n, k, s, m, v){
    var options = Math.pow(n,k);
    var t = options/s;
    var time = t*(v/m);
    var result = time + t;
    var result1 = result/60/60/24;
    return result1.toFixed(3);
}
function Task2(n, t, s){
    var c = t * s * 365 * 24 * 60 * 60;
    var result = Math.log(c)/Math.log(n);
    return Math.round(result).toFixed(3);
}
function Task3(k, t, s){
    return Math.pow(t*365*24*3600*s, 1/k).toFixed(3);
}
btn1.addEventListener('click', function(){
    res1.value = Task1(n1.value, k1.value, s1.value, m1.value, v1.value);
})
btn2.addEventListener('click', function(){
    res2.value = Task2(n2.value, t2.value, s2.value);
})
btn3.addEventListener('click', function(){
    res3.value = Task3(k3.value, t3.value, s3.value);
})