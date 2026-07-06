import { useState } from "react";
import Image from "next/image";

export default function GetRating(stars: any, maxStars = 5) {
  const starsLength = stars.stars * 1;

  const starPaths = Array.from({ length: maxStars }, (_, i) =>
    i + 1 <= starsLength ? "/Star.svg" : "/FillStar.svg",
  );
  console.log(starPaths);

  return (
    <>
      {starPaths.map((el, i) => (
        <Image key={i} alt="" src={el} width={18} height={18} />
      ))}
    </>
  );
}
