// calbacks
function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback){
    setTimeout((funcao) => {
        console.log('f1')
        if (callback) callback();
    }, rand());
}
function f2(callback){
    setTimeout((funcao) => {
        console.log('f2')
        if (callback) callback();
    }, rand());
}
function f3(callback){
    setTimeout((funcao) => {
        console.log('f3')
        if (callback) callback();
    }, rand());
}

// callback hell
// f1(() => {
//     f2(() => {
//         f3(() => {
//             console.log('Ola JavaScript')
//         });
//     });
// });

// separando os callback.. faz a mesma coisa que callback hell
f1(f1callback);

function f1callback(){
    f2(f2callback);
}

function f2callback(){
    f3(f3callback);
}

function f3callback(){
    console.log('ola JS');
}
