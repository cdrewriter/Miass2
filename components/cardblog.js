import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'clsx';
import Link from 'next/link';
import { CardActionArea, Typography, Box, spacing } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Button, Grid, Divider } from '@material-ui/core';
import TextInfoContent from './TextInfoContent';
import { grey } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

const shaddowStyle = makeStyles(() => ({
  root: ({ inactive }) => ({
        boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
        transition: '0.3s',
        ...(!inactive && {
          '&:hover': {
            transform: 'translateY(2px)',
            boxShadow: '0px 14px 30px rgba(34, 35, 58, 0.2)',
      },
    }),
      }),
}));

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
      margin: 'auto',
      marginBottom: '2rem',
      borderRadius: spacing(2), // 16px
      transition: '0.3s',
      boxShadow: '4px 2px 20px 0px rgba(34, 35, 58, 0.2)',
      position: 'relative',
      maxWidth: '85%',
      marginLeft: 'auto',
      overflow: 'initial',
      background: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
    alignItems: 'center',
    minHeight: '430px',
    minWidth: '21rem',
    paddingBottom: spacing(0),
    [breakpoints.up('lg')]: {
      paddingTop: spacing(0),
      },
  },
  MuiListItemTextPrimary: {
    color: 'green',
    fontSize: 0.5,
    },
    rubicon: {
        fontSize: '0.5rem',
    },
    overline: {
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontSize: 12,
        marginBottom: '0.875em',
        display: 'inline-block',
        color: 'rgba(67, 0, 255, 0.7)',
  },
  heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: '1.35em',
        lineHeight: 1,

  },
      MuiListItem: {
          root: {
      padding: 0,

          }
  },
  body: {
        marginBottom: spacing(2),
        fontSize: '0.8rem',
        letterSpacing: '0.00938em',

  },
  button: {
    backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
        boxShadow: '0px 4px 32px rgba(252, 56, 56, 0.4)',
        borderRadius: 100,
        paddingLeft: 24,
    paddingRight: 24,
    color: '#ffffff'
  },
  media: {
      flex: '1',
    width: '80%',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '30%',
      borderRadius: spacing(2),
      backgroundColor: '#fff',
      position: 'relative',

    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(147deg, #0d1e70 20%, #383cfd3d 50%)',
        borderRadius: spacing(2), // 16
        opacity: 0.5,
      },
    },
    primary: {
        fontSize: 34,
    },
    content: {
      padding: 24,
      flex: 1,
    },
    cta: {
      marginTop: 24,
      textTransform: 'initial',
    },
  }));
function RubIcon(props) {
  return (
      <SvgIcon {...props}>

      <path d="M11.518-7.509C15.282-7.509,18-9.868,18-13.547,18-17.2,15.282-19.5,11.518-19.5H5.063a.563.563,0,0,0-.562.563v9.563H.563A.563.563,0,0,0,0-8.812v.75A.563.563,0,0,0,.563-7.5H4.5v2.719H.563A.563.563,0,0,0,0-4.219v.656A.563.563,0,0,0,.563-3H4.5V.938a.563.563,0,0,0,.563.563H6A.563.563,0,0,0,6.561.938V-3h7.876A.563.563,0,0,0,15-3.562v-.656a.563.563,0,0,0-.562-.562H6.561V-7.509ZM6.561-17.644h4.905c2.778,0,4.6,1.5,4.6,4.088,0,2.616-1.822,4.17-4.63,4.17H6.561Z" transform="translate(0 19.5)"/>

    </SvgIcon>
    );
  }

const BlogCard = (props, id) => {
  const styles = useStyles();
  const classes = useStyles();

  const {
    button: buttonStyles,
    ...contentStyles
  } = useStyles();
  const shadowStyles = shaddowStyle();
  function inHtml() {
    return <div dangerouslySetInnerHTML={{ __html: `${props.description}` }} />;
  }

  return (
    <Card key={props.id} className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={props.image}
      />
      <CardContent style={{ maxWidth: '80%', width: '100%', marginBottom: '1rem' }} className="cardcontent">

        <TextInfoContent
          classes={contentStyles}
          heading={props.name}
          overline={props.categories.name}
          body=""
        <List
        <List mb={2} spacing={0} pb={0} pt={0} style={{ display: 'inlineFlex', justifyContent: 'spaceBetween' }}  className="primtext">
        >
          {props.date ? (
            <ListItem p={0}>

                    <ListItemText p={0}
                        primary="Год выпуска"
                        className="primtextitem"
                secondary={props.date ? props.date : null}
            />
                    </ListItem> : null}
                    {props.netweight ? <ListItem>

            <ListItemText p={0}
                        primary="Грузоподъемность"
                        className="primtextitem"
                        secondary={props.netweight ? props.netweight  : null}
                    />

          </ListItem> : null}
                    {props.engine ? <ListItem>

            <ListItemText p={0}
                        primary="Двигатель"
                        className="primtextitem"
                        secondary={props.engine ? props.engine  : null}
                    />

          </ListItem> : null}


            </List>

        <Divider variant="middle" />
        <Grid container justify="space-evenly" alignItems="center" style={{ marginTop: '2rem' }}>
          <Grid item style={{ display: 'flex' }}>
                        <Typography  color="primary" style={{ fontSize: '1.5rem',
                        letterSpacing: '-0.1rem',
                        lineHeight: '0.1rem',
                        marginRight: '0.2rem'
            >
              {props.pricevalue}
            </Typography>

            <RubIcon classes={classes.rubicon}
              svgpath={
                <React.Fragment>
                  <path
                    d="M28.571,9V.429a4.275,4.275,0,0,0-4.286-4.286H17.143V-19.571A1.433,1.433,0,0,0,15.714-21H12.857a1.433,1.433,0,0,0-1.429,1.429V-3.857H4.286A4.275,4.275,0,0,0,0,.429V9a4.275,4.275,0,0,0,4.286,4.286h7.143V69a1.433,1.433,0,0,0,1.429,1.429h2.857A1.433,1.433,0,0,0,17.143,69V13.286h7.143A4.275,4.275,0,0,0,28.571,9ZM22.857,7.571H5.714V1.857H22.857ZM50,36.143H42.857V-19.571A1.433,1.433,0,0,0,41.429-21H38.571a1.433,1.433,0,0,0-1.429,1.429V36.143H30a4.275,4.275,0,0,0-4.286,4.286V49A4.275,4.275,0,0,0,30,53.286h7.143V69a1.433,1.433,0,0,0,1.429,1.429h2.857A1.433,1.433,0,0,0,42.857,69V53.286H50A4.275,4.275,0,0,0,54.286,49V40.429A4.275,4.275,0,0,0,50,36.143ZM48.571,47.571H31.429V41.857H48.571Zm27.143-40H68.571V-19.571A1.433,1.433,0,0,0,67.143-21H64.286a1.433,1.433,0,0,0-1.429,1.429V7.571H55.714a4.275,4.275,0,0,0-4.286,4.286v8.571a4.275,4.275,0,0,0,4.286,4.286h7.143V69a1.433,1.433,0,0,0,1.429,1.429h2.857A1.433,1.433,0,0,0,68.571,69V24.714h7.143A4.275,4.275,0,0,0,80,20.429V11.857A4.275,4.275,0,0,0,75.714,7.571ZM74.286,19H57.143V13.286H74.286Z"
                    transform="translate(0 21)"
                  />
                </React.Fragment>
              style={{ color: grey[400], fontSize: '0.75rem', lineHeight: '1rem'  }}
                        viewBox="0 0 18 24"/>
            />
          </Grid>
          <Grid item>
            <Link variant="Button" href={`/carcat/cars/[id]?id=${props.id}`} as={`/carcat/cars/${props.id}`} passHref>
              <Button className={buttonStyles} color="secondary" disableElevation>Подробнее</Button>
                    </Link>
          </Grid>
        </Grid>
        </CardContent>

    </Card>
  );
};


export default BlogCard;
