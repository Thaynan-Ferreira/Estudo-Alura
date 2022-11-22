import './CampoTexto.css'
const CampoTexto = (props) => {
    console.log()
    return (
        <div className="campo__texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto