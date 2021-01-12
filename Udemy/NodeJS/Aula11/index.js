const n1 = Number(prompt('Digite um número: '));
const n2 = Number(prompt('Digite outro número: '));
const res = n1 + n2;
if (res == NaN){
    alert(`O resultado de ${n1} + ${n2}: ${res}`);
}else{
    window.alert('Digite apenas números.')
}