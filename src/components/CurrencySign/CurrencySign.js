import React from 'react';

import './CurrencySign.css';

const CurrencySign = () => {
    return (
        <input
            className='currency-sign'
            type='text'
            readOnly={true}
            value='$' />
    );
};
export default CurrencySign;
