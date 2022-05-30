import {useSelector} from "react-redux";

const Nav = () => {
  const balance = useSelector(state => state.amount)
  return(
      <b>Balance : {balance}</b>
  )
}

export default Nav;
