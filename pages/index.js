import Layout from "@my/components/layout";
import Navbar from "@my/components/navbar";
import { Component, Fragment } from "react";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <div className="w-full h-screen flex flex-col bg-yellow-200 justify-center px-4 md:px-12">
        <h1>Lorem Ipsum dolor amet</h1>
        </div>
        <button>halo</button>
        <h1>halo</h1>
        <h2>halo</h2>
        <h3>halo</h3>
        <h4>halo</h4>
        <h5>halo</h5>
        <p>Hallo world</p>
      </Layout>
    );
  }
}
