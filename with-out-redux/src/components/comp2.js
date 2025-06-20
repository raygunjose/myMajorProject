import ThirdComponent from "./comp3";

const SecondComponent = ({value})=>{
    return(
        <div style={{background: 'lightyellow', padding:'20px'}}>
            <h1>SecondComponent</h1>
            <h2>Received value {value}</h2>
            <ThirdComponent value={value}/>
        </div>
    );
};

export default SecondComponent;