import Head from 'next/head';

interface Props{
    children:React.ReactNode    
}

export const HeaderLayout = ({ children }:Props) => {
  return (
    <>
      <Head>
        <title>{children}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/assets/favicon.ico" />
      </Head>
    </>
  );
};

