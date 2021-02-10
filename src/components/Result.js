import Pass from "./Pass";
import Fail from "./Fail";

export default function Result({ marks }) {
  return <div>{marks > 4 ? <Pass /> : <Fail />}</div>;
}
