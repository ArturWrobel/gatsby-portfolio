import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from './index.module.scss'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h3>Hello, my name is</h3>
            <h3 className = {indexStyles.name}>Artur Wróbel,</h3>
            <h3>financial expert and a full-stack developer.</h3>
            <br/>
            <br/>
            <br/>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage