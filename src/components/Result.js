import Pass from "./Pass";
import Fail from "./Fail";
import '../css/Result.css'
export default function Result({ marks }) {
  return <div>{marks > 4 ? <Pass /> : <Fail />}</div>;
}
