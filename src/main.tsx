import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CadastroChocolate from './componentes/cadastrochocolate/CadastroChocolate.tsx';
import CadastroCliente from './componentes/cadastrocliente/CadastroCliente.tsx';
import CadastroPagamento from './componentes/cadastropagamento/CadastroPagamento.tsx';
import CriacaoPromocoes from './componentes/criacaopromocoes/CriacaoPromocoes.tsx';
import Header from './componentes/header.tsx';
import Footer from './componentes/footer.tsx';
import ListaChocolate from './componentes/listagemchocolate/lista-chocolate.tsx';
import ListaCliente from './componentes/listagemcliente/lista-cliente.tsx';
import ListaPagamento from './componentes/listagempagamento/lista-pagamento.tsx';
import ListaPromocoes from './componentes/listagempromocoes/lista-promocoes.tsx';
import ListaEstoque from './componentes/listagemestoque/lista-estoque.tsx';
import GestaoEstoque from './componentes/gestaoestoque/GestãoEstoque.tsx';
import AlterarChocolate from './componentes/alterarchocolate/AlterarChocolate.tsx';
import AlterarCliente from './componentes/alterarcliente/AlterarCliente.tsx';
import AlterarEstoque from './componentes/alterarestoque/AlterarEstoque.tsx';
import AlterarPagamento from './componentes/alterarpagamento/AlterarPagamento.tsx';
import AlterarPromocoes from './componentes/alterarpromocoes/AlterarPromocoes.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Header/> <App/> <Footer/></>,
  },
  {
    path: "/cadastro-chocolate",
    element:  <><Header/> <CadastroChocolate/> <Footer/></>,
  },
  {
    path: "/lista-chocolate",
    element:  <><Header/> <ListaChocolate/> <Footer/></>,
  },
  {
    path: "/cadastro-cliente",
    element:  <><Header/> <CadastroCliente/> <Footer/></>,
  },
  {
    path: "/lista-cliente",
    element:  <><Header/> <ListaCliente/> <Footer/></>,
  },
  {
    path: "/cadastro-pagamento",
    element: <><Header/> <CadastroPagamento/> <Footer/></>,
  },
  {
    path: "/lista-pagamento",
    element:  <><Header/> <ListaPagamento/> <Footer/></>,
  },
  {
    path: "/criacao-promocoes",
    element: <><Header/> <CriacaoPromocoes/> <Footer/></>,
  },
  {
    path: "/lista-promocoes",
    element:  <><Header/> <ListaPromocoes/> <Footer/></>,
  },
  {
    path: "/gestao-estoque",
    element: <><Header/> <GestaoEstoque/> <Footer/></>,
  },
  {
    path: "/lista-estoque",
    element: <><Header/> <ListaEstoque/> <Footer/></>,
  },
  {
    path: "/alterar-chocolate/:id",
    element: <><Header/> <AlterarChocolate/> <Footer/></>,
  },
  {
    path: "/alterar-cliente/:clienteId",
    element: <><Header/> <AlterarCliente/> <Footer/></>,
  },
  {
    path: "/alterar-estoque/:itemId",
    element: <><Header/> <AlterarEstoque/> <Footer/></>,
  },
  {
    path: "/alterar-pagamento/:idpagamento",
    element: <><Header/> <AlterarPagamento/> <Footer/></>,
  },
  {
    path: "/alterar-promocoes/:idpromocao",
    element: <><Header/> <AlterarPromocoes/> <Footer/></>,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)