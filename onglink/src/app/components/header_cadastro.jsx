"use client";
import Link from 'next/link';
import Image from 'next/image';
import logo_onglink_01 from '@/src/app/img/LOGO_ONGLINK_1.png'
import { useRouter } from 'next/navigation';


export default function HeaderCadastro(){

  const router = useRouter();

    return(
      
      <>




        <header className="bg-header ">
          <div className="mt-0 pt-4 pb-4 pl-8">
            <Image
              src={logo_onglink_01} // Caminho relativo à pasta public
              alt="Logo ONGLink"
              width={130} // Largura em pixels
              height={130} // Altura em pixels
              className="shadow-md border border-white"

              onClick={() => {router.push("/")}}
            />
          </div>
      </header>

      </>


    )
}