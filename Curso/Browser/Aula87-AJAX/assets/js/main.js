// AJAX -> XMLHttpRequest
const ajax = obj => {
    return new Promise((res,rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
    
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                res(xhr.responseText);
            }else{
                rej({
                    code: xhr.status,
                    msg: xhr.responseText,
                })
            }
        })
    })
};

// 1 -> pegar apenas o elemento que contem o link para executar
document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
})

// 2 -> função que vai pegar os dados de cada link
async function carregaPagina(el){
    const href = el.getAttribute('href');
    const objConfig = {
        method: 'GET',
        url: href,
    };

    try {
        const dados = await ajax(objConfig);
        loadDados(dados);
    } catch (error) {
        console.log(error);
    }
};

// -> function mostra o resultado na tela
function loadDados(response){
    const res = document.querySelector('.resultado');
    res.innerHTML = response;
};
