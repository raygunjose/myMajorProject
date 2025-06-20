import { useDispatch, useSelector } from "react-redux"
import { updateValue } from "../redux/valueSlice";
import SecondComponent from "./comp2";

const FirstComponent = ()=>{
    const value = useSelector((state)=>state.value.data);
    const dispatch = useDispatch();

    return(
        <div style={{background: 'lightgreen', padding:'20px'}}>
            <h1>First Component</h1>
            <input
                type="text"
                value={value}
                onChange={(e)=> dispatch(updateValue(e.target.value))}
            />
            <SecondComponent/>
        </div>
    );
};

export default FirstComponent;