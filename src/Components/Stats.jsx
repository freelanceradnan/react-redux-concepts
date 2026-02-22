import React from 'react';

const Stats = ({totalvalue}) => {
    return (
        <div className="text-center font-bold">
           Total value is: {totalvalue}
        </div>
    );
};

export default Stats;