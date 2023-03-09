import { Component, createRef } from "react";

import download from "@my/public/icons/download.svg";
import github from "@my/public/icons/github.svg";
import menu from "@my/public/icons/menu.svg";
import close from "@my/public/icons/close.svg"

import Image from "next/image";
import Link from "next/link";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };

    this.progres = createRef();
    this.scrollEvent = this.scrollEvent.bind(this);
    this.setMenu = this.setMenu.bind(this);
  }

  componentDidMount() {
    document.addEventListener("scroll", this.scrollEvent);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrollEvent);
  }

  setMenu(val) {
    this.setState({ menu: val });
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
    return (
      <div className="fixed flex flex-col w-full">
        <div className="w-full h-1 bg-slate-200">
          <div ref={this.progres} className=" h-1 w-0 bg-green-400" />
        </div>
        <nav className="flex flex-row bg-white w-full px-4 py-2 md:px-12 md:py-2 border-b">
          <div className="flex flex-row basis-6/12 md:basis-3/12">
            <button
              onClick={() => this.setMenu(!this.state.menu)}
              className="block md:hidden bg-white p-1 my-auto border"
            >
              <Image className="w-7 h-7" src={this.state.menu ? close : menu} alt="menu" />
            </button>
          </div>
          <div className="hidden  md:flex flex-row basis-6/12 justify-between">
            <Link className="my-auto" href="/">
              <h5>About Me</h5>
            </Link>
            <Link className="my-auto" href="/">
              <h5>Portfolio</h5>
            </Link>
            <Link className="my-auto" href="/">
              <h5>Articles</h5>
            </Link>
            <Link className="my-auto" href="/">
              <h5>Clients</h5>
            </Link>
          </div>
          <div className="flex flex-row basis-6/12 md:basis-3/12 justify-end">
            <button className="hidden  md:flex flex-row bg-gray-800 hover:bg-gray-800 p-1 my-auto mx-2">
              <Image className="w-8 h-8" src={github} alt="github" />
            </button>
            <button className="flex flex-row my-auto">
              <Image className="w-6 h-6 mr-1" src={download} alt="download" />
              <p className="my-auto">Resume</p>
            </button>
          </div>
        </nav>
        <div
          className={`md:hidden ${
            this.state.menu ? "slide-down" : "slide-up"
          } bg-white overflow-hidden`}
        >
          
        </div>
      </div>
    );
  }
}
