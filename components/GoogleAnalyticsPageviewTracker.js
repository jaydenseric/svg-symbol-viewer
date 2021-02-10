import { useRouter } from 'next/router';
import { useEffect } from 'react';

function onRouteChangeComplete(url) {
  if (typeof window.ga === 'function') {
    window.ga('set', 'page', url);
    window.ga('send', 'pageview');
  }
}

export default function GoogleAnalyticsPageviewTracker() {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router.events]);

  return null;
}
