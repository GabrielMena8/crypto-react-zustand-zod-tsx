import {z } from 'zod';


export const currencySchema = z.object({
    code: z.string(),
    name: z.string()
});


export const cryptoCurrencyResponse = 
z.object({
    CoinInfo: z.object({
        FullName: z.string(),
        Name: z.string()
       
    })
});


export const cryptoCurrenciesSchema = z.array(cryptoCurrencyResponse)

