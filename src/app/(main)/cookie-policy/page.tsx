import React from "react";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { RxCookie } from "react-icons/rx";

const CookiePolicy = () => {
  return (
    <div>
      <RxCookie className="text-[1000px] text-[#ffcc0010] absolute" />
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-300  ">
        <h1 className="text-4xl flex items-center font-bold mb-6 text-white border-b border-[#ec964d] pb-2">
          <LiaCookieBiteSolid className="text-[#ec964d] mr-4" /> Cookie Policy
        </h1>

        <p className="mb-6 leading-relaxed">
          At{" "}
          <span className="text-[#ec964d] font-semibold">BPAAS Solutions</span>,
          your privacy matters to us. We use cookies and similar tracking
          technologies to ensure that our platform delivers a secure, smooth,
          and personalized experience. This Cookie Policy outlines the types of
          cookies we use, why we use them, and your choices regarding cookies.
        </p>

        <section className="space-y-10">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              1. What Are Cookies?
            </h2>
            <p className="leading-relaxed">
              Cookies are small data files stored on your browser or device when
              you visit websites. These files collect standard Internet log
              information and visitor behavior information. This data is used to
              track website usage, remember login preferences, and enhance your
              experience on our platform.
            </p>
            <p className="mt-3 leading-relaxed">
              Cookies can be “session” cookies (which expire when you close your
              browser) or “persistent” cookies (which remain on your device
              until they are deleted or expire).
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              2. How We Use Cookies
            </h2>
            <p className="leading-relaxed mb-4">
              We use cookies and similar technologies for a variety of purposes
              to ensure that you get the best experience, including:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>
                <span className="text-[#ec964d] font-medium">
                  Essential Cookies:
                </span>{" "}
                Required for the operation of our website, such as managing
                security, sessions, authentication, and navigation.
              </li>
              <li>
                <span className="text-[#ec964d] font-medium">
                  Performance Cookies:
                </span>{" "}
                Collect anonymous data on how visitors use our site to help us
                improve performance and usability (e.g., loading speed, crash
                tracking).
              </li>
              <li>
                <span className="text-[#ec964d] font-medium">
                  Functional Cookies:
                </span>{" "}
                Allow us to remember choices you make (like language settings or
                login preferences) and provide enhanced functionality.
              </li>
              <li>
                <span className="text-[#ec964d] font-medium">
                  Analytics Cookies:
                </span>{" "}
                Help us understand how users engage with our platform, allowing
                us to make data-driven improvements. We use tools like Google
                Analytics for this purpose.
              </li>
              <li>
                <span className="text-[#ec964d] font-medium">
                  Marketing Cookies:
                </span>{" "}
                These cookies are used to deliver relevant advertisements and to
                measure the effectiveness of our ad campaigns across third-party
                platforms.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              3. Third-Party Cookies
            </h2>
            <p className="leading-relaxed">
              Some cookies on our platform are set by trusted third-party
              services. These may include:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Analytics providers such as Google Analytics</li>
            </ul>
            <p className="mt-3">
              this third-party provider have their own privacy policies and
              cookie management settings, which we recommend reviewing.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              5. Data Retention and Security
            </h2>
            <p className="leading-relaxed">
              Cookies themselves do not contain personal data, but if you’ve
              previously provided personal data, they may be linked. We store
              cookie data securely and ensure that all third-party partners we
              work with follow strict data protection protocols.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              6. Updates to This Policy
            </h2>
            <p className="leading-relaxed">
              We may update this Cookie Policy from time to time to reflect
              legal, technical, or business changes. When we do, we’ll revise
              the “Last Updated” date at the bottom of this page and notify you
              if the changes are significant.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              7. Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have any questions or concerns about our use of cookies or
              this Cookie Policy, please reach out to us:
              <br />
              <a
                href="mailto:sales@bpaassolutions.com"
                className="text-[#ec964d] underline"
              >
                sales@bpaassolutions.com
              </a>
            </p>
          </div>
        </section>

        <p className="mt-12 text-sm text-gray-500 text-right">
          Last Updated: June 11, 2025
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
