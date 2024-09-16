import ContactForm from '../_components/contactus2/contactus2'
import Header from '../_components/heading/header'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Career",
};
const ContactPage = ()=> {
    return (
        <div className='container'>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-3'>
                    <h1 className='hh w-full text-center text-xl font-semibold'>We are hiring</h1>
                    <Header label='Be a part of cityconcept' />
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactPage;