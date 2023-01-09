class pay {
    constructor() {
        this.ncard = 23;
    }
}
class PayService extends pay {
    constructor() {
        super();
        console.log("deu");
    }
}
const data = new PayService();
console.log(data);
export {};
