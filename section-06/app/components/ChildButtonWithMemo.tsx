import React from "react";

type Props = {
  onClick: () => void;
};

function ChildButtonWithMemo({ onClick }: Props) {
  console.log("✅ ChildButtonWithMemo rendered");
  return <button onClick={onClick}>Increase (with memo)</button>;
}

export default React.memo(ChildButtonWithMemo);
