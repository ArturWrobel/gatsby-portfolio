import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

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
            <h1>My projects</h1>
            <ol className={blogStyles.projects}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={blogStyles.project}>
                            <Link to={`/project/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage