import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type PromocoesType = {
    Idpromocao:number,
    titulo:string,
    descricao:string,
    validade:Date,
    cupom:string
  }
export default function ListaPromocoes() {
    
    const [promocoes, setPromocoes] = useState<PromocoesType[]>([])
    useEffect(()=>{
        fetch("https://one022b-cacaushow-trabalho-1r6f.onrender.com/promocoes")
        .then(resposta=>resposta.json())
        .then(dados=>setPromocoes(dados))
      },[])
      function handleExcluir(id:number){
        fetch(`https://one022b-cacaushow-trabalho-1r6f.onrender.com/promocoes/${id}`,{
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
         <Link to={"/cadastro-promocoes"} className="link-bonitao">Promocoes</Link>
         <Link to={"/alterar-promocoes"} className="link-bonitao">Alterar Promocoes</Link>
         </div>
            {promocoes.map(promo => {
                return (
                    <div key={promo.Idpromocao}className='cliente-item'>
                    <h1>{promo.titulo}</h1>
                    <p>{promo.descricao}</p>
                    <p>{new Date(promo.validade).getDate()+1}/{new Date(promo.validade).getMonth()+1}/{new Date(promo.validade).getFullYear()}</p>
                    <p>{promo.cupom}</p>
                    <button onClick={()=>{handleExcluir(promo.Idpromocao)}}>Excluir</button>
              <Link to={`/alterar-promocoes/${promo.Idpromocao}`}>Alterar</Link>
                  </div>
                )
            })}
        </>
    )
}