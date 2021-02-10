export default function Result({ marks }) {
  return <div>{marks > 4 ? <p>Pass</p> : <p>Fail</p>}</div>;
}
