import React from "react";
import Head from "next/head";

function Header() {
  return (
    <div>
      <Head>
        <title>Elevate Your Online Brand</title>

        <meta name="description" content="Elevate Your Online Brand" key="desc" />
        <meta property="og:title" content="Elevate Your Online Brand" />
        <meta
          property="og:description"
          content="Join over 100 subscribers getting top site themes
          for influencers straight to their inbox once a week."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/63nNthVD/logo.png"
        />
      </Head>
   

      <div class="flex flex-col justify-center pt-7 pb-10 items-center md:items-baseline md:pb-0 -mb-10 md:-mb-56">
        <img
          src="/logo.png"
          className="max-w-sm scale-50 -mt-20 -mb-10"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
