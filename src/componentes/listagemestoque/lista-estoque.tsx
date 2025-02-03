import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type EstoqueType = {
    itemId:number,
    nomeProduto:string,
    quantidade:string,
    localizacao:string
  }
export default function ListaEstoque() {
    
    const [estoque, setEstoque] = useState<EstoqueType[]>([])
    useEffect(()=>{
        fetch("https://one022b-cacaushow-trabalho-1r6f.onrender.com/estoque")
        .then(resposta=>resposta.json())
        .then(dados=>setEstoque(dados))
      },[])
      function handleExcluir(id:number){
        fetch(`https://one022b-cacaushow-trabalho-1r6f.onrender.com/estoque/${id}`,{
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
         <Link to={"/gestao-estoque"} className="link-bonitao">Estoques</Link>
         <Link to={"/alterar-estoque"} className="link-bonitao">Alterar Estoques</Link>
         </div>
            {estoque.map(esto => {
                return (
                    <div key={esto.itemId}className='estoque-item'>
                    <h1>{esto.nomeProduto}</h1>
                    <p>{esto.quantidade}</p>
                    <p>{esto.localizacao}</p>
                    <button onClick={()=>{handleExcluir(esto.itemId)}}>Excluir</button>
              <Link to={`/alterar-estoque/${esto.itemId}`}>Alterar</Link>
                  </div>
                )
            })}
        </>
    )
}