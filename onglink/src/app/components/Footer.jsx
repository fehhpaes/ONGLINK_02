// components/Footer.js
"use client";
import Link from 'next/link';
import Image from 'next/image';
import logo_onglink_01 from '@/src/app/img/LOGO_ONGLINK_1.png'
import logo_muxn from '@/src/app/img/MUXN_logo1.png'
import logo_instagram from '@/src/app/img/icons/instagram_6422200.png'
import logo_twitter from '@/src/app/img/icons/twitter_5968830.png'
import logo_facebook from '@/src/app/img/icons/social_12942738.png'
import "@/src/app/CSS/footer.css"
import { useRouter } from 'next/navigation';
import { Button, Form } from 'react-bootstrap';


export default function Footer() {
  
    const router = useRouter();
  
    return (
    <footer className="bg-header py-12 px-4 md:px-8" id='footer'>
      <div id='div_footer' className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Coluna 1 - Vazia ou para outros elementos */}
            <div id="logos"className="flex">
                <div>
                    <Image src={logo_muxn}
                    alt="Logo MUXN"
                    width={100}
                    height={100}
                    className="shadow-md border border-white ml-8 "
                    ></Image>
                </div>

                <div>
                    <Image src={logo_onglink_01}
                    alt="Logo MUXN"
                    width={100}
                    height={100}
                    className="shadow-md border border-white ml-8 "
                    ></Image>
                </div>
                
                

            </div>
            {/* Coluna 2 - Links rápidos */}
            <div id='div_ul'>
            
            <ul id= 'ul_footer' className="space-y-2 text-center">
                <li>
                <Link 
                    onClick={() => {router.push("/legislacao")}}
                    href="/legislacao" className="text-white hover:text-blue-600 transition-colors">
                    Legislação
                </Link>
                </li>

                <li>
                <Link 
                    onClick={() => {router.push("/nossa_historia")}}
                    href="/nossa_historia" className="text-white hover:text-blue-600 transition-colors">
                    Nossa história
                </Link>
                </li>

                <li>
                <Link 
                    onClick={() => {router.push("/parceiros")}}
                    href="/parceiros" className="text-white hover:text-blue-600 transition-colors">
                    Parceiros
                </Link>
                </li>
            </ul>
            </div>

            {/* Coluna 3 - Newsletter */}
            <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Subscreva na nossa newsletter</h3>
            <p className="text-white mb-4">
                Receba as modalidades diretamente pelo seu email.
            </p>
            <form className="" id='form_footer'>
                <Form.Control
                type="email"
                placeholder="Email address"
                className=""
                required
                />
                <Button
                variant='primary'
                className=""
                >
                Subscribe
                </Button>
            </form>
            </div>

        
      </div>

      <div id="div_infos_redes_sociais" className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-200 text-center flex">

        {/* Rodapé inferior */}
        <div id='div_Copyright' className="ml-10 text-white">
            <p>© 2024 MUXN Company, Inc. All rights reserved.</p>
        </div>
        <div className='w-50'></div>
            <div className='d-flex mr-4'
            >
                <Image src={logo_twitter}
                alt="Logo Twitter"
                width={24} // Largura em pixels
                height={24} // Altura em pixels
                className="shadow-md ml-4 mt-1 mb-7"
                style={{ minWidth: "24px", minHeight: "24" }}>
                 
                </Image>
                
                
                <Image src={logo_instagram}
                    alt="Logo Twitter"
                    width={24} // Largura em pixels
                    height={24} // Altura em pixels
                    className="shadow-md ml-4 mt-1 mb-7">
                    
                </Image>
                
                
                <Image src={logo_facebook}
                    alt="Logo Twitter"
                    width={24} // Largura em pixels
                    height={24} // Altura em pixels
                    className="shadow-md ml-4 mt-1 mb-7">
                    
                </Image>
            </div>
        
      </div>

    </footer>
  );
}