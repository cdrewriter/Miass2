import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbJsonLd } from 'next-seo';
import Config from '../../configs';

import Typography from '@material-ui/core/Typography';
import Breadcrumbss from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import './Breadcrumbs.scss';

const baseUrl = Config.BASE_URL.replace(/\/$/, '');

const Breadcrumbs = ({ pageTitle, pagePath, parts }) => {
  const breadcrumbItems = [],
    itemListElements = [];

  for (let i = 0; i < parts.length; ++i) {
    breadcrumbItems.push(
      <Link key={i} href={parts[i].href}>
        {parts[i].title}
      </Link>
    );
    itemListElements.push({
      position: i + 1,
      name: parts[i].title,
      item: baseUrl + parts[i].href,
    });
  }

  itemListElements.push({
    position: parts.length,
    name: pageTitle,
    item: baseUrl + pagePath,
  });

  return (
    <React.Fragment>
      <BreadcrumbJsonLd itemListElements={itemListElements} />
      <Breadcrumbss aria-label="breadcrumb" className="breadcrumbs">
        {breadcrumbItems}
        {!!pageTitle && <Typography color="textPrimary">{pageTitle}</Typography>}
      </Breadcrumbss>
    </React.Fragment>
  );
};

Breadcrumbs.propTypes = {
  pageTitle: PropTypes.string,
  pagePath: PropTypes.string,
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
    })
  ),
};

export default Breadcrumbs;
