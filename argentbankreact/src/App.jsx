import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from'./Layout/Layout';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import User from './Pages/User';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );}

export default App;