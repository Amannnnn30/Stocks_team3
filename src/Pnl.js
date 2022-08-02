import React from 'react';
import { useLocation } from 'react-router-dom';

const PnlComponent = () => {
    const location = useLocation();
    const pro = location.state.props;
    console.log(location.state);
    
    return (
        <div>
            <h2>
                Your Portfolio amount after your last transacrtion is: 
                
            </h2>
        </div>
    );
}

export default PnlComponent;