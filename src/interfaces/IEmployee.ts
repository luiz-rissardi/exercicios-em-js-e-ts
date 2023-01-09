interface Iempregado {
    salario:number;
    nome:string;
    calcSalario(rank:number):number
}

interface Igerenciador{
    demitir(empregado:Iempregado):void
    emitirRelatorio():void
}

interface Igerenciado{
    gerente:Igerenciador;   
    definirGerente(gerente:Igerenciador):void
}

export {
    Iempregado,
    Igerenciador,
    Igerenciado,
}