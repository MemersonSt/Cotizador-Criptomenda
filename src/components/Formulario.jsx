import styled from "@emotion/styled"
import useSelectMoneda from "../hooks/useSelectMoneda"

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

    &:hover {
        cursor: pointer;
        background-color: #7A7DFE;
    }
`

const Formulario = () => {
    const [SelectorMoneda] = useSelectMoneda()
    SelectorMoneda()
  return (
    <form action="">
        <InputSumit
            type="submit"
            value="Calcular"
        />
    </form>
  )
}

export default Formulario