import { useState } from "react";
function Conter() {
  const [conter, setConter] = useState<number>(0);
  return (
    <div>
      <h1>{conter}</h1>
      <button onClick={() => setConter((prev) => prev + 1)}>Increment</button>
    </div>
  );
}

export default Conter;
