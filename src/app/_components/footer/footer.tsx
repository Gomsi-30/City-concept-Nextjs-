import Link from 'next/link';
import Logo from '../navbar/logo';

const Footer = () => {
  return (
    <footer className="mt-[100px] bg-white border-t-[2px] w-full p-6 md:p-10">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-13 items-center">
        <div className="flex flex-col gap-5 md:gap-6 justify-center items-center md:items-start text-center md:text-left">
          <Logo />
          <p className="">We are here to provide the best facility for locations.</p>
          <div className="font-semibold ">
            © 2024 City-concept. All rights reserved.
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 sm:gap-[85px] mt-[25px] w-full justify-center sm:px-0 text-left">
          <div>
            <ul className="space-y-2">
            <li>
                <Link href="/" className=" font-bold hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className=" font-bold hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blogs" className=" font-bold hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contactus" className=" font-bold hover:underline">
                  Contact Us
                </Link>
              </li>
             
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
            <li>
                <Link href="/disclaimer" className=" font-bold hover:underline">
                  Disclaimer
                </Link>
              </li>
            <li>
                <Link href="/career" className=" font-bold hover:underline">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/terms" className=" font-bold hover:underline">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className=" font-bold hover:underline">
                  Privacy
                </Link>
              </li>
             
             
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
            <li>
                <Link href="/article/realestate" className=" font-bold hover:underline">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/tools/flat" className=" font-bold hover:underline">
                  Tools
                </Link>
              </li>
             
              <li className='w-full'>
                <Link href="/affiliatedisclosures" className="w-[100%]  font-bold hover:underline">
                  Affiliate Disclosures
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
