import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Affiliate Disclosures",
};
export default function AffiliateDisclosures() {
    return (
      <div className="bg-white p-8 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Affiliate Disclosures</h1>
  
        <p className="mb-4">
        Cityconcept participates in affiliate marketing programs and may earn commissions from qualifying purchases made through links on our website and Services.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">1. What is Affiliate Marketing?</h2>
        <p className="mb-4">
        Affiliate marketing involves promoting products or services offered by other companies and earning a commission when users make purchases through our affiliate links. These commissions help support the maintenance and operation of our Services.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Affiliate Links
        </h2>
        <p className="mb-4">
        When you click on an affiliate link provided on our website or in our communications, we may receive a commission if you make a purchase through that link. This does not affect the price you pay for the product or service.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">3. No Additional Cost</h2>
        <p className="mb-4">
        There is no additional cost to you for using affiliate links. The commissions we earn come from the sellers of the products or services and are not added to your purchase price.
        </p>
  
        {/* New Section based on additional content */}
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Transparency and Integrity</h2>
        <p className="mb-4">
        We strive to provide honest and unbiased information. Our participation in affiliate programs does not influence our opinions, recommendations, or content. We only promote products or services that we believe will be of value to our users.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Affiliate Relationships</h2>
        <p className="mb-4">
        Our affiliate relationships may include, but are not limited to, partnerships with various companies and service providers. We are not responsible for the products or services offered by these third parties.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
        <p className="mb-4">
        If you have any questions about our affiliate relationships or how they affect our content, please contact us at [info@cityconcept.com].
        </p>
    </div>
      
    );
  }
  