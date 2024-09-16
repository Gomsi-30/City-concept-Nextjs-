import Image from 'next/image';
import ContactForm from '../../_components/contactus/contactus';
import { allProperty } from '../../_components/data/allproperties';
import Header from '../../_components/heading/header';
import Helper from '@/app/_components/article/helpertoo';

// Component to handle carousel functionality on the client-side
import dynamic from 'next/dynamic';
import RequestCallbackPopup from './RequestCallbackPopup';

// Dynamically load the carousel component to ensure it runs client-side
const Carousel = dynamic(() => import('./Carousel'), { ssr: false });

interface HomeProps {
  params: {
    dynamicProperty: string;
  };
}

type Property = {
  id?: number;
  Title?: string;
  imgurl_1?: string;
  imgurl_2?: string;
  imgurl_3?: string;
  Starting_Price?: string;
  Property_Type?: string;
  Size?: string;
  Description?: string;
  Address?: string;
  Review_Image_1?: string;
  Review_Image_2?: string;
  Review_Image_3?: string;
  Review_Image_4?: string;
  Name_1?: string;
  Name_2?: string;
  Name_3?: string;
  Name_4?: string;
  Review_1?: string;
  Review_2?: string;
  Review_3?: string;
  Review_4?: string;
  imgurl_4?: string;
  imgurl_5?: string;
  imgurl_6?: string;
  imgurl_7?: string;
  About?:string;
}

export const generateStaticParams = () => {
  return allProperty.map(({ Title }) => ({
    dynamicProperty: `${Title.replace(/[^A-Za-z0-9]+/g, "-")}`,
  }));
};

export const generateMetadata = ({ params }: { params: { dynamicProperty: string } }) => {
  const { dynamicProperty } = params;

  const article = allProperty.find(({ Title }) => {
    return Title.replace(/[^A-Za-z0-9]+/g, "-") === dynamicProperty;
  });

  if (article) {
    return {
      title: article.Title,
      description: article.Description.at(-1),
      openGraph: {
        url: `/${dynamicProperty}`,
        title: article.Title,
        description: article.Description.at(-1),
        images: [`/articleassets/allproperties/${article.imgurl_1}`, `/articleassets/allproperties/${article.imgurl_2}`,` /articleassets/allproperties/${article.imgurl_3}`],
      },
      twitter: {
        card: "summary_large_image",
        title: article.Title,
        description: article.Description.at(-1),
        images: [`/articleassets/allproperties/${article.imgurl_1}`, `/articleassets/allproperties/${article.imgurl_2}`,` /articleassets/allproperties/${article.imgurl_3}`],
      },
    };
  }

  return {
    title: 'Blog Not Found',
    description: 'No blog found for the given parameters',
  };
};

const Home = ({ params }:{params:{dynamicProperty:string}}) => {
  const { dynamicProperty } = params;

  const property: Property | undefined = allProperty.find(
    (i) => i.Title.replace(/[^A-Za-z0-9]+/g, '-') === dynamicProperty
  );

  if (!property) {
    return <div>Property not found</div>;
  }

  const images = [property.imgurl_1, property.imgurl_2, property.imgurl_3].filter((img): img is string => !!img);

  return (
    <div className="min-h-screen">
      <Carousel images={images} />

      <div className="text-center mt-8">
        <h2 className="text-xl font-bold">{property.Title}</h2>
        <p className="md:px-[120px] lg:px-[230px] text-gray-600 font-medium text-lg mt-2">{property.Description}</p>
        <p className="text-gray-600 mt-3 font-medium text-lg">{property.Address}</p>
        <RequestCallbackPopup />
      </div>

      <div className="bg-blue-600 w-full mt-[50px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-center text-white py-6 px-4 mt-8">
            <div className="text-center mb-4 lg:mb-0">
              <h3 className="text-xl lg:text-2xl font-bold">{property.Starting_Price}</h3>
              <p className="text-base lg:text-lg">Starting Price</p>
            </div>
            <div className="text-center mb-4 lg:mb-0">
              <h3 className="text-xl lg:text-2xl font-bold">{property.Property_Type}</h3>
              <p className="text-base lg:text-lg">Flats</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl lg:text-2xl font-bold">{property.Size}</h3>
              <p className="text-base lg:text-lg">sq.ft</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[100px] container gap-12 w-full flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="flex flex-col gap-5 lg:w-[86%]">
          <h1 className="hh text-4xl">About Us</h1>
          <p className="text-md font-medium">
            {property.About}
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative h-[200px] w-full">
              <Image alt="" src="/articleassets/cityconcept21.jpg" fill className="object-cover object-center rounded-md" />
            </div>
            <div className="relative h-[200px] w-full">
              <Image alt="" src="/articleassets/cityconcept22.jpg" fill className="object-cover object-center rounded-md" />
            </div>
            <div className="relative h-[200px] w-full">
              <Image alt="" src="/articleassets/cityconcept23.jpg" fill className="object-cover object-center rounded-md" />
            </div>
            <div className="relative h-[200px] w-full">
              <Image alt="" src="/articleassets/cityconcept24.jpg" fill className="object-cover object-center rounded-md" />
            </div>
          </div>
        </div>
        <div className="lg:w-[80%] mt-[25px] sticky">
          <ContactForm />
        </div>
      </div>
      <div className="container mt-[110px] w-full flex">
  <div className=" w-[50%]">
    <Header label="Reviews" center={false} />
    <div className=" grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 mt-[50px]">
  {[1, 2, 3, 4].map((i) => (
    <div key={i} className="flex w-2/2 flex-col p-4 shadow-lg rounded-lg gap-3 sm:items-center">
      <div className="relative h-12 w-12">
        <Image
          alt=""
          src={`/articleassets/allproperties/${property[`Review_Image_${i}` as keyof Property]}`}
          fill
          className="rounded-full object-center object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 text-center sm:text-center">
        <div className="font-semibold text-lg">{property[`Name_${i}` as keyof Property]}</div>
        <div className="font-medium text-md line-clamp-2">{property[`Review_${i}` as keyof Property]}</div>
      </div>
    </div>
  ))}
</div>


  </div>
</div>


      <Helper />
      <div className="mt-[90px] flex-col flex gap-5">
        <Header label="Description" center={false} />
        <p className="container text-lg font-regular pr-[320px] lg:pr-[500px] xl:pr-[600px]">
        {property.Description}
        </p>
      </div>
    </div>
  );
};

export default Home;
