import { useCryptoStore } from "../store"
import { useMemo } from "react"
export default function Show() {

    const res = useCryptoStore((state) => state.result)
    const hasRes = useMemo(() => Object.keys(res).length > 0, [res])
  return (
    <div>
        {hasRes &&
            <>
            <h2>Cotizacion</h2>
                <div className="result">
                    <img className='img' src={`
                    https://www.cryptocompare.com${res.IMAGEURL}`} alt="imagen" />
                
                    <p >El precio es: {res.PRICE}</p>
                    <p>El precio mas alto del dia: {res.HIGHDAY}</p>
                    <p>El precio mas bajo del dia: {res.LOWDAY}</p>
                    <p>Variacion en las ultimas 24 horas: {res.CHANGEPCT24HOUR}</p>
                </div>
            
            </>

        }
        
    </div>
  )
}
