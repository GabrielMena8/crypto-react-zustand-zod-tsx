import { useEffect } from "react"
import Form from "./Components/Form"
import { useCryptoStore } from "./store"

function App() {
  const fetchCrypto=useCryptoStore((state) => state.fetchCrypto)

  useEffect(() => {
    fetchCrypto()
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , [])


  return (
    <>  
      <div className='container'>
        <h1 className="app-title">Cotizador de <span>Crypto</span></h1>
      
            <div className="content">
              <Form />
            </div>
      </div>
    </>
  )
}

export default App
