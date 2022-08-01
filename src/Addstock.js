import React from 'react';
import { useLocation } from 'react-router-dom';

const PnlComponent = () => {

    const location = useLocation();
    const props = location.state.props;
    console.log(props);
    return (
        <div>
            <h2>Add a stock</h2>

        </div>
    );

}

export default PnlComponent;