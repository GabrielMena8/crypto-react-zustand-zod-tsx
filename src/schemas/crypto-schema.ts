import {z } from 'zod';


export const currencySchema = z.object({
    code: z.string(),
    name: z.string()
});


export const cryptoCurrencyResponse = z.array(
z.object({
    CoinInfo: z.object({
        FullName: z.string(),
        Name: z.string()
       
    })
}));

