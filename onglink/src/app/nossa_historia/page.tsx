"use client";

import Image from "next/image";
import Link from "next/link"
import {Button, Col, Row, Form, FormLabel, FormControl} from "react-bootstrap"
import logo_onglink_01 from '@/src/app/img/LOGO_ONGLINK_1.png'
import image_home from '@/src/app/img/image_home.jpg'
import logo_muxn from '@/src/app/img/MUXN_logo1.png'
import React from "react";
import { useRouter } from "next/navigation";
import '@/src/app/CSS/home.css'
import '@/src/app/CSS/header_alt.css'
import '@/src/app/CSS/menu.css'
import '@/src/app/CSS/main.css'
import '@/src/app/CSS/body.css'
import '@/src/app/CSS/nossa_historia.css'
import Header_home from "@/src/app/components/header_home"


export default function Historia() {
  
  const router = useRouter();
  
  return (
    <>
  
        {/* <!--Header--> */}
        
        <Header_home/>


    
      {/* <!--Main--> */}

      <main id="main_div">

      
        <div className="container-fluid" >
          
          <div id="fundo_navbar">
            <div className="row">

              <div className="col-12">
                <nav id="navbar">
                  <ul>
                    <Link href="/legislacao"><li>Legislação</li></Link>
                    <Link href="/nossa_historia"><li className= "bg-green-700">Nossa História</li></Link>
                    <Link href="/parceiros"><li>Parceiros</li></Link>
                  </ul>
                </nav>
              </div>

            </div>
          </div>

          <div id="sub_div_historia">
            <div className="row">

              <div className="col-6"id="texto_historia">
                <h3>Nossa História</h3>
                <p>A ONGLink surgiu a partir da necessidade de atender à sociedade por meio da tecnologia. Em 2024, um pequeno grupo de estudantes viu no setor social uma oportunidade de implementar o Desenvolvimento de Software Multiplataforma para facilitar a formação de parcerias entre ONGs e empresas interessadas em apoiá-las, visando facilitar a comunicação entre as partes.</p>
              
                <p>Em um cenário onde a eficiência e a transparência são essenciais para o sucesso de projetos sociais, a plataforma se apresenta como uma solução inovadora que conecta investidores a iniciativas sociais com impacto positivo.</p>
              </div>

              <div className="col-6" id="missao_valores">
                <h3 id="header_missao">Missão, Visão e Valores</h3>
                <ul id="lista_missao">
                  <li> <b>Missão:</b> Entregar uma solução para empresas realizarem projetos com facilidade, otimizando seus recursos e potencializando os resultados entregues à sociedade através das ONG's e parcerias públicas.</li>
                  <li> <b>Visão:</b> Ser uma das referências nacionais em promover parcerias e meios de implementação de projetos que visam os objetivos do desenvolvimento sustentável (ODS) em todas as escalas sociais.​</li>
                  <li> <b>Valores:</b> Transparência, Empatia, Responsabilidade Social, Inovação, Parceria, Sustentabilidade, Inclusão</li>
                </ul>
              </div>
              
             </div>     

              <div id="video_pitch">
                <iframe width="500" height="300" src=""></iframe>
              </div>

           </div>

        </div>


    </main>
    
    
</>
    
  );
}
