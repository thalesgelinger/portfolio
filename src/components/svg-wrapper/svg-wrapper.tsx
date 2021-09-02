import React from "react";

import styles from "../../styles/components/svg-wrapper.module.scss";

export default function SvgWrapper({ Icon, size }) {
  return (
    <>
      <Icon />
      <div style={{ height: size, width: size, clipPath: "#icon" }}></div>
    </>
  );
}
