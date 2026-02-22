import React from 'react';

const Count = ({count}) => {
    return (
        <div className='text-2xl font-semibold'>
            {count.value}
        </div>
    );
};

export default Count;