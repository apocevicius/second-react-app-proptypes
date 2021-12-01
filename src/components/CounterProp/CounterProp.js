import { useState } from "react";
function CounterProp(props) {
  const [localCounterValue, setLocalCounterValue] = useState(props.initVal);

  return (
    <div>
      <h2>Counter name: {props.name}</h2>
      <h3>Counter initial value: {localCounterValue + 5}</h3>
    </div>
  );
}

export default CounterProp;
