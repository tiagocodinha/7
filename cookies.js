/* ===================================
   7Iks — Cookie Consent & Clarity
   =================================== */

(function () {
    const banner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('cookieAccept');
    const rejectBtn = document.getElementById('cookieReject');

    function getCookieConsent() {
        return localStorage.getItem('cookie_consent');
    }

    function setCookieConsent(value) {
        localStorage.setItem('cookie_consent', value);
    }

    function loadClarity() {
        (function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
            t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
        })(window, document, "clarity", "script", "w1k7ines9c");
    }

    function hideBanner() {
        banner.classList.add('cookie-banner-hidden');
    }

    function showBanner() {
        banner.classList.add('cookie-banner-visible');
    }

    // Check existing consent
    var consent = getCookieConsent();

    if (consent === 'accepted') {
        loadClarity();
        hideBanner();
    } else if (consent === 'rejected') {
        hideBanner();
    } else {
        // No decision yet — show banner
        setTimeout(showBanner, 500);
    }

    acceptBtn.addEventListener('click', function () {
        setCookieConsent('accepted');
        loadClarity();
        hideBanner();
    });

    rejectBtn.addEventListener('click', function () {
        setCookieConsent('rejected');
        hideBanner();
    });
})();
