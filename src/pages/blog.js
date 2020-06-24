import React from "react"
import { graphql, navigate } from "gatsby"
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SocialBar from '../components/SocialBar';
import Link from '../components/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.secondary.main,
    },
}))

export default function Blog(props) {
    const { data } = props
    const posts = data.allCosmicjsPosts.edges
    const email = data.site.siteMetadata.social.email
    const github = data.site.siteMetadata.social.github

    const classes = useStyles() 

    let blogElements = posts.map(({ node }) => {
        const title = node.title
        return (
            <Grid key={node.slug} item xs={8} align="center">
                <Paper elevation={3} classes={{root: classes.paper}}>
                    <h3
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
                    </h3>
                    <small>{node.created}</small>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.metadata.description,
                      }}
                    />
                </Paper>
            </Grid>
        )
      })


    return (
        <div className={classes.root}>
            <Grid container spacing={8} direction="row" justify="space-around" alignItems="center">
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={10} alignItems="baseline">
                    <Typography variant="h4" component="h1" gutterBottom align="left">
                        Blog
                    </Typography>
                </Grid>
                { blogElements }
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
    allCosmicjsPosts(sort: { fields: [created], order: DESC }, limit: 1000) {
        edges {
            node {
                metadata {
                    description
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
                imgix_url
            }
        }
    }
  }
`
