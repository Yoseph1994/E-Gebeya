"use client";

import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return <button disabled={pending}>{pending ? "Loading" : "Add"}</button>;
};

export default SubmitBtn;
