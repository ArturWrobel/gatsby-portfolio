import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import projectStyles from "./project.module.scss"
import Zard from './cards'

export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
    frontmatter {
        title
        date
    }
    html
    }}
`

const Project = (props) => {
    return (
        <Layout><h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <div className= {projectStyles.project}>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>  
            </div>
        </Layout>
    )
}

export default Project