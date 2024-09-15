import AboutSection from '../_components/aboutus/aboutus'
import ContactForm from '../_components/contactus/contactus'
const Services = () => {
  return (
    <div className='container'>
     <AboutSection reverse={false} link='/articleassets/cityconcept25.jpg' data='Discover your ideal property with ease at Cityconcept Real Estate. Our extensive listings, advanced search tools, and personalized filters help you explore a wide range of homes that match your unique preferences and needs. From charming apartments to luxurious estates, we make finding your dream home a seamless and enjoyable experience.' heading='Find Your Dream Home' />
     <AboutSection reverse={true} link='/articleassets/cityconcept26.jpg' data='Simplify your property management with our comprehensive services designed to handle all aspects of property care. Our expert team manages everything from tenant placement and rent collection to maintenance and legal compliance, ensuring your property operates smoothly and efficiently while maximizing its value.' heading='Property Management' />

     <AboutSection reverse={false} link='/articleassets/cityconcept27.jpg' data='Stay ahead of the market with our in-depth market analysis services. We provide valuable insights into market trends, property values, and neighborhood dynamics, helping you make informed decisions whether you’re buying, selling, or investing. Our expert analysis equips you with the knowledge to navigate the real estate landscape confidently.' heading='Market Analysis' />

     <AboutSection reverse={true} link='/articleassets/cityconcept28.jpg' data='Unlock the potential of real estate investment with our expert guidance. We offer a curated selection of investment properties and provide detailed market insights to help you make strategic decisions. Whether you’re a seasoned investor or just starting, our team is here to help you identify profitable opportunities and achieve your investment goals.' heading='Investment Properties' />
     <ContactForm />
    </div>
  );
};

export default Services;
