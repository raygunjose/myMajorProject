import React, {useState} from 'react';
import SecondComponent from './comp2';

const FirstComponent = ()=>{
    const [value, setValue] = useState("A value form Raygun");

    return(
        <div style={{background: 'lightblue', padding:'20px'}}>
            <h1>FirstComponent</h1>
            <input
                type="text"
                value = {value}
                onChange = {(e)=>setValue(e.target.value)}
            />
            <SecondComponent value={value}/>
        </div>
    );
};

export default FirstComponent;