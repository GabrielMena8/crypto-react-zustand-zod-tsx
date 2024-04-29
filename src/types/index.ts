import { cryptoCurrencyResponse, currencySchema, cryptoCurrenciesSchema } from '../schemas/crypto-schema';
import { z } from 'zod';
import { pairSchema, cryptoPriceSchema } from "../schemas/crypto-schema"

export type Currency = z.infer<typeof currencySchema>;

export type cryptoCurrency = z.infer<typeof cryptoCurrencyResponse>;

export type cryptoCurrencies = z.infer<typeof cryptoCurrenciesSchema>;

export type p = z.infer<typeof pairSchema>;

export type cryptoPrice = z.infer<typeof cryptoPriceSchema>;