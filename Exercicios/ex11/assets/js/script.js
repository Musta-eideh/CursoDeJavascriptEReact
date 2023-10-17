const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p'); //Cada paragrafo NodeList

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor; //cor


for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
}