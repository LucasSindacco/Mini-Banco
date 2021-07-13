const globals = {
    numberAccount: '1587463',
    balance: 5000,
    depositBalance: 0,
    withdrawBalance: 0,
}

const verifyAccount = () => {
    const buttonLogin = document.querySelector('.btn-login');
    const input = document.querySelector('.numberAccount');
    buttonLogin.addEventListener('click', () => {
        if (input.value === globals.numberAccount) {
            console.log(`O seu saldo é R$: ${formatter.format(globals.balance)}`);
        } else {
            console.log('Essa conta não existe');
        }
    })
}

const deposit = () => {
    const inputDeposit = document.querySelector('.deposit');
    const buttonDeposit = document.querySelector('.btn-deposit');
    buttonDeposit.addEventListener('click', () => {
        globals.depositBalance = parseFloat(inputDeposit.value) + parseFloat(globals.balance);
        console.log(`Seu novo saldo é R$:${formatter.format(globals.depositBalance)}`);
    });

}

const withdraw = () => {
    const inputWithdraw = document.querySelector('.withdraw');
    const buttonWithdraw = document.querySelector('.btn-withdraw');
    buttonWithdraw.addEventListener('click', () => {
        if (inputWithdraw.value > globals.depositBalance) {
            console.log(`Dinheiro insuficiente para saque`);
        } else {
            globals.withdrawBalance = parseFloat(inputWithdraw.value - globals.depositBalance);
            console.log(`Seu novo saldo é R$: ${formatter.format(Math.abs(globals.withdrawBalance))}`);
        }
    });
}

const globalFunctions = () => {
    verifyAccount();
    deposit();
    withdraw();
}
globalFunctions();




// Formating numbers 
var formatter = new Intl.NumberFormat('pt-BR');