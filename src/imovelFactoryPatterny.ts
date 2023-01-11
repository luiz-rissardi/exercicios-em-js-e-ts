import { Andar } from "./interfaces/Iandar.js"

function edificio(area:string){
    return {
        area,
    }
}

function apartamento(area:number,numero:number,nome:string,andar:Andar){
    let preco:number = 0;
    return {
        ...edificio(area + "m²"),
        numero,
        nome,
        preco,
        calcPreco():void{
            this.preco = +andar.calcpreco(area).toFixed(2)
        }
    }
}


function andar1():Andar{
    return {
        calcpreco(area:number):number{
            return area * 1.32
        }
    }
}
function andar2():Andar{
    return {
        calcpreco(area:number):number{
            return area * 1.43
        }
    }
}
function andar3():Andar{
    return {
        calcpreco(area:number):number{
            return area * 1.57
        }
    }
}
function andar4():Andar{
    return {
        calcpreco(area:number):number{
            return area * 1.68
        }
    }
}
function andar5():Andar{
    return {
        calcpreco(area:number):number{
            return area * 1.79
        }
    }
}
function andar6():Andar{
    return {
        calcpreco(area:number):number{
            return area * 1.86
        }
    }
}
function andar7():Andar{
    return {
        calcpreco(area:number):number{
            return area * 1.97
        }
    }
}

const main = function(){
    const apt = apartamento(347,7,"louziana",andar6())
    apt.calcPreco()
    console.log(apt)
}

main()