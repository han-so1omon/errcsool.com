import React from "react"
import { graphql, navigate } from "gatsby"
import Iframe from 'react-iframe'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

//import merge from "deepmerge"
import unified from "unified"
import markdown from "remark-parse"
import codeTitles from "remark-code-titles"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import highlight from "rehype-highlight"
import rehypeReact from "rehype-react"
//import rehypeSanitize from "rehype-sanitize"

import hl_bash from "highlight.js/lib/languages/bash"
import hl_cpp from "highlight.js/lib/languages/cpp"
import hl_dockerfile from "highlight.js/lib/languages/dockerfile"
import hl_js from "highlight.js/lib/languages/javascript"
import hl_py from "highlight.js/lib/languages/python"
import hl_scss from "highlight.js/lib/languages/scss"

import "highlight.js/styles/codepen-embed.css"

import SocialBar from '../components/SocialBar';
import "../styles/code-title.css"

//import gh from "hast-util-sanitize/lib/github"
//var schema = merge(gh, {tagNames: ['math', 'mi']})

var highlightSchema = {
  languages: {
    bash: hl_bash,
    cpp: hl_cpp,
    dockerfile: hl_dockerfile,
    js: hl_js,
    py: hl_py,
    scss: hl_scss,
  }
}

var processor = unified()
  .use(markdown, {commonmark: true})
  .use(codeTitles)
  .use(remarkRehype, {allowDangerousHTML: true})
  .use(rehypeRaw)
  .use(highlight, highlightSchema)
  //.use(rehypeSanitize, schema)
  .use(rehypeReact, {createElement: React.createElement})

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        margin: theme.spacing(3),
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
    },
}))

function ProjectTemplate(props) {
    const data = props.data
    const siteTitle = data.site.siteMetadata.title
    const socialInfo = data.site.siteMetadata.social
    const author = data.site.siteMetadata.author
    const email = data.site.siteMetadata.social.email
    const github = data.site.siteMetadata.social.github
    const resume = ''

    const title = data.cosmicjsProjects.title
    const social = data.site.siteMetadata.social
    const github_repo = data.cosmicjsProjects.metadata.github_repo
    const project_url = data.cosmicjsProjects.metadata.project_url
    const demo = data.cosmicjsProjects.metadata.demo.imgix_url

    const classes = useStyles() 

    let showDemo = false
    let githubRepoElement, projectElement, demoElement;
    if (github_repo) {
        githubRepoElement = <MuiLink href={github_repo}>{github_repo}</MuiLink>
    }
    if (project_url && !project_url.startsWith('http')) {
        projectElement = <div>
            <Iframe url={project_url}
                id={title}
                position="relative"
                display="initial"
                width="100%"
                height="450px"
                allowFullScreen={true}
            />
        </div>
    } else if (demo) {
        showDemo = true
        demoElement= <img
            width="100%"
            src={demo}
        />
    }
    
    let linkElements
    if (project_url && github_repo) {
        linkElements =
            <><Grid item xs={6} sm={6} md={5} lg={5} align="center">
                <MuiLink href={project_url}>
                    <Paper classes={{root: classes.paper}} elevation={1}>
                        Project
                    </Paper>
                </MuiLink>
            </Grid>
            <Grid item xs={6} sm={6} md={5} lg={5} align="center">
                <MuiLink href={github_repo}>
                    <Paper classes={{root: classes.paper}} elevation={1}>
                        Github
                    </Paper>
                </MuiLink>
            </Grid></>
    } else if (github_repo) {
        linkElements =
            <Grid item xs={8} sm={8} md={6} lg={6} align="center">
                <Paper classes={{root: classes.paper}}>
                    <MuiLink href={github_repo}>Github</MuiLink>
                </Paper>
            </Grid>
    } else if (project_url) {
        linkElements =
            <Grid item xs={8} sm={8} md={6} lg={6} align="center">
                <Paper classes={{root: classes.paper}}>
                    <MuiLink href={project_url}>Project</MuiLink>
                </Paper>
            </Grid>
    }

    console.log(processor.processSync(data.cosmicjsProjects.metadata.content))
    return (
        <div className={classes.root}>
            <Grid container spacing={8} direction="row" justify="space-around" alignItems="center">
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={10} align="center">
                    <Typography variant="h4" component="h1" gutterBottom align="left">
                        { title }
                    </Typography>
                </Grid>
                <Grid item xs={10} sm={10} md={8} lg={8} align="center">
                    {projectElement}
                </Grid>
                {showDemo && 
                <Grid item xs={10} sm={10} md={8} lg={8} align="center">
                    {demoElement}
                </Grid>
                }
                {linkElements}
                <Grid item xs={10} sm={10} md={8} lg={8} align="left">
                    {processor.processSync(data.cosmicjsProjects.metadata.content).result}
                </Grid>
                 <Grid item xs={6} align="center">
                    <Button color="primary" size="large"
                        onClick={() => {navigate("/portfolio/")}}>
                        Back
                    </Button>
                </Grid>
                 <Grid item xs={6} align="center">
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

export default ProjectTemplate

export const query = graphql`
  query($slug: String!) {
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
    cosmicjsProjects(slug: { eq: $slug }) {
        id
        title
        created(formatString: "DD MMMM, YYYY")
        metadata {
            content
            blog_post
            github_repo
            project_url
            description
            tags
            demo {
                imgix_url
            }
        }
    }
  }
`
