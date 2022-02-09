import './App.css';
import {Container, Navbar,NavItem,NavLink,Nav,NavbarBrand} from 'reactstrap';
import { useState } from 'react';
import Login from './Views/Login';
import MemberDetails from './Views/memberdetails';
import { Link, Route, Routes } from "react-router-dom"

function App() {

  return (
        <>
        <div style={{ padding: "40px" }}>
            <Navbar style = {{background:"grey" ,color:"light"}} >
          <NavbarBrand href="/">Home</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/users">users</NavLink>
              </NavItem>
              </Nav>
          </Navbar>
        </div>
        <div>
            <Routes>
            <Route path="/" element={<h1>HOME</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<MemberDetails title='regularUsers'/>}/>
            <Route path="/users/regularUsers" element={<MemberDetails title='regularUsers'/>}/>
            <Route path="/users/premiumUsers" element={<MemberDetails title='premiumUsers'/>}/>
            </Routes>
        </div>
        </>
  );
}

export default App;

{/* <Container>
        {
          isLoggedIn ? (
            <MemberDetails/>
          ) : 
          (
            <Login loginStatus = {hasLoggedIn}/>
            
          )
        }
        </Container> */}