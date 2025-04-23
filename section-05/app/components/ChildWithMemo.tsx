import { memo, useMemo } from 'react';



const ChildWithMemo = memo(({ label }:any) => {
  console.log('🔁 ChildWithMemo rendered');
  return <div>{label}</div>;
});

export default ChildWithMemo;