import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./screens/home/Home";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import { useDispatch, useSelector } from 'react-redux';

import {
  Navigate,
  Route,
  Routes,
  BrowserRouter,
  useNavigate
} from "react-router-dom";
import WatchScreen from "./screens/watchScreen/WatchScreen";
import ChannelScreen from "./screens/channelScreen/ChannelScreen";
import SearchScreen from "./screens/search/SearchScreen";

import "./_app.scss";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main ">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {

  const { accessToken, loading } = useSelector(state => state.user.auth);
  const navigate = useNavigate();
  console.log(accessToken);

  useEffect(() => {
    if (!loading && !accessToken) {
		navigate('/auth');
    }
  }, [accessToken, loading])
  

  return (
    <Routes>
          <Route
            path="/"
            exact
            element={
              <Layout>
                <Home />
              </Layout>
            }
          ></Route>

          <Route path="/auth" element={<LoginScreen />}></Route>

          <Route
            path="/search/:query"
            element={
              <Layout>
                <SearchScreen />
              </Layout>
            }
          ></Route>

          <Route
            path="/watch/:id"
            element={
              <Layout>
                <WatchScreen />
              </Layout>
            }
          ></Route>

          <Route
            path="/channel/:channelId"
            element={
              <Layout>
                <ChannelScreen />
              </Layout>
            }
          ></Route>

          <Route element={<Navigate to="/" />}></Route>

          </Routes>
  );
}

export default App;
