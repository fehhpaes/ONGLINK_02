// components/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import logo_onglink_01 from '@/app/src/img/LOGO_ONGLINK_1.png'
import logo_muxn from '@/app/src/img/MUXN_logo1.png'
import logo_instagram from '@/app/src/img/icons/instagram_6422200.png'
import logo_twitter from '@/app/src/img/icons/twitter_5968830.png'
import logo_facebook from '@/app/src/img/icons/social_12942738.png'

export default function Footer() {
  return (
    <footer className="bg-header py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <div>
            
            <ul className="space-y-2 text-center">
                <li>
                <Link href="/legislacao" className="text-white hover:text-blue-600 transition-colors">
                    Legislação
                </Link>
                </li>
                <li>
                <Link href="/nossa-historia" className="text-white hover:text-blue-600 transition-colors">
                    Nossa história
                </Link>
                </li>
                <li>
                <Link href="/parceiros" className="text-white hover:text-blue-600 transition-colors">
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
            <form className="flex flex-row space-y-3 ">
                <input
                type="email"
                placeholder="Email address"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white w-45"
                required
                />
                <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-24 h-10 text-center ml-2 mr-2"
                >
                Subscribe
                </button>
            </form>
            </div>

        
      </div>

      <div id="div_infos_redes_sociais" className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-200 text-center flex">

        {/* Rodapé inferior */}
        <div className="max-w-6xl mx-auto text-center text-white">
            <p>© 2024 MUXN Company, Inc. All rights reserved.</p>
        </div>
        <div id="redes_sociais" className="inline-flex object-right">

                <div>
                <Image src={logo_twitter}
                alt="Logo Twitter"
                width={24} // Largura em pixels
                height={24} // Altura em pixels
                className="shadow-md ml-4 mt-1 mb-7">
                
                </Image>
                </div>

                <div>
                <Image src={logo_instagram}
                    alt="Logo Twitter"
                    width={24} // Largura em pixels
                    height={24} // Altura em pixels
                    className="shadow-md ml-4 mt-1 mb-7">
                    
                </Image>
                </div>

                <div>
                <Image src={logo_facebook}
                    alt="Logo Twitter"
                    width={24} // Largura em pixels
                    height={24} // Altura em pixels
                    className="shadow-md ml-4 mt-1 mb-7">
                    
                </Image>
                </div>
            </div>
          </div>
    </footer>
  );
}