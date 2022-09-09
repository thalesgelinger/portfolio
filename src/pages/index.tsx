import React from "react";
import styles from "../styles/home.module.scss";
import { Icon, IconsTypes } from "../components/icon/icon";
import Image from "next/image";
import Link from "next/link";
export default function Home({ text }) {
  const iconsData = [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/thalesgelinger",
    },
    {
      name: "gmail",
      url: "mailto: thalesgelinger@gmail.com",
    },
    {
      name: "github",
      url: "https://github.com/thalesgelinger",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/thalesgelinger/",
    },
  ] as { url: string; name: keyof IconsTypes }[];

  return (
    <div className={styles.homeContainer}>
      <section className={styles.main}>
        <header>
          <Image src="/images/me.jpeg" width={150} height={150} />
          <aside>
            <h1>Hello I'm Thales</h1>
            <h3>The JS Witcher</h3>
          </aside>
        </header>
        <article>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            adipisci blanditiis delectus asperiores dolores ipsa dignissimos
            accusantium. Animi, ipsam sint illo rem exercitationem soluta
            laudantium ipsa quisquam quia voluptas minima!
          </p>
        </article>
        <div className={styles.iconsContainer}>
          {iconsData.map(({ name, url }, key) => (
            <span>
              <Link href={url}>
                <Icon key={key.toString()} name={name} size={40} />
              </Link>
            </span>
          ))}
        </div>
      </section>
      <section className={styles.device}>
        <img src={"/images/android-frame.png"} />
      </section>
    </div>
  );
}
