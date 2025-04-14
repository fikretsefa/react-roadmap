"use client";

import { useState } from "react";

const StateComponent = () => {
  //#region Count
  const [count, setCount] = useState(28);

  const handleCount = () => {
    setCount(count + 1);
  };
  //#endregion

  //#region Text
  const [text, setText] = useState("This is example text");

  const handleText = (e: any) => {
    setText(e.target.value);
  };
  //#endregion

  //#region Checkbox
  const [checkbox, setCheckbox] = useState(true);

  const handleCheckbox = (e: any) => {
    setCheckbox(e.target.checked);
  };
  //#endregion

  //#region Prev State
  const [countPrev, setCountPrev] = useState(2);

  const handleCountPrev = () => {
    //if using like this, it's not going to work
    //because countPrev already has the same value in this function
    setCountPrev(countPrev + 1);
    setCountPrev(countPrev + 1);
    setCountPrev(countPrev + 1);
    //instead of you can use this usage
    setCountPrev((prevValue) => prevValue + 1);
    setCountPrev((prevValue) => prevValue + 1);
    setCountPrev((prevValue) => prevValue + 1);
  };

  const handlePassingTheUpdaterFunction = () => {
    setCountPrev((prevValue) => prevValue + 1);
  };
  const handlePassingTheNextStateDirectly = () => {
    setCountPrev(countPrev + 1);
  };
  //#endregion

  //#region Form
  const [form, setForm] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  //#endregion

  //#region Todos
  const createInitialTodos = () => {
    const initialTodos = [];
    for (let i = 0; i < 3; i++) {
      initialTodos.push({
        id: i,
        text: "Item " + (i + 1),
      });
    }
    return initialTodos;
  };
  const [todos, setTodos] = useState(createInitialTodos);

  //#endregion

  //#region Resetting state with a key
  const [formKey, setFormKey] = useState(0);
  const handleFormKey = () => {
    setFormKey((prev) => prev + 1);
  };
  const FormWithKey = () => {
    const [name, setName] = useState("Taylor");

    return (
      <>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Hello, {name}.</p>
      </>
    );
  };
  //#endregion

  //#region Troubleshooting
  const [troubleCount, setTroubleCount] = useState(0);
  const handleTroubleCount = () => {
    console.log("Step1:", troubleCount); // 0

    setCount(troubleCount + 1); // Request a re-render with 1
    console.log("Step2:", troubleCount); // Still 0!

    setTimeout(() => {
      console.log("Step3:", troubleCount); // Also 0!
    }, 5000);
  };
  //#endregion

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "#333" }}>
          Simple Counter Example
        </h3>
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          Counter: {count}
        </p>
        <button
          onClick={handleCount}
          style={{
            background: "#007bff",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Press to increase count one by one
        </button>
      </div>

      <div
        style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "#333" }}>
          Text Input Example
        </h3>
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>Text: {text}</p>
        <input
          value={text}
          onChange={handleText}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ddd",
            width: "100%",
            maxWidth: "300px",
          }}
        />
      </div>

      <div
        style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "#333" }}>
          Checkbox Example
        </h3>
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          State: {JSON.stringify(checkbox)}
        </p>
        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            checked={checkbox}
            onChange={handleCheckbox}
            style={{ width: "20px", height: "20px" }}
          />
          <span>Toggle checkbox state</span>
        </label>
      </div>

      <div
        style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "#333" }}>Form Example</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label
            style={{ display: "flex", flexDirection: "column", gap: "5px" }}
          >
            First Name:
            <input
              value={form.firstName}
              onChange={(e) => {
                setForm({
                  ...form,
                  firstName: e.target.value,
                });
              }}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </label>
          <label
            style={{ display: "flex", flexDirection: "column", gap: "5px" }}
          >
            Last Name:
            <input
              value={form.lastName}
              onChange={(e) => {
                setForm({
                  ...form,
                  lastName: e.target.value,
                });
              }}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </label>
          <label
            style={{ display: "flex", flexDirection: "column", gap: "5px" }}
          >
            Email:
            <input
              value={form.email}
              onChange={(e) => {
                setForm({
                  ...form,
                  email: e.target.value,
                });
              }}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </label>
        </div>
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            background: "white",
            borderRadius: "4px",
          }}
        >
          <p style={{ margin: "0" }}>
            {form.firstName} {form.lastName}
          </p>
          <p style={{ margin: "5px 0 0 0", color: "#666" }}>{form.email}</p>
        </div>
      </div>

      <div
        style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "#333" }}>List Example</h3>
        <ul
          style={{
            listStyle: "none",
            padding: "0",
            margin: "0",
          }}
        >
          {todos.map((item) => (
            <li
              key={item.id}
              style={{
                padding: "10px",
                background: "white",
                marginBottom: "5px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      <div
        style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "#333" }}>
          Reset with Key Example
        </h3>
        <button
          onClick={handleFormKey}
          style={{
            background: "#007bff",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          Reset Form
        </button>
        <div
          style={{
            background: "white",
            padding: "15px",
            borderRadius: "4px",
          }}
        >
          <FormWithKey key={formKey} />
        </div>
      </div>

      <div
        style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "#333" }}>
          Troubleshooting Example
        </h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={handleTroubleCount}
            style={{
              background: "#007bff",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Check console: {troubleCount}
          </button>
          <button
            onClick={() => {
              setTroubleCount((prev) => prev + 1);
            }}
            style={{
              background: "#28a745",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Click before timeout
          </button>
        </div>
      </div>
    </div>
  );
};

export default StateComponent;
