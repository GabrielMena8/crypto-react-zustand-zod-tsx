///https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD

import { create} from "zustand";
import axios from "axios";
import { cryptoCurrencyResponse } from "./schemas/crypto-schema";


async function fetchCrypto() {
    const response = await axios(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`);
    const data = await response;

    const { Data } = data.data;

    const result = cryptoCurrencyResponse.safeParse(Data);

    console.log(result);
    
}



export const useCryptoStore = create(() => ({
    fetchCrypto: async () => {
        fetchCrypto()
      
    }


}));