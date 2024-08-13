import Image from 'next/image';
import imageAuth from '../../../public/image-auth.jpg';
import logo from '../../../public/logo-club.jpg';
export default function layout({ children }) {
  return (
    <div className="grid grid-cols-1 md:gap-0 md:grid  md:grid-cols-2 w-[95%] mx-auto m-10">
      <div className="md:hidden flex w-full h-full felx justify-center py-10">
        <Image
          src={logo}
          width={70}
          height={100}
          alt="logo"
          className="rounded-full md:hidden"
        />
      </div>
      <div className="col-span-1">
        <Image
          src={imageAuth}
          width={900}
          height={100}
          className="hidden md:block md:w-full md:h-[730px] md:object-cover rounded-md"
        />
      </div>
      <div className=" col-span-1">{children}</div>
    </div>
  );
}
