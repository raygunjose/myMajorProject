const ThirdComponent = ({value})=>{
    return(
        <div style={{background: 'lightgreen', padding:'20px'}}>
            <h1>Third Component</h1>
            <h2>Received Value: {value}</h2>
        </div>
    )
}

export default ThirdComponent;