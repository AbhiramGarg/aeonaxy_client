import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import { createContext, useState } from 'react';
import Signup from './pages/Signup';
import Complete_profile from './pages/Complete_profile';
import Describe_page from './pages/Describe_page';
import Home from './pages/Home';
export const AppContext = createContext(null);

function App() {

  const [userInfo, setUserinfo] = useState({
    userID: '',
    userPrf: '',
    userName: '',
    userEmail: ''
  });

  return (
    <div>
      <AppContext.Provider value={{ userInfo, setUserinfo }}>
        <BrowserRouter>
          <Routes> {/* Use Routes instead of Switch */}
            <Route path="/" element={<Signup />} /> {/* Use "element" prop instead of "component" */}
            <Route path="/complete" element={<Complete_profile />} />
            <Route path="/describe" element={<Describe_page />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
