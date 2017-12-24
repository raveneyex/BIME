import React from 'react';
import Income from '../Income/Income';

const Incomes = ({incomes}) => {
    return (
        <li className='period-movement'>
        {incomes.map((income, index) => 
            <Income key={`period-income_${index}`} income={income} />
        )}
        </li>
    );
};
export default Incomes;