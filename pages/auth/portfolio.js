import {LayoutCMS} from "@my/components/layout";
import { Component } from "react";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LayoutCMS current={2}>
        <div className="w-full h-screen flex flex-col justify-center px-4 md:px-12">
          <div className="flex flex-row justify-center">
            <div className="flex flex-col">
              <h2 className="text-center">Iqbal Hadi Purnomo</h2>
              <h5>Share to Grow, Open Source, Colaboration</h5>
            </div>
          </div>
        </div>
      </LayoutCMS>
    );
  }
}