import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import action from '../state/index'
import {withdrawMoney} from "../state/actions";
const Body = () => {
    const dispatch = useDispatch()
    const {depositMoney, withdrawMoney} = bindActionCreators(action, dispatch);
    return(
        <>
            <button onClick={()=> withdrawMoney(100)}>-</button>
            <b>Amount</b>
            <button onClick={()=> withdrawMoney(100)}>-</button>
        </>
    )
}

export default Body;
