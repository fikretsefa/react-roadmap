import { createContext, useState } from "react";

interface CurrentUser {
  name: string;
  role: "guest" | "user" | "admin";
  //etc.
}

interface CurrentUserType {
  currentUser: CurrentUser;
  setCurrentUser: (currentUser: CurrentUser) => void;
}

const guestUser: CurrentUser = {
  name: "Guest",
  role: "guest",
};

const CurrentUserContext = createContext<CurrentUserType | null>(null);

export const CurrentUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>(guestUser);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContext;
