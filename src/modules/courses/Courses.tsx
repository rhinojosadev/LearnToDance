import React from "react";
import Grid from '@material-ui/core/Grid';

import Card from "../../shared/components/Card";
import Header from "../../shared/components/Header";


const Courses: React.FC = () => {
    
    return (
        <>
            <Header>
                <h1>Learn to Dance</h1>
            </Header>
            <Grid item={true} container={true} xs={6}>
                <Card name="Salsa" url="/salsa"/>
            </Grid>
            <Grid item={true} container={true} xs={6}>
                <Card name="Bachata" url="/bachata"/>
            </Grid>
            <Grid item={true} container={true} xs={6}>
                <Card name="Hip Hop" url="/hiphop"/>
            </Grid>
        </>
    );
  }
  
export default Courses;