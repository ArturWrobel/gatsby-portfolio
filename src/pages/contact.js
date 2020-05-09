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
            <div className = {contactStyles.contact}>
                <div className = {contactStyles.left}>
                <MailFilled style={{ fontSize: '20px', color: 'brown' }}/> &nbsp;
                    artur.r.wrobel@gmail.com
                </div>
                <div className = {contactStyles.right}>
                <PhoneFilled style={{ fontSize: '20px', color: 'brown' }}/> &nbsp;
                    +48 513 134 071
            </div>
            </div>
        </Layout>
    )
}

export default ContactPage