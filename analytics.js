(() => {
  // Paste the Website ID from Umami → Settings → Tracking code to activate.
  // Keep it empty until the website has been registered in your Umami account.
  const WEBSITE_ID = '';
  const TRACKER_URL = 'https://cloud.umami.is/script.js';

  const isLocal = ['localhost', '127.0.0.1', ''].includes(window.location.hostname)
    || window.location.protocol === 'file:';
  if (!WEBSITE_ID || isLocal || navigator.doNotTrack === '1') return;

  const tracker = document.createElement('script');
  tracker.defer = true;
  tracker.src = TRACKER_URL;
  tracker.dataset.websiteId = WEBSITE_ID;
  tracker.dataset.doNotTrack = 'true';
  tracker.dataset.excludeSearch = 'true';
  document.head.appendChild(tracker);
})();
