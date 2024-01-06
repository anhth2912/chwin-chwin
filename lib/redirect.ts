/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import languageDetector from './languageDetector';

export const useRedirect = (to?: string | undefined) => {
  const router = useRouter();
  // eslint-disable-next-line no-param-reassign
  to = to || router.asPath;
  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect();
    if (to && to.startsWith(`/${detectedLng}`) && router.route === '/404') {
      // prevent endless loop
      router.replace(`/${detectedLng}${router.route}`);
      return;
    }
    languageDetector ?? (languageDetector as any).cache(detectedLng);
    router.replace(`/${detectedLng}${to}`);
  }, []);

  return;
};

export const Redirect = () => {
  useRedirect();
};

// eslint-disable-next-line react/display-name
export const getRedirect = (to: string | undefined) => () => {
  useRedirect(to)
};
