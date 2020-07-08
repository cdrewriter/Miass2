/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    color: 'green',
  },
});

const CloudImg = (props) => {
  const out = props.props;
  console.log(out);
  //let imggal = out.images.map((image) => image.image);

  function renameProperty(obj, fromKey, toKey, copyKey) {
    obj[toKey] = obj[fromKey];
    obj[copyKey] = obj[fromKey];
    obj[fromKey] = obj.lazyLoad;
    obj.lazyLoad = true;
    delete obj[fromKey];
  }
  //imggal.forEach((obj) => renameProperty(obj, 'publicUrl', 'original', 'thumbnail'));

  let classes = useStyles();
  //console.log(imggal);

  return (
    <div key={props} className={classes.cloudimg}>
      smth
      {/*<ImageGallery items={imggal} /> */}
    </div>
  );
};

export default CloudImg;
