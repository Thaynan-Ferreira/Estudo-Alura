import './Rodape.css'

const Rodape = () => {

    return (
        <footer>
            <section className='redes'>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/imagens/fb.png" alt="Logo do Facebook" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/imagens/tw.png" alt="Logo do Twitter" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imagens/ig.png" alt="Logo do instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="Logo da organo" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
        </footer>
    )
}

export default Rodape