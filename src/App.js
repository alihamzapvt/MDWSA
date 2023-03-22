import SignUp from "./Screens/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";

function App() {
  return (
<BrowserRouter>
      {/* <SignUp /> */}
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
