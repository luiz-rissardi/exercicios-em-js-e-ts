class edificio {
    constructor(area) {
        this.area = area;
    }
}
class Andar {
    calcpreco(areaQuadrada) { return 0; }
}
class Andar1 extends Andar {
    calcpreco(areaQuadrada) {
        return areaQuadrada * 1.3;
    }
}
class Andar2 extends Andar {
    calcpreco(areaQuadrada) {
        return areaQuadrada * 1.43;
    }
}
class Andar3 extends Andar {
    calcpreco(areaQuadrada) {
        return areaQuadrada * 1.57;
    }
}
class Andar4 extends Andar {
    calcpreco(areaQuadrada) {
        return areaQuadrada * 1.68;
    }
}
class Andar5 extends Andar {
    calcpreco(areaQuadrada) {
        return areaQuadrada * 1.79;
    }
}
class Andar6 extends Andar {
    calcpreco(areaQuadrada) {
        return areaQuadrada * 1.86;
    }
}
class Andar7 extends Andar {
    calcpreco(areaQuadrada) {
        return areaQuadrada * 1.97;
    }
}
class Apartamento extends edificio {
    constructor(nome, area, andar) {
        super(area);
        this.nome = nome;
        this.andar = andar;
    }
    calcPreco() {
        this.preco = this.andar.calcpreco(this.area);
    }
}
function main() {
    const apartamento = new Apartamento("louzianna", 340, new Andar2);
    apartamento.calcPreco();
    console.log(apartamento);
}
main();
export {};
