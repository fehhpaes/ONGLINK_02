"use client"
import Image from "next/image";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/src/app/CSS/feed.css'
import '@/src/app/CSS/header_alt.css';
import FeedCarousel from "@/src/app/components/carrousel/carousel"
import Arara from '@/src/app/img/arara.jpeg';
import AraraAzul from '@/src/app/img/arara_azul.jpeg';
import MuxnLogo1 from '@/src/app/img/MUXN_logo1.png';
import Capivara from '@/src/app/img/capivara.jpeg';
import Ceu from '@/src/app/img/ceu.jpeg';
import Mico from '@/src/app/img/mico.jpeg';
import Tucano from '@/src/app/img/tucano.jpeg';
import logo_instagram from '@/src/app/img/icons/instagram_6422200.png'
import logo_twitter from '@/src/app/img/icons/twitter_5968830.png'
import logo_facebook from '@/src/app/img/icons/social_12942738.png'
import { Button } from "react-bootstrap";
import Header_feed from "../components/header_feed";


export default function Home() {
  return (
    <>
    <Header_feed/>
    <main id="main_feed">
      {/* <!--Main-->  */}

      <div className="container-fluid"> 

      <div className="row g-4">
        <div className="col-lg-3 ml-5">
          <div className="offcanvas-body d-block px-2 px-lg-0">
            
            <div className="card overflow-hidden">
           
              <div className="h-50px">
                
                <div id="div_perfil" className="card-body pt-0 bg-success-subtle">
                  <div className="text-center">
                   
                    <div className="avatar avatar-lg mt-n5 mb-3">
                        <a href="#!"> <Image className="avatar-img rounded-circle border d-inline"src={MuxnLogo1} alt="logo_muxn" width={100} height={100}/></a>
                        </div>
                    
                    <h5 className="mb-0"> MUXN </h5>
                    <small>Tecnologia</small>
                    <p className="mt-3">Por um planeta melhor através da tecnologia. </p>

                    
                    <div className="hstack gap-2 gap-xl-3 justify-content-center">
                        <div>
                            <h6 className="mb-0">3</h6>
                            <small>Projetos Sociais</small>
                        </div>
                    </div>
                    
                      <div>
                          <small> Contato +55 (15) 3333-3333</small>
                      </div>
                      <div>
                        <small> contato@muxn.com.br</small>
                      
                      </div>
                      <div>
                      <ul className="list-unstyled d-flex justify-content-center">
                        <li className=""><a className="link-body-emphasis" href="https://x.com/?lang=pt-br"><Image src={logo_twitter} alt="" className="bi" width={24} height={24}/></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="https://www.instagram.com/"><Image src={logo_instagram} alt="" className="bi" width={24} height={24}></Image></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="https://www.facebook.com/"><Image src={logo_facebook} alt="" className="bi" width={24} height={24}></Image></a></li>
                      </ul>
                      </div>
                  
                    
                  </div>

                 
                  <hr></hr>

                  
                  {/* <ul className="nav nav-link d-flex align-items-center flex-column fw-bold gap-2">
                    <li className="nav-item">
                      <a className="nav-link d-flex align-items-center gap-2" href="perfil.html"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                        </svg><span> Perfil</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link d-flex align-items-center gap-2" href=""> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                        </svg><span> Feed </span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex align-items-center gap-2" href="publicacao_nova.html"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-newspaper" viewBox="0 0 16 16">
                        <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z"/>
                        <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z"/>
                      </svg><span> Publicar</span></a>
                    </li>
                    
                    <li className="nav-item">
                      <a className="nav-link d-flex align-items-center gap-2" href="publicacao_nova.html"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-event" viewBox="0 0 16 16">
                        <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                      </svg><span> Eventos</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex align-items-center gap-2" href="ADM_aprovacao.html"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                      </svg><span> Aprovação</span></a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link d-flex align-items-center gap-2" href="index.html"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                      </svg><span> Sair</span></a>
                    </li>
                    
                    
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
            
        </div>
         <div className="col-md-8 col-lg-6 vstack gap-4">

          <div id="div_posts" >
     
        
      {/*FIM DO MENU LATERAL*/}    
      {/* /////////////////////////////////////////////////////////////////// */}
{/* //PUBLICAR NO FEED */}
          <div id="post1" className=" mt-4">
            <div id="subdiv_post1">
                {/* <!-- LOGO/IMAGEM --> */}
            <div className="avatar avatar-xs me-2"style={{ minWidth: "60px" }}>
              <a href="#"> <Image className="avatar-img rounded-circle" src={MuxnLogo1} alt="" height={60} width={60}></Image> </a>
            </div>
            <div className="card-body flex-grow-1">
              <h2> MUXN </h2>
              <h6 className="fw-bold">Bem vindo!</h6>
              <div>
                <p className="text-wrap">
                  Escrever é esquecer. 
                            A literatura é a maneira mais agradável de ignorar a vida. 
                            A música embala, as artes visuais animam, as artes vivas (como a dança e a arte de representar) entretêm. 
                            A primeira, porém, afasta-se da vida por fazer dela um sono; as segundas, contudo, não se afastam da vida - 
                            umas porque usam de fórmulas visíveis e portanto vitais, outras porque vivem da mesma vida humana.
                            Não é o caso da literatura. Essa simula a vida. Um romance é uma história do que nunca foi e um drama é um romance dado sem narrativa. 
                            Um poema é a expressão de ideias ou de sentimentos em linguagem que ninguém emprega, pois que ninguém fala em verso.
                            Fernando Pessoa.
                </p>
              </div>
              
                          
                          
              {/* <FeedCarousel/> */}


              <Image src={Ceu} className="img-fluid" alt="none"height={600} width={700}/>
              <div id="div_botoes">
                <Button><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg></Button>
                <Button><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2-icon lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg></Button>
                <Button><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-icon lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg></Button>
                <Button><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-handshake-icon lucide-heart-handshake"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg></Button>
              </div>

            </div>

            </div>
          </div>



          {/* <div>
            <ul className=" nav nav-pills nav-stack small fw-normal">
              <li className="nav-item me-1">
                <Button className="nav-link bg-light py-1 px-2 mb-0" href="#!"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </Button>
              </li>
              <li className="nav-item me-1">
                <a className="nav-link bg-light py-1 px-2 mb-0" href="#!"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                </svg> Compartilhar</a>
              </li>
              <li className="nav-item me-1">
                <a href="#" className="nav-link bg-light py-1 px-2 mb-0"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                </svg>Comentar</a>
              </li>
              <li className="nav-item me-1">
                <a href="#" className="nav-link bg-light py-1 px-2 mb-0"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                </svg>Apoiar</a>
              </li>
            </ul> 
          </div>*/}
          {/* </div> */}
          {/* <!-- FIM DA PUBLICAÇAO --> */}
        
          <div className="b-example-divider"></div>

{/* ///////////////////////////////////////////////////////////////////////////////////////// */}
     {/* <div className="col-md-8 col-lg-6 vstack gap-4"> */}
      {/* //PUBLICAR NO FEED */}
          <div id="post2" className="d-flex mt-4">
            <div id="subdiv_post2">

                {/* <!-- LOGO/IMAGEM --> */}
            <div className="avatar avatar-xs me-2" style={{ minWidth: "60px" }}>
              <a href="#"> <Image className="avatar-img rounded-circle" src={Arara} alt="" height={60} width={60}></Image> </a>
            </div>
            <div className="card-body flex-grow-1">
              <h2>Ambiental Force</h2>
              <h6 className="fw-bold">EM DEFESA AOS ANIMAIS, APOIE ESSA CAUSA!</h6>
              <p className="text-wrap">
                Silvestre não é pet! DIGA NÃO AO TRÁFICO DE ANIMAIS. Tráfico de animais é crime, Denuncie!
              </p>
                          
              <FeedCarousel/>
                <div id="div_botoes">
                  <Button><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg></Button>
                  <Button><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2-icon lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg></Button>
                  <Button><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-icon lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg></Button>
                  <Button><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-handshake-icon lucide-heart-handshake"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg></Button>
                </div>

              {/* <Image src="/img/michelin.jpeg" className="img-fluid" alt="none"height={600} width={600}/> */}
            </div>

            </div>
          </div>


          <div>
            {/* <ul className=" nav nav-pills nav-stack small fw-normal">
              <li className="nav-item me-1">
                <a className="nav-link bg-light py-1 px-2 mb-0" href="#!"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                </svg> Curtir</a>
              </li>
              <li className="nav-item me-1">
                <a className="nav-link bg-light py-1 px-2 mb-0" href="#!"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                </svg> Compartilhar</a>
              </li>
              <li className="nav-item me-1">
                <a href="#" className="nav-link bg-light py-1 px-2 mb-0"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                </svg>Comentar</a>
              </li>
              <li className="nav-item me-1">
                <a href="#" className="nav-link bg-light py-1 px-2 mb-0"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                </svg>Apoiar</a>
              </li>
            </ul> */}
          </div>
          {/* </div> */}
          {/* <!-- FIM DA PUBLICAÇAO --> */}

{/* ///////////////////////////////////////////////////////////////////////// */}

           


      
         </div> 
       
      </div>
       
       </div>
      </div>
      {/* </div> */}

       
    </main>
    </>
        

  )
  }
  