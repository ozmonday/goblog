import { Layout } from "@my/components/layout";
import { Component } from "react";
import download from "@my/public/icons/download.svg";
import Image from "next/image";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout current={0}>
        <div className="w-full height-screen flex flex-col justify-center px-4 md:px-12">
          <div className="flex flex-row justify-center">
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row mx-auto">
                <h2 className="text-center mx-2 my-1">Hello ... &#128075;</h2>
                <h2 className="text-center mx-2 my-1">{`I'm Iqbal Hadi Purnomo`}</h2>
              </div>
              <h5 className="text-lg my-2 mx-auto w-fit">
                A Software Developer
              </h5>
              <button className="bg-green-600 w-fit p-0.5 rounded-md mx-auto hover:bg-green-500 flex flex-row my-1">
                <Image className="w-8 h-8" src={download} alt="downlaod" />
                <p className="text-white my-auto pr-2.5">Resume</p>
              </button>
            </div>
          </div>
        </div>
        <div className="w-11/12 lg:w-9/12 mx-auto flex flex-col px-4 md:px-12 py-12">
          <h3 className="my-3">Profile &#128100;</h3>
          <div className="bg-gray-800 border border-gray-500 rounded-md flex flex-col md:flex-row">
            <div className="flex flex-col w-full md:basis-4/12 p-5 pb-2 md:pb-5">
              <div className="m-3 mx-auto w-32 h-32 md:w-36 md:h-36 rounded-full bg-white"></div>
              <h4 className="text-center text-xl">Iqbal Hadi Purnomo</h4>
              <h6 className="text-center">Software Developer</h6>
              <div className="flex flex-col my-3">
                <div className="flex flex-row w-full">
                  <p className="font-semibold basis-3/12">Email</p>
                  <p className="basis-1/12 text-center">:</p>
                  <p className="basis-8/12">hadioz616@gmail.com</p>
                </div>
                <div className="flex flex-row w-full">
                  <p className="font-semibold basis-3/12">Phone</p>
                  <p className="basis-1/12 text-center">:</p>
                  <p className="basis-8/12">+62 895 3832 10716</p>
                </div>
              </div>
            </div>
            <div className="w-full md:basis-8/12 p-5 pt-0 md:pt-2">
              <h4 className="text-xl py-2 hidden md:block">About me</h4>
              <p>At volutpat diam ut venenatis tellus in metus vulputate eu. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Et ultrices neque ornare aenean euismod elementum. Adipiscing diam donec adipiscing tristique risus nec feugiat in. In fermentum et sollicitudin ac orci phasellus egestas. Sodales ut etiam sit amet nisl. Metus aliquam eleifend mi in nulla posuere. Nam at lectus urna duis convallis convallis. Risus feugiat in ante metus. Commodo elit at imperdiet dui accumsan sit amet. Massa tempor nec feugiat nisl.</p>
            </div>
          </div>
        </div>
        <div className="w-11/12 lg:w-9/12 mx-auto flex flex-col px-4 md:px-12 py-12">
          <h3 className="my-3">Tools &#128736;</h3>
        </div>
        <div className="w-11/12 lg:w-9/12 mx-auto flex flex-col px-4 md:px-12 py-12">
          <h3 className="my-3">Experiment & Porto &#128300;</h3>
        </div>
        <div className="w-11/12 lg:w-9/12 mx-auto flex flex-col px-4 md:px-12 py-12">
          <h3 className="my-3">Articles &#128221;</h3>
        </div>
        <div className="flex flex-col px-4 md:px-12 py-12 bg-gray-800">
          <h3 className="my-3">Experiment & Porto &#128100;</h3>
        </div>
      </Layout>
    );
  }
}
