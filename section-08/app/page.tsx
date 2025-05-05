"use client";
import { Theme, useTheme } from "@/context/ThemeContext";
import CurrentUserContext from "@/context/UserContext";
import { useContext } from "react";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const userContext = useContext(CurrentUserContext);

  if (!userContext) {
    return <div>Context not loaded</div>;
  }

  const { currentUser, setCurrentUser } = userContext;

  return (
    <div
      style={{
        background: theme === Theme.LIGHT ? "#fff" : "#000",
        color: theme === Theme.LIGHT ? "#000" : "#fff",
      }}
    >
      <>
        <p>Updating a value via context</p>
        <p>Theme: {theme}</p>
        <button onClick={toggleTheme}>Theme is {theme}</button>
      </>
      <hr />
      <>
        <p>Updating an object via context</p>
        <p>Name: {currentUser?.name}</p>
        <p>Role: {currentUser?.role}</p>
        {currentUser?.role == "guest" ? (
          <button
            onClick={() =>
              setCurrentUser({
                name: "Test User",
                role: "user",
              })
            }
          >
            Login
          </button>
        ) : (
          <button
            onClick={() =>
              setCurrentUser({
                name: "Guest",
                role: "guest",
              })
            }
          >
            Exit
          </button>
        )}
      </>
      <hr />
    </div>
  );
}
