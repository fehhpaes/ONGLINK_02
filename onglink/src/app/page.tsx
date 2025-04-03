"use client";

import Image from "next/image"
import Link from "next/link"
import {Button, Col, Row} from "react-bootstrap"
import logo_onglink_01 from '@/src/app/img/LOGO_ONGLINK_1.png'
import image_home from '@/src/app/img/image_home.jpg'
import logo_muxn from '@/src/app/img/MUXN_logo1.png'
import React from "react";
import '@/src/app/CSS/home.css'
import '@/src/app/CSS/header_alt.css'
import '@/src/app/CSS/menu.css'
import '@/src/app/CSS/main.css'
import '@/src/app/CSS/body.css'


export default function Product() {
    return (
        <>
        
                {/*<!--Header-->*/}
                
            <div className="py-3 mb-3 border-bottom" id="header_header">
              <div className="container-fluid d-grid gap-3 align-items-center">
                <div className="d-flex align-items-center" id="div_header">
                  
                  <Link href=""><Image src={logo_onglink_01} alt="Logo ONGLink" width="100" height={100} id="logo_onglink"></Image></Link>
                  <form className="w-100 me-3" role="search">
                  </form>
        
                  <div id="botoes_cadastro">
                    <Link href="cadastro_1.html"><Button variant="success"> Cadastre-se</Button></Link>
                    <Link href="login.html"><Button variant="success">Login</Button></Link>
                  </div>
        
                </div>
              </div>
            </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            <main className="main_home">
              {/*<!--Main-->*/}
        
              <div className="main1">
                <div id="sub_div_desc">
                  
                  <Row className="row">
        
                      <Col sm={6} id="div_imagem_home">
                        <Image src={image_home} alt="image_home" className="image_home" width={500} height={300}></Image>
                      </Col>
                      <Col sm={6} id="desc_home">
                          <h4 id="header_vantagens">Por que sua empresa ou ONG deve estar aqui? </h4>
                          <ul id="vantagens">
                              <li>Otimizar investimentos em organizações confiáveis</li>
                              <li>Figurar entre as empresas que se preocupam com causas sociais</li>
                              <li>Promover o bem estar social e o fortalecimento dos direitos sociais</li>
                          </ul>
        
                              <p>
                                Visando otimizar o uso de recursos financeiros da sua empresa e fomentar as organizações não governamentais, 
                                a plataforma ONGlink fornece os recursos e ferramentas ideais para criar a conexão necessária, onde investidores 
                                podem ter a garantia de que seu projeto social terá um melhor aproveitamento de seus recursos e uma maior visibilidade
                                pela sociedade, governo e outras empresas.
                              </p> 
                                
                              <p>
                                A plataforma garante que os investidores possam acompanhar o aproveitamento 
                                dos recursos financeiros, além de oferecer visibilidade para as iniciativas sociais, promovendo uma cultura de responsabilidade 
                                social corporativa. 
                              </p>
        
                              <div id="div_botao">
                                <h4>
                                  Venha fazer parte da ONGLink!
                                </h4>
        
                                <a href="cadastro_1.html"> <button className="btn btn-success" id="btn_main1"> Cadastre sua Organização! </button></a>
                              </div>
                      </Col>
                  </Row>
        
                </div>
              </div>
        
        
        
              <div className="b-example-divider"></div>
        
              <div className="container-fluid" id="div_nossos_parceiros">
        
                <div id="sub_div_apoiadores">
                    <h3>Nossos Parceiros:</h3>
        
                    <div id="div_apoiadores">
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxmdfTkAvl8uqvjj8M3TUV-n9SkBSZL0kTVOpfRUxaI9X1LtKlfUiOfmHchqZoBkIs-M&usqp=CAU"} alt="Empresa 1" width="200" height="200"></img>
                        <img src={"https://img.freepik.com/vector-premium/logotipo-comercializacion-venta_712682-3297.jpg"} alt="Empresa 2" width="200" height="200"></img>
                        <img src={"https://img.freepik.com/vetores-premium/modelo-do-logotipo-da-caixa-do-estudio_10399-28.jpg"} alt="Empresa 3" width="200" height="200"></img>
                        <img src={"https://img.freepik.com/vetores-premium/logotipo-da-empresa_7436-14.jpg"} alt="Empresa 4" width="200" height="200"></img>
                        <img src={"https://img.freepik.com/vetores-gratis/modelo-de-logotipo-de-dados-gradiente_23-2149200604.jpg"} alt="Empresa 5" width="200" height="200"></img>
                    </div>
                </div>
        
              </div>
        
          
              <div className="b-example-divider"></div>
              
            </main>
            
            
        </>
    )
    
}