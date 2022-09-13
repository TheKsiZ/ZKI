var btnNext = document.getElementById('btnnext');
var btnPosobie = document.getElementById('btnposobie');
var btnLaba = document.getElementById('btnlaba');

btnNext.addEventListener('click', function(){ 
    document.getElementById("levi").style.display = "block";
    document.getElementById("pravi").style.display = "block";
    document.getElementById("levi").classList.add("slidelevi");
    document.getElementById("pravi").classList.add("slidepravi");
});
