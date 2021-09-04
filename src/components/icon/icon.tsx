import styles from "../../styles/components/icon.module.scss";

export function Icon({ url, clipPath, className }) {
  return <a href={url} className={className} style={{ clipPath }}></a>;
}
