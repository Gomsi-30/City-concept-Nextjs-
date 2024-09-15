import AboutSection from '../_components/aboutus/aboutus'
import ContactForm from '../_components/contactus/contactus'
import ArticleCards from '../_components/article-card/articlecard'
// import Header from '../_components/heading/header'
const About = () => {
  const data=[
    {imgUrl:'cityconcept1.jpg'},{imgUrl:'cityconcept2.jpg'},{imgUrl:'cityconcept3.jpg'},{imgUrl:'cityconcept4.jpg'},{imgUrl:'cityconcept5.jpg'},{imgUrl:'cityconcept6.jpg'},{imgUrl:'cityconcept7.jpg'},{imgUrl:'cityconcept8.jpg'},{imgUrl:'cityconcept9.jpg'}]
  return (
    <div className='container'>
     <AboutSection reverse={false} link='/articleassets/blogimages/7.jpg' data={`Welcome to Cityconcept Real Estate, your ultimate destination for finding the perfect property in the United States. We are a dedicated team of real estate professionals with years of experience and a deep understanding of the ever-evolving real estate market. At Cityconcept, we pride ourselves on our commitment to excellence, integrity, and personalized service. Whether you're looking to buy sell, or rent, we are here to make your real estate journey seamless and successful.`} heading='Who we are?' />

     <AboutSection reverse={true} link='/articleassets/blogimages/10b.jpg' data='At Cityconcept Real Estate, our mission is to transform the real estate experience for our clients by providing unparalleled service, innovative solutions, and a deep commitment to their needs. We strive to be the most trusted and effective real estate platform in the United States, connecting buyers, sellers, and renters with their perfect properties. Our goal is to simplify the real estate process, making it more transparent and efficient, while offering expert guidance and support every step of the way.' heading='Our mission' />

     <ArticleCards data={data} />
     <div className='mt-[90px]'>
     <ContactForm />
    </div>
    </div>
  );
};

export default About;
