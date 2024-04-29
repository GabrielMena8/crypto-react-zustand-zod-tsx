import { cryptoCurrencyResponse, currencySchema, cryptoCurrenciesSchema } from '../schemas/crypto-schema';
import { z } from 'zod';


export type Currency = z.infer<typeof currencySchema>;

export type cryptoCurrency = z.infer<typeof cryptoCurrencyResponse>;

export type cryptoCurrencies = z.infer<typeof cryptoCurrenciesSchema>;