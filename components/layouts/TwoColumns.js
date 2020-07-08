import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';

const TwoColumns = ({ children, aside }) => {
  return (
    <Container>
      <Row>
        <Col md={12} lg={8}>
          {children}
        </Col>
        {aside}
      </Row>
    </Container>
  );
};

TwoColumns.propTypes = {
  children: PropTypes.any,
  aside: PropTypes.any,
  className: PropTypes.string,
};

export default TwoColumns;
