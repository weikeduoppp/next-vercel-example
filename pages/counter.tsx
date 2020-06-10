import { useRouter } from "next/router";
import Counter from '../components/counter';
export default () => {
  const router = useRouter();
  console.log(router)
  return (
    <div>
      <Counter/>
    </div>
  )
}