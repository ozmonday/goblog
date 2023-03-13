import { Fragment } from "react";
import { Navbar, NavbarCMS } from "./navbar";

export function Layout({ current, children }) {
  return (
    <Fragment>
      <Navbar current={current} />
      <main className="margin-top">{children}</main>
      <footer className="w-full bg-gray-800 py-1 text-center text-sm">
        Made with &#128150; by <b className="text-blue-500 font-bold"> <a href="https://github.com/ozmonday">ozmonday</a></b>
      </footer>
    </Fragment>
  );
}

export function LayoutCMS({ current, children }) {
  return (
    <Fragment>
      <NavbarCMS current={current} />
      <main className="margin-top">{children}</main>
      <footer className="w-full bg-gray-800 py-1 text-center text-sm">
        Made with &#128150; by <b className="text-blue-500 font-bold"> <a href="https://github.com/ozmonday">ozmonday</a></b>
      </footer>
    </Fragment>
  );
}
