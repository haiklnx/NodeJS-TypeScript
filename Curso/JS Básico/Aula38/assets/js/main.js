const container = document.querySelector('.container');
const ps = container.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backGroundColorBody = estilosBody.backgroundColor;

console.log(ps);
for (let p of ps){
    p.style.backgroundColor = backGroundColorBody;
    p.style.color = '#FFFFFF';
}