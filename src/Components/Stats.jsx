import React from 'react';

const Stats = ({totalvalue}) => {
    return (
        <div className="text-center font-bold bg-slate-300">
           Total value is: {totalvalue}
        </div>
    );
};

export default Stats;