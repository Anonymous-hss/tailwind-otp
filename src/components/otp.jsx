import { useRef } from "react";
import { useState } from "react";

export function Otp() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  const [disabled, setDisabled] = useState(true);
  return (
    <div className="flex justify-center">
      <SubotpBox reference={ref1}></SubotpBox>
      <SubotpBox></SubotpBox>
      <SubotpBox></SubotpBox>
      <SubotpBox></SubotpBox>
      <SubotpBox></SubotpBox>
      <SubotpBox></SubotpBox>
    </div>
  );
}

function SubotpBox() {
  return (
    <div>
      <input
        type="text"
        className=" m-2 w-[40px] h-[50px] rounded-2xl bg-blue-500 outline-none px-4 text-white"
      />
    </div>
  );
}
