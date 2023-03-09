import { Component, Fragment } from "react";
import Navbar from "./navbar";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progres: 0
    };
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <main>{this.props.children}</main>
      </Fragment>
    );
  }
}
