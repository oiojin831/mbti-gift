import Head from "next/head";
const MetaData = () => {
  return (
    <Head>
      <title>어버이날 MBTI</title>
      <meta property="og:url" content="https://mfd-mbti.vercel.app" />
      <meta property="og:title" content="어버이날 MBTI by ㅇㅈ" key="title" />
      <meta
        property="og:description"
        content="어버이날 기념 부모님 mbti 테스트로 자녀들과 더 가까워지세요"
      />
      <meta
        property="og:image"
        content="https://mfd-mbti.vercel.app/_next/image?url=%2Fmain.jpeg&w=3840&q=75"
      />
    </Head>
  );
};

export default MetaData;
