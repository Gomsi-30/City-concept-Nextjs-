import Link from 'next/link';
import Image from "next/image";

type LogoProps = {
  label? : string
}

const Logo = ({label='/logo.png'}:LogoProps) => {
    return ( 
    <>
      <Link href='/'>
          <Image src={label} alt='logo' height={130} width={130} className='text-white' />
      </Link>
    </> 
    );
}
 
export default Logo;