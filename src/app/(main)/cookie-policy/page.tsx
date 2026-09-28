import React from "react";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { RxCookie } from "react-icons/rx";

const CookiePolicy = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Decoration */}
      <RxCookie className="pointer-events-none absolute -right-40 top-20 text-[900px] text-[#ffcc0008]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 text-gray-300 md:py-16">
        {/* Header */}
        <div className="mb-10">
          <h1 className="mb-4 flex items-center border-b border-[#ec964d] pb-4 text-3xl font-bold text-white sm:text-4xl">
            <LiaCookieBiteSolid className="mr-3 shrink-0 text-[#ec964d]" />
            Cookie Policy
          </h1>

          <p className="text-sm text-gray-500">
            Last Updated: September 26, 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="space-y-5 leading-relaxed">
          <p>
            At{" "}
            <span className="font-semibold text-[#ec964d]">
              BPAAS Solutions
            </span>
            , we use cookies and similar technologies to help provide a secure,
            reliable, efficient, and user-friendly experience on our website.
          </p>

          <p>
            This Cookie Policy explains what cookies are, how we use them, the
            types of cookies and similar technologies that may be used on our
            website, and the choices available to you.
          </p>

          <p>
            This policy should be read together with our Privacy Policy, which
            explains how we collect, use, store, and protect personal
            information.
          </p>
        </div>

        <section className="mt-12 space-y-10">
          {/* 1 */}
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              1. What Are Cookies?
            </h2>

            <p className="leading-relaxed">
              Cookies are small text files that websites may store on your
              browser or device when you visit a website. Cookies allow a
              website to recognize your browser or remember certain information
              about your visit.
            </p>

            <p className="mt-3 leading-relaxed">
              Cookies can help websites remember preferences, maintain sessions,
              improve performance, understand website usage, and provide
              relevant functionality.
            </p>

            <p className="mt-3 leading-relaxed">
              We may also use technologies similar to cookies, such as pixels,
              tags, local storage, and other tracking technologies, where
              applicable.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              2. How We Use Cookies
            </h2>

            <p className="mb-4 leading-relaxed">
              Depending on how you use our website, we may use cookies and
              similar technologies for the following purposes:
            </p>

            <ul className="list-disc space-y-4 pl-6">
              <li>
                <span className="font-medium text-[#ec964d]">
                  Website Operation:
                </span>{" "}
                To enable essential website functions, navigation, security,
                authentication, and session management.
              </li>

              <li>
                <span className="font-medium text-[#ec964d]">
                  Preferences:
                </span>{" "}
                To remember settings and choices so that you do not have to
                provide them repeatedly.
              </li>

              <li>
                <span className="font-medium text-[#ec964d]">
                  Performance:
                </span>{" "}
                To understand how the website performs and identify technical
                issues that may affect your experience.
              </li>

              <li>
                <span className="font-medium text-[#ec964d]">
                  Analytics:
                </span>{" "}
                Where enabled, to understand website traffic, user interactions,
                and usage patterns so that we can improve our website and
                services.
              </li>

              <li>
                <span className="font-medium text-[#ec964d]">
                  Security:
                </span>{" "}
                To help detect suspicious activity, prevent abuse, and protect
                our website and users.
              </li>

              <li>
                <span className="font-medium text-[#ec964d]">
                  Marketing:
                </span>{" "}
                Where applicable and permitted, to measure marketing campaigns
                and understand how visitors interact with promotional content.
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              3. Types of Cookies We May Use
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-medium text-[#ec964d]">
                  3.1 Strictly Necessary Cookies
                </h3>

                <p className="leading-relaxed">
                  These cookies are necessary for certain website functions to
                  operate. They may support security, authentication, session
                  management, navigation, and other essential functionality.
                </p>

                <p className="mt-2 leading-relaxed">
                  Because these cookies may be necessary for the operation of
                  the website, they may not always be disabled through cookie
                  preference tools.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-medium text-[#ec964d]">
                  3.2 Functional Cookies
                </h3>

                <p className="leading-relaxed">
                  Functional cookies help us remember choices and preferences
                  you make while using our website and may improve your overall
                  experience.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-medium text-[#ec964d]">
                  3.3 Analytics and Performance Cookies
                </h3>

                <p className="leading-relaxed">
                  These cookies may help us understand how visitors use our
                  website, such as which pages are visited, how users navigate
                  the website, and whether technical issues occur.
                </p>

                <p className="mt-2 leading-relaxed">
                  Where required by applicable law, we will request your consent
                  before placing non-essential analytics cookies.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-medium text-[#ec964d]">
                  3.4 Marketing and Advertising Cookies
                </h3>

                <p className="leading-relaxed">
                  If marketing or advertising technologies are used, these may
                  help us measure campaigns, understand interactions with
                  promotional content, or provide more relevant communications.
                </p>

                <p className="mt-2 leading-relaxed">
                  These technologies will be used in accordance with applicable
                  law and, where required, only after obtaining appropriate
                  consent.
                </p>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              4. Third-Party Cookies and Services
            </h2>

            <p className="leading-relaxed">
              Some cookies or similar technologies may be provided by
              third-party services that operate on our website or provide
              services to us.
            </p>

            <p className="mt-3 leading-relaxed">
              Depending on the services enabled on our website, these providers
              may include analytics, security, hosting, content delivery,
              embedded content, or other technology providers.
            </p>

            <p className="mt-3 leading-relaxed">
              Third-party providers may process information collected through
              their technologies according to their own privacy policies and
              terms. We recommend reviewing the privacy and cookie policies of
              any third-party services you interact with.
            </p>

            <p className="mt-3 leading-relaxed">
              If Google Analytics or another analytics service is enabled on our
              website, its use will be subject to the applicable configuration,
              consent requirements, and the provider&apos;s own policies.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              5. Cookie Consent and Your Choices
            </h2>

            <p className="leading-relaxed">
              Where required by applicable law, we will ask for your consent
              before using non-essential cookies or similar tracking
              technologies.
            </p>

            <p className="mt-3 leading-relaxed">
              Depending on the cookie management functionality available on our
              website, you may be able to accept, reject, or manage certain
              categories of non-essential cookies.
            </p>

            <p className="mt-3 leading-relaxed">
              You can also control cookies through your browser settings.
              Most browsers allow you to block, delete, or restrict cookies.
              However, disabling certain cookies may affect the availability or
              functionality of some parts of our website.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              6. Browser Cookie Controls
            </h2>

            <p className="leading-relaxed">
              Most modern browsers provide controls that allow you to manage
              cookies. You can generally configure your browser to notify you
              when cookies are being used, block certain cookies, or delete
              cookies that have already been stored.
            </p>

            <p className="mt-3 leading-relaxed">
              Please refer to your browser&apos;s official documentation for
              instructions on managing cookie settings.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              7. Cookie Retention
            </h2>

            <p className="leading-relaxed">
              Cookies may be either session cookies or persistent cookies.
              Session cookies are generally removed when you close your browser,
              while persistent cookies may remain on your device for a defined
              period or until you delete them.
            </p>

            <p className="mt-3 leading-relaxed">
              The retention period depends on the purpose of the cookie and the
              service that places it. We aim to retain cookie-related
              information only for as long as reasonably necessary for its
              intended purpose and applicable legal requirements.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              8. Security
            </h2>

            <p className="leading-relaxed">
              We take reasonable technical and organizational measures to help
              protect information associated with our website. However, no
              internet transmission, website, or electronic storage system can
              be guaranteed to be completely secure.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              9. Children&apos;s Privacy
            </h2>

            <p className="leading-relaxed">
              Our website and services are intended for business and general
              audiences and are not directed toward children. We do not
              knowingly use cookies or collect personal information from
              children in violation of applicable law.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              10. International Visitors
            </h2>

            <p className="leading-relaxed">
              If you access our website from outside India, additional privacy
              and cookie requirements may apply depending on your location.
              Where applicable, we will provide the notices and obtain the
              consents required by relevant data protection laws.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              11. Changes to This Cookie Policy
            </h2>

            <p className="leading-relaxed">
              We may update this Cookie Policy from time to time to reflect
              changes in our website, technologies, services, legal
              requirements, or business practices.
            </p>

            <p className="mt-3 leading-relaxed">
              When we make changes, we will update the &quot;Last Updated&quot; date
              displayed at the top or bottom of this policy. We encourage you
              to review this page periodically for the latest information.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              12. Contact Us
            </h2>

            <p className="leading-relaxed">
              If you have questions about this Cookie Policy or our use of
              cookies and similar technologies, you can contact us at:
            </p>

            <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-5">
              <p className="font-medium text-white">BPAAS Solutions</p>

              <a
                href="mailto:sales@bpaassolutions.com"
                className="mt-2 inline-block text-[#ec964d] underline underline-offset-4 transition hover:text-[#ffb477]"
              >
                sales@bpaassolutions.com
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-14 border-t border-white/10 pt-6 text-right">
          <p className="text-sm text-gray-500">
            Last Updated: September 26, 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;



// import React from "react";
// import { LiaCookieBiteSolid } from "react-icons/lia";
// import { RxCookie } from "react-icons/rx";

// const CookiePolicy = () => {
//   return (
//     <div>
//       <RxCookie className="text-[1000px] text-[#ffcc0010] absolute" />
//       <div className="max-w-4xl mx-auto px-6 py-12 text-gray-300  ">
//         <h1 className="text-4xl flex items-center font-bold mb-6 text-white border-b border-[#ec964d] pb-2">
//           <LiaCookieBiteSolid className="text-[#ec964d] mr-4" /> Cookie Policy
//         </h1>

//         <p className="mb-6 leading-relaxed">
//           At{" "}
//           <span className="text-[#ec964d] font-semibold">BPAAS Solutions</span>,
//           your privacy matters to us. We use cookies and similar tracking
//           technologies to ensure that our platform delivers a secure, smooth,
//           and personalized experience. This Cookie Policy outlines the types of
//           cookies we use, why we use them, and your choices regarding cookies.
//         </p>

//         <section className="space-y-10">
//           {/* Section 1 */}
//           <div>
//             <h2 className="text-2xl font-semibold text-white mb-2">
//               1. What Are Cookies?
//             </h2>
//             <p className="leading-relaxed">
//               Cookies are small data files stored on your browser or device when
//               you visit websites. These files collect standard Internet log
//               information and visitor behavior information. This data is used to
//               track website usage, remember login preferences, and enhance your
//               experience on our platform.
//             </p>
//             <p className="mt-3 leading-relaxed">
//               Cookies can be “session” cookies (which expire when you close your
//               browser) or “persistent” cookies (which remain on your device
//               until they are deleted or expire).
//             </p>
//           </div>

//           {/* Section 2 */}
//           <div>
//             <h2 className="text-2xl font-semibold text-white mb-2">
//               2. How We Use Cookies
//             </h2>
//             <p className="leading-relaxed mb-4">
//               We use cookies and similar technologies for a variety of purposes
//               to ensure that you get the best experience, including:
//             </p>
//             <ul className="list-disc list-inside space-y-3 text-gray-300">
//               <li>
//                 <span className="text-[#ec964d] font-medium">
//                   Essential Cookies:
//                 </span>{" "}
//                 Required for the operation of our website, such as managing
//                 security, sessions, authentication, and navigation.
//               </li>
//               <li>
//                 <span className="text-[#ec964d] font-medium">
//                   Performance Cookies:
//                 </span>{" "}
//                 Collect anonymous data on how visitors use our site to help us
//                 improve performance and usability (e.g., loading speed, crash
//                 tracking).
//               </li>
//               <li>
//                 <span className="text-[#ec964d] font-medium">
//                   Functional Cookies:
//                 </span>{" "}
//                 Allow us to remember choices you make (like language settings or
//                 login preferences) and provide enhanced functionality.
//               </li>
//               <li>
//                 <span className="text-[#ec964d] font-medium">
//                   Analytics Cookies:
//                 </span>{" "}
//                 Help us understand how users engage with our platform, allowing
//                 us to make data-driven improvements. We use tools like Google
//                 Analytics for this purpose.
//               </li>
//               <li>
//                 <span className="text-[#ec964d] font-medium">
//                   Marketing Cookies:
//                 </span>{" "}
//                 These cookies are used to deliver relevant advertisements and to
//                 measure the effectiveness of our ad campaigns across third-party
//                 platforms.
//               </li>
//             </ul>
//           </div>

//           {/* Section 3 */}
//           <div>
//             <h2 className="text-2xl font-semibold text-white mb-2">
//               3. Third-Party Cookies
//             </h2>
//             <p className="leading-relaxed">
//               Some cookies on our platform are set by trusted third-party
//               services. These may include:
//             </p>
//             <ul className="list-disc list-inside mt-3 space-y-2">
//               <li>Analytics providers such as Google Analytics</li>
//             </ul>
//             <p className="mt-3">
//               this third-party provider have their own privacy policies and
//               cookie management settings, which we recommend reviewing.
//             </p>
//           </div>

//           {/* Section 5 */}
//           <div>
//             <h2 className="text-2xl font-semibold text-white mb-2">
//               5. Data Retention and Security
//             </h2>
//             <p className="leading-relaxed">
//               Cookies themselves do not contain personal data, but if you’ve
//               previously provided personal data, they may be linked. We store
//               cookie data securely and ensure that all third-party partners we
//               work with follow strict data protection protocols.
//             </p>
//           </div>

//           {/* Section 6 */}
//           <div>
//             <h2 className="text-2xl font-semibold text-white mb-2">
//               6. Updates to This Policy
//             </h2>
//             <p className="leading-relaxed">
//               We may update this Cookie Policy from time to time to reflect
//               legal, technical, or business changes. When we do, we’ll revise
//               the “Last Updated” date at the bottom of this page and notify you
//               if the changes are significant.
//             </p>
//           </div>

//           {/* Section 7 */}
//           <div>
//             <h2 className="text-2xl font-semibold text-white mb-2">
//               7. Contact Us
//             </h2>
//             <p className="leading-relaxed">
//               If you have any questions or concerns about our use of cookies or
//               this Cookie Policy, please reach out to us:
//               <br />
//               <a
//                 href="mailto:sales@bpaassolutions.com"
//                 className="text-[#ec964d] underline"
//               >
//                 sales@bpaassolutions.com
//               </a>
//             </p>
//           </div>
//         </section>

//         <p className="mt-12 text-sm text-gray-500 text-right">
//           Last Updated: June 11, 2025
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CookiePolicy;
