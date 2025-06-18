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
            <div className="border-2 rounded w-full p-1 border-gray-600  mt-3 mb-3 ">
                <Table striped bordered hover >
                    <thead className="border-2 rounded  ">
                        <tr>
                            <th>Nº da Solicitação</th>
                            <th>Tipo da Solicitação</th>
                            <th>Nome da ONG/Empresa</th>
                            <th>Nome do Responsável</th>
                            <th>Data da Solicitação</th>
                            {/*<th>CPF</th>*/}
                            {/*<th>CEP</th>*/}
                            {/*<th>CNPJ</th>*/}
                            <th>Aprovar?</th>
                            
                        </tr>
                    </thead>
                    <tbody className="border-2 rounded  ">
                        {products.map(
                            (product) => {
                                
                                return (
                                    <tr>
                                        <td>{product.num}</td>  
                                        <td>{product.tipo}</td>
                                        <td>{product.nome}</td>
                                        <td>{product.nomeResp}</td>
                                        <td>{product.Data}</td>
                                        {/*<td>{product.CPF}</td>*/}
                                        {/*<td>{product.CEP}</td>*/}
                                        {/*<td>{product.CNPJ}</td>*/}
                                        {/*<td>{product.CNPJ}</td> tentar colocar um botão*/}
                                    </tr>
                                );
                            })} 
                    </tbody>
                </Table>
            </div>
            <div>
                <button type="submit"></button>
            </div>
        </main>

        </>
    )


}