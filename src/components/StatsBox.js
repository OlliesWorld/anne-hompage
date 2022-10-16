import React from 'react';

const StatsBox = ({ primaryText, secondaryText }) => (
  <>
    <p className="text-lg lg:text-xl font-semibold text-primary ">{primaryText}</p>
    {/* <p className="font-semibold mb-6">{secondaryText}</p> */}
  </>
);

export default StatsBox;
