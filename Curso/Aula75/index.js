// Polimorfismo
//Superclass
function Conta(agencia,conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        console.log(`Saque -> Saldo insuficiente: R$ ${this.saldo}`);
        return;
    }
    this.saldo -= valor
    console.log(`Saque: R$ ${valor}`);
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    if (valor < 0) {
        console.log('Valor inválido para deposito!')
        return
    }
    this.saldo += valor;
    console.log(`Deposito: R$ ${valor}`);
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c ${this.agencia}/${this.conta} | Saldo R$ ${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia,conta,saldo,limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if (valor > this.saldo + this.limite){
        console.log(`Saque -> Saldo insuficiente: R$ ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    console.log(`Saque: R$ ${valor}`);
    this.verSaldo();
}
console.log('Conta1');
const conta1 = new Conta(11, 22, 20);
conta1.depositar(15);
conta1.sacar(34);
conta1.sacar(2);

console.log('\nconta corrente');
const contaCorrente = new ContaCorrente(33,44,50,100);
contaCorrente.sacar(100);
contaCorrente.sacar(1);
contaCorrente.depositar(-10);