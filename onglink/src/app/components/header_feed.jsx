"use client";
import logo_onglink_01 from '@/src/app/img/LOGO_ONGLINK_1.png'
import Image from "next/image"
import Link from 'next/link'
import {Button, Col, Row} from "react-bootstrap"
import { useRouter } from "next/navigation";




export default function Header_feed() {
    const router = useRouter();
    
    return(
        <header className="py-3" id="header_header">
              <div className="container-fluid d-grid gap-3 align-items-center">
                <div className="d-flex align-items-center" id="div_header_feed">
                  
                    <Link href="/">
                      <Image className="border" src={logo_onglink_01} 
                          alt="Logo ONGLink"
                          width={242}
                          id="logo_onglink">
                      </Image>
                    </Link>
                    
                  <form className="w-100 me-3" role="search">
                  </form>
        
                  <div id="botoes_feed">
                    <Button variant="success"> 
                      Perfil</Button>

                    <Button variant="success" >Publicar</Button>

                    <Button variant="success" >Eventos</Button>

                    <Button variant="success" >Aprovação</Button>

                    <Button variant="success"
                      >
                    
                    Sair</Button>
                  </div>
        
                </div>
              </div>
            </header>
    )
}