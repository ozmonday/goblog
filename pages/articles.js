import { Card, CardMini } from "@my/components/cards";
import { Layout } from "@my/components/layout";
import { Component } from "react";

export default class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout current={1}>
        <div className="flex flex-row justify-center py-6 md:py-8 lg:py-10">
          <div className="flex flex-row justify-center w-full lg:basis-7/12">
            <div className="flex flex-col w-11/12">
              <Card
                post_at={"13 May 2000"}
                view={12}
                title="loerem ipsum dolor amet dugil adigung adman orion satur sido gjghd jghjg gjgj"
                content={
                  " ddada dadad dadad dada dada sdfdaf dasda fdfdvc dffds dsd"
                }
              />
              <Card
                post_at={"13 May 2000"}
                support={12}
                comment={0}
                title="loerem ipsum dolor amet dugil adigung adman orion satur sido gjghd jghjg gjgj"
                content={
                  " ddada dadad dadad dada dada sdfdaf dasda fdfdvc dffds dsd"
                }
              />
              <Card
                post_at={"13 May 2000"}
                support={12}
                comment={0}
                title="loerem ipsum dolor amet dugil adigung adman orion satur sido gjghd jghjg gjgj"
                content={
                  " ddada dadad dadad dada dada sdfdaf dasda fdfdvc dffds dsd"
                }
              />
              <Card
                post_at={"13 May 2000"}
                support={12}
                comment={0}
                title="loerem ipsum dolor amet dugil adigung adman orion satur sido gjghd jghjg gjgj"
                content={
                  " ddada dadad dadad dada dada sdfdaf dasda fdfdvc dffds dsd"
                }
              />
            </div>
          </div>
          <div className="hidden lg:flex flex-row justify-center basis-4/12 border-l border-gray-500">
            <div className="flex flex-col w-10/12">
              <div className="flex flex-row">
                <input
                  className="outline-none px-3 py-1 border rounded-md bg-black border-gray-500"
                  placeholder="search"
                />
                <button className="rounded-none">search</button>
              </div>
              <div className="sticky top">
                <div className=" flex flex-col p-2 my-4 border-b border-gray-500">
                  <h3>Populer</h3>
                  <h6>Artikel yang paling banyak dibaca:</h6>
                </div>
                <div className="flex flex-col py-2">
                  <CardMini
                    title="CI/CD dengan Github Action"
                    post_at={"13 May 2000"}
                    comment={20}
                    support={12}
                  />
                  <CardMini
                    title="CI/CD dengan Github Action"
                    post_at={"13 May 2000"}
                    comment={20}
                    support={12}
                  />
                  <CardMini
                    title="CI/CD dengan Github Action"
                    post_at={"13 May 2000"}
                    comment={20}
                    support={12}
                  />
                  <CardMini
                    title="CI/CD dengan Github Action"
                    post_at={"13 May 2000"}
                    comment={20}
                    support={12}
                  />
                  <CardMini
                    title="Automatisati deploment dengan  dsdsada dsaad github CI/CD"
                    post_at={"13 May 2000"}
                    comment={20}
                    support={12}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
