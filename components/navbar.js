import { Component, createRef, Fragment, useState } from "react";
import menu from "@my/public/icons/menu.svg";
import close from "@my/public/icons/close.svg";
import Router from "next/router";

import Image from "next/image";
import Link from "next/link";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.progres = createRef();
    this.scrollEvent = this.scrollEvent.bind(this);
  }

  componentDidMount() {
    document.addEventListener("scroll", this.scrollEvent);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrollEvent);
  }

  scrollEvent() {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    this.progres.current.style.width = `${scrolled}%`;
  }

  render() {
    const crn = this.props.current;
    return (
      <div className="navbar">
        <div className="progres">
          <div ref={this.progres} className="progres-idicator" />
        </div>
        <nav>
          <MenuMini></MenuMini>
          <div className="hidden md:flex flex-row w-full justify-center">
            <Menu id={0} title="About Me" state={crn} link="/" />
            <Menu id={1} title="Articles" state={crn} link="/articles" />
            <Menu id={2} title="Portfolio" state={crn} link="/portfolio" />
          </div>
        </nav>
      </div>
    );
  }
}

export class NavbarCMS extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.progres = createRef();
    this.scrollEvent = this.scrollEvent.bind(this);
  }

  componentDidMount() {
    document.addEventListener("scroll", this.scrollEvent);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrollEvent);
  }

  scrollEvent() {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    this.progres.current.style.width = `${scrolled}%`;
  }

  render() {
    const crn = this.props.current;
    return (
      <div className="navbar">
        <div className="progres">
          <div ref={this.progres} className="progres-idicator" />
        </div>
        <nav>
          <MenuMini></MenuMini>
          <div className="hidden md:flex flex-row w-full justify-center">
            <Menu id={4} title="Dashboard" state={crn} link="/auth/dashboard" />
            <Menu id={0} title="Profile" state={crn} link="/auth/profile" />
            <Menu id={1} title="Articles" state={crn} link="/auth/articles" />
            <Menu id={2} title="Portfolio" state={crn} link="/auth/portfolio" />
          </div>
          <div className="my-auto">
            <button onClick={() => Router.push("/")} className="border w-28 py-1 rounded-md">sign out</button>
          </div>
        </nav>
      </div>
    );
  }
}

function MenuMini({ children }) {
  const [state, setState] = useState(false);
  const ctx = () => {
    if (state) {
      return <div className="menu-container slide-down">{children}</div>;
    }
  };
  return (
    <Fragment>
      <button onClick={() => setState(!state)} className="navbar-menu">
        <Image className="w-7 h-7" src={state ? close : menu} alt="menu" />
      </button>
      {ctx()}
    </Fragment>
  );
}

function Menu({ id, state, title, link }) {
  if (state === id) {
    return (
      <Link className="flex flex-col my-auto mx-8" href={link}>
        <h5 className="font-bold">{title}</h5>
        <div className="flex flex-row w-full justify-center"></div>
      </Link>
    );
  } else {
    return (
      <Link className="flex flex-col my-auto mx-8" href={link}>
        <h5>{title}</h5>
      </Link>
    );
  }
}
