import Image from 'next/image';

type AboutProps = {
  reverse: boolean;
  link: string;
  data: string;
  heading: string;
};

const AboutSection = ({ reverse, link, data, heading }: AboutProps) => {
  return (
    <div>
      <section
        className={`py-16 flex flex-col gap-4 ${reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'} 
         sm:items-start space-y-8 md:space-y-0 xl:space-x-11`}
      >
        {/* Image Section */}
        <div className="w-full xl:w-[50%]">
          <div className="relative w-full h-[330px] aspect-square">
            <Image
              src={link}
              alt="Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full xl:w-[50%] flex flex-col justify-center h-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-3">
            {heading}
          </h2>
          <p className="text-gray-600 mb-4 md:mb-6 text-xl font-medium leading-7">
            {data}
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
