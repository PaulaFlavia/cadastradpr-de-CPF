    // 1: Capturar o CPF digitado pelo usuário
let cpf = process.argv[2];
    //console.log ("=== tratando CPF " + cpf);
    // 2: Verificar se o CPF capturado é válido ou não
const validarCpf = require('validador-de-cpf');
    //console.log(validarCpf.cpfValidator(cpf));

    // 3a.1: Se for válido, mandar msg de sucesso
if(validarCpf(cpf)){
    console.log(`CPF ${cpf} válido.`);

    // 3a.2: Se for válido salvar cpf
    const fs = require('fs');
    fs.writeFileSync('cpfsSalvos.txt', cpf+"\n", {flag:'a'});


    // 3b: Se não for válido, mandar msg de falha
} else {
    console.log(`CPF ${cpf} inválido.`);
}



