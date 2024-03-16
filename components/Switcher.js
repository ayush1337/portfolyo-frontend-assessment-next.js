'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';

export default function Switcher() {
  const [scrollToTops, setScrollToTops] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        setScrollToTops(window.scrollY >= 500);
      });
    }
    window.scrollTo(0, 0);
  }, []);
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  function changeMode(mode, event) {
    switch (mode) {
      case 'mode':
        if (document.documentElement.className.includes('dark')) {
          document.documentElement.className = 'light';
        } else {
          document.documentElement.className = 'dark';
        }
        break;
      case 'layout':
        if (event.target?.innerText === 'LTR') {
          document.documentElement.dir = 'ltr';
        } else {
          document.documentElement.dir = 'rtl';
        }
        break;
      default:
        break;
    }
  }
  return (
    <>
      <div className="fixed top-1/4 -right-3 z-50">
        <span className="relative inline-block rotate-90">
          <input
            type="checkbox"
            className="checkbox opacity-0 absolute"
            id="chk"
            onClick={(event) => changeMode('mode', event)}
          />
          <label
            className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
            htmlFor="chk"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 101 101"
              id="moon"
              className="text-[20px] text-yellow-500"
              width={16}
            >
              <path d="M76.4 28.6c.9-.1 1.7-.8 1.9-1.7.3-.9 0-1.9-.8-2.5-6.1-5.1-13.9-8-21.9-8-18.8 0-34.1 15.3-34.1 34.1s15.3 34.1 34.1 34.1c8.4 0 16.6-3.1 22.9-8.9.7-.6 1-1.6.7-2.5-.3-.9-1.1-1.5-2-1.7C66.3 70.3 58.1 61 58.1 50c0-10.7 7.7-19.7 18.3-21.4zM53.3 50c0 11.6 7.5 21.6 18.1 25.1-4.7 3-10.1 4.6-15.7 4.6-16.1 0-29.3-13.1-29.3-29.3s13.1-29.3 29.3-29.3c5.2 0 10.3 1.4 14.8 4C60.3 29 53.3 38.7 53.3 50z"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 47.5 47.5"
              id="sun"
              width={16}
              className="text-[20px] text-yellow-500"
            >
              <defs>
                <clipPath id="a">
                  <path d="M0 38h38V0H0v38Z"></path>
                </clipPath>
              </defs>
              <g
                fill="#ffac33"
                clipPath="url(#a)"
                transform="matrix(1.25 0 0 -1.25 0 47.5)"
              >
                <path d="M17 35s0 2 2 2 2-2 2-2v-2s0-2-2-2-2 2-2 2v2zM35 21s2 0 2-2-2-2-2-2h-2s-2 0-2 2 2 2 2 2h2zM5 21s2 0 2-2-2-2-2-2H3s-2 0-2 2 2 2 2 2h2zM10.121 29.706s1.414-1.414 0-2.828-2.828 0-2.828 0l-1.415 1.414s-1.414 1.414 0 2.829c1.415 1.414 2.829 0 2.829 0l1.414-1.415ZM31.121 8.707s1.414-1.414 0-2.828-2.828 0-2.828 0l-1.414 1.414s-1.414 1.414 0 2.828 2.828 0 2.828 0l1.414-1.414ZM30.708 26.879s-1.414-1.414-2.828 0 0 2.828 0 2.828l1.414 1.414s1.414 1.414 2.828 0 0-2.828 0-2.828l-1.414-1.414ZM9.708 5.879s-1.414-1.414-2.828 0 0 2.828 0 2.828l1.414 1.414s1.414 1.414 2.828 0 0-2.828 0-2.828L9.708 5.879ZM17 5s0 2 2 2 2-2 2-2V3s0-2-2-2-2 2-2 2v2zM29 19c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10 0-5.522 4.477-10 10-10 5.522 0 10 4.478 10 10"></path>
              </g>
            </svg>
            <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
          </label>
        </span>
      </div>

      <div className="fixed top-[40%] -right-3 z-50">
        <Link href="#" id="switchRtl" className="cursor-pointer">
          <span
            className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden"
            onClick={(event) => changeMode('layout', event)}
          >
            LTR
          </span>
          <span
            className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden"
            onClick={(event) => changeMode('layout', event)}
          >
            RTL
          </span>
        </Link>
      </div>

      <Link
        href="#"
        onClick={scrollToTop}
        id="back-to-top"
        className={`${
          !scrollToTops
            ? 'hidden'
            : 'back-to-top fixed  text-lg rounded-full z-10 bottom-5 right-5 h-9 w-9 text-center bg-amber-500 text-white leading-9 flex items-center justify-center'
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          style={{ width: '16px' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </Link>
    </>
  );
}
