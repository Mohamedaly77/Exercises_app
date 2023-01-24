import { Box } from '@mui/material';
import React from 'react';
import BodyPart from './BodyPart';

const HorizontalScrollBar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  return (
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.title || item}
          m="0 40px"
        >
          <BodyPart item={item} BodyPart={BodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollBar;
