import styled from "@emotion/styled";

const MensajeError = styled.div`
    background-color: #b7322c;
    padding: 15px;
    color: #fff;
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 700;   
    text-align: center;
    font-family: 'Lato', sans-serif;
`

const Error = ({Children}) => {
    return (
        <MensajeError>
            {Children}
        </MensajeError>
    );
}

export default Error;