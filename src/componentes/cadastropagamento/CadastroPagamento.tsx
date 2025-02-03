import { FormEvent, useState, ChangeEvent } from "react";
    import { Link, useNavigate } from "react-router-dom";

    export default function CadastroPagamento(){
        const navigate = useNavigate();
        const [idpagamento,setIdpagamento] = useState("")
        const [formapag,setFormapag] = useState("")
        const [descricao,setDescricao] = useState("")
        const [valor,setValor] = useState("")

        function handleForm(event:FormEvent){
            event.preventDefault();
            console.log("Tentei cadastrar pagamentos");
            const pagamento = {
                idpagamento: idpagamento,
                formapag: formapag,
                descricao: descricao,
                valor: valor
            }
            fetch("https://one022b-cacaushow-trabalho-1r6f.onrender.com/pagamento",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pagamento)
            }).then(response => {
                if(response.status === 200){
                    alert("Pagamento cadastrado com sucesso")
                    navigate("/lista-pagamento")
                }
                else{
                    alert("Erro ao cadastrar pagamento")
                }
            })
        }
        function handleIdpagamento(event:ChangeEvent<HTMLInputElement>){
            setIdpagamento(event.target.value)
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
                    <Link to={"/alterar-pagamento"} className="link-bonitao">Alterar Pagamento</Link>
                    </div>
                <h1>Registrar Pagamento</h1>
                <form onSubmit={handleForm}>
                    <div>
                        <label htmlFor="idpagamento">ID Pagamento: </label>
                        <input type="text" name="idpagamento" onChange={handleIdpagamento} />
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
            </>
        )
    }