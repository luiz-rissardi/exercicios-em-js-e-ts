import { Icaixa } from "./interfaces/caixa.js";
import { Icarrinho } from "./interfaces/carrinho.js";
import { IMesageiro } from "./interfaces/mensages.js";
import { Ivalidador } from "./interfaces/validate.js";

export class caixa implements Icaixa{
    ativo: boolean = false;

    constructor(private validador:Ivalidador,private mensageiro:IMesageiro, private carrinho:Icarrinho){}

    iniciarCompra(): void {
        if(this.validador.isActive(this.ativo)) throw Error("a compra já foi inicializada , termine-a antes para depois começar outra!!")
        else this.ativo = true;

    }   
    finalizarCompra(): void {
        const message = "compra realizada com sucesso!"
        if(this.validador.isActive(this.ativo) !== true) throw Error("Nenhuma compra foi inicializada para terminar")
        else {
            this.mensageiro.sendMesagens(message)
            this.mensageiro.sendMesagens("o valor da compra final foi de: "+this.carrinho.totalComDesconto())
            this.carrinho.clear()
        }
    }

}