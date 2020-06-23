import React from 'react';
import { graphql, navigate } from "gatsby"
import Image from "gatsby-image"
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GithubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import DescriptionIcon from '@material-ui/icons/Description'
import MuiLink from '@material-ui/core/Link';

import Link from '../components/Link';
import Copyright from '../components/Copyright';
import SocialBar from '../components/SocialBar';
import Bio from '../components/Bio';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

export default function Index(props) {
    const { data } = props;
    const siteTitle = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
    const author = data.site.siteMetadata.author
    const email = data.site.siteMetadata.social.email
    const github = data.site.siteMetadata.social.github
    const logo = data.file.childImageSharp.fluid
    const resume = ''

    const classes = useStyles() 

    return (
        <div className={classes.root}>
            <Grid container spacing={8} direction="row" justify="space-around" alignItems="center">
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="h4" component="h1" gutterBottom align="left">
                        { siteTitle }
                    </Typography>
                </Grid>
                <Grid item xs={10}>
                    <Bio/>
                </Grid>
                <Grid item xs={10} align="center">
                    <Image
                        fluid={logo}
                        style={{
                            marginBottom: 0,
                            minWidth: 50,
                            maxWidth: 600,
                            borderRadius: `100%`,
                        }}
                        imgStyle={{
                            borderRadius: `50%`,
                        }}
                    />
                </Grid>
                <Grid item xs={6} align="center">
                    <Button color="primary" size="large"
                        onClick={() => {navigate("/portfolio/")}}>
                        Portfolio
                    </Button>
                </Grid>
                <Grid item xs={6} align="center">
                    <Button color="primary" size="large"
                        onClick={() => {navigate("/blog/")}}>
                        Blog
                    </Button>
                </Grid>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12}>
                    <SocialBar github={github} email={email}/>
                </Grid>
                <Grid item xs={12}>
                    <Copyright author={author} email={email}/>
                </Grid>
            </Grid>
        </div>
    )
}

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
  }
`
