import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms and Description",
};

export default function TermsAndConditions() {
  return (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>

      <p className="mb-4">
        Welcome and thank you for your interest in Cityconcept and its affiliated brands
        (collectively, the &quot;Cityconcept Companies,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;we&quot;). By clicking a
        registration or new account submission button, or by otherwise using our websites,
        networks, mobile applications, or other services provided by the Cityconcept Companies
        (collectively, the &quot;Services&quot;), or accessing any content provided by us through the
        Services, you agree to be bound by the following terms of use, as updated from time to
        time (the &quot;Terms of Use&quot;).
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Cityconcept Companies&apos; Role</h2>
      <p className="mb-4">
        The Cityconcept Companies, and the Services, may assist you in performing various tasks
        related to real estate and urban planning. However, unless explicitly specified by the
        terms of use for a particular Service (each a &quot;Products Terms&quot;), THE SERVICES ARE NOT
        INTENDED TO provide you with any financial, real estate, or related advice of any kind.
        You understand and agree that the Services may include advertisements. To help make the
        advertisements relevant and useful to you, the Cityconcept Companies may serve
        advertisements based on the information we collect through the Services. See our Privacy
        Policy for more details.
      </p>

      <h3 className="text-lg font-medium mt-4 mb-2">A. Cityconcept, Inc.</h3>
      <p className="mb-4">
        Cityconcept, Inc. holds licenses in certain states (see Section 21). However, unless
        provided for in your Products Terms, Cityconcept, Inc. assumes no responsibility for any
        result or consequence related directly or indirectly to any action or inaction that you or
        any consumer takes based on the Services or any other information available through or in
        connection with the Services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Cityconcept Marketplace and Cityconcept Home Loans
      </h2>
      <p className="mb-4">
        The Cityconcept Companies do not provide or utilize any information for use in loan-related
        decisions, and you acknowledge and agree not to use any information obtained from
        Cityconcept Company Services for loan-related decisions.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Eligibility; Accounts and Registration</h2>
      <p className="mb-4">
        You must be at least 18 years of age to use the Services. By agreeing to these Terms of Use,
        you represent and warrant that: (a) you are at least 18 years of age; (b) you have not
        previously been suspended or removed from the Services; and (c) your registration and your
        use of the Services complies with all applicable laws and regulations. To access some
        features of the Services, you may be required to register for an account and agree to a
        Products Terms, to the extent applicable to that service, which may be incorporated herein
        or available on a separate Cityconcept Companies site.
      </p>

      {/* New Section based on additional content */}
      <h2 className="text-xl font-semibold mt-6 mb-2">4. Use of the Services; Restrictions</h2>
      <h3 className="text-lg font-medium mt-4 mb-2">A. Use of the Services</h3>
      <p className="mb-4">
        As long as you comply with these Terms of Use, we grant you a non-exclusive, limited, revocable, personal, non-transferable license to use the Services, and to download and use any App (as defined in Section 4(B) below) on your mobile device in object code form, for your personal use. If you are a real estate or urban planning professional acting in your professional capacity, you may additionally use the Services to provide information, to the extent permitted by applicable law, to your clients and to take actions on behalf of your clients (&quot;Pro Use&quot;).
      </p>
      <p className="mb-4">
        If you use the Services for a Pro Use, you represent and warrant that you have obtained all required authorizations and consents from your client. Except as expressly stated herein, these Terms of Use do not provide you with a license to use, reproduce, distribute, display, or provide access to any portion of the Services on third-party websites or otherwise. The Services may not be used for transactions in commercial real estate, which includes, without limitation, commercially zoned properties and vacation rentals.
      </p>

      <h3 className="text-lg font-medium mt-4 mb-2">B. Mobile Applications</h3>
      <p className="mb-4">
        To use any mobile application feature of the Services (each, an &quot;App&quot;), you must have a compatible mobile device. We do not warrant that any App will be compatible with your mobile device. You may use mobile data in connection with an App and may incur additional charges from your wireless provider for using an App. You agree that you are solely responsible for any applicable charges. We may update any App and may automatically electronically update the version of any App that you have installed on a mobile device. You consent to all automatic upgrades and understand that these Terms of Use will apply to all updated versions of an App. Any third-party open-source software included in an App is subject to the applicable open-source license and may be available directly from the creator under an open-source license.
      </p>

      <h3 className="text-lg font-medium mt-4 mb-2">C. Use of Content</h3>
      <p className="mb-4">
        Subject to the restrictions set forth in these Terms of Use, you may copy information from the Services without the aid of any automated processes and only as necessary for your personal use or Pro Use to view, save, print, fax and/or e-mail such information. Notwithstanding the foregoing, the aggregate level data provided on the Cityconcept Local-Info Pages (the &quot;Aggregate Data&quot;) may be used for non-personal uses, e.g., urban planning analysis. You may display and distribute derivative works of the Aggregate Data (e.g., within a graph), only so long as the Cityconcept Companies are cited as a source on every page where the Aggregate Data are displayed, including &quot;Data Provided by Cityconcept Group.&quot; Such citation may not include any of our logos without our prior written approval or imply any relationship between you and the Cityconcept Companies beyond that the Cityconcept Companies are the source of the Aggregate Data. You are prohibited from displaying any other Cityconcept Companies&apos; data without our prior written approval.
      </p>

      <h1 className="text-2xl font-bold text-gray-900 mb-4">5. Prohibited Use</h1>
      <p className="mb-4 text-gray-700">
        BY USING THE SERVICES, YOU AGREE NOT TO:
      </p>
      <ul className="list-disc ml-8 space-y-4 text-gray-600">
        <li>
          Reproduce, modify, distribute, display or otherwise provide access to,
          create derivative works from, decompile, disassemble, or reverse
          engineer any portion of the Services.
        </li>
        <li>
          Provide/post/authorize a link to any of the Services (including but not
          limited to an agent profile page) from a third-party website that is not
          a real estate-related website.
        </li>
        <li>
          Remove or modify any copyright or other intellectual property notices
          that appear in the Services.
        </li>
        <li>
          Use the Services in any way that is unlawful or harms the company, its
          service providers, or any other user.
        </li>
        <li>
          Use the Services in any way to discriminate against any individual or
          class of individuals protected under federal, state, or local laws.
        </li>
        <li>
          Distribute or post spam, chain letters, pyramid schemes, or similar
          communications through the Services.
        </li>
        <li>
          Impersonate another person or misrepresent your affiliation with another
          entity.
        </li>
        <li>
          Reproduce, publicly display, or otherwise make accessible any reviews,
          ratings, or profile information about real estate listings, except as
          explicitly permitted by the company.
        </li>
        <li>
          Upload invalid data, viruses, worms, or other software agents to the
          Services.
        </li>
        <li>
          Use any automated means, including but not limited to scripts, bots,
          spiders, or data mining tools, to access, scrape, or otherwise extract
          data from the Services.
        </li>
      </ul>
    </div>
  );
}
