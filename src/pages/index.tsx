import styles from "../styles/home.module.scss";
import content from "../assets/texts/content.json";

import React from "react";
import { ClipPathIcons } from "../components/svg-wrapper/clip-path-icons";
import { Icon } from "../components/icon/icon";

export default function Home({ text }) {
  const iconsData = [
    {
      url: "https://www.linkedin.com/in/thalesgelinger",
      clipPath: "url(#linkedin)",
      className: styles.linkedin,
    },
    {
      url: "mailto: thalesgelinger@gmail.com",
      clipPath: "url(#gmail)",
      className: styles.gmail,
    },
    {
      url: "https://github.com/thalesgelinger",
      clipPath: "url(#github)",
      className: styles.github,
    },
    {
      url: "https://www.instagram.com/thalesgelinger/",
      clipPath: "url(#instagram)",
      className: styles.instagram,
    },
  ];

  return (
    <div className={styles.homeContainer}>
      <div>
        <p>
          {text.hello} <b>Thales Gelinger</b> <br />
          {text.main}
          <br />
          {text.cta}
        </p>
        <div className={styles.iconsContainer}>
          <section className={styles.mirror}></section>
          {iconsData.map((icon, key) => (
            <Icon key={key} {...icon} />
          ))}
        </div>
      </div>
      <ClipPathIcons />
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      text: content["en"],
    },
  };
}
