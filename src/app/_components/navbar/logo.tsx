
import Image from "next/image";

type LogoProps = {
  label? : string
}

const Logo = ({label='/logo.png'}:LogoProps) => {
    return ( 
    <>
     <Image src={label} alt='logo' height={70} width={70} className='text-white' />
    </> 
    );
}
 
export default Logo;