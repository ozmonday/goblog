import Layout from "@my/components/layout";
import { Component } from "react";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout current={2}>
        <div className="w-full h-screen flex flex-row justify-center px-4 md:px-12">
          <div className="flex flex-col justify-center">
            <h2>Iqbal Hadi Purnomo</h2>
            <h5>Software Engineer</h5>
          </div>
        </div>
        <div className="w-full h-screen flex flex-col justify-center px-4 md:px-12">
          <h1>Lorem Ipsum dolor amet</h1>
        </div>
        <div className="w-full h-screen flex flex-col justify-center px-4 md:px-12">
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
