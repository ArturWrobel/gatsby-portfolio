import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import {LinkedinFilled,  GithubFilled, WhatsAppOutlined, MessageOutlined } from '@ant-design/icons';

import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className= {footerStyles.footer}>
            <p>Created by {data.site.siteMetadata.author}, © 2020 &nbsp;
            <a href="https://www.linkedin.com/in/artur-rafal-wrobel" target="_blank">
                <LinkedinFilled style={{ fontSize: '30px', color: '#08c' }}/></a>&nbsp;
            <a href="https://github.com/ArturWrobel" target="_blank">
                <GithubFilled style={{ fontSize: '30px', color: 'black'}}/></a>&nbsp;
            <a href="https://wa.me/48513134071" target="_blank">
                <WhatsAppOutlined style={{ fontSize: '30px', color: '#4FCE5D' }}/></a>&nbsp;
            <a href="https://m.me/artur.wrobel.140" target="_blank">
                <MessageOutlined style={{ fontSize: '30px', color: '#08c' }}/></a>
            </p>       
        </footer>
    )
}

export default Footer