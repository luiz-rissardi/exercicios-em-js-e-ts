import { produtos } from "./interfaces/product.js";
import { Ivalidador } from "./interfaces/validate.js";

export class Validador implements Ivalidador{
    isActive(value:boolean): boolean {
        return value
    }
    alreadyhas(item: produtos,itens:produtos[]): boolean {
        let isTrue = false
        itens.forEach(el => {
            if(el.nome === item.nome){
                isTrue = true;
            }
        })
        return isTrue
    }
    
}