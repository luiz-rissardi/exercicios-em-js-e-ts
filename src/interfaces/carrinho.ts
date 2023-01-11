import { produtos } from "./product.js";

interface Icarrinho{
    itens:produtos[];
    addProduto(item:produtos):void;
    removeProduto(item:produtos):void;
    total():number;
    totalComDesconto():number
    clear():void;
    print():void;
}


export {
    Icarrinho
}