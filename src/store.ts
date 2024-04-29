///https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD
//https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR

import { create} from "zustand";
import { fetchCrypto, fetchExchange } from "./services/fetchService";
import { cryptoCurrency, cryptoPrice, p} from "./types";


import {devtools} from "zustand/middleware";

type cryptoStore={
    result: cryptoPrice,
    cryptoCurrencies: cryptoCurrency[],
    fetchCrypto: () => Promise<void>,
    fetchData: (pair: p) => Promise<void>
    
}


//Acciones que se pueden realizar en el store

export const useCryptoStore = create<cryptoStore>()(devtools((set) => ({
    result: {} as cryptoPrice,
    cryptoCurrencies: [],
    fetchCrypto: async () => {
        const data = await fetchCrypto();
    
        set(()=> ({ cryptoCurrencies: data }));
    },

    fetchData: async (pair) => {
        const data = await fetchExchange(pair);
        
        set(() => ({ result: data }));


    }


})));