type Props = {
  onClick: () => void;
};

export default function ChildButton({ onClick }: Props) {
  console.log("🚨 ChildButton rendered");
  return <button onClick={onClick}>Increase (no memo)</button>;
}
