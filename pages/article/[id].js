import Layout from "@my/components/layout";
import { Component } from "react";

export default class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout current={1}>
        <div className="flex flex-row justify-center py-6 md:py-8 lg:py-10">
          <div className="w-11/12 md:w-8/12 lg:w-7/12">
            <div className="flex flex-col">
              <h1 className="my-2">this is title</h1>
              <h6 className="text-gray-400">Post At</h6>
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-semibold">Bagikan:</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
