import { Link, useParams } from "react-router-dom";
import { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function AlterarEstoque(){
    const {itemId} = useParams()
    useEffect(()=>{
        fetch(`https://one022b-cacaushow-trabalho-1r6f.onrender.com/estoque/${itemId}`)
        .then(resposta=>resposta.json())
        .then(dados=>{
            setNomeProduto(dados.nomeProduto)
            setQuantidade(dados.quantidade)
            setLocalizacao(dados.localizacao)
        })
      },[])
    const navigate = useNavigate();
        const [nomeProduto,setNomeProduto] = useState("")
        const [quantidade,setQuantidade] = useState("")
        const [localizacao,setLocalizacao] = useState("")
      
        function handleForm(event:FormEvent){
            event.preventDefault();
            console.log("Tentei alterar a gestão do estoque");
            const estoque = {
                nomeProduto: nomeProduto,
                quantidade: quantidade,
                localizacao: localizacao
            }
            fetch(`https://one022b-cacaushow-trabalho-1r6f.onrender.com/estoque/${itemId}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(estoque)
            }).then(response => {
                if(response.status === 200){
                    alert("Estoque alterado com sucesso")
                    navigate("/")
                }
                else{
                    alert("Erro ao alterar estoque")
                }
            })
        }
        function handleNomeProduto(event:ChangeEvent<HTMLInputElement>){
            setNomeProduto(event.target.value)
        }
        function handleQuantidade(event:ChangeEvent<HTMLInputElement>){
            setQuantidade(event.target.value)
        }
        function handleLocalizacao(event:ChangeEvent<HTMLInputElement>){
            setLocalizacao(event.target.value)
        }

        return(
        <>
          <div className='container-link'>
        <Link to={"/gestao-estoque"} className="link-bonitao">Cadastrar Estoque</Link>
        </div>
        <h1>Alterar Estoque</h1>
    <main>
        <form onSubmit={handleForm}>
            <div>
                <label htmlFor="itemId">Item ID: </label>
                <input type="text" name="itemId" value={itemId} readOnly/>
            </div>
            <div>
                <label htmlFor="nomeproduto">Nome do Produto: </label>
                <input type="text" name="nomeProduto" value={nomeProduto} onChange={handleNomeProduto}/>
            </div>
            <div>
                <label htmlFor="quantidade">Quantidade: </label>
                <input type="text" name="quantidade" value={quantidade} onChange={handleQuantidade}/>
            </div>
            <div>
                <label htmlFor="localizacao">Localização: </label>
                <input type="text" name="localizacao" value={localizacao} onChange={handleLocalizacao}/>
                </div>
                <div>
                    <input type="submit" value="Alterar"/>
                </div>
            </form>
            </main>
        </>
    )
}

export default AlterarEstoque;