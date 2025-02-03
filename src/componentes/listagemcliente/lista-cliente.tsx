import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type ClienteType = {
    clienteId:number,
    nome:string,
    cpf:string
  }
export default function ListaCliente() {
    
    const [cliente, setCliente] = useState<ClienteType[]>([])
    useEffect(()=>{
        fetch("https://one022b-cacaushow-trabalho-1r6f.onrender.com/cliente")
        .then(resposta=>resposta.json())
        .then(dados=>setCliente(dados))
      },[])
      function handleExcluir(id:number){
        fetch(`https://one022b-cacaushow-trabalho-1r6f.onrender.com/cliente/${id}`,{
          method:"DELETE"
        })
        .then(resposta=>{
          if(resposta.status==200){
            alert("Excluído com sucesso")
            window.location.reload()
          }
          else{
            alert("Erro ao excluir")
          }
        })
      }
    return (
        <>
         <div className='container-link'>
         <Link to={"/cadastro-cliente"} className="link-bonitao">Clientes</Link>
         <Link to={"/alterar-cliente"} className="link-bonitao">Alterar Clientes</Link>
         </div>
            {cliente.map(clien => {
                return (
                    <div key={clien.clienteId}className='cliente-item'>
                    <h1>{clien.nome}</h1>
                    <p>{clien.cpf}</p>
                    <button onClick={()=>{handleExcluir(clien.clienteId)}}>Excluir</button>
              <Link to={`/alterar-cliente/${clien.clienteId}`}>Alterar</Link>
                  </div>
                )
            })}
        </>
    )
}