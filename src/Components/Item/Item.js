import React from 'react';
import PropTypes from 'prop-types';

import './Item.css';
const Item = ({ item, handleVision }) => {
  return (
    <>
      <tr>
        <th>
          <img
            className='clickImg'
            src={require('../../assets/vision.png')}
            alt='vision'
            onClick={() => handleVision(item.name)}
          />
        </th>
        <td>
          <img
            className='rounded float-left'
            style={{ width: '200px' }}
            src={item.imgSrc}
            alt={item.name}
          />
        </td>
        <td>
          <h4>{item.name}</h4>
        </td>
        <td>{item.price}</td>
      </tr>
    </>
  );
};

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
