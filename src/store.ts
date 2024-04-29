///https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD

import { create} from "zustand";
import axios from "axios";
import { cryptoCurrenciesSchema} from "./schemas/crypto-schema";
import { cryptoCurrency } from "./types";

import {devtools} from "zustand/middleware";

type cryptoStore={
    cryptoCurrencies: cryptoCurrency[],
    fetchCrypto: () => Promise<void>
    
}

async function fetchCrypto() {
    const response = await axios(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`);
    const data = await response;

    const { Data } = data.data;

    const result = cryptoCurrenciesSchema.safeParse(Data);

    if (result.success) {
       return result.data;
    }
    
}



export const useCryptoStore = create<cryptoStore>()(devtools((set) => ({
    cryptoCurrencies: [],
    fetchCrypto: async () => {
        const data = await fetchCrypto();
    
        set(()=> ({ cryptoCurrencies: data }));

        console.log(data);
      
    }


})));