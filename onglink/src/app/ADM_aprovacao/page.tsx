"use client"

import Header_ADM_aprovacao from "@/src/app/components/header_ADM_aprovacao"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { ICadastro } from "./ICadastro";

export default function ADM_aprovacao() {


    const [products, setProducts] = useState<ICadastro[]>([]);
    const router = useRouter();

    useEffect(() => {

        const listProducts = async() => {
            const response = await axios.get("http://localhost/aprovacao");

            setProducts (response.data);
            console.log (response.data);
        }

        listProducts();

    }, []);


    return(
        <>

        <Header_ADM_aprovacao/>
        <main>
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nº da Solicitação</th>
          <th>Tipo da Solicitação</th>
          <th>Nome da ONG/Empresa</th>
          <th>Nome do Responsável</th>
          <th>Data da Solicitação</th>
          <th>CPF</th>
          <th>CEP</th>
          <th>CNPJ</th>
        </tr>
      </thead>
      <tbody>
        {products.map(
            (product) => {
                
                return (
                    <tr>
                        <td>{product.num}</td>  
                        <td>{product.tipo}</td>
                        <td>{product.nome}</td>
                        <td>{product.nomeResp}</td>
                        <td>{product.Data}</td>
                        <td>{product.CPF}</td>
                        <td>{product.CEP}</td>
                        <td>{product.CNPJ}</td>
                    </tr>
                );
            })}
      </tbody>
    </Table>
        </main>

        </>
    )


}