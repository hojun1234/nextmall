import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title="Home">
      <div>
        <div className="bg-yellow-100"> </div>
        <h1 className="text-3xl font-bold"> NextMall </h1>
        <p>웹서버프로그래밍 김호준</p>
      </div>
    </Layout>
  );
}
