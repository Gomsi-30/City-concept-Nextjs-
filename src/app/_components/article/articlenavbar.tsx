'use client';

import { usePathname } from 'next/navigation';
import Link from "next/link";

const ArticleNavbar = () => {
    let path = usePathname();
    path = path.split('/')[2];
    path = path[0] + path[1];

    return (
        <div className='w-full border-black border-[1px] py-2 overflow-x-auto'>
            <div className='container  sm:flex flex-row justify-between'> 
            <div className=' grid grid-cols-2 items-center gap-5 sm:grid-cols-4 sm:gap-5 justify-center lg:gap-7  text-xl font-bold'>
                <Link className={`${path.startsWith('re') ? 'font-bold underline' : ''}`} href='/article/realestate'>Real Estate</Link>
                <Link className={`${path.startsWith('pr') ? 'font-bold underline' : ''}`} href='/article/properties'>Properties</Link>
                <Link className={`${path.startsWith('ma') ? 'font-bold underline' : ''}`} href='/article/marketnews'>Market News</Link>
                <Link className={`sm:ml-5 ${path.startsWith('lo') ? 'font-bold underline' : ''}`} href='/article/loan' >Loan</Link>
               
            </div>
            <div>
               
            </div>
            </div>
        </div>
    );
}

export default ArticleNavbar;
