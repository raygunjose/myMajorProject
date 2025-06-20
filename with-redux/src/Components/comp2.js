import ThirdComponent from "./comp3";

const SecondComponent = ()=>{
    return(
        <div style={{background: 'lightcoral', padding:'20px'}}>
            <h1>Second Component</h1>
            <ThirdComponent/>
        </div>
    );
};

export default SecondComponent;