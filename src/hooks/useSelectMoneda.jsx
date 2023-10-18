import styled from "@emotion/styled"
import { useState } from "react"

const Label = styled.label`
  color: #fff;
  font-family: 'Lato', sans-serif;
  display: block;
  font-size: 24px;
  font-weight: 700;
  margin: 20px 0;
`

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
  border: none;
`


//Hooks customize to select "Moneda" in the form 
const useSelectMoneda = (label, opciones) => {
  const [state, setEstate] = useState('')

  const SelectorMoneda = () => (
    <>
      <Label>{label}</Label>
      <Select
        value={state}
        onChange={e => setEstate(e.target.value)}
      >
        <option value={''}>Selecciones</option>
        {opciones.map(opcion => (
          <option 
            key={opcion.codigo} 
            value={opcion.codigo}
          >{opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  )

  return [state, SelectorMoneda]
}

export default useSelectMoneda