
import CreationDate from '../global/creation-date';
import Image from 'next/image';
import Share from '../global/share'

type BannerProps = {
  check: 'a' | 'b' | 'c';
  which:string;
  headingText?: string;
  profileImage?: string;
  profileName?: string;
  articleImage?: string;
  profileReadTime?: string;
  articleNumber?: number; 
  gap?:boolean
};

const DynamicBanner = ({
  gap=false,
  which,
  check,
  headingText,
  profileImage,
  profileName,
  articleImage,
  profileReadTime,
  articleNumber
}: BannerProps) => {

  return (
    <>
      {check === 'c' && (
        <div className="flex flex-col items-center gap-4">
          <div className="">
            <h1 className="hh text-3xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold max-w-screen-md">
              {headingText}
            </h1>
          </div>

          <div className={`${gap ? 'h-[40px] w-full' : 'md:px-[250px] container'} items-center flex relative flex-row  justify-between gap-2 mt-4`}>
            <div>
              <div className='flex flex-row items-center gap-4'>
                <Share articleTitle='headingText' />
                {articleNumber !== undefined && <div className="text-sm font-medium text-gray-500"><CreationDate articleNumber={articleNumber} /></div>}
                {profileImage && (
  <div className="w-7 h-7 relative">
    <Image 
      src={`/articleassets/blogimages/${profileImage}.jpg`}  
      alt="profile-image"
      fill
      className="object-cover object-center rounded-full"
    />
  </div>
)}

                {profileName && <div className="hh font-regular font-medium text-gray-500">{profileName}</div>} 
              </div>
              </div>
              {profileReadTime && <div className="text-sm font-medium text-gray-500">{profileReadTime} </div>}
          </div>

          {/* Banner with Gradient */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[400px] w-full max-w-screen-md">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.6)_100%)] bg-cover bg-center"></div>
            {articleImage && (
              <Image src={`/articleassets/${which}/${articleImage}`} alt="Banner Image" layout="fill" objectFit="cover" />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicBanner;