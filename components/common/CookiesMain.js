import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';


const CookiesMain = () => {
    const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookie-consent', 'true', { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;
  return (
    <>
    
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center z-50">
      <span>We use cookies to improve your experience. By using our website, you agree to our cookie policy.</span>
      <button
        onClick={acceptCookies}
        className="bg-orange text-white px-4 md:px-10 py-2"
      >
        Accept
      </button>
    </div>

    </>
  )
}
export default CookiesMain
