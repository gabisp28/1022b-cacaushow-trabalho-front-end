import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CadastroCliente (){
    const navigate = useNavigate();
    const [clienteId,setClienteId] = useState("")
    const [nome,setNome] = useState("")
    const [cpf,setCPF] = useState("")
    
    function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei cadastrar Cliente");
        const cliente = {
            clienteId: clienteId,
            nome: nome,
            cpf: cpf
        }
        fetch("https://one022b-cacaushow-trabalho-1r6f.onrender.com/cliente",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cliente)
        }).then(response => {
            if(response.status === 200){
                alert("Cliente cadastrado com sucesso")
                navigate("/lista-cliente")
            }
            else{
                alert("Erro ao cadastrar o Cliente")
            }
        })
    }
    function handleClienteId(event:ChangeEvent<HTMLInputElement>){
        setClienteId(event.target.value)
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
        <Link to={"/alterar-cliente"} className="link-bonitao">Alterar Cliente</Link>
        </div>
        <h1>Cadastrar Cliente</h1>
        <form onSubmit={handleForm}>
            <div>
                <label htmlFor="clienteId">Cliente ID: </label>
                <input type="text" name="clienteId" onChange={handleClienteId}/>
            </div>
            <div>
                <label htmlFor="nome">Nome do Cliente: </label>
                <input type="text" name="nome" onChange={handleNome}/>
            </div>
            <div>
                <label htmlFor="cpf">CPF: </label>
                <input type="text" name="cpf" onChange={handleCPF}/>
            </div>
            <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
        </form>
        </>
    )
}