import React from 'react';
import './Navigation.css';

const Navigation = ({
    goHome = () => {}
}) => {
    return (
        <ul className="navigation">
            <li className="navigation-link" onClick={() => goHome('')}>
                Go Home
            </li>
        </ul>
    );

};

export default Navigation;