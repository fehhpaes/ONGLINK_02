"use client";
// import './styles/header_alt.css';
// import './styles/menu.css';
// import './styles/main.css';
// import './styles/footer.css';
// import './styles/body.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import logo_muxn from '@/src/app/img/MUXN_logo1.png';
import axios from "axios";
import { useEffect, useState } from "react";
// import "../styles/globals.css"; 


export default function Home() {
  
  const [message, setMessage] = useState<string>();

  useEffect(() => {

    const getHello = async() => {
        const response = await axios.get("http://localhost:3001");

        setMessage (response.data);
        console.log (response.data);
    }

    getHello();

  }, []);

  return (
    <>
    <main className="bg-body-secondary p-2">
      {/* <!--Main-->  */}
      <div className="container"> 

      <div className="row g-4">
        <div className="col-lg-3">
          <div className="offcanvas-body d-block px-2 px-lg-0">
            
            <div className="card overflow-hidden">
           
              <div className="h-50px"></div>
                
                <div className="card-body pt-0 bg-success-subtle">
                  <div className="text-center">
                   
                    <div className="avatar avatar-lg mt-n5 mb-3">
                        <a href="#!"><Image className="avatar-img rounded-circle border d-inline" src={logo_muxn} alt="Logo" width="80"></Image></a>
                    </div>
                    
                    <h5 className="mb-0"> Empresa X </h5>
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
                        <li className=""><a className="link-body-emphasis" href="https://x.com/?lang=pt-br"><img src="/img/icons/twitter_5968830.png" className="bi" width="24" height="24"></img></a></li> {/*<use xlink:href="#twitter"/>*/}
                        <li className="ms-3"><a className="link-body-emphasis" href="https://www.instagram.com/"><img src="/img/icons/instagram_6422200.png" className="bi" width="24" height="24"></img></a></li>{/*<use xlink:href="#instagram"/>*/}
                        <li className="ms-3"><a className="link-body-emphasis" href="https://www.facebook.com/"><img src="/img/icons/social_12942738.png" className="bi" width="24" height="24"></img></a></li>{/*<use xlink:href="#facebook"/>*/}
                      </ul>
                      </div>
                  
                    
                  </div>

                 
                  <hr></hr>

                  
                  <ul className="nav nav-link d-flex align-items-center flex-column fw-bold gap-2">
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
                    
                    
                  </ul>
              </div>
            </div>
          </div>
            
        </div>
        <div className="col-md-8 col-lg-6 vstack gap-4">
        {/* <!-- PUBLICAR NO FEED --> */}
          <div className="d-flex" >
            {/* <!-- LOGO/IMAGEM --> */}
            <div className="avatar avatar-xs me-2">
            <a href="#"> <img className="avatar-img rounded-circle" src="./img/MUXN_logo1.png" alt="" width="60"></img> </a>
            </div>
                
                         <div className="card-body">
                          <h6 className="fw-bold">{message}</h6>
                         <p>
                          Escrever é esquecer. 
                          A literatura é a maneira mais agradável de ignorar a vida. 
                          A música embala, as artes visuais animam, as artes vivas (como a dança e a arte de representar) entretêm. 
                          A primeira, porém, afasta-se da vida por fazer dela um sono; as segundas, contudo, não se afastam da vida - 
                          umas porque usam de fórmulas visíveis e portanto vitais, outras porque vivem da mesma vida humana.
                          Não é o caso da literatura. Essa simula a vida. Um romance é uma história do que nunca foi e um drama é um romance dado sem narrativa. 
                          Um poema é a expressão de ideias ou de sentimentos em linguagem que ninguém emprega, pois que ninguém fala em verso.
                          Fernando Pessoa.
                         </p>
                         <img src="https://images.pexels.com/photos/2842734/pexels-photo-2842734.jpeg" className="img-fluid" alt="none"></img>
                         </div>
                         
                         
          </div>
          <div className="text-end">
            <ul className=" nav nav-pills nav-stack small fw-normal">
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

            </ul>
          </div>
          {/* <!-- FIM DA PUBLICAÇAO --> */}
          
        {/* //PUBLICAR NO FEED */}
          <div className="d-flex">
                {/* <!-- LOGO/IMAGEM --> */}
            <div className="avatar avatar-xs me-2">
              <a href="#"> <img className="avatar-img rounded-circle" src="https://imgs.pexels.com/photos/23551222/pexels-photo-23551222/free-photo-of-arara-caninde.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="60"></img> </a>
            </div>
            <div className="card-body">
              <h6 className="fw-bold">EM DEFESA AOS ANIMAIS, APOIE ESSA CAUSA!</h6>
              <p>
                Silvestre não é pet! DIGA NÃO AO TRÁFICO DE ANIMAIS. Tráfico de animais é crime, Denuncie!
              </p>
              <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://images.pexels.com/photos/27168481/pexels-photo-27168481/free-photo-of-natureza-passaro-ave-passarinho.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid" alt="Tucano"></img>
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/5919712/pexels-photo-5919712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid" alt="Capivara"></img>
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/29529996/pexels-photo-29529996/free-photo-of-macaco-leao-dourado-mico-em-um-galho-de-arvore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid" alt="..."></img>
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/1462053/pexels-photo-1462053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid" alt="..."></img>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <img src="https://images.pexels.com/photos/18789466/pexels-photo-18789466/free-photo-of-formula-1-asa-dianteira-bmw.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid" alt="none"></img>
            </div>
            
          </div>
          <div>
            <ul className=" nav nav-pills nav-stack small fw-normal">
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
            </ul>
          </div>
          </div>
          {/* <!-- FIM DA PUBLICAÇAO --> */}
      </div>
    </div>  
    </main>
   </> 
  );
}
