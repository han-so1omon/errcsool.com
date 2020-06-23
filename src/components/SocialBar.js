import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import GithubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import DescriptionIcon from '@material-ui/icons/Description'
import MuiLink from '@material-ui/core/Link';

export default function SocialBar(props) {
    return (
        <Grid container spacing={8} direction="row" justify="space-around" alignItems="center">
            <Grid item xs={4} align="center">
                <MuiLink color="inherit" href={`https://github.com/${props.github}`}>
                    <GithubIcon/>
                </MuiLink>
            </Grid>
            <Grid item xs={4} align="center">
                <MuiLink color="inherit" href={`mailto:${props.email}`}>
                    <EmailIcon/>
                </MuiLink>
            </Grid>
            <Grid item xs={4} align="center">
                <MuiLink color="inherit" href={'/SolomonResume.pdf'}>
                    <DescriptionIcon/>
                </MuiLink>
            </Grid>
        </Grid>
    )
}
