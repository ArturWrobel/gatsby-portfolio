import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => {

  return (
    <header className={headerStyles.header}>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <AniLink cover bg="#fbb6c5" duration={1}
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </AniLink>
          </li>
          <li>
            <AniLink cover bg="#fbb6c5" duration={1}
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/projects"
            >
              Projects
            </AniLink>
          </li>
          <li>
            <AniLink cover bg="#fbb6c5" duration={1}
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </AniLink>
          </li>
          <li>
            <AniLink cover bg="#fbb6c5" duration={1}
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </AniLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header