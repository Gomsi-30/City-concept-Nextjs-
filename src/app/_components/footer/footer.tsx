import Link from 'next/link';
import Logo from '../navbar/logo';

const Footer = () => {
  return (
    <footer className="mt-[100px] bg-blue-400 w-full p-6 md:p-10">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-13 items-center">
        {/* Logo and Description Section */}
        <div className="flex flex-col gap-5 md:gap-6 items-center md:items-start text-center md:text-left">
          <Logo />
          <p className="text-white">We are here to provide the best facility for locations.</p>
          <div className="font-semibold text-white">
            © 2024 Incb. All rights reserved.
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-[85px] mt-[25px] w-full text-center md:text-left">
          {/* Column 1 */}
          <div>
            <ul className="space-y-2">
            <li>
                <Link href="/" className="text-white font-bold hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="text-white font-bold hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-white font-bold hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contactus" className="text-white font-bold hover:underline">
                  Contact Us
                </Link>
              </li>
             
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
            <li>
                <Link href="/disclaimer" className="text-white font-bold hover:underline">
                  Disclaimer
                </Link>
              </li>
            <li>
                <Link href="/career" className="text-white font-bold hover:underline">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white font-bold hover:underline">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white font-bold hover:underline">
                  Privacy
                </Link>
              </li>
             
             
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-2">
            <li>
                <Link href="/article/realestate" className="text-white font-bold hover:underline">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-white font-bold hover:underline">
                  Tools
                </Link>
              </li>
             
              <li className='w-full'>
                <Link href="/affiliatedisclosures" className="w-[100%] text-white font-bold hover:underline">
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
