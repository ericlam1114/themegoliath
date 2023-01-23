import React from "react";
import Head from "next/head";

function Header() {
  return (
    <div>
      <Head>
        <title>AI Prompt Exchange</title>

        <meta name="description" content="AI Prompt Exchange" key="desc" />
        <meta property="og:title" content="AI Prompt Exchange" />
        <meta
          property="og:description"
          content="Join over one hundred internet natives
            signed up for the first AI prompt exchange."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/vHWBsbyN/Bot-Warrior-io.jpg"
        />
      </Head>
   

      <div class="flex flex-col justify-center -mt-8 items-center md:items-baseline -mb-10 md:-mb-56">
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
