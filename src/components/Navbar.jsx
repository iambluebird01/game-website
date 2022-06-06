import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import flag from '../assets/flag.png';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
import { FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
export default function Navbar({ user }) {
  const logout = () => {
    window.open('http://localhost:5000/auth/logout', '_self');
  };

  const [navState, setNavState] = useState(false);
  return (
    <Nav>
      <div className="brand">
        <div className="logo">
          <img src={logo} alt="Earthium" />
        </div>
        <div className="toggle">
          {navState ? (
            <BsToggleOn onClick={() => setNavState(false)} />
          ) : (
            <BsToggleOff onClick={() => setNavState(true)} />
          )}
        </div>
      </div>
      <div className={`links ${navState ? 'show' : 'hide'}`}>
        {user ? (
          <ul>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="news">News</a>
            </li>
            <li>
              <a href="map">Discussion</a>
            </li>
            <li>
              <a href="map">Guides</a>
            </li>
            <div className="listItem">
              <img src={user.photos[0].value} alt="" className="avatar" />
            </div>
            <div className="listItem">{user.displayName}</div>
            <div className="login-btn">
              <button onClick={logout}>Logout</button>
            </div>
          </ul>
        ) : (
          <li className="loglog">Please Sign-in to enter our website</li>
        )}
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 3rem 6rem;
  .brand {
    display: flex;
    align-items: center;
    .logo {
      img {
        height: 5vh;
      }
    }
    .toggle {
      display: none;
    }
  }

  .listItem {
    display: flex;
    margin-right: 20px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 20%;
    object-fit: cover;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    ul {
      display: flex;
      list-style-type: none;
      gap: 2rem;
      li {
        padding: 0.5rem 1rem;
        transition: 0.3s ease-in-out;
        &:first-of-type {
          background-color: var(--primary-color);
          border-radius: 0.3rem;
          a {
            color: black;
          }
        }
        &:hover {
          background-color: var(--primary-color);
          border-radius: 0.3rem;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          color: white;
          font-weight: bold;
          transition: 0.3s ease-in-out;
        }
      }
    }
    .loglog {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 2rem;
    }

    .login-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      .flag {
        display: flex;
        justify-content: center;
        gap: 0.3rem;
        align-items: center;
        font-weight: bold;
        cursor: pointer;
      }
      button {
        border: 1px solid var(--primary-color);
        background-color: transparent;
        color: white;
        border-radius: 0.3rem;
        padding: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;
        font-weight: bold;
        cursor: pointer;
        svg {
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: relative;
    margin: 0;
    .brand {
      padding: 2rem 1rem;
      justify-content: space-between;
      width: 100%;
      z-index: 2;
      background-color: var(--background-color);
      .toggle {
        display: block;
        svg {
          font-size: 2rem;
        }
      }
    }
    .links {
      position: absolute;
      background-color: black;
      flex-direction: column;
      margin-top: 5rem;
      width: 100vw;
      padding: 5rem 0;
      transition: 0.4s ease-in-out;
      gap: 2rem;
      ul {
        flex-direction: column;
        gap: 1rem;
      }
      .login-btn {
        flex-direction: column;
      }
    }
    .show {
      top: 0;
    }
    .hide {
      top: -600px;
    }
  }
`;
