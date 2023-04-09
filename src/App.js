
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/home';
import Login from './page/login';
import Register from './page/register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
