import { Button } from '@/components/ui/button';
import Image from 'next/image';
import imageCancha from '../../../../../public/imagen-cancha.jpg';
import Link from 'next/link';

const CardCancha = ({ item }) => {
  return (
    <div className="relative w-full">
      <Image src={imageCancha} width={550} height={100} />
      <div className="absolute top-0  bg-black/50 w-full h-full "></div>
      <div className="absolute top-0 w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center text-white">
          <p className="text-2xl font-bold">{item.name}</p>
          <Link href={`cancha/${item.id_cancha}`}>
            <Button>Ver Disponibilidad</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardCancha;
