/* eslint-disable react/prop-types */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { firebaseTabsStylesHook } from '@mui-treasury/styles/tabs';
import { useRouter } from 'next/router';

const FirebaseTabs = (href) => {
  const router = useRouter();
  const [tabIndex, setTabIndex] = React.useState(router.pathname === href ? 'red' : 'black');
  const tabsStyles = firebaseTabsStylesHook.useTabs();
  const tabItemStyles = firebaseTabsStylesHook.useTabItem();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };
  return (
    <>
      <AppBar position={'static'}>
        <Tabs classes={tabsStyles} value={tabIndex} onMouseover={handleChange}>
          <Tab classes={tabItemStyles} label="Техника" href="/cars" />
          <Tab classes={tabItemStyles} label="Запасные части" href="/catalog" />
          <Tab classes={tabItemStyles} label="Сервис" href="/services" />
        </Tabs>
      </AppBar>
    </>
  );
};

FirebaseTabs.getTheme = (muiBaseTheme) => ({
  MuiTabs: {
    root: {
      marginLeft: muiBaseTheme.spacing.unit,
    },
    indicator: {
      height: 3,
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
      backgroundColor: muiBaseTheme.palette.common.white,
    },
  },
  MuiTab: {
    root: {
      textTransform: 'initial',
      margin: `0 ${muiBaseTheme.spacing.unit * 2}px`,
      minWidth: 0,
      [muiBaseTheme.breakpoints.up('md')]: {
        minWidth: 100,
      },
    },
    label: {
      fontWeight: 'normal',
      letterSpacing: 0.5,
    },
    labelContainer: {
      padding: 0,
      [muiBaseTheme.breakpoints.up('md')]: {
        padding: 0,
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
});
FirebaseTabs.metadata = {
  name: 'Firebase Tabs',
  description: 'implement firebase theme (primary-color: #039be5)',
};

export default FirebaseTabs;
