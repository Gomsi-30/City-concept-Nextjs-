import Link from 'next/link';

const Helper = () => {
  return (
    <div className="mt-[120px] container flex flex-col lg:flex-row w-[80%] justify-center gap-6">
      {/* Flat Price Calculator */}
      <Link href="/tools/flat" >
        <div className="flex rounded-md flex-col h-[100px] bg-blue-600 text-white items-center justify-center cursor-pointer p-1 md:px-8 lg:p-2 lg:px-3 xl:px-9 py-2">
          <h1 className="text-xl md:text-3xl lg:text-1xl hh font-medium">Flat Price</h1>
          <h1 className="text-xl md:text-2xl lg:text-1xl font-medium hh">Calculator</h1>
        </div>
      </Link>

      {/* Villa Price Calculator */}
      <Link href="/tools/villa" >
        <div className="flex rounded-md flex-col h-[100px] bg-blue-600 text-white items-center justify-center cursor-pointer p-1 lg:p-2 md:px-8 lg:px-3 xl:px-7 py-2">
          <h1 className="text-xl md:text-3xl lg:text-1xl hh font-medium">Villa Price</h1>
          <h1 className="text-xl md:text-2xl lg:text-1xl font-medium hh">Calculator</h1>
        </div>
      </Link>

      {/* House Price Calculator */}
      <Link href="/tools/house" >
        <div className="flex rounded-md flex-col h-[100px] bg-blue-600 text-white items-center justify-center cursor-pointer p-1 lg:p-2 lg:px-3 xl:px-6 py-2">
          <h1 className="text-xl md:text-3xl lg:text-1xl hh font-medium">House Price</h1>
          <h1 className="text-xl md:text-2xl lg:text-1xl font-medium hh">Calculator</h1>
        </div>
      </Link>
    </div>
  );
};

export default Helper;
