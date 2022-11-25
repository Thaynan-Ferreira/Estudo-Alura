import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  // eslint-disable-next-line no-unused-vars
  const [, setColaboradores] = useState([])

  const colaboradorCadastrado = (colaborador) => {
    console.log(colaborador)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => colaboradorCadastrado(colaborador)}/>
      <Time nome="Programação"/> 
      <Time nome="Front-end"/>   
      <Time nome="Data Science"/>
      <Time nome="Devops"/>
      <Time nome="Ux e Design"/>
      <Time nome="Mobile"/>
      <Time nome="Inovação e Gestão"/>
    </div>
  );
}

export default App;
