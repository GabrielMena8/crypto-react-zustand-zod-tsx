import { currencies } from "../data/db"
import { useCryptoStore } from "../store"
import { useState } from "react"
import {p} from "../types"


export default function Form() {
    const [error, setError] = useState(false)
    const [pair, setPair] = useState<p>({
        currency: '',
        cryptocurrency: ''
        
    })
    const crypto  = useCryptoStore((state) => state.cryptoCurrencies)
    const exchange = useCryptoStore((state) => state.fetchData)



    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
        console.log(pair)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if(pair.currency.trim() === '' || pair.cryptocurrency.trim() === ''){
            setError(true)
            return
        }

        setError(false)

        exchange(pair)
        
    }

 
    return (
        <form className="form"
            onSubmit={handleSubmit}
        >   

            {error && <p className="error">Todos los campos son obligatorios</p>}
            
            <div className="field">
                <label htmlFor="currency">Moneda</label>
                <select name="currency" id="currency"
                    onChange={handleChange}
                >
                    <option value="">- Seleccione -</option>
                    {currencies.map(currency => (
                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="cryptocurrency">Crypto</label>
                <select 
                 onChange={handleChange}
                name="cryptocurrency" id="cryptocurrency">
                    <option value=""
                    >- Seleccione -</option>
                    {crypto.map(crypto => (
                        <option key={crypto.CoinInfo.FullName} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
                    ))}
                    
                </select>
            </div>

            <input type="submit" value="Cotizar" className="button-primary"/>
        </form>
  )
}
