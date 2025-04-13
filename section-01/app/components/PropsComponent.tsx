import React from 'react';

// Props interface definition
// - This interface defines the types of the props that will be passed to the component.
// - `name` and `age` are required, while `isStudent` is an optional prop (denoted by `?`).
// - This component is a great example of using TypeScript for type safety in React components.
interface PropsComponentProps {
  name: string;
  age: number;
  isStudent?: boolean; // Optional prop
}

// Functional component with props
// - This component demonstrates how to pass data from a parent component to a child component.
// - It receives `name`, `age`, and `isStudent` as props and displays them in the UI.
// - Default values for props can be set directly in the destructuring assignment, like `isStudent = false`.
// - This is an example of how React functional components handle props and render dynamic content.
const PropsComponent = ({ name, age, isStudent = false }: PropsComponentProps) => {
  return (
    <div style={{backgroundColor:'var(--red-300)'}}>
      <h1>This Component with Props</h1>
      <p>Data is received from the parent component</p>
      <p>You can use again, again and again</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Is Student?: {isStudent ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default PropsComponent;
