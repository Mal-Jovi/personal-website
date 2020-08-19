// Jovi Sidhu - 2020

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 300,
        display: 'inline-block',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        variant: "h5",
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard(props) {
    const classes = useStyles;
    const bull = <span className={classes.bullet}>•</span>;

    let name = props.givenData.name;
    let image = props.givenData.sprites.front_default;

    return (
        <Card className={classes.root} style={{ width: 425 }}>
            <CardContent className={classes.content} style={{ backgroundColor: "#d3d3d3" }}>
                <Typography className={classes.title} style={{ color: "white" }} variant="h5" gutterBottom>
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                    <br>
                    </br>
                    <img src={image} />
                </Typography>
            </CardContent>
        </Card>
    );
}