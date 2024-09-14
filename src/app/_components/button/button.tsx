import Link from 'next/link'

type ButtonProps = {
    label : string; 
    link? : string; 
    disabled? : boolean
}
const Button = ({label,link}:ButtonProps)=> {
   return (
    <div className='w-full  text-center  font-semibold text-lg'>
        <Link href={`${link}`}><button className='bg-blue-500 text-white p-2 rounded-md '>{label}</button></Link>
    </div>
   )
}

export default Button;