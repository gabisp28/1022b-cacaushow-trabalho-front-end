import { Link, useParams } from "react-router-dom";
import { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function AlterarPagamento(){
    const {idpagamento} = useParams()
    useEffect(()=>{
        fetch(`https://one022b-cacaushow-trabalho-1r6f.onrender.com/pagamento/${idpagamento}`)
        .then(resposta=>resposta.json())
        .then(dados=>{
            setFormapag(dados.formapag)
            setDescricao(dados.descricao)
            setValor(dados.valor)
        })
      },[])
      const navigate = useNavigate();
      const [formapag,setFormapag] = useState("")
      const [descricao,setDescricao] = useState("")
      const [valor,setValor] = useState("")
  
      function handleForm(event:FormEvent){
          event.preventDefault();
          console.log("Tentei alterar os pagamentos");
          const pagamento = {
              formapag: formapag,
              descricao: descricao,
              valor: valor,
          }
          fetch(`https://one022b-cacaushow-trabalho-1r6f.onrender.com/pagamento/${idpagamento}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pagamento)
        }).then(response => {
            if(response.status === 200){
                alert("Pagamento alterado com sucesso")
                navigate("/")
            }
            else{
                alert("Erro ao alterar pagamento")
            }
        })
    }
    function handleFormapag(event:ChangeEvent<HTMLSelectElement>){
        setFormapag(event.target.value)
    }
    function handleDescricao(event:ChangeEvent<HTMLInputElement>){
        setDescricao(event.target.value)
    }
    function handleValor(event:ChangeEvent<HTMLInputElement>){
        setValor(event.target.value)
    }
    return(
        <>
         <div className='container-link'>
        <Link to={"/cadastro-pagamento"} className="link-bonitao">Cadastro Pagamento</Link>
        </div>
        <h1>Registrar Pagamento</h1>
        <main>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="idpagamento">ID Pagamento: </label>
                    <input type="text" name="idpagamento" value={idpagamento} readOnly />
                </div>
                <div>
                    <label htmlFor="formapag">Forma de Pagamento: </label>
                    <select name="formapag" onChange={handleFormapag}>
                        <option value="Dinheiro">Dinheiro</option>
                        <option value="Debito">Débito</option>
                        <option value="Credito">Crédito</option>
                        <option value="Pix">Pix</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="descricao">Descrição: </label>
                    <input type="text" name="descricao" onChange={handleDescricao} />
                </div>
                <div>
                    <label htmlFor="valor">Valor: </label>
                    <input type="text" name="valor" onChange={handleValor} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
            </main>
        </>
    )
}

export default AlterarPagamento;