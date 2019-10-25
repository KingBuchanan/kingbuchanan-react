import React, { Component } from 'react';

export default class HTop extends Component{
  render(){
    return(
<div>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#157878" />
  <meta
    name="apple-mobile-web-app-status-bar-style"
    content="black-translucent"
  />
  <link
    rel="stylesheet"
    href="{{'./public/ghp_v2/assets/css/style.scssv=' | append: site.github.build_revision | relative_url }}"
  />
  <nav>
    <div className="nav-title">
      <span className="Icon Icon--logo Icon--large" />
      {/* Link in web */}
      <a className="home-link" href="/">
        Home Page
      </a>
      {/* Text in mobile */}
      <p className="home-text">HomePage</p>
      <span id="caret" className="Icon Icon--caretDown" />
    </div>
    <ul className="nav-menu">
      {/* This link only exists in mobile */}
      <li id="extra-mobile-link" className="nav-list-item">
        <a className="nav-link" href="/">
          HomePage
        </a>
      </li>
      <li className="nav-list-item">
        <a className="nav-link" href="/projects">
          Quests
          <img
            src="http://vignette2.wikia.nocookie.net/clubpenguin/images/9/95/Pirates_2014_Party_Quest_Icon.png/revision/latest?cb=20141120132745"
            alt="Quest_icon"
            width={15}
          />
        </a>
      </li>
      {/* Future page: About */}
      {/* <li class="nav-list-item">
            <a class="nav-link" href="/about">About</a>
        </li> */}
      <li className="nav-list-item">
        <a className="nav-link" href="/hobbies">
          Hobbies
          <img
            src="https://cdn4.iconfinder.com/data/icons/glyphlibrary-one/100/controller-xbox-512.png"
            alt="Hobbies_Icon"
            width={15}
          />
        </a>
      </li>
      <li className="nav-list-item">
        <a
          className="nav-link"
          href="https://www.linkedin.com/in/hakeemsbuchanan/"
          target="_blank"
        >
          Linked
          <img
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
            alt="Hobbies_Icon"
            width={15}
          />
        </a>
      </li>
      <li className="nav-list-item list-end">
        <a className="nav-link" href="/resume">
          Lore
        </a>
      </li>
    </ul>
  </nav>
  <header className="page-header" role="banner">
    <h1 className="project-name">
      {"{"}
      {"{"} page.title | default: site.title | default:
      site.github.repository_name {"}"}
      {"}"}
    </h1>
    <h2 className="project-tagline">
      {"{"}
      {"{"} page.description | default: site.description | default:
      site.github.project_tagline {"}"}
      {"}"}
    </h2>
  </header>
  </div>);}}