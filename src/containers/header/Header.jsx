import React, { useState, useEffect } from "react";
import "./header.css";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const links = [
    {
        title: "Home",
        path: '/',
        href: ''
    },
    {
        title: "About Us",
        path: '/about-us',
        href: ''
    },
    {
        title: "Blogs",
        path: '/blogs',
        href: ''
    },
    {
        title: "FAQs",
        path: '/faq',
        href: ''
    },
    {
        title: "Contact us",
        path: '',
        href: 'https://airtable.com/shrPFC2TgojuOAYO4'
    },
    {
        title: "Documentation",
        path: '',
        href: 'https://lighthouse-storage.gitbook.io/lighthouse/'
    },
]


function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [scrollTop, setScrollTop] = useState();
    const [scrolling, setScrolling] = useState();
    const _navigate = useNavigate();
    useEffect(() => {
        const onScroll = (e) => {
            setScrollTop(e.target.documentElement.scrollTop);
            setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    useEffect(() => {
        setToggleMenu(false);
    }, [scrolling]);
    return (
        <div className="main__navbar container">
            <div className="navbar__links">
                <div className="navbar__link__logo">
                  <img src="/logo.png" alt="brandLogo" />
                  <p className="gradient__text">Lighthouse</p>
              </div>
              <div className="navbar_links_container">
                    {
                        links.map((link) => <p>
                            {
                                link.path.length > 0 ? <a
                                    onClick={() => {
                                        _navigate(link.path);
                                    }}
                                >
                                    {link.title}
                                </a> : <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                        {link.title}
                                    </a>
                            }
                        </p>)
                    }
              </div>
          </div>
          <div className="navbar__button">
              <button
                  onClick={() =>
                      window.open("https://files.lighthouse.storage/", "_blank")
                  }
              >
                    Store Files Now &nbsp;
                    <MdOutlineArrowForwardIos />
              </button>
          </div>
          <div className="navbar__mobile__menu">
              {toggleMenu ? (
                  <RiCloseLine
                      color="#ffff"
                      size={27}
                      onClick={() => {
                          setToggleMenu(false);
                      }}
                  ></RiCloseLine>
              ) : (
                  <RiMenuFill
                      color="#ffff"
                      size={27}
                      onClick={() => {
                          setToggleMenu(true);
                      }}
                  ></RiMenuFill>
              )}

              {toggleMenu && (
                  <div className="mobile_menu_container scale-up-tr">

                        {
                            links.map((link) => <p>
                                {
                                    link.path.length > 0 ? <a
                                        onClick={() => {
                                            _navigate(link.path);
                                        }}
                                    >
                                        {link.title}
                                    </a> : <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                            {link.title}
                                        </a>
                                }
                            </p>)
                        }


                      <p className="navbar__mobile__button">
                          <button
                              onClick={() =>
                                  window.open("https://files.lighthouse.storage/", "_blank")
                              }
                          >
                              File Storage Dapp
                          </button>
                      </p>
                  </div>
              )}
          </div>
      </div>
  );
}

export default Header;
