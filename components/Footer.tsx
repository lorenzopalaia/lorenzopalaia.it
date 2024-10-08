import Link from "next/link";

import SignatureIcon from "./Icons/SignatureIcon";

const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Loosely designed in{" "}
        <Link
          href="https://www.figma.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Figma (opens in a new tab)"
        >
          Figma
        </Link>{" "}
        and coded in{" "}
        <Link
          href="https://code.visualstudio.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Visual Studio Code (opens in a new tab)"
        >
          Visual Studio Code
        </Link>{" "}
        by yours truly. Built with{" "}
        <Link
          href="https://nextjs.org/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Next.js (opens in a new tab)"
        >
          Next.js
        </Link>{" "}
        and{" "}
        <Link
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Tailwind CSS (opens in a new tab)"
        >
          Tailwind CSS
        </Link>
        , deployed with{" "}
        <Link
          href="https://vercel.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Vercel (opens in a new tab)"
        >
          Vercel
        </Link>
        . All text is set in the{" "}
        <Link
          href="https://rsms.me/inter/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Inter (opens in a new tab)"
        >
          Inter
        </Link>{" "}
        typeface.
        <br />
        <br />
        Copyright © {new Date().getFullYear()} - All Rights Reserved
      </p>

      <SignatureIcon className="size-24 mt-8 hover:text-teal-300" />
    </footer>
  );
};

export default Footer;
