import React, { useState, useEffect } from "react";
import "./header.css";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

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
                  <p>
                      <a
                          onClick={() => {
                              _navigate("/");
                          }}
                      >
                          Home
                      </a>
                  </p>
                  <p>
                      <a
                          onClick={() => {
                              _navigate("/about-us");
                          }}
                      >
                          About us
                      </a>
                  </p>
                  <p>
                      <a
                          href="https://airtable.com/shrPFC2TgojuOAYO4"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          Contact us
                      </a>
                  </p>
                  <p>
                      <a
                          href="https://lighthouse-storage.gitbook.io/lighthouse/"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          Documentation
                      </a>
                  </p>
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
                      <p>
                          <a
                              onClick={() => {
                                  _navigate("/");
                              }}
                          >
                              Home
                          </a>
                      </p>
                      <p>
                          <a
                              onClick={() => {
                                  _navigate("/about-us");
                              }}
                          >
                              About us
                          </a>
                      </p>
                      <p>
                          <a
                              href="https://airtable.com/shrPFC2TgojuOAYO4"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              Contact us
                          </a>
                      </p>
                      <p>
                          <a
                              href="https://lighthouse-storage.gitbook.io/lighthouse/"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              Documentation
                          </a>
                      </p>
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
