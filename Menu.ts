import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

    const contas: ContaController = new ContaController();

    const contaCorrente: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 456, 1, "Bianca", 500000, 1000)
    contas.cadastrar(contaCorrente);

    const contaPoupanca: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 123, 2, "Gabriel", 1000, 10);
    contas.cadastrar(contaPoupanca);

    while (true) {

            console.log(colors.bg.white, colors.fg.blackstrong, 
                        "*******************************************");
            console.log("           *********************           ");
            console.log("                                           ");
            console.log("             ൫ ANCO ൫ RANCO              ");
            console.log("                                           ");
            console.log("           *********************           ");
            console.log("*******************************************");
            console.log("                                           ");
            console.log("      (1) ➨  Criar Conta                  ");
            console.log("      (2) ➨  Listar todas as Contas       ");
            console.log("      (3) ➨  Buscar conta por Numero      ");
            console.log("      (4) ➨  Visualizar dados da Conta    ");
            console.log("      (5) ➨  Apagar Conta                 ");
            console.log("      (6) ➨  Sacar                        ");
            console.log("      (7) ➨  Depositar                    ");
            console.log("      (9) ➨  Buscar conta por Titular     ");
            console.log("      (0) ➨  Sair                         ");
            console.log("                                           ");
            console.log("*******************************************");
            console.log("                                           ",
            colors.reset);

            console.log("\nDigite uma opcao valida: ");
            opcao = readlinesync.questionInt("");

            if (opcao == 0){
            console.log(colors.fg.magentastrong, 
            "\n൫ anco ൫ ranco - Segurança e Clareza para você! ");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
}

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Conta\n\n", colors.reset);

                console.log("Digite o Número da Agência: ")
                agencia = readlinesync.questionInt("")

                console.log("Digite o Nome do Titular: ")
                titular = readlinesync.question("")

                console.log("Informe o tipo da Conta: ")
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1

                console.log("Digite o Saldo da Conta: ")
                saldo = readlinesync.questionFloat("")

                switch (tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta: ")
                        limite = readlinesync.questionFloat("")
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        )
                        break;
                    case 2:
                        console.log("Digite o dia do aniversário da Conta: ")
                        aniversario = readlinesync.questionInt("")
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        )
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as Contas\n\n", colors.reset);

                contas.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                console.log("Digite o Número da Conta: ")
                numero = readlinesync.questionInt("")

                contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                console.log("Digite o Número da Conta: ")
                numero = readlinesync.questionInt("")

                let conta = contas.buscarNoArray(numero)

                if (conta !== null) {

                    console.log("Digite o Número da Agência: ")
                    agencia = readlinesync.questionInt("")

                    console.log("Digite o Nome do Titular: ")
                    titular = readlinesync.question("")

                    tipo = conta.tipo

                    console.log("Digite o Saldo da Conta: ")
                    saldo = readlinesync.questionFloat("")

                    switch (tipo) {
                        case 1:
                            console.log("Digite o Limite da Conta: ")
                            limite = readlinesync.questionFloat("")
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                            )
                            break;
                        case 2:
                            console.log("Digite o dia do aniversário da Conta: ")
                            aniversario = readlinesync.questionInt("")
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                            )
                            break;
                    }

                } else {
                    console.log("A Conta não foi Encontrada!")
                }

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n", colors.reset);

                console.log("Digite o Número da Conta: ")
                numero = readlinesync.questionInt("")

                contas.deletar(numero);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSaque\n\n", colors.reset);

                console.log("Digite o Número da Conta: ")
                numero = readlinesync.questionInt("")

                console.log("Digite o valor do Saque: ")
                valor = readlinesync.questionFloat("")

                contas.sacar(numero, valor);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDepósito\n\n", colors.reset);

                console.log("Digite o Número da Conta: ")
                numero = readlinesync.questionInt("")

                console.log("Digite o valor do Depósito: ")
                valor = readlinesync.questionFloat("")

                contas.depositar(numero, valor);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                console.log("Digite o Número da Conta de Origem: ")
                numero = readlinesync.questionInt("")

                console.log("Digite o Número da Conta de Destino: ")
                numeroDestino = readlinesync.questionInt("")

                console.log("Digite o valor do Depósito: ")
                valor = readlinesync.questionFloat("")

                contas.transferir(numero, numeroDestino, valor);

                keyPress()
                break;
            case 9:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar conta por titular\n\n", colors.reset);

                    console.log("Digite o Nome do Titular: ")
                    titular = readlinesync.question("")

                    contas.procurarPorTitular(titular);

                    keyPress();
            break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

function sobre(): void {
    console.log("\n**********************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Bianca Vasconcelos - biancappv@gmail.com");
    console.log("github.com/ppbiancav");
    console.log("************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();