type HeaderProps = {
    label : string;
    center? : boolean;
}
const Header = ({label,center=true}:HeaderProps)=>{
   return (
     <div className={`hh container w-full font-bold text-4xl ${center ? 'text-center' : ''} `}>
        {label}
     </div>
   )
}

export default Header;