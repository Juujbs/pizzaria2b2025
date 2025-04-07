import { useState } from "react"

function App() {


  const Formulario = (props) => {

    const [nome, setNome] = useState('Ronaldo')


    return (
      <div>
        <h3>{props.titulo}</h3>
        <input className='nome'
          placeholder="Digite seu nome..."
          name="nome"
          type="text" />
        <button classaName="botao" onClick={
                () => {
                  if(nome.length > 0)
                    alert(nome)
                else
                   alert(props.mensagem)
          }
        }>
          CLIQUE AQUI
        </button>

      </div>
    )
  }

  return (
    <div>
      <h3>Pizzaria 2B</h3>
      <Formulario titulo = "Nome" mensagem = "Corinthians"/>
      <Formulario titulo = "E-mail" mensagem = "sla"/>
      <Formulario titulo = "CPF" mensagem = "nsei"/>
      <Formulario />
      <Formulario />
      <Formulario />





    </div>
  )
}

export default App