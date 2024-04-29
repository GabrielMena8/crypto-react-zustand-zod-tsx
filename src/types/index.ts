import { currencySchema } from '../schemas/crypto-schema';
import { z } from 'zod';


export type Currency = z.infer<typeof currencySchema>;
