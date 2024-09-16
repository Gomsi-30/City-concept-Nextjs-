import SimpleCard from './_components/simplecard/simplecard'
import Header from './_components/heading/header'
import Button from './_components/button/button'
import Banner from './_components/banner/banner'
import GridCards from './_components/grid-card/gridcard'
import ArticleCards from './_components/article-card/articlecard'
import TextImageCard from './_components/text-img-card/textimgcard'
import { allProperty } from './_components/data/allproperties';
import { loan } from './_components/data/loan';
import {testimonials} from './_components/data/testimonials'
import Testimonial from './_components/testimonials/testimonial'
import ContactForm from './_components/contactus/contactus'

type Property =  {
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

type Loan = {
  imgUrl?:string;
  title?:string;
}

export default function Home() {
  let a = [];
  const getRandomProperties = () => {
    const shuffled = allProperty.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 6).map((property: Property) => ({
      imgUrl: property.imgurl_1,
      title: property.Title,
      money: property.Starting_Price
    }));
    return selected;
  };

  a = getRandomProperties();
  let b = [];
  const getRandomArticles = () => {
    const shuffled = loan.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3).map((article:Loan ) => ({
      imgUrl: article.imgUrl,
      title: article.title,
    }));
    return selected;
  };

  b = getRandomArticles();
  return (
    <div className="flex flex-col gap-[105px] h-auto">
       <SimpleCard />

       <div className='flex flex-col gap-10'>
       <Header label='Discover properties across the US' />
       <TextImageCard />
       </div>

       <div className='flex flex-col gap-10'>
       <Header label='Premium luxury options' center={false} />
       <GridCards data={a} />
       </div>

       <Button label='Browse All' link='/property' />

       <Banner />
       <div className='flex flex-col gap-10'>
       <Header label='Testimonials' />
       <Testimonial data={testimonials} />
       </div>

      <div className='flex flex-col gap-10'>
       <Header label='Articles' />
       <ArticleCards path='loan' data={b} />
      </div>
      <ContactForm />
    </div>
  );
}

