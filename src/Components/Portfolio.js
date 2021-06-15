import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Portfolio(props) { 
  const classes = useStyles();

    if (props.data) {
      var projects = props.data.projects.map((projects,index)=> {
        let projectImage = 'images/portfolio/' + projects.image;
        
        return (
<Grid item  key={index}>
          <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={projects.title}
              height="160"
              width="300"
              image={projectImage}
              title={projects.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {projects.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {projects.category.length < 71 ? projects.category : projects.category.substring(0,71) +" ..." }
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          {
            projects.github!=="" ?   <a href={projects.github} target="_blank" >Github </a>: null
          }
            <a href={projects.url} target="_blank" >
              Live Preview
            </a>
          </CardActions>
        </Card>
        
        </Grid>
        )
      })
    }

    return (
      <section id="portfolio">

      
            <h1>Check Out Some of My Works.</h1>

            <Grid container spacing={3}>
             {projects}

            </Grid>
              
 
      </section>
    );
  
}



