import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignout = () =>{
        signOut(auth);
    }
    return (
        <div>
            <>
            <Navbar sticky='top' className='navbar py-4 bg-gray'>
                <Container>
                    <Link className='logo' to="/home"><span className='text-danger'>Dantist World</span></Link>
                        <Nav>
                            <NavLink className={({isActive}) =>
                            isActive ? "active-link" : "link"} to="/home">Home</NavLink>
                            <NavLink className={({isActive}) =>
                            isActive ? "active-link" : "link"} to="/about">About</NavLink>
                            <NavLink className={({isActive}) =>
                            isActive ? "active-link" : "link"} to="/blog">Blog</NavLink>
                            {
                                user ?
                                <p className='btn btn-gray font-weight-bold' onClick={handleSignout}><span className='logout'>Log out</span></p>
                                :
                                <>
                                    <NavLink className={({isActive}) =>
                                    isActive ? "active-link" : "link"} to="/login">Login</NavLink>
                                    <NavLink className={({isActive}) =>
                                    isActive ? "active-link" : "link"} to="/register">Sign up</NavLink>
                                </>
                            }
                            
                        </Nav>
                </Container>
            </Navbar>
            </>
        </div>
    );
};

export default Header;