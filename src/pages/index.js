import React from 'react'
/* import { Link } from 'gatsby' */

import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from './index.module.scss'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h3>Hello, my name is</h3>
            <h3 className = {indexStyles.name}>Artur Wróbel,</h3>
            <h3>financial expert and a full-stack developer.</h3>
        </Layout>
    )
}

export default IndexPage