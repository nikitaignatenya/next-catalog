"use client";
import GetRating from "@/services/rating";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function MainHome(data: any) {
  const arr = data.data;

  return (
    <>
      {arr.map((el: any, i: number) => (
        <div key={i}>
          <Image
            loading="eager"
            alt=""
            src="/board.png"
            width={288}
            height={350}
          />
          <h3>{el.name}</h3>
          <div>
            <p>${el.price}</p>
            <p>${el.sale_price}</p>
          </div>
          <GetRating stars={el.rating} />
          <p>{el.reviews_count} reviews</p>
        </div>
      ))}
    </>
  );
}
