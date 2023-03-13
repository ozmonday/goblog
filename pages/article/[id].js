import Layout from "@my/components/layout";
import Image from "next/image";
import { Component } from "react";

import twitter from "@my/public/icons/twitter.svg";
import linkedin from "@my/public/icons/linkedin.svg";
import facebook from "@my/public/icons/facebook.svg";

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
            <Head
              title={"hslsakjhksa sahkjs"}
              post_at={"dsadsa dasdsa dadasd"}
            />
            <Foot/>
          </div>
        </div>
      </Layout>
    );
  }
}

function Head({ title, post_at }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl md:text-3xl lg:text-4xl my-1 lg:my-2">{title}</h1>
      <h6 className="text-gray-400">Post At: {post_at}</h6>
    </div>
  );
}

function Foot({}) {
  return (
    <div className="flex flex-col">
      <p className="text-sm font-semibold">Bagikan:</p>
      <div className="flex flex-row my-1">
        <button className="border flex flex-row py-1 px-2 mr-2 rounded-md">
          <Image className="w-6 h-6" src={twitter} alt="twitter" />
          <p className="text-sm my-auto px-1.5">Twitter</p>
        </button>
        <button className="border flex flex-row py-1 px-2 mr-2 rounded-md">
          <Image className="w-6 h-6" src={linkedin} alt="twitter" />
          <p className="text-sm my-auto px-1.5">LinkedIn</p>
        </button>
        <button className="border flex flex-row py-1 px-2 mr-2 rounded-md">
          <Image className="w-6 h-6" src={facebook} alt="twitter" />
          <p className="text-sm my-auto px-1.5">Facebook</p>
        </button>
      </div>
    </div>
  );
}
