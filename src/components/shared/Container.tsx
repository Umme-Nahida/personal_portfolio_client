import React from 'react';

const Container = ({children}:any) => {
    return (
        <div className='container mx-auto px-22'>
            {children}
        </div>
    );
};

export default Container;