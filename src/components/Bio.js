import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author} = data.site.siteMetadata
        return (
            <Grid container spacing={0} direction="row" justify="space-around" alignItems="center">
                <Grid item xs={2} align="center">
                    <Img
                      fixed={data.avatar.childImageSharp.fixed}
                      alt={author}
                      style={{
                        marginRight: 0.5,
                        marginBottom: 0,
                        minWidth: 50,
                        borderRadius: `100%`,
                      }}
                      imgStyle={{
                        borderRadius: `50%`,
                      }}
                    />
                </Grid>
                <Grid item xs={6} sm={9} md={10} align="left">
                    <Typography variant="p" component="p" gutterBottom align="left">
                      <strong>{author}</strong>
                      {` - `}
                      I'm a fullstack engineer, roboticist, amateur musician, amateur adventurer.
                      I have some good stories.
                    </Typography>
                </Grid>
            </Grid>
        )
      }}
    />
  )
}



const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/content/assets/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`
