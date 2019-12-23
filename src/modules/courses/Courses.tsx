import React from "react";
import Grid from '@material-ui/core/Grid';

import Card from "../../shared/components/Card";

const Courses: React.FC = () => {
    return (
        <>
            <Grid item={true} container={true} xs={6}>
                <Card name="Salsa"/>
            </Grid>
            <Grid item={true} container={true} xs={6}>
                <Card name="Bachata"/>
            </Grid>
            <Grid item={true} container={true} xs={6}>
                <Card name="Hip Hop"/>
            </Grid>
        </>
    );
  }
  
export default Courses;