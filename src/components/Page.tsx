/* @jsx jsx */
import { jsx, BaseStyles } from 'theme-ui';
import { Helmet } from 'react-helmet';
import { Global } from '@emotion/core';

import { Header } from './Header';

interface PageProps {
  children: React.ReactNode;
}
export function Page({ children }: PageProps) {
  return (
    <BaseStyles>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💬</text></svg>"
        />
      </Helmet>
      <Global styles={{ html: { scrollBehavior: 'smooth' } }} />
      <div
        sx={{
          py: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
        }}
      >
        <Header />
        {children}
      </div>
    </BaseStyles>
  );
}
