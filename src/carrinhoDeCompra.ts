import { Icarrinho } from "./interfaces/carrinho.js";
import { Ivalidador } from "./interfaces/validate.js";
import { produtos } from "./interfaces/product.js"

// aqui faremos um carrinho de compra usando os principios SOLID

class carinho implements Icarrinho {
    itens: produtos[] = [];

    constructor(private validador: Ivalidador,private desconto: Desconto) {
    }

    print(): void {
        this.itens.forEach(el => console.log(el))
    }

    addProduto(item: produtos): void {
        if (this.validador.alreadyhas(item, this.itens)) {
            const index = this.itens.findIndex(itens => itens.nome === item.nome)
            this.itens[index].qtde += item.qtde
        }
        else {
            this.itens.push(item)
        }
    }
    removeProduto(item: produtos): void {
        if (this.validador.alreadyhas(item, this.itens)) {
            const index = this.itens.findIndex(itens => itens.nome === item.nome)
            this.itens[index].qtde -= 1
        }
        else {
            throw Error("o item a ser removido não existe no carrinho")
        }
    }
    total(): number {
        return +(this.itens.reduce((acc, el) => acc += el.preco, 0))
    }
    totalComDesconto(): number {
        return +this.desconto.total(this.total()).toFixed(2)
    }

    clear(): void {
        this.itens.length = 0;
    }


}

abstract class Desconto{
    protected desconto = 0
    total(valor:number): number{
        return valor - valor * this.desconto
    }
}


class Desconto0 extends Desconto {
    protected desconto = 0;
}

class Desconto10 extends Desconto {
    protected desconto = 0.1;
}
class Desconto20 extends Desconto {
    protected desconto = 0.2;
}
class Desconto30 extends Desconto {
    protected desconto = 0.3;
}
class Desconto40 extends Desconto {
    protected desconto = 0.4;
}


export {
    carinho,
    Desconto10,
    Desconto20,
    Desconto40,
    Desconto30,
    Desconto0
}
