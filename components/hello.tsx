import { useSelector, useDispatch } from "react-redux";
import { updateHome } from '../store/actions'

export default function hello() {
  // 调入
  const home = useSelector((state) => state.home)
  const dispatch = useDispatch()
  return (
    <h1>
      hello, {home.name}{" "}
      <button onClick={() => dispatch(updateHome({
        ...home,
        name: 'hp'
      }))}>updateHome</button>
    </h1>
  );
};
