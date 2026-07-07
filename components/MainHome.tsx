"use client";
import GetRating from "@/services/rating";
import Image from "next/image";
import style from "@/assets/main-page.module.css";

export default function MainHome(data: any) {
  const arr = data.data;

  return (
    <div className={style.container}>
      {arr.map((el: any, i: number) => (
        <div key={i} className={style.cartContainer}>
          <div className={style.boardImage}>
            <Image
              loading="eager"
              alt=""
              src="/board.png"
              width={213}
              height={262}
            />
          </div>
          <h3>{el.name}</h3>
          <div className={style.price}>
            <p style={el.sale_price ? { textDecoration: "line-through" } : {}}>
              ${el.price}
            </p>
            {el.sale_price ? <p>${el.sale_price}</p> : <></>}
          </div>
          <div className={style.rating}>
            <div>
              <GetRating stars={el.rating} />
            </div>
            <p>{el.reviews_count} reviews</p>
          </div>
        </div>
      ))}
    </div>
  );
}
