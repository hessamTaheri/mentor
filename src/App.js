import Index from "./pages/dashboard/Index";
import Login from "./pages/user/Login";
import ForgetPassword from "./pages/user/ForgetPassword";
import Signup from "./pages/user/Signup"; 
import Profile from "./pages/dashboard/Profile";
import ProtectedPage from "./pages/ProtectedPage"
import AuthContextProvider from "./context/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <Index />
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Profile /> */}
    </AuthContextProvider>
  );
};

export default App;
