class edificio{
    area:number
    constructor(area:number){
        this.area = area
    }
}

abstract class Andar{
    calcpreco(areaQuadrada:number):number { return 0}
}

class Andar1  extends Andar{
    override calcpreco(areaQuadrada: number): number {
        return areaQuadrada * 1.3;
    }
}
class Andar2  extends Andar{
    override calcpreco(areaQuadrada: number): number {
        return areaQuadrada * 1.43;
    }
}

class Andar3  extends Andar{
    override calcpreco(areaQuadrada: number): number {
        return areaQuadrada * 1.57;
    }
}

class Andar4  extends Andar{
    override calcpreco(areaQuadrada: number): number {
        return areaQuadrada * 1.68;
    }
}

class Andar5  extends Andar{
    override calcpreco(areaQuadrada: number): number {
        return areaQuadrada * 1.79;
    }
}

class Andar6  extends Andar{
    override calcpreco(areaQuadrada: number): number {
        return areaQuadrada * 1.86;
    }
}

class Andar7 extends Andar{
    override calcpreco(areaQuadrada: number): number {
        return areaQuadrada * 1.97;
    }
}

class Apartamento extends edificio{
    nome:string;
    preco!:number;
    andar!:Andar;
    constructor(nome:string,area:number,andar:Andar){
        super(area);
        this.nome = nome;
        this.andar = andar;
    }

    calcPreco():void{
        this.preco = this.andar.calcpreco(this.area)
    }
}


function main(){
    const apartamento = new Apartamento("louzianna",340,new Andar2)
    apartamento.calcPreco()
    console.log(apartamento)
}

main()