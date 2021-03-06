import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "react-bootstrap";
import Dog from "./dog.jpg";
import GitHubLogo from "./GitHub-Mark-Light-120px-plus.png";
import "./about.css";

export default function About() {
  const [avatars, setAvatars] = useState((avatars) => {return null}); // by default there are no avatars
  const apiUrl = "https://api.github.com/repos/redxzeta/Awesome-Adoption/contributors";
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiUrl)
      setAvatars(response.data)
    }
    fetchData()
  }, [])
  
  return (
    <div className="about__container">
      <Image src={Dog} alt="doggo" roundedCircle />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="contributors-section">
        <h1>Contributors</h1>
        <div className="contributors" id="contributors">  
          {avatars &&
            avatars.map(a => {
              return (
                <a className="contributor-link" key={a.id} href={a.html_url} target="_blank" rel="noreferrer">
                  <img className="contributor-avatar" key={a.id} src={a.avatar_url} alt="Contributor Avatar"/ >
                </a>
              )
            })
          }
        </div>
        <a className="social-button" href="https://github.com/redxzeta/Awesome-Adoption" target="_blank" rel="noreferrer"><img src={GitHubLogo} alt="GitHub logo"></img><p>GitHub</p></a>        
      </div>
    </div>
  );
}
