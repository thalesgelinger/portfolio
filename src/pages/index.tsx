import styles from "../styles/home.module.scss";
import content from "../assets/texts/content.json";

import InstagramLogo from "../assets/images/instagram.svg";
import GithubLogo from "../assets/images/github.svg";
import LinkedinLogo from "../assets/images/linkedin.svg";
import GmailLogo from "../assets/images/gmail.svg";
import SvgWrapper from "../components/svg-wrapper/svg-wrapper";

export default function Home({ text }) {
  return (
    <>
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
            <div
              style={{ height: 60, width: 60, clipPath: "url(#linkedin)" }}
            ></div>
            <div
              style={{ height: 45, width: 60, clipPath: "url(#gmail)" }}
            ></div>
            <div
              style={{ height: 60, width: 60, clipPath: "url(#github)" }}
            ></div>
            <div
              style={{ height: 60, width: 60, clipPath: "url(#instagram)" }}
            ></div>
          </div>
        </div>
      </div>
      <svg>
        <defs>
          <clipPath id="linkedin">
            <path
              d="M31.825 28.6818V28.6004C31.8081 28.6279 31.7901 28.6554 31.7721 28.6818H31.825Z"
              fill="current"
            />
            <path
              d="M52.1386 4.93923H7.56172C5.42813 4.93923 3.69775 6.62833 3.69775 8.71007V53.8088C3.69775 55.8894 5.42813 57.5785 7.56172 57.5785H52.1386C54.2754 57.5785 56.0058 55.8884 56.0058 53.8088V8.71007C56.0058 6.62727 54.2744 4.93923 52.1386 4.93923ZM19.5526 49.005H11.6522V25.2359H19.5526V49.005ZM15.6029 21.989H15.55C12.8999 21.989 11.1855 20.1633 11.1855 17.8826C11.1855 15.5511 12.9529 13.7763 15.6548 13.7763C18.3578 13.7763 20.0204 15.5511 20.0733 17.8826C20.0733 20.1633 18.3567 21.989 15.6029 21.989ZM48.0418 49.005H40.1414V36.286C40.1414 33.0919 38.9984 30.9118 36.1399 30.9118C33.9576 30.9118 32.6579 32.3818 32.0854 33.8021C31.8769 34.309 31.8261 35.0181 31.8261 35.7293V49.0039H23.9256C23.9256 49.0039 24.0294 27.4626 23.9256 25.2349H31.8261V28.5993C32.876 26.98 34.7534 24.6739 38.9476 24.6739C44.1451 24.6739 48.0429 28.0722 48.0429 35.3737V49.005H48.0418Z"
              fill="current"
            />
          </clipPath>
          <clipPath id="instagram">
            <path
              d="M30 23.1924C28.6536 23.1924 27.3374 23.5916 26.2179 24.3397C25.0984 25.0877 24.2258 26.1509 23.7106 27.3948C23.1953 28.6387 23.0605 30.0075 23.3232 31.3281C23.5859 32.6486 24.2342 33.8616 25.1863 34.8137C26.1383 35.7657 27.3513 36.4141 28.6719 36.6768C29.9924 36.9394 31.3612 36.8046 32.6051 36.2894C33.8491 35.7741 34.9123 34.9016 35.6603 33.7821C36.4083 32.6626 36.8076 31.3464 36.8076 30C36.8053 28.1952 36.0874 26.4649 34.8112 25.1887C33.535 23.9125 31.8048 23.1946 30 23.1924V23.1924Z"
              fill="current"
            />
            <path
              d="M38.0088 12.6588H21.9912C19.517 12.6617 17.1449 13.6458 15.3954 15.3954C13.6458 17.1449 12.6617 19.517 12.6588 21.9912V38.0088C12.6617 40.483 13.6458 42.8551 15.3954 44.6047C17.1449 46.3542 19.517 47.3384 21.9912 47.3412H38.0088C40.483 47.3384 42.8551 46.3542 44.6047 44.6047C46.3542 42.8551 47.3384 40.483 47.3412 38.0088V21.9912C47.3384 19.517 46.3542 17.1449 44.6047 15.3954C42.8551 13.6458 40.483 12.6617 38.0088 12.6588V12.6588ZM30 40.404C27.9423 40.404 25.9308 39.7938 24.2199 38.6506C22.5089 37.5074 21.1754 35.8825 20.388 33.9815C19.6005 32.0804 19.3945 29.9885 19.7959 27.9703C20.1974 25.9521 21.1883 24.0983 22.6433 22.6433C24.0983 21.1883 25.9521 20.1974 27.9703 19.7959C29.9885 19.3945 32.0804 19.6005 33.9815 20.388C35.8825 21.1754 37.5074 22.5089 38.6506 24.2199C39.7938 25.9308 40.404 27.9423 40.404 30C40.4008 32.7584 39.3037 35.4028 37.3532 37.3532C35.4028 39.3037 32.7584 40.4008 30 40.404V40.404ZM41.4324 21.1728C40.9244 21.1728 40.4278 21.0222 40.0054 20.7401C39.583 20.4579 39.2537 20.0569 39.0591 19.5876C38.8646 19.1184 38.8135 18.602 38.9123 18.1037C39.0112 17.6054 39.2555 17.1476 39.6144 16.7882C39.9734 16.4287 40.4308 16.1838 40.929 16.0842C41.4271 15.9847 41.9436 16.035 42.4131 16.229C42.8826 16.4229 43.2841 16.7516 43.5669 17.1736C43.8496 17.5957 44.0009 18.092 44.0016 18.6C44.0022 18.9378 43.9363 19.2724 43.8074 19.5847C43.6786 19.8969 43.4894 20.1807 43.2508 20.4198C43.0122 20.6589 42.7287 20.8486 42.4167 20.978C42.1047 21.1074 41.7702 21.174 41.4324 21.174V21.1728Z"
              fill="current"
            />
            <path
              d="M58.182 14.9688C58.1787 13.951 58.0855 12.9354 57.9036 11.934C57.6708 10.7112 57.3432 9.51961 56.7576 8.41441C56.1477 7.24998 55.3539 6.19158 54.4068 5.28001C52.9762 3.87958 51.2091 2.8712 49.2756 2.35201C47.496 1.87201 45.6756 1.77121 43.8504 1.77361C43.8444 1.76557 43.8407 1.75602 43.8396 1.74601H16.1508C16.1508 1.75561 16.1508 1.76521 16.1508 1.77361C15.1128 1.79281 14.0724 1.78441 13.0404 1.91281C11.9087 2.03246 10.7946 2.28211 9.72004 2.65681C8.04884 3.27326 6.54049 4.26322 5.31004 5.55121C3.89958 6.98459 2.88388 8.75844 2.36164 10.7004C1.88884 12.4668 1.78564 14.268 1.78324 16.0824L1.76404 43.8828C1.79764 45.1368 1.80844 46.4028 2.01964 47.646C2.24404 48.966 2.56444 50.2512 3.17644 51.4488C3.99041 53.0535 5.15028 54.4577 6.57244 55.56C7.58761 56.3692 8.73766 56.9927 9.96964 57.402C11.784 57.9876 13.656 58.212 15.5556 58.2228C16.7412 58.23 17.9244 58.26 19.11 58.2552C27.7188 58.2192 36.3288 58.3176 44.9376 58.2024C46.0749 58.1775 47.2081 58.057 48.3252 57.8424C50.4379 57.4702 52.4039 56.5132 54 55.08C55.8936 53.3904 57.1716 51.324 57.7488 48.8292C58.1268 47.1984 58.2204 45.5436 58.2372 43.884V43.5528C58.236 43.4232 58.1868 15.3408 58.182 14.9688ZM50.9364 38.0088C50.9323 41.4363 49.569 44.7222 47.1455 47.1459C44.7221 49.5696 41.4363 50.9332 38.0088 50.9376H21.9912C18.5636 50.9335 15.2775 49.57 12.8538 47.1463C10.43 44.7226 9.06657 41.4365 9.06244 38.0088V21.9912C9.06657 18.5635 10.43 15.2775 12.8538 12.8537C15.2775 10.43 18.5636 9.06654 21.9912 9.06241H38.0088C41.4365 9.06654 44.7226 10.43 47.1463 12.8537C49.57 15.2775 50.9335 18.5635 50.9376 21.9912L50.9364 38.0088Z"
              fill="current"
            />
          </clipPath>
          <clipPath id="gmail">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M54 0H6C2.7 0 0 2.53125 0 5.625V39.375C0 42.4688 2.7 45 6 45H54C57.3 45 60 42.4688 60 39.375V5.625C60 2.53125 57.3 0 54 0ZM54 39.375H48V14.625L30 25.3125L12 14.625V39.375H6V5.625H9.6L30 17.4375L50.4 5.625H54V39.375Z"
              fill="current"
            />
          </clipPath>
          <clipPath id="github">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30 3.75C15.5039 3.75 3.75 15.7969 3.75 30.668C3.75 42.5625 11.2734 52.6406 21.7031 56.2031C23.0156 56.4492 23.4961 55.6172 23.4961 54.9023C23.4961 54.2578 23.4727 52.5703 23.4609 50.3203C16.1602 51.9492 14.6133 46.7109 14.6133 46.7109C13.418 43.6055 11.6953 42.7734 11.6953 42.7734C9.31641 41.0977 11.8711 41.1328 11.8711 41.1328C14.5078 41.3203 15.8906 43.9102 15.8906 43.9102C18.2344 48.0234 22.0313 46.8398 23.5313 46.1484C23.7656 44.4141 24.4453 43.2187 25.1953 42.5508C19.3711 41.8711 13.2422 39.5625 13.2422 29.25C13.2422 26.3086 14.2617 23.9062 15.9375 22.0312C15.668 21.3516 14.7656 18.6094 16.1953 14.9062C16.1953 14.9062 18.3984 14.1797 23.4141 17.6602C25.5117 17.0625 27.75 16.7695 29.9883 16.7578C32.2148 16.7695 34.4648 17.0625 36.5625 17.6602C41.5781 14.1797 43.7695 14.9062 43.7695 14.9062C45.1992 18.6094 44.2969 21.3516 44.0273 22.0312C45.7031 23.918 46.7227 26.3203 46.7227 29.25C46.7227 39.5859 40.582 41.8594 34.7344 42.5273C35.6719 43.3594 36.5156 45 36.5156 47.5078C36.5156 51.1055 36.4805 54.0117 36.4805 54.8906C36.4805 55.6055 36.9492 56.4492 38.2852 56.1797C48.7383 52.6289 56.25 42.5508 56.25 30.668C56.25 15.7969 44.4961 3.75 30 3.75Z"
              fill="current"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      text: content["en"],
    },
  };
}
