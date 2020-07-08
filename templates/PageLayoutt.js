import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import HeaderEx from '../components/HeaderEx';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider } from '@material-ui/core/styles';
import NavFooterEx from '../components/FooterEx';
import {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFooter,
  getMuiTreasuryScheme,
} from '@mui-treasury/layout';
import { useRouter } from 'next/router';
import theme from './theme';
import NestedMenu from '../components/NestedMenu';
const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);
const muiTreasuryScheme = getMuiTreasuryScheme();

muiTreasuryScheme.enableAutoCollapse('primarySidebar', 'md');

muiTreasuryScheme.configureHeader((builder) => {
  builder
    .create('headermui')
    .registerConfig('xs', {
      position: 'sticky',
      initialHeight: 64,
    })
    .registerConfig('md', {
      position: 'relative', // won't stick to top when scroll down
      clipped: true,
      initialHeight: 64,
    });
});
muiTreasuryScheme.configureEdgeSidebar((builder) => {
  builder.create('primarySidebar', { anchor: 'left' }).registerPermanentConfig('xl', {
    width: '20%', // recommended width
    collapsible: true,
    collapsedWidth: 64,
    headerMagnetEnabled: true,
    autoExpanded: true,
  });
  builder.create('primarySidebar', { anchor: 'left' }).registerPermanentConfig('lg', {
    width: '22.5%', // recommended width
    collapsible: true,
    collapsedWidth: 64,
    headerMagnetEnabled: true,
    autoExpanded: true,
  });
  builder.create('primarySidebar', { anchor: 'left' }).registerPermanentConfig('md', {
    width: '22.5%', // recommended width
    collapsible: true,
    collapsedWidth: 64,
    headerMagnetEnabled: true,
    autoExpanded: true,
  });
});
const PageLayout = ({ children, className, ...props }) => {
  const router = useRouter();
  muiTreasuryScheme.configureEdgeSidebar((builder) => {
    if (router.pathname === '/') {
      builder.hide('primarySidebar', true);
    }
    if (router.pathname === '/cars') {
      builder.hide('primarySidebar', true);
    }
    if (router.pathname === '/catalog') {
      builder.hide('primarySidebar', true);
    }
  });
  return (
    <StylesProvider injectFirst>
          <CssBaseline />
          <Root theme={theme} scheme={muiTreasuryScheme}>


      <header className="page-layout-header">
      <Header>
          <Toolbar>
            <SidebarTrigger className="sidebar_trigger" sidebarId="primarySidebar" />
            <HeaderEx />
          </Toolbar>
        </Header>
      </header>
      <main className="page-layout-main">
      <DrawerSidebar sidebarId="primarySidebar">
          <SidebarContent className="sidebar_cont">
          <NestedMenu />
          </SidebarContent>
          <CollapseBtn />
        </DrawerSidebar>
        <Content>{children}</Content>
        </main>
      <footer className="page-layout-footer">
      <Footer>
          <NavFooterEx />
        </Footer>
      </footer>


    </Root>
</StylesProvider>
  );
};

PageLayout.propTypes = {
  children: PropTypes.any,
};

PageLayout.defaultProps = {};

export default PageLayout;
