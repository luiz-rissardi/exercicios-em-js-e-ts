import { IMesageiro } from "./interfaces/mensages.js";

class mensageiroSMS implements IMesageiro{
    sendMesagens(message:string): void {
        console.log(`SMS: ${message}`)
    }

}

class mensageiroEMAIL implements IMesageiro{
    sendMesagens(message:string): void {
         console.log(`Email: ${message}`)
    }

}

class mensageiroSmsWHATZAP implements IMesageiro{
    sendMesagens(message:string): void {
         console.log(`whats zap: ${message}`)
    }

}

class mensageiroSmsTELEGRAM implements IMesageiro{
    sendMesagens(message:string): void {
         console.log(`telegram: ${message}`)
    }

}


export{
    mensageiroEMAIL,
    mensageiroSmsTELEGRAM,
    mensageiroSMS,
    mensageiroSmsWHATZAP
}
