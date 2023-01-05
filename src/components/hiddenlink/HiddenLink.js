import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/slice/authSlice";

const ShowOnLogin = ({ children }) => {
  const isloggedIn = useSelector(selectIsLoggedIn);
  if (isloggedIn) {
    return children;
  }
  return null;
};
export const ShowOnLogout = ({ children }) => {
  const isloggedIn = useSelector(selectIsLoggedIn);
  if (!isloggedIn) {
    return children;
  }
  return null;
};

export default ShowOnLogin;
