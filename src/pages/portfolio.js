import React, { useState, useEffect } from "react"
import { graphql, navigate } from "gatsby"
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton'
import GithubIcon from '@material-ui/icons/GitHub'
import WebIcon from '@material-ui/icons/Web'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

import SocialBar from '../components/SocialBar';
import Link from '../components/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    cardRoot: {
        //display: 'flex',
        backgroundColor: theme.palette.darkBackground.default,
        color: 'white',
        fontWeight: 'bold'
    },
    cardDetails: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
}))

export default function Portfolio(props) {
    const { data } = props
    const siteTitle = data.site.siteMetadata.title
    const socialInfo = data.site.siteMetadata.social
    const projects = data.allCosmicjsProjects.edges
    const author = data.site.siteMetadata.author
    const email = data.site.siteMetadata.social.email
    const github = data.site.siteMetadata.social.github
    const logo = data.file.childImageSharp.fluid
    const resume = ''

    const classes = useStyles() 

    let portfolioElements = projects.map(({ node }) => {
        const title = node.title

        return (
            <Grid key={node.slug} item xs={7} align="center">
                <Card className={classes.cardRoot}>
                    <Grid container spacing={2} direction="row" justify="space-around" alignItems="center">
                        <Grid item xs={12}>
                            <CardContent className={classes.cardContent}>
                                <Link
                                    style={{ boxShadow: `none` }}
                                    to={`${node.slug}`}
                                >
                                    <Typography component="h5" variant="h5" align="center">
                                        {title}
                                    </Typography>
                                </Link>
                                <Typography component="p" variant="p">
                                    {node.metadata.description}
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={4}>
                            { node.metadata.github_repo &&
                                <MuiLink color="inherit" href={node.metadata.github_repo}>
                                    <GithubIcon/>
                                </MuiLink>
                            }
                        </Grid>
                        <Grid item xs={4} align="center">
                            <Link
                                style={{ boxShadow: `none` }}
                                to={`${node.slug}`}
                            >
                                <Img
                                    fixed={node.metadata.icon.local.childImageSharp.fixed}
                                    style={{
                                    borderRadius: `100%`,
                                    }}
                                    imgStyle={{
                                        borderRadius: `50%`,
                                    }}
                                />
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            { node.metadata.project_url &&
                                <MuiLink color="inherit" href={node.metadata.project_url}>
                                    <WebIcon/>
                                </MuiLink>
                            }
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        )
    })

    let portfolioElementsWrapper =
        <Grid item xs={12}>
            <Grid container spacing={8} direction="row" justify="space-around" alignItems="center">
                {portfolioElements}
            </Grid>
        </Grid>

    return (
        <div className={classes.root}>
            <Grid container spacing={8} direction="row" justify="space-around" alignItems="center">
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={10} align="baseline">
                    <Typography variant="h4" component="h1" gutterBottom align="left">
                        Portfolio
                    </Typography>
                </Grid>
                { portfolioElementsWrapper }
                 <Grid item xs={12} align="center">
                    <Button color="primary" size="large"
                        onClick={() => {navigate("/")}}>
                        Home
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <SocialBar github={github} email={email}/>
                </Grid>
            </Grid>
        </div>
    )
}

// Gatsby queries
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        description
        social {
          email
          github
        }
      }
    }
    file (relativePath: {eq: "logo.png"}) {
        childImageSharp{ 
            fluid {
                ...GatsbyImageSharpFluid
            }
        }
    }
    allCosmicjsProjects(sort: { fields: [created], order: DESC }, limit: 1000) {
        edges {
            node {
                metadata {
                    description
                    github_repo
                    project_url
                    icon {
                        imgix_url
                        local {
                            childImageSharp {
                                fixed(height: 83) {
                                    ...GatsbyImageSharpFixed_tracedSVG
                                }
                            }
                        }
                    }
                }
                slug
                title
                created(formatString: "DD MMMM, YYYY")
            }
        }
    }
    cosmicjsSettings(slug: { eq: "general" }) {
        metadata {
            site_title
            author_name
            author_bio
            author_avatar {
                local {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
  }
`
