let p;
let q;
function GetRandom(min, max){
    return Math.random()*(max-min)+min;
}
function NOD(x,y){
    if (y>x) return NOD(y,x);
    if(!y) return x;
    return NOD(y, x % y)
}
function E(m){
    let i = 2;
    while(NOD(i,m) != 1)
    {
        i++;
    }
    document.getElementById("e").value=i;
    return i
}
function n(){
    p=document.getElementById("p").value;
    q=document.getElementById("q").value;
    let n=p*q;
    document.getElementById("n").value=n;
    p=document.getElementById("p").value;
    q=document.getElementById("q").value;
    let m=(p-1)*(q-1);
     document.getElementById("m").value=m;
    let e = E(m);
    let d=1;
    while((e*d)%m != 1)
        d++
    console.log(e)
    document.getElementById("d").value=d;
}
function Shifr(){
    let n;
    let e;
    n=document.getElementById("n").value;
    e=document.getElementById("e").value;
    text=document.getElementById("text").value;
    let shif=Math.pow(text, e) % n;
    document.getElementById("shif").value=shif;
    return shif;
}
function modP(a,b,c){
    let p = BigInt(1);
    while(b >= BigInt(2)){
        if(b%BigInt(2) == BigInt(1))
        {
            p*=a;
            b--;
        }
        b/=BigInt(2);
        a = a*a % c;

    }
    p = p*a%c;
    return p
}
function Ras(){
    let shif;
    let d;
    let n;
    let i;
    n=document.getElementById("n").value;
    d=document.getElementById("d").value;
    shif=document.getElementById("shif").value;
    i=document.getElementById("text").value;
    let big = BigInt("1")
    let text= modP(BigInt(shif),BigInt(d),BigInt(n));
    /*if(text!=shif){
        text=i;
    }*/
    document.getElementById("ras").value=text;
    
}
function Delete(){
    document.getElementById("p").value="";
    document.getElementById("q").value="";
    document.getElementById("e").value="";
    document.getElementById("n").value="";
    document.getElementById("m").value="";
    document.getElementById("d").value="";
    document.getElementById("shif").value="";
    document.getElementById("text").value="";
}
//#2
function GetRandom2(min, max){
    return Math.random()*(max-min)+min;
}
function NOD2(x,y){
    if (y>x) return NOD2(y,x);
    if(!y) return x;
    return NOD2(y, x % y)
}
function modP2(a,b,c){
    let p = BigInt(1);
    while(b >= BigInt(2)){
        if(b%BigInt(2) == BigInt(1))
        {
            p*=a;
            b--;
        }
        b/=BigInt(2);
        a = a*a % c;

    }
    p = p*a%c;
    return p
}
function p2(){
    let p = document.getElementById("p2").value;
    let g = generator2(p);
    document.getElementById("g2").value=g;
    let k=Math.round(GetRandom2(2,p-1));
    document.getElementById("k2").value=k;
    let y=modP2(BigInt(g), BigInt(k), BigInt(p));
    document.getElementById("y2").value=y;
    
}
function Shif2(){
    let M;
    let p=document.getElementById("p2").value;
    let g=document.getElementById("g2").value;
    let k=document.getElementById("k2").value;
    let y=document.getElementById("y2").value;
    M=document.getElementById("text2").value;
    let x = 2;
    while(NOD2(x,p-1) != 1)
        x++;
    let a=modP2(BigInt(g), BigInt(x), BigInt(p));
    document.getElementById("a2").value=a;
    let b=modP2(BigInt(y), BigInt(x),BigInt(p))*BigInt(M)%BigInt(p);
    document.getElementById("b2").value=b;
    document.getElementById("t2").value=document.getElementById("a2").value+document.getElementById("b2").value;
}
function Ras2(){
    let M;
    let a=document.getElementById("a2").value;
    let b=document.getElementById("b2").value;
    let k=document.getElementById("k2").value;
    let p=document.getElementById("p2").value;
    M=BigInt(b)*modP2(BigInt(a),BigInt(p-1-k),BigInt(p))%BigInt(p);
    document.getElementById("u2").value=M;
}
function powmod2 (a, b, p) {
	let res = 1;
	while (b)
		if (b & 1)
		{	res = parseInt((res * a % p));
            --b;
        }else{
			a = parseInt((a * a % p));
            b >>= 1;
        }
	return res;
}
function generator2(p) {
	let fact = [];
	let phi = p-1;
    let n = phi;
	for (let i=2; i*i<=n; ++i)
		if (n % i == 0) {
			fact.push(i);
			while (n % i == 0)
				n /= i;
		}
	if (n > 1)
		fact.push(n);
 
	for (let res=2; res<=p; ++res) {
		let ok = true;
		for (let i=0; i<fact.length && ok; ++i)
			ok &= (powmod2(res, phi / fact[i], p) != 1);
		if (ok)  return res;
	}
	return -1;
}