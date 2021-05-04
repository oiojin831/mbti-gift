import Image from "next/image";

const HeroImage = () => {
  return (
    <Image
      src="/parentsDay.gif"
      alt="parent's day"
      layout="responsive"
      width={500}
      height={280}
    />
  );
};

export default HeroImage;
