import axios from "axios";
import { cryptoCurrenciesSchema, cryptoPriceSchema } from "../schemas/crypto-schema";

import { p} from "../types";


export async function fetchCrypto() {
    const response = await axios(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=30&tsym=USD`);
    const data = await response;

    const { Data } = data.data;

    const result = cryptoCurrenciesSchema.safeParse(Data);

    if (result.success) {
       return result.data;
    }
}
    

export async function fetchExchange(pair: p) {
    const { currency, cryptocurrency } = pair;
    const response = await axios(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`);
    const data = await response;

    const result =cryptoPriceSchema.safeParse(data.data.DISPLAY[cryptocurrency][currency]);

    if (result.success) {
         return result.data; 
    }

 console.log(result.error);
    
   
}