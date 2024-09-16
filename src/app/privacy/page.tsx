import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-10 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policies</h1>

        {/* Section 1 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">§1. General Provisions</h2>
          <p className="text-gray-700 mt-2">
            1.1 The Policy is developed by applicable US laws regarding personal data protection. 
            This Policy is a complete statement of the privacy policy regarding any information 
            provided by the Website Visitor.
          </p>
          <p className="text-gray-700 mt-2">
            1.2 We reserve the right to amend this Policy periodically, specifying the date of the 
            latest revision at the beginning of the document. If you use our Website after the 
            revised version is published, it means that you agree with it.
          </p>
          <p className="text-gray-700 mt-2">
            1.3 If you have any questions or if you think not all information of interest is presented 
            in this Policy, please contact us: info@cityconcept.com.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">§2. Who Are We?</h2>
          <p className="text-gray-700 mt-2">
            2.1 Cityconcept Global Real Estate LLC is an international real estate broker based 
            in the United States.
          </p>
          <p className="text-gray-700 mt-2">
            2.2 Our Website is a collection of web pages hosted on the Internet, unified by a single 
            theme, design, and address.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">§3. What Information Do We Collect?</h2>
          <p className="text-gray-700 mt-2">
            3.1 To provide our services, we may ask for personal information including:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-2">
            <li>Name and contact details (telephone, email);</li>
            <li>Professional, business, and financial information, if required;</li>
            <li>Details of your request (e.g., the purpose of the purchase, dates of planned viewings).</li>
          </ul>
          <p className="text-gray-700 mt-2">
            3.2 Additionally, we collect domain names and IP addresses, and usage statistics (URLs, 
            number of pages visited, duration of page views, etc.).
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">§4. What is the Purpose of Personal Data Processing?</h2>
          <p className="text-gray-700 mt-2">
            4.1 We process personal data to:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-2">
            <li>Search for property/project of interest;</li>
            <li>Improve the content and usability of our Website;</li>
            <li>Notify you of new features, special events, and services.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">§5. What Rights Do You Have?</h2>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-2">
            <li>The right of access: Know what information about you is stored;</li>
            <li>The right to rectification: Change or add to your personal data;</li>
            <li>The right to erasure (right to be forgotten): Request deletion of your personal data;</li>
            <li>The right to restriction of processing: Limit the processing of your personal data;</li>
            <li>The right to data portability: Request a transfer of your data to a third party;</li>
            <li>The right to object: Oppose the use of your personal data.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">§6. Whom Can We Transfer Your Personal Data To?</h2>
          <p className="text-gray-700 mt-2">
            6.1 We may share your contact information and details of your request with our partners such as real estate agencies, agents, lawyers, and other consultants. You can request more information about these third parties.
          </p>
          <p className="text-gray-700 mt-2">
            6.2 You agree to the cross-border transfer of your personal data, including to countries that may not provide adequate protection.
          </p>
          <p className="text-gray-700 mt-2">
            6.3 We do not collect information about your racial or ethnic origin, political views, religious beliefs, health status, or sexual orientation.
          </p>
          <p className="text-gray-700 mt-2">
            6.4 During processing, we may perform actions such as collection, recording, structuring, storage, updating, retrieval, use, deletion, and distribution of your data.
          </p>
          <p className="text-gray-700 mt-2">
            6.5 If you participate in our events, we may disclose relevant personal data to event organizers and other participants.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">§7. How Do We Process Your Personal Data?</h2>
          <p className="text-gray-700 mt-2">
            7.1 We apply legal, organizational, and technical measures to protect your data from unauthorized access, destruction, change, and other illegal actions. However, transmission over the Internet is not completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">§8. Direct Marketing</h2>
          <p className="text-gray-700 mt-2">
            8.1 We may send you marketing materials to keep you informed about offers, market changes, and company events.
          </p>
          <p className="text-gray-700 mt-2">
            8.2 You can unsubscribe from our marketing communications at any time by clicking &quot;unsubscribe&quot; in the emails or contacting us at info@cityconcept.com.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">§9. How Long Do We Keep Your Personal Data?</h2>
          <p className="text-gray-700 mt-2">
            9.1 We retain your data until your request is deleted or until our services are completed. To request data deletion or modification, contact us at info@cityconcept.com.
          </p>
          <p className="text-gray-700 mt-2">
            9.2 Even if you withdraw consent, we may continue processing your data if legally permitted.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">§10. Other Provisions</h2>
          <p className="text-gray-700 mt-2">
            10.1 We do not intentionally collect information from individuals under 18 years old. If you are under 18, please do not provide your details.
          </p>
          <p className="text-gray-700 mt-2">
            10.2 Use of Cookies:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-2">
            <li>10.2.1 Cookies are small files that your browser stores on your device. They help us improve our website and understand visitor preferences.</li>
            <li>10.2.2 We use cookies to collect data on visitor actions and preferences, and to provide targeted information.</li>
            <li>10.2.3 To refuse cookies, disable them in your browser. This may affect website functionality.</li>
          </ul>
          <p className="text-gray-700 mt-2">
            10.3 Links to Other Sites:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-2">
            <li>10.3.1 Our Website may contain links to other websites. We are not responsible for their content or privacy practices.</li>
            <li>10.3.2 Always check the privacy policies of external sites before sharing personal information.</li>
          </ul>
          <p className="text-gray-700 mt-2">
            10.4 Contact Us:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-2">
            <li>10.4.1 If you have questions or concerns about our Privacy Policy, please contact us at info@cityconcept.com.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
