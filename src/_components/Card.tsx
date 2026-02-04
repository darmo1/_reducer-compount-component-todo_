import React, { useState } from "react";
import { CardContextProvider, useCardContext } from "../context";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Component({ children, className }: Props) {
  return (
    <CardContextProvider>
      <div className={`${className}`}>{children}</div>
    </CardContextProvider>
  );
}

function Title({ children, className }: Props) {
  return <div className={`${className}`}>{children}</div>;
}

function Description({ children, className }: Props) {
  const { isOpen, setIsOpen } = useCardContext();
  return (
    <div className={`${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-2 px-2 py-1 bg-blue-500 text-white rounded-md"
      >
        {isOpen ? "Hide Description" : "Show Description"}
      </button>
      {isOpen ? <div>{children}</div> : null}
    </div>
  );
}

function Checkbox({
  dispatch,
  index,
  status,
  className,
}: {
  className?: string;
  index: number;
  dispatch: React.Dispatch<{
    type: string;
    payload: { id: number; status: "done" | "not done" };
  }>;
  status: "done" | "not done";
}) {
  const [checked, setChecked] = useState<boolean>(status === "done");
  return (
    <label>
      Check me if it is done
      <input
        className={` ml-2 ${className}`}
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          const newCheckedState = e.target.checked;
          setChecked(newCheckedState);

          dispatch({
            type: "TOGGLE_CHECKED",
            payload: { id: index, status: checked ? "not done" : "done" },
          });
        }}
      />
    </label>
  );
}

const Card = Object.assign(Component, {
  Title,
  Description,
  Checkbox,
});

export default Card;
