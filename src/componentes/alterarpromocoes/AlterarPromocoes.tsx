import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState, ChangeEvent, useEffect } from "react";
function AlterarPromocoes(){
    const {idpromocao} = useParams()
    useEffect(()=>{
        fetch(`https://one022b-cacaushow-trabalho-1r6f.onrender.com/promocao/${idpromocao}`)
        .then(resposta=>resposta.json())
        .then(dados=>{
            setTitulo(dados.titulo)
            setDescricao(dados.descricao)
            setValidade(dados.validade)
            setCupom(dados.cupom)
        })
      },[])
      const navigate = useNavigate();
      const [titulo,setTitulo] = useState("")
      const [descricao,setDescricao] = useState("")
      const [validade,setValidade] = useState("")
      const [cupom,setCupom] = useState("")
      
      function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei alterar as promoções");
        const promocao = {
           titulo: titulo,
           descricao: descricao,
           validade: validade,
           cupom: cupom
        }
        fetch(`https://one022b-cacaushow-trabalho-1r6f.onrender.com/promocao/${idpromocao}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(promocao)
        }).then(response => {
            if(response.status === 200){
                alert("Promoção alterada com sucesso")
                navigate("/")
            }
            else{
                alert("Erro ao alterar promoção")
            }
        })
    }
    function handleTitulo(event:ChangeEvent<HTMLInputElement>){
        setTitulo(event.target.value)
    }
    function handleDescricao(event:ChangeEvent<HTMLInputElement>){
        setDescricao(event.target.value)
    }
    function handleValidade(event:ChangeEvent<HTMLInputElement>){
        setValidade(event.target.value)
    }
    function handleCupom(event:ChangeEvent<HTMLInputElement>){
        setCupom(event.target.value)
    }

    return(
        <>
          <div className='container-link'>
        <Link to={"/criacao-promocoes"} className="link-bonitao">Cadastrar Promoções</Link>
        </div>
        <h1>Alterar Promoção</h1>
        <main>
        <form onSubmit={handleForm}>
            <div>
                <label htmlFor="itemid">Item ID: </label>
                <input type="text" name="idpromocao" value={idpromocao} readOnly/>
            </div>
            <div>
                <label htmlFor="nomeproduto">Nome da promoção: </label>
                <input type="text" name="titulo" value={titulo}  onChange={handleTitulo}/>
            </div>
            <div>
                <label htmlFor="descricao">Descrição: </label>
                <input type="text" name="descricao" value={descricao} onChange={handleDescricao}/>
            </div>
            <div>
                <label htmlFor="validade">Validade: </label>
                <input type="date" name="validade" value={validade} onChange={handleValidade}/>
            </div>
            <div>
                <label htmlFor="cupom">Cupom: </label>
                <input type="text" name="cupom" value={cupom} onChange={handleCupom}/>
                </div>
                <div>
                    <input type="submit" value="Alterar"/>
                </div>
            </form>
            </main>
        </>
    )
}

export default AlterarPromocoes;