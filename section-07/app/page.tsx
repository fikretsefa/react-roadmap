import Counter from "./components/Counter";
import Form from "./components/Form";
import Todo from "./components/Todo";

export default function Home() {
  return (
    <div>
      <Counter />
      <hr />
      <Form />
      <hr />
      <Todo />
    </div>
  );
}
