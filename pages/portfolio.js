import { Layout } from "@my/components/layout";
import { Component } from "react";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout current={3}>
        <div className="w-full h-screen flex flex-col justify-center px-4 md:px-12">
          <h1>Lorem Ipsum dolor amet</h1>
        </div>
        <div className="w-full h-screen flex flex-col justify-center px-4 md:px-12">
          <h1>Lorem Ipsum dolor amet</h1>
        </div>
        <div className="w-full h-screen flex flex-col justify-center px-4 md:px-12">
          <h1>Lorem Ipsum dolor amet</h1>
        </div>
      </Layout>
    );
  }
}
