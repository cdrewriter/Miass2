import React from 'react';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    color: 'green',
  },
});

const CloudImg = (props) => {
  const out = props.props;
  let imggal = out.images.map((item) => item.image);

  function renameProperty(obj, fromKey, toKey, copyKey) {
    obj[toKey] = obj[fromKey];
    obj[copyKey] = obj[fromKey];
    obj[fromKey] = obj.lazyLoad;
    obj.lazyLoad = true;
    delete obj[fromKey];
  }
  imggal.forEach((obj) => renameProperty(obj, 'publicUrl', 'original', 'thumbnail'));

  let classes = useStyles();


  return (
    <div key={props.id} className={classes.cloudimg}>
      <img src={imggal} />
    </div>
  );
};

export default CloudImg;
