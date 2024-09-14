import Image from "next/image";

const TextImageCard = () => {
  return (
    <div className='container'>
    <div className='container mx-auto flex flex-col md:flex-row items-center gap-6 p-4'>
      <div className='w-full md:w-1/2 h-64 lg:h-72 relative'>
        <Image
          alt='Descriptive text'
          src='/articleassets/articleimages/29.jpg'
          fill
          className='object-cover object-center rounded-md'
        />
      </div>

      <div className='md:w-1/2 text-base sm:text-lg font-semibold opacity-80'>
        By 55,000 years ago, the first modern humans, or Homo sapiens, had
        arrived on the Indian subcontinent from Africa, where they had earlier
        evolved. These early humans spread and adapted to various environments,
        leading to the rich cultural diversity we see today.
      </div>
    </div>
    </div>
  );
};

export default TextImageCard;
