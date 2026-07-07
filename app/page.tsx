import Image from "next/image";
import style from "@/assets/main-page.module.css";
import MainHome from "@/components/MainHome";
import { getPool } from "@/db";

export default async function Home() {
  const pool = getPool();
  const [rows]: any = await pool.query("SELECT * FROM shop");

  return (
    <>
      <MainHome data={rows} />
    </>
  );
}
