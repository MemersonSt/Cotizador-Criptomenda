import styled from '@emotion/styled'
import imgPrincipal from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import { useEffect, useState } from 'react'
import Resultado from './components/Resultado'

// Styled Components
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  witdh: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img `
  max-width: 400px;
  witdh: 80%;
  margin: 100px auto  0 auto;
  display: block;
`
const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700px;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`
function App() {
  const [moneda, setMoneda] = useState({})
  const [resultado, setResultado] = useState({})

  useEffect(() => {
    if(Object.keys(moneda).length > 0) {
      const cotizarCriptos = async () => {
        const {state, stateCriptos} = moneda
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${stateCriptos}&tsyms=${state}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setResultado(resultado.DISPLAY[stateCriptos][state])
      }
      cotizarCriptos()
    }
    
  }, [moneda])

  return (
      <Contenedor>
        <Imagen 
          src={imgPrincipal}
          alt='imagen cripto'
        />
        <div>
          <Heading>Cotizar Criptomeneda</Heading>
          <Formulario
            setMoneda={setMoneda}
          />
          {resultado.PRICE && <Resultado 
            resultado={resultado}
          />}
        </div>
        
      </Contenedor>
  )
}

export default App
