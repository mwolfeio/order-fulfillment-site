import Head from "next/head";
import Image from "next/image";

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <rect width="32" height="32" fill="#FAFBFC" rx="16"></rect>
      <path
        fill="#B0B7C3"
        fillRule="evenodd"
        d="M9 8a1 1 0 000 2h2v11a1 1 0 001 1 1 1 0 001 1h9a1 1 0 100-2h-9V9a1 1 0 00-1-1H9z"
        clipRule="evenodd"
        opacity="0.3"
      ></path>
      <rect
        width="8"
        height="8"
        x="15"
        y="11"
        fill="#B0B7C3"
        opacity="0.6"
        rx="1.5"
      ></rect>
      <circle cx="12" cy="22" r="3" fill="#B0B7C3"></circle>
    </svg>
  );
};
export default Logo;
