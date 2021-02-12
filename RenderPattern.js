import { useState, useEffect } from "react";
import "./styles.css";

function Wrapper({ children }) {
  const [childHasError, setChildHasError] = useState(false);
  //// setChildHasError(hasError)
  //const children = () => children;

  return (
    <div>
      {childHasError && <p style={{ color: "red " }}>SOME CHILD HAS ERROR</p>}
      {children(setChildHasError)}
    </div>
  );
}

function Child({ buttonName = "", onError }) {
  return (
    <button onClick={() => onError(true)}>Init error in {buttonName}</button>
  );
}

export default function App() {
  console.log("render");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Wrapper>
        {(setChildHasError) => (
          <>
            <Child buttonName="1" onError={() => setChildHasError(true)} />
            <Child buttonName="2" onError={() => setChildHasError(true)} />
          </>
        )}
      </Wrapper>
    </div>
  );
}
