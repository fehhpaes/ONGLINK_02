import Link from 'next/link';
import Image from 'next/image';
import logo_onglink_01 from '@/app/src/img/LOGO_ONGLINK_1.png'


export default function Header(){
    return(
        <header className="bg-header ">
        <div className="mt-0 pt-4 pb-4 pl-8">
        <Image
        src={logo_onglink_01} // Caminho relativo à pasta public
        alt="Logo ONGLink"
        width={100} // Largura em pixels
        height={100} // Altura em pixels
        className="shadow-md border border-white"
      />
        </div>
      </header>




    )
}