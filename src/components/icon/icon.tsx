interface IconProps {
  url: string;
  clipPath: string;
  className: string;
  key: string;
}
export function Icon({ url, clipPath, className, key }: IconProps) {
  return (
    <a key={key} href={url} className={className} style={{ clipPath }}></a>
  );
}
