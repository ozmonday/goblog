import { Fragment } from "react";
import Navbar from "./navbar";

export default function Layout({current, children}) {
  return (
    <Fragment>
      <Navbar current={current}/>
      <main>{children}</main>
    </Fragment>
  );
}
