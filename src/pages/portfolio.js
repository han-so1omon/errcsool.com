import React from "react"
import { graphql, navigate } from "gatsby"
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import GithubIcon from '@material-ui/icons/GitHub'
import WebIcon from '@material-ui/icons/Web'

import SocialBar from '../components/SocialBar';
import Link from '../components/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 32,
    },
    cardRoot: {
        //display: 'flex',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.secondary,
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
    const projects = data.allCosmicjsProjects.edges
    const email = data.site.siteMetadata.social.email
    const github = data.site.siteMetadata.social.github

    const classes = useStyles()

    let portfolioElements = projects.map(({ node }) => {
        const title = node.title

        return (
            <Grid key={node.slug} item xs={11} sm={7} align="center">
                <Card className={classes.cardRoot}>
                    <Grid container spacing={0} direction="row" justify="space-around" alignItems="center">
                        <Grid item xs={12}>
                            <CardContent className={classes.cardContent}>
                                <h2
                                  style={{
                                    marginBottom: 5,
                                  }}
                                >
                                  <Link
                                    style={{ boxShadow: `none` }}
                                    to={`${node.slug}`}
                                  >
                                    {title}
                                  </Link>
                                </h2>
                                <p>
                                    {node.metadata.description}
                                </p>
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
