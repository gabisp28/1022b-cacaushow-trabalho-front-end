import { ChangeEvent, FormEvent, useState } from "react";
    import { Link, useNavigate } from "react-router-dom";

    export default function CriacaoPromocoes (){
        const navigate = useNavigate();
        const [idpromocao,setIdpromocao] = useState("")
        const [titulo,setTitulo] = useState("")
        const [descricao,setDescricao] = useState("")
        const [validade,setValidade] = useState("")
        const [cupom,setCupom] = useState("")
        
        function handleForm(event:FormEvent){
            event.preventDefault();
            console.log("Criacao de Promoções");
            const promocoes = {
                idPromocao: idpromocao,
                titulo: titulo,
                descricao: descricao,
                validade: validade,
                cupom: cupom
            }
            fetch("https://one022b-cacaushow-trabalho-1r6f.onrender.com/promocoes",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(promocoes)
            }).then(response => {
                if(response.status === 200){
                    alert("Promoção válida, aproveite!")
                    navigate("/lista-promocoes")
                }
                else{
                    alert("Está promoção não é mais valida!")
                }
            })
        }
        function handleIdpromocao(event:ChangeEvent<HTMLInputElement>){
            setIdpromocao(event.target.value)
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
                    <Link to={"/alterar-promocoes"} className="link-bonitao">Alterar Promoções</Link>
                    </div>
            <h1>Criar Promoção</h1>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="idpromocao">Item ID: </label>
                    <input type="text" name="idpromocao" onChange={handleIdpromocao}/>
                </div>
                <div>
                    <label htmlFor="titulo">Título: </label>
                    <input type="text" name="titulo" onChange={handleTitulo}/>
                </div>
                <div>
                    <label htmlFor="descricao">Descrição: </label>
                    <input type="text" name="descricao" onChange={handleDescricao}/>
                </div>
                <div>
                    <label htmlFor="validade">Validade: </label>
                    <input type="date" name="validade" onChange={handleValidade}/>
                </div>
                <div>
                    <label htmlFor="cupom">Cupom: </label>
                    <input type="text" name="cupom" onChange={handleCupom}/>
                    </div>
                    <div>
                        <input type="submit" value="Criar"/>
                    </div>
                </form>
            </>
        )
    }