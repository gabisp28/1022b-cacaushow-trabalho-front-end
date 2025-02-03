import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState, ChangeEvent, useEffect } from "react";
function AlterarCliente(){
    const {clienteId} = useParams()
    useEffect(()=>{
        fetch(`https://one022b-cacaushow-trabalho-1r6f.onrender.com/cliente/${clienteId}`)
        .then(resposta=>resposta.json())
        .then(dados=>{
            setNome(dados.nome)
            setCPF(dados.cpf)
        })
      },[])
      const navigate = useNavigate();
      const [nome,setNome] = useState("")
      const [cpf,setCPF] = useState("")
  
      function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei alterar os clientes");
        const cliente = {
            nome: nome,
            cpf: cpf,
        }
        fetch(`https://one022b-cacaushow-trabalho-1r6f.onrender.com/cliente/${clienteId}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cliente)
        }).then(response => {
            if(response.status === 200){
                alert("Cliente alterado com sucesso")
                navigate("/")
            }
            else{
                alert("Erro ao alterar cliente")
            }
        })
    }
    function handleNome(event:ChangeEvent<HTMLInputElement>){
        setNome(event.target.value)
    }
    function handleCPF(event:ChangeEvent<HTMLInputElement>){
        setCPF(event.target.value)
    }

    return(
        <>
          <div className='container-link'>
        <Link to={"/cadastro-cliente"} className="link-bonitao">Cadastrar Cliente</Link>
        </div>
        <h1>Alterar Cliente</h1>
        <main>
        <form onSubmit={handleForm}>
            <div>
                <label htmlFor="clienteId">Cliente ID: </label>
                <input type="text" name="clienteId" value={clienteId} readOnly/>
            </div>
            <div>
                <label htmlFor="nome">Nome do Cliente: </label>
                <input type="text" name="nome" value={nome} onChange={handleNome}/>
            </div>
            <div>
                <label htmlFor="cpf">CPF: </label>
                <input type="text" name="cpf" value={cpf} onChange={handleCPF}/>
            </div>
            <div>
                    <input type="submit" value="Alterar"/>
                </div>
        </form>
        </main>
        </>
    )
}

export default AlterarCliente;