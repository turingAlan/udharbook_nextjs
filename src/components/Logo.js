import Image from "next/image";
import React from "react";

import Gareeb from "../../public/Book.png";

function Logo() {
  return (
    <div className="logo-container">
      <Image src={Gareeb} alt="Hisab" width={100} height={55} />
      <span className="logo-name">GareebBook</span>
    </div>
  );
}

export default Logo;
