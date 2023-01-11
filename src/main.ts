import { Desconto30, Desconto0, carinho } from "./carrinhoDeCompra.js"
import { Validador } from "./validador.js"
import { mensageiroEMAIL } from "./mensageiros.js"
import { caixa } from "./caixa.js"


function Main(){
    const mensageiro = new mensageiroEMAIL()
    const validador = new Validador()
    const desconto = new Desconto0()
    const shopCar = new carinho(validador,desconto)
    const caxa = new caixa(validador,mensageiro,shopCar)
    caxa.iniciarCompra();
    shopCar.addProduto({ nome: "camisa", preco: 43.98, qtde: 3 });
    shopCar.addProduto({ nome: "tennis", preco: 43.98, qtde: 3 });
    shopCar.addProduto({ nome: "mesa", preco: 43.98, qtde: 3 });
    shopCar.addProduto({ nome: "mesa", preco: 43.98, qtde: 3 });
    caxa.finalizarCompra()
}

Main()