import { PropsWithChildren } from 'react';
import { CacheProvider } from '@emotion/react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';

export const RtlProvider = ({ children }: PropsWithChildren) => {
  const rtlCache = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return <CacheProvider value={rtlCache}>{children}</CacheProvider>;
};
