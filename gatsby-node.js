const path = require(`path`)
const each = require('lodash/each')
const { createFilePath } = require(`gatsby-source-filesystem`)

// Create a slug for each recipe and set it as a field on the node.

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    /*
    const indexPage = path.resolve('./src/pages/index.js')
    createPage({
        path: `blog`,
        component: indexPage,
    })
    */

    return new Promise((resolve, reject) => {
        const blogPost = path.resolve('./src/templates/post.js')
        const projectPost = path.resolve('./src/templates/project.js')
        resolve(
            graphql(
                `
                {
                    site {
                      siteMetadata {
                        title
                        social {
                          email
                          github
                        }
                      }
                    }
                    allCosmicjsPosts(sort: { fields: [created], order: DESC }, limit: 1000) {
                        edges {
                            node {
                                slug
                                title
                            }
                        }
                    }
                    allCosmicjsProjects(sort: { fields: [created], order: DESC }, limit: 1000) {
                        edges {
                            node {
                                slug
                                title
                            }
                        }
                    }
                }
                `
            ).then(result => {
                if (result.errors) {
                    console.log(result.errors)
                    reject(result.errors)
                }

                const posts = result.data.allCosmicjsPosts.edges
                const projects = result.data.allCosmicjsProjects.edges

                each(posts, (post, index) => {
                    const next = index === posts.length - 1 ? null : posts[index + 1].node
                    const previous = index === 0 ? null : posts[index - 1].node

                    createPage({
                        path: `blog/${post.node.slug}`,
                        component: blogPost,
                        context: {
                            slug: post.node.slug,
                            previous,
                            next,
                        }
                    })
                })

                each(projects, (project, index) => {
                    const next = index === projects.length - 1 ? null : projects[index + 1].node
                    const previous = index === 0 ? null : projects[index - 1].node

                    createPage({
                        path: `portfolio/${project.node.slug}`,
                        component: projectPost,
                        context: {
                            slug: project.node.slug,
                            previous,
                            next,
                        }
                    })
                })

            })
        )
    })

}
