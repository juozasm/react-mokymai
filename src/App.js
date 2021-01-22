import React, { useCallback, useMemo, useState, useEffect } from "react";

function Comp({ isShown, inputVal }) {
  const [isInnerShown, setIsInnerShown] = useState(isShown /* constructor */);

  const error = useCallback(function() {
    console.error('ERROR!!!', { isInnerShown })
  }, [isInnerShown])

  const arr = useMemo(()=>{
    console.log('compute')
    return [inputVal, { isShown }]
  }, [inputVal, isShown])

  useEffect(() => {
    console.log('effect1')
    setIsInnerShown(isShown);
  }, [isShown]);

  useEffect(() => {
    console.log('effect2')
    console.warn(JSON.stringify(arr))
    if(inputVal === 'error'){
      error()
    }
  }, [arr, inputVal, error]);

  return (
    <div>
      <div onClick={() => setIsInnerShown((val) => !val)}>TOGGLE INNER </div>
      {isInnerShown && <h1>SECRET TEXT</h1>}
    
    </div>
  );
}

export default function App() {
  const [value, setValue] = useState("");
  const [isShown, setIsShown] = useState(true /* constructor */);
  const [val, setVal] = useState('');
  console.log("render");
  return (
    <>
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        type="text"
      />
      TIKRASIS CIA: 
      <input

        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <div onClick={() => setIsShown(!isShown)}>OUTER TOGGLE</div>
      <Comp inputVal={value} isShown={isShown} />
    </>
  );
}
