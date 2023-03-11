import { Fragment } from "react";
import Navbar from "./navbar";

export default function Layout({current, children}) {
  return (
    <Fragment>
      <Navbar current={current}/>
      <main>{children}</main>
      <footer className="w-full bg-slate-100 py-1 text-center text-sm"> Made with love by <b>ozmonday</b></footer>
    </Fragment>
  );
}
