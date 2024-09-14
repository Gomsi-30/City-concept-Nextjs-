import Link from 'next/link';

const Helper = () => {
  return (
    <div className="mt-[120px] container flex flex-col sm:flex-row justify-between gap-2">
      {/* Flat Price Calculator */}
      <Link href="/tools/flat" >
        <div className="flex rounded-md flex-col h-[100px] bg-blue-600 text-white items-center justify-center cursor-pointer p-2">
          <h1 className="text-xl lg:text-2xl hh font-medium">Flat Price</h1>
          <h1 className="text-xl lg:text-2xl font-medium hh">Calculator</h1>
        </div>
      </Link>

      {/* Villa Price Calculator */}
      <Link href="/tools/villa" >
        <div className="flex rounded-md flex-col h-[100px] bg-blue-600 text-white items-center justify-center cursor-pointer p-2">
          <h1 className="text-xl lg:text-2xl hh font-medium">Villa Price</h1>
          <h1 className="text-xl lg:text-2xl font-medium hh">Calculator</h1>
        </div>
      </Link>

      {/* House Price Calculator */}
      <Link href="/tools/house" >
        <div className="flex rounded-md flex-col h-[100px] bg-blue-600 text-white items-center justify-center cursor-pointer p-2">
          <h1 className="text-xl lg:text-2xl hh font-medium">House Price</h1>
          <h1 className="text-xl lg:text-2xl font-medium hh">Calculator</h1>
        </div>
      </Link>
    </div>
  );
};

export default Helper;
