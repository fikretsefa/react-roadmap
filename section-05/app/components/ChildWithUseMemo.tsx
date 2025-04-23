import { useMemo } from 'react';

interface ChildWithUseMemoProps {
  items: number[];
}

const ChildWithUseMemo = ({ items }: ChildWithUseMemoProps) => {
  console.log('🔄 ChildWithUseMemo rendered');

  const total = useMemo(() => {
    console.log('🧮 useMemo calculation ran');
    return items.reduce((a: number, b: number) => a + b, 0);
  }, [items]);

  return <div>Total (useMemo): {total}</div>;
};

export default ChildWithUseMemo;