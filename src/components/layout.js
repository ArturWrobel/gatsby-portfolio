import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    const data = useStaticQuery(graphql`
    query {
    site {
        siteMetadata {
        title
        }
    }
    }
`)

    return (
        <div>
            <h1>
                <Link className={layoutStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <div className={layoutStyles.container}>
                <Header />
                <div className={layoutStyles.content}>
                    
                    {props.children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout