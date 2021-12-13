import Image from 'next/image';

const HeroImage = ({ src }) => {
  return (
    <Image
      src={src}
      alt="parent's day"
      layout="responsive"
      width={500}
      height={400}
    />
  );
};

export default HeroImage;
