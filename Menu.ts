import readlinesync = require("readline-sync");
import{colors} from './src/util/Colors'; 
import{Conta} from './src/model/Conta';
import {ContaCorrente} from "./src/model/ContaCorrente";
import {ContaPoupanca} from "./src/model/ContaPoupanca";

export function main(){
 
    let opcao: number;

    const conta: Conta = new Conta(1, 123, 1, "Bianca", 10000);
    conta.visualizar();
    conta.sacar(200000);
    conta.visualizar();
    conta.depositar(2000);
    conta.visualizar();
    
    //objeto da classe contacorrente "teste"
    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Bianca", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Gabriel", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

    while (true){

        console.log(colors.bg.white, colors.fg.blackstrong, 
                    "*******************************************");
        console.log("           *********************           ");
        console.log("                                           ");
        console.log("             ൫ ANCO ൫ RANCO              ");
        console.log("                                           ");
        console.log("           *********************           ");
        console.log("*******************************************");
        console.log("                                           ");
        console.log("      ➨  Começar                          ");
        console.log("      ➨  Criar Conta                      ");
        console.log("      ➨  Visualizar Conta por Numero      ");
        console.log("      ➨  Atualizar os Dados da Conta      ");
        console.log("      ➨  Deletar                          ");
        console.log("      ➨  Sacar                            ");
        console.log("      ➨  Depositar                        ");
        console.log("      ➨  Transferir valores               ");
        console.log("      ➨  Sair                             ");
        console.log("                                           ");
        console.log("*******************************************");
        console.log("                                           ",
        colors.reset);

        console.log("\nDigite uma opcao valida: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9){
            console.log(colors.fg.magentastrong, 
                "\n൫ anco ൫ ranco - Segurança e Clareza para você! ");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao){
            case 1:
                console.log("\n\nComeçar\n\n");

                break;
            case 2:
                console.log("\n\nCriar Conta\n\n");

                break;
            case 3:
                console.log("\n\nVisualizar Conta por Numero\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar os dados da Conta\n\n");

                break;
            case 5:
                console.log("\n\nDeletar\n\n");

                break;
            case 6:
                console.log("\n\nSacar\n\n");

                break;
            case 7:
                console.log("\n\nDepositar\n\n");

                break;
            case 8:
                console.log("\n\nTransferir Valores\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}

export function sobre(): void {
    console.log("\n*************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Bianca Vasconcelos");
    console.log("github.com/ppbiancav");
    console.log("***************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();