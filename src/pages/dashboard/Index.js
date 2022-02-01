import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Request from "./Request"
import More from "./More"
import Login from "../user/Login"
import NotFound from "../404"
import Profile from "./Profile"
import ShowRequest from "./ShowRequest"
import ForgetPassword from "../user/ForgetPassword";
import Signup from "../user/Signup";
import { useAuth } from "../../context/AuthContext"; 
import ResetPasword from "../user/ResetPassword";
import Home from "../Home";



const Index = () => {
  const  {currentUser}  = useAuth();
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      {/* {currentUser ? (
      <> */}
      <Route exact path="/" element={currentUser ? <Dashboard /> : <Login />} />
      <Route exact path="/request" element={currentUser ? <Request /> : <Login />} />
      <Route path="/request/:userId" element={currentUser ? <ShowRequest /> : <Login />} />
      <Route path="/more" element={currentUser ? <More />: <Login />} />
      <Route path="/profile" element={currentUser ? <Profile />: <Login />} />
      {/* </> */}
    {/* ) : ( */}
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={currentUser ? <Dashboard /> : <Login />} />
      {/* )} */}
      <Route path="/signup" element={currentUser ? <Dashboard /> : <Signup />} />
      <Route path="/forgetpassword" element={currentUser ? <Dashboard /> : <ForgetPassword />} />
      <Route path="/resetpassword" element={currentUser ? <Dashboard /> : <ResetPasword />} />
      <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  ); 
};

export default Index;

// function ProtectedRoute(props) {
//   const { currectUser } = useAuth();
//   const { path } = props;
//   return currectUser ? (
//     <Route {...props} />
//   ) : (
//     <Navigate
//       to={{
//         pathname: "/login",
//         state: { from: path },
//       }}
//     />
//   );
// }
