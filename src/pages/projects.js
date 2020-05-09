import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import projectStyles from './project.module.scss'
import Head from '../components/head'
import Zard from '../templates/cards'


const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark {
            edges {
            node {
                frontmatter {
                date
                title
                }
                fields {
                    slug
                }
            }
            }
        }
    }
    `)

    return (
        <Layout>
            <Head title = "Projects"/>
            <h1 className = {projectStyles.title}>My projects</h1>
            
            <ol className={projectStyles.projects}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={projectStyles.project}>
                            <Link to={`/project/${edge.node.fields.slug}`}>
                                <Zard title = {edge.node.frontmatter.title}
                                date = {edge.node.frontmatter.date}/>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage