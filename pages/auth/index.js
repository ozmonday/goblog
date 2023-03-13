import { Component } from "react";
import Router from "next/router";

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="flex flex-row w-screen h-screen justify-center ">
        <div className="flex flex-col bg-gray-800 w-3/12 p-8 my-auto border rounded-md border-gray-500">
          <p className="text-sm mb-1 mt-3 ">Username or email address:</p>
          <input className="outline-none px-3 py-1 border rounded-md bg-gray-900 border-gray-500"/>
          <p className="text-sm mb-1 mt-3 ">Password:</p>
          <input className="outline-none px-3 py-1 border rounded-md bg-gray-900 border-gray-500"/>
          <button onClick={() => Router.push("/auth/dashboard") } className=" bg-green-600 hover:bg-green-500 py-1 my-6 rounded-md">Sign In</button>
        </div>
      </div>
    );
  }
}