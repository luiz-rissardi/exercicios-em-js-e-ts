import { produtos } from "./product.js";

export interface Ivalidador{
    isActive(value:boolean):boolean;
    alreadyhas(item:produtos,itens:produtos[]):boolean;
}