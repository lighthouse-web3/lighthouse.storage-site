import React, { useState, useEffect } from "react";
import "./header.css";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [scrollTop, setScrollTop] = useState();
    const [scrolling, setScrolling] = useState();
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
                  <img
                      src="/logo.png"
                        alt="brandLogo"
                  />
                  <p className="gradient__text">Lighthouse</p>
              </div>
              <div className="navbar_links_container">
                  <p>
                      <a href="#home">Home</a>
                  </p>
                  <p>
                      <a href="#cli">CLI</a>
                  </p>
                  <p>
                      <a href="#features">Features</a>
                  </p>
                  <p>
                      <a href="#roadmap">Roadmap</a>
                  </p>
                  <p>
                      <a href="#team">Team</a>
                  </p>
                    <p>
                        <a href="https://lighthouse-storage.gitbook.io/lighthouse/">Documentation</a>
                    </p>
              </div>
          </div>
          <div className="navbar__button">
              <button
                  onClick={() =>
                      window.open(
                          "https://files.lighthouse.storage/",
                          "_blank"
                      )
                  }
              >
                    File Storage Dapp
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
                          <a href="#home">Home</a>
                      </p>
                      <p>
                          <a href="#cli">CLI</a>
                      </p>
                      <p>
                          <a href="#features">Features</a>
                      </p>
                      <p>
                          <a href="#roadmap">Roadmap</a>
                      </p>
                      <p>
                          <a href="#team">Team</a>
                      </p>
                      <p className="navbar__mobile__button">
                          <button
                              onClick={() =>
                                  window.open(
                                      "https://lighthouse-storage.gitbook.io/lighthouse/",
                                      "_blank"
                                  )
                              }
                          >
                              Get Started
                          </button>
                      </p>
                  </div>
              )}
          </div>
      </div>
  );
}

export default Header;
