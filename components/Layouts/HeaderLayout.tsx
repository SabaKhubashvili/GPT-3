import Head from "next/head";
interface Props {
  children: React.ReactNode;
}

export const HeaderLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>{children}</title>
        <meta
          name="description"
          content="Explore the limitless possibilities of AI with GPT-3! Our website is your gateway to the world of cutting-edge artificial intelligence. Discover how GPT-3 can assist you in various applications, from natural language understanding to content generation. Stay updated on the latest advancements in AI and harness the power of GPT-3 for your projects and innovations."
        />

        <meta property="og:url" content="https://suprimo.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title"  content={`${children}` || ''} />
        <meta
          property="og:description"
          content="Explore the limitless possibilities of AI with GPT-3! Our website is your gateway to the world of cutting-edge artificial intelligence. Discover how GPT-3 can assist you in various applications, from natural language understanding to content generation. Stay updated on the latest advancements in AI and harness the power of GPT-3 for your projects and innovations."
        />
        <meta property="og:image" content={"https://www.ibm.com/blog/wp-content/uploads/2023/03/What-is-Generative-AI-what-are-Foundation-Models-and-why-do-they-matter-scaled.jpg"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="suprimo.netlify.app" />
        <meta property="twitter:url" content="https://suprimo.netlify.app" />
        <meta name="twitter:title" content={`${children}` || ''} />
        <meta
          name="twitter:description"
          content="Explore the limitless possibilities of AI with GPT-3! Our website is your gateway to the world of cutting-edge artificial intelligence. Discover how GPT-3 can assist you in various applications, from natural language understanding to content generation. Stay updated on the latest advancements in AI and harness the power of GPT-3 for your projects and innovations."
        />
        <meta name="twitter:image" content={"https://www.ibm.com/blog/wp-content/uploads/2023/03/What-is-Generative-AI-what-are-Foundation-Models-and-why-do-they-matter-scaled.jpg"} />
      </Head>
    </>
  );
};
