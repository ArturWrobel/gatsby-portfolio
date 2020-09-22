import React from 'react'
import contactStyles from './contact.module.scss'

import Layout from "../components/layout"
import Head from '../components/head'
import { MailFilled, PhoneFilled } from '@ant-design/icons';

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <div className={contactStyles.contact}>
                <div className={contactStyles.left}>
                    <div><MailFilled style={{ fontSize: '20px', color: 'brown' }} />Email</div>
                    <div>artur.r.wrobel@gmail.com</div>
                </div>
                <div className={contactStyles.right}>
                    <div><PhoneFilled style={{ fontSize: '20px', color: 'brown' }} />Phone</div>
                    <div>+48 513 134 071</div>
                </div>                
            </div>
        </Layout>
    )
}

export default ContactPage