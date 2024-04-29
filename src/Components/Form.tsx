import { currencies } from "../data/db"


export default function Form() {
    
 
    return (
        <form className="form">
            <div className="field">
                <label htmlFor="currency">Moneda</label>
                <select name="currency" id="currency">
                    <option value="">- Seleccione -</option>
                    {currencies.map(currency => (
                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="cryptocurrency">Crypto</label>
                <select name="cryptocurrency" id="cryptocurrency">
                    <option value="">- Seleccione -</option>
                    
                </select>
            </div>

            <input type="submit" value="Cotizar" className="button-primary"/>
        </form>
  )
}
