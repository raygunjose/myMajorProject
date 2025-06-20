import { useSelector } from 'react-redux';

const ThirdComponent = ()=>{
    const value = useSelector((state) => state.value.data);

    return(
        <div style={{background: 'lightyellow', padding:'20px'}}>
            <h1>
                Third Component
            </h1>
            <p>Global value: {value}</p>
        </div>
    );
 };

 export default ThirdComponent;