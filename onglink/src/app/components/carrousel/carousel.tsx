
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

function FeedCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="d-flex align-items-center">
    <Carousel slide={false} activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item>
        <div><Image src="/img/capivara.jpeg" className="img-fluid" alt="Capivara"width={600} height={600}/></div>
        </Carousel.Item>
      
      <Carousel.Item>
       <div><Image src="/img/tucano.jpeg" className="img-fluid" alt="Tucano" width={600} height={600} /></div>
      </Carousel.Item>

      <Carousel.Item>
       <div><Image src="/img/mico.jpeg" className="img-fluid" alt="Mico"width={600} height={600} /></div>
      </Carousel.Item>

      <Carousel.Item>
      <div><Image src="/img/arara_azul.jpeg" className="img-fluid" alt="Arara Azul" width={600} height={600} /></div>
      </Carousel.Item>

    </Carousel>
    </div>
  );
}

export default FeedCarousel;