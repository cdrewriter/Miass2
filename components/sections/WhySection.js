import React from 'react';
import PropTypes from 'prop-types';
import { Button, IconButton, Icon, Box, Container, SvgIcon, Divider, Typography } from '@material-ui/core';
import BlockHead from '../../templates/BlockHead';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import './WhySection.scss';
import TabsService from '../TabsServices';
import { YMaps, Map } from 'react-yandex-maps';
function ServiceIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M78.53,39.848,59.093,20.4A12.5,12.5,0,0,0,43.359,18.82L30,5.464V-6L10-21,0-11l15,20H26.468L39.828,22.351a12.492,12.492,0,0,0,1.594,15.731L60.874,57.532A5,5,0,0,0,64.405,59a4.931,4.931,0,0,0,3.531-1.468L78.546,46.924A5.02,5.02,0,0,0,78.53,39.848ZM25,3.7V4H17.5L6.609-10.533l3.859-3.859L25-3.5Zm39.39,50.287L44.952,34.536A7.49,7.49,0,1,1,55.546,23.944L75,43.378ZM10,46.487a2.5,2.5,0,1,0,2.5-2.5A2.507,2.507,0,0,0,10,46.487ZM43.249-10.549A18.428,18.428,0,0,1,56.343-16a18.843,18.843,0,0,1,3.234.281L48.749-4.878,50.905,8.088,63.89,10.244,74.718-.582a18.405,18.405,0,0,1-5.172,16.325A18.173,18.173,0,0,1,64.858,19.1l3.688,3.687a22.623,22.623,0,0,0,4.531-3.515,23.381,23.381,0,0,0,6.2-22.386A4.23,4.23,0,0,0,76.3-6.175a4.291,4.291,0,0,0-4.172,1.094L62.14,4.9,55.233,3.745l-1.156-6.9,9.984-9.982a4.269,4.269,0,0,0,1.094-4.14,4.271,4.271,0,0,0-3.078-3A23.431,23.431,0,0,0,39.7-14.08,22.921,22.921,0,0,0,35-7.206V3.386l3.453,3.453A18.4,18.4,0,0,1,43.249-10.549ZM16.718,51.97A7.043,7.043,0,0,1,7,51.97a6.892,6.892,0,0,1,0-9.717L29.828,19.43,26.3,15.9,3.469,38.723a11.865,11.865,0,0,0,8.391,20.262A11.746,11.746,0,0,0,20.25,55.5L36.156,39.613a18.1,18.1,0,0,1-2.422-4.655Z"
        transform="translate(0 21)"
        fill="#c7c7c7"
      />
    </SvgIcon>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '440px',
  },
  Icon: {
    root: {
      '& > .fa': {
        margin: theme.spacing(2),
      },
    },
  },
}));

const WhySection = () => {
  const classes = useStyles();
  return (
    <>
      <Box mt={12}>
        <Container maxWidth="lg">
          <Box display="flex" mt={8} mb={0} justifyContent="spaceBetween">
            <BlockHead
              heading="Сервис"
              subheading="Ремонт агрегатов, монтаж КМУ, техническое обслуживание."
              justifyContent="center"
            >
              <ServiceIcon
                className={classes.iconlogo}
                style={{ fontSize: '4rem', marginRight: '2rem', color: grey[300] }}
                viewBox="0 0 80 91.429"
              />
            </BlockHead>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <Button size="large" variant="outlined" color="primary">
                ПОЛНЫЙ ПЕРЕЧЕНЬ УСЛУГ
              </Button>
            </Box>
          </Box>
        </Container>
        <TabsService />
      </Box>
      <Box
        p={8}
        css={{
          position: 'relative',
          background: '#ebebeb',
        }}
      >
        <Box
          p={8}
          zIndex="modal"
          css={{
            display: 'block',
            position: 'absolute',
            background: 'white',
            boxShadow: '0px 10px 20px hsla(200, 20%, 20%, 0.20)',
            marginBottom: 32,
            cursor: 'pointer',
            borderRadius: 6,
            left: '10%',
            overflow: 'hidden',
            top: '20%',
            maxWidth: '100%',
          }}
        >
          <Typography variant="h3">Контакты</Typography>
          <Typography variant="subtitle1" style={{ marginTop: '2rem' }}>
            Мы всегда готовы ответить на Ваши вопросы в рабочее время.{' '}
          </Typography>
          <Box mt={8} display="flex" flexDirection="column">
            <Box m={1} display="flex">
              <div>
                <IconButton>
                  <Icon>phone</Icon>
                </IconButton>
              </div>
              <div>
                <Typography variant="overline">Телефон</Typography>
                <Typography variant="h5">+7 (351) 777-78-65</Typography>
              </div>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box m={1} display="flex">
              <div>
                <IconButton>
                  <Icon>place</Icon>
                </IconButton>
              </div>
              <div>
                <Typography variant="overline">Адрес</Typography>
                <Typography variant="h5">Миасс, Объездная дорога 2/8</Typography>
              </div>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box mt={4} display="flex" justifyContent="start">
              <IconButton>
                <Icon className="fab fa-whatsapp" style={{ fontSize: 50 }} />
              </IconButton>

              <IconButton>
                <Icon className="fab fa-instagram" style={{ fontSize: 50 }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box>
          <YMaps>
            <div>
              <Map
                style={{ width: '100%', height: '600px', marginLeft: '20vw' }}
                className={classes.ymap}
                defaultState={{ center: [55.122817, 60.143279], zoom: 16, width: '100%', height: '400px' }}
              />
            </div>
          </YMaps>
        </Box>
      </Box>
    </>
  );
};

WhySection.propTypes = {};

export default WhySection;
