'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Link as Link1 } from 'react-scroll';
import { usePortfolioData } from './PortfolioContext';

export default function NavbarLight() {
  const portfolioData = usePortfolioData();

  function windowScroll() {
    const navbar = document.getElementById('navbar');
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      if (navbar !== null) {
        navbar?.classList.add('is-sticky');
      }
    } else {
      if (navbar !== null) {
        navbar?.classList.remove('is-sticky');
      }
    }

    const mybutton = document.getElementById('back-to-top');
    if (mybutton != null) {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        mybutton.classList.add('flex');
        mybutton.classList.remove('hidden');
      } else {
        mybutton.classList.add('hidden');
        mybutton.classList.remove('flex');
      }
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', windowScroll);
  }, []);
  return (
    <>
      {portfolioData.success === true && (
        <nav className="navbar" id="navbar">
          <div className="container flex flex-wrap items-center justify-between">
            <Link href="#" className="navbar-brand md:me-8">
              <span className="inline-block dark:hidden">
                <img src="/images/logo-dark.png" className="l-dark" alt="" />
                <img src="/images/logo-light.png" className="l-light" alt="" />
              </span>
              <img
                src="/images/logo-light.png"
                className="hidden dark:inline-block"
                alt=""
              />
            </Link>

            <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
              {/* <!-- Navbar Button --> */}
              <ul className="list-none menu-social mb-0">
                <li className="inline-flex">
                  {portfolioData.user.social_handles.map((item) => {
                    return (
                      <Link href="#" className="ms-1" key={item._id}>
                        <span className="login-btn-primary">
                          <span
                            className="btn btn-icon btn-sm rounded-full"
                            style={{ borderStyle: 'none' }}
                          >
                            <img src={item.image.url} alt={item.platform} />
                          </span>
                        </span>
                        <span className="login-btn-light">
                          <span
                            className="btn  btn-icon btn-sm rounded-full"
                            style={{ borderStyle: 'none' }}
                          >
                            <img src={item.image.url} alt={item.platform} />
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </li>
              </ul>
              {/* <!-- Navbar Collapse Manu Button --> */}
              <button
                data-collapse="menu-collapse"
                type="button"
                className="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden"
                aria-controls="menu-collapse"
                aria-expanded="false"
              >
                <span className="sr-only">Navigation Menu</span>
                <i className="mdi mdi-menu text-[24px]"></i>
              </button>
            </div>

            {/* <!-- Navbar Manu --> */}
            <div
              className="navigation lg_992:order-1 lg_992:flex hidden ms-auto"
              id="menu-collapse"
            >
              <ul className="navbar-nav nav-light" id="navbar-navlist">
                <li className="nav-item">
                  <Link1
                    to="home"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-link"
                  >
                    Home
                  </Link1>
                </li>
                <li className="nav-item">
                  <Link1
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-link"
                  >
                    About Me
                  </Link1>
                </li>
                <li className="nav-item">
                  <Link1
                    to="service"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-link"
                  >
                    Services
                  </Link1>
                </li>
                <li className="nav-item">
                  <Link1
                    to="experience"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-link"
                  >
                    Experience
                  </Link1>
                </li>
                <li className="nav-item">
                  <Link1
                    to="project"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-link"
                  >
                    Projects
                  </Link1>
                </li>

                <li className="nav-item">
                  <Link1
                    to="contact"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-link"
                  >
                    Contact Me
                  </Link1>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
