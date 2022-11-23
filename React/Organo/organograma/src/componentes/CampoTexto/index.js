import './CampoTexto.css'
const CampoTexto = (props) => {

    let valor = ''

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor)

        
    }

    return (
        <div className="campo__texto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto