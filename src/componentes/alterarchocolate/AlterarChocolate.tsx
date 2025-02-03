import { Link, useParams } from "react-router-dom";
import { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function AlterarChocolate(){
    const {id} = useParams()
    useEffect(()=>{
        fetch(`https://one022b-cacaushow-trabalho-1r6f.onrender.com/chocolates/${id}`)
        .then(resposta=>resposta.json())
        .then(dados=>{
            setDescricao(dados.descricao)
            setNome(dados.nome)
            setPreco(dados.preco)
            setImagem(dados.imagem)
        })
      },[])
    const navigate = useNavigate();
        const [descricao,setDescricao] = useState("")
        const [nome,setNome] = useState("")
        const [preco,setPreco] = useState("")
        const [imagem,setImagem] = useState("")
    
        function handleForm(event:FormEvent){
            event.preventDefault();
            console.log("Tentei alterar os chocolates");
            const chocolate = {
                nome: nome,
                descricao: descricao,
                preco: preco,
                imagem: imagem
            }
            fetch(`https://one022b-cacaushow-trabalho-1r6f.onrender.com/chocolates/${id}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(chocolate)
            }).then(response => {
                if(response.status === 200){
                    alert("Chocolate alterado com sucesso")
                    navigate("/")
                }
                else{
                    alert("Erro ao alterar chocolate")
                }
            })
        }
        function handleDescricao(event:ChangeEvent<HTMLInputElement>){
            setDescricao(event.target.value)
        }
        function handlePreco(event:ChangeEvent<HTMLInputElement>){
            setPreco(event.target.value)
        }
        function handleNome(event:ChangeEvent<HTMLInputElement>){
            setNome(event.target.value)
        }
        function handleImagem(event:ChangeEvent<HTMLInputElement>){
            setImagem(event.target.value)
        }
    
    return (
        <>
        <div className='container-link'>
          <Link to={"/cadastro-chocolate"} className="link-bonitao">Cadastro Chocolate</Link>
          </div>
        <main>
        <h1>Alterar Chocolate {id}</h1>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="id">Id</label>
                    <input type="text" name="id" value={id} readOnly />
                </div>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" value={nome} onChange={handleNome} />
                </div>
                <div>
                    <label htmlFor="descricao">Descricao</label>
                    <input type="text" name="descricao" value={descricao} onChange={handleDescricao} />
                </div>
                <div>
                    <label htmlFor="preco">Preço</label>
                    <input type="text" name="preco" value={preco} onChange={handlePreco} />
                </div>
                <div>
                    <label htmlFor="imagem">Imagem</label>
                    <input type="text" name="imagem" value={imagem} onChange={handleImagem}/>
                    {imagem && <img className="imagem-previa-upload" src={imagem}/>}
                </div>
                <div>
                    <input type="submit" value="Alterar"/>
                </div>
            </form>
            </main>
        </>
    )
}

export default AlterarChocolate;