import user from "<src>/assets/user";
import { createContext } from "react";

interface Props {
	children: JSX.Element;
}

const userContext = createContext<User>(user);

const UserProvider: React.FC<Props> = ({ children }) => {
	return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

export { UserProvider };
export default userContext;
