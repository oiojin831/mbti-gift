import Image from "next/image";

const HeroImage = () => {
  return (
    <Image
      src="/main.jpeg"
      alt="parent's day"
      layout="responsive"
      width={500}
      height={400}
    />
  );
};

export default HeroImage;
