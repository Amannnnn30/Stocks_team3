import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Stock name:
      <input 
        type="text" 
        name="sName" 
        value={inputs.sName || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter Stock Price:
        <input 
          type="number" 
          name="sPrice" 
          value={inputs.sPrice || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

const PnlComponent = () => {

    const location = useLocation();
    const props = location.state.props;
    console.log(props);
    return (
        <div>
            <h2>Add a stock</h2>
            <MyForm />

        </div>
    );

}

export default PnlComponent;