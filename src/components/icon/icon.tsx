import github from "../../assets/images/github.svg";
import gmail from "../../assets/images/gmail.svg";
import instagram from "../../assets/images/instagram.svg";
import linkedin from "../../assets/images/linkedin.svg";
import Image from "next/image";

const icons = {
  github: "/images/github.svg",
  gmail: "/images/gmail.svg",
  instagram: "/images/instagram.svg",
  linkedin: "/images/linkedin.svg",
};

export type IconsTypes = typeof icons;

interface IconProps {
  name: keyof typeof icons;
  size?: number;
}

export function Icon({ name, size = 20 }: IconProps) {
  return <Image src={icons[name]} height={size} width={size} />;
}

export const getStaticProps = () => {
  return {
    props: {
      icons,
    },
  };
};
