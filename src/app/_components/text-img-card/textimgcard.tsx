import Image from "next/image";

const TextImageCard = () => {
  return (
    <div className='container'>
    <div className='container mx-auto flex flex-col md:flex-row items-center gap-6 p-4'>
      <div className='relative w-full xl:w-1/2 h-64 md:h-80 lg:h-88'>
        <Image
          alt='Descriptive text'
          src='/articleassets/2.jpg'
          fill
          className='object-cover object-center rounded-md'
        />
      </div>

      <div className='md:w-1/2 text-base sm:text-xl font-semibold opacity-80'>
      At Cityconcept, we offer an extensive range of properties and advanced search tools tailored to your needs, ensuring a seamless and personalized experience. Our team of seasoned professionals provides expert insights and dedicated support, guiding you through every step of your real estate journey with integrity and excellence. Choose us to find your perfect home with confidence and ease.
      </div>
    </div>
    </div>
  );
};

export default TextImageCard;
