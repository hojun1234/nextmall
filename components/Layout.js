import Head from "next/head";
import React from "react";
import Link from "next/link";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - NextShop" : "NextShop"}</title>
        <meta name="description" content="Nextjs Ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col h-screen justify-between">
        <header>
          <nav className="flex justify-between items-center bg-slate-200 h-12 px-4">
            <Link href="/">
              <a className="text-lg   font-bold">NextMall</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="Login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>

        <main className="containner m-auto mt-4 px-4">{children}</main>

        <footer className="flex h-10  justify-center items-center shadow-inner bg-red-100">
          <p>Copyright &copy; 2022, NextMall</p>
        </footer>
      </div>
    </>
  );
}
