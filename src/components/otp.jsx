import { useRef } from "react";
import { useState } from "react";
import { Button } from "./Buttons";

export function Otp({ number }) {
  const [disabled, setDisabled] = useState(true);
  return (
    <div className="flex justify-center">
      {Array(number).map((x) => (
        <SubotpBox
          reference={ref1}
          onDone={() => {
            ref2.current.focus();
          }}
        />
      ))}
      <br />
      <Button disabled={disabled}> Sign up </Button>
    </div>
  );
}

function SubotpBox({ reference, onDone, onBack }) {
  const [inputvalue, setinputValue] = "";
  return (
    <div>
      <input
        onKeyUp={(e) => {
          if (e.key == "Backspace") {
            onBack();
          }
        }}
        value={inputvalue}
        ref={reference}
        onChange={(e) => {
          const val = e.target.value;
          if (
            val == "1" ||
            val == "2" ||
            val == "3" ||
            val == "4" ||
            val == "5" ||
            val == "6" ||
            val == "7" ||
            val == "8" ||
            val == "9" ||
            val == "0"
          ) {
            setinputValue(val);
            onDone();
          } else {
          }
          onDone();
        }}
        type="text"
        className=" m-2 w-[40px] h-[50px] rounded-2xl bg-blue-500 outline-none px-4 text-white"
      />
    </div>
  );
}
