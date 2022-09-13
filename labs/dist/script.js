let scrollTimeout = null,
menu = document.querySelector('.amazing-menu');

window.addEventListener('scroll', () => {
  if (!scrollTimeout) {
    document.body.classList.add('_disable-pointer-events');
    menu.classList.add('-scrolled');
  } else {
    clearTimeout(scrollTimeout);
  }

  scrollTimeout = setTimeout(() => {
    document.body.classList.remove('_disable-pointer-events');
    menu.classList.remove('-scrolled');
    scrollTimeout = null;
  }, 150);
});
var links = ['https://www.esetnod32.ru','https://www.avast.ru/lp-ppc-hp-v4?ppc_code=012&ppc=a&gclid=EAIaIQobChMIkoDA3trs9AIVZ4ODBx2S8AwBEAAYASAAEgK5rfD_BwE&gclsrc=aw.ds#pc','https://www.drweb.ru','https://www.kaspersky.ru'];
function Rand() {
  window.location.href = links[Math.round(Math.random() * 3)];
}
var links1 = ['https://remontka.pro/truecrypt-manual-beginners/','https://losst.ru/kak-polzovatsya-truecrypt','https://bloginfo.biz/truecrypt-part-one-base-knowledge.html','https://bloginfo.biz/truecrypt-part-two-advanced-level.html'];
function Rand1() {
  window.location.href = links1[Math.round(Math.random() * 3)];
}