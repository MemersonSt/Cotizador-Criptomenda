import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Info = styled.p`
    font-size: 18px;

`

const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight: bold;
    }
`

const Imagen = styled.img`
    width: 150px;
    display: block; 
`

const Resultado = ({resultado}) => {
  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL} = resultado
  return (
    <Contenedor>
        <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="" />
        <Precio>El precio es: <span>{PRICE}</span></Precio>
        <Info>Precio mas alto del dia: <span>{HIGHDAY}</span></Info>
        <Info>Precio mas bajo del dia: <span>{LOWDAY}</span></Info>
        <Info>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Info>
        <Info>Ultima actualizacion: <span>{LASTUPDATE}</span></Info>
    </Contenedor>
  )
}

export default Resultado