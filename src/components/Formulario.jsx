import styled from "@emotion/styled"
import useSelectMoneda from "../hooks/useSelectMoneda"
import { useState, useEffect } from "react"
import Error from "./Error"

const InputSumit = styled.input `
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 10px;
    transition: background-color .3s ease;
    margin-top: 25px;

    &:hover {
        cursor: pointer;
        background-color: #7A7DFE;
    }
`

const Formulario = ({setMoneda}) => {
    const [cripto, setCriptos] = useState([])

    const monedas = [
        {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'}
    ]

    const [state, SelectorMoneda] = useSelectMoneda('Elige tu moneda', monedas)
    const [stateCriptos, SelectorCriptos] = useSelectMoneda('Elige tu CriptoMoneda', cripto)
    const [error, setError] = useState(false)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            console.log(resultado)

            const ArraysCriptos = resultado.Data.map(cripto => {
                const objeto = {
                    nombre: cripto.CoinInfo.FullName,
                    codigo: cripto.CoinInfo.Name
                }
                return objeto
            })
            setCriptos(ArraysCriptos)
        }

        consultarAPI()
    }, [])

    const handleSumit = e => {
        e.preventDefault()
        if([state, stateCriptos].includes('')) {
            setError(true)
            console.log('error')
            return
        }
        setError(false)
        setMoneda({state, stateCriptos})
    }
    
    return (
        <>
            {error && <Error Children={'Todos los campos son obligatorios'}/>}
            <form
                onSubmit={handleSumit}
            >
                <SelectorMoneda />
                <SelectorCriptos />
                <InputSumit
                    type="submit"
                    value="Calcular"
                />
            </form>
        </>
    )
}

export default Formulario