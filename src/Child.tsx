import { useRef, memo } from "react";
import { ChildProps } from "./types";
import { arePropsEqual } from "./helpers";

const Child = ({ user }: ChildProps) => {
  const { id = null, firstName = "", lastName = "" } = user;
  const childCounter = useRef(0);
  return (
    <section>
      <h3>CHILD</h3>
      <p>ID: {id}</p>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <hr />
      <p>Child render(s): {(childCounter.current += 1)}</p>
    </section>
  );
};

export default memo(Child, arePropsEqual);
