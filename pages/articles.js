import { Card, CardPopular } from "@my/components/cards";
import Layout from "@my/components/layout";
import { Component } from "react";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout current={1}>
        <div id="articles" className="w-full flex flex-row">
          <div className="flex flex-col w-full lg:basis-8/12 p-4 md:px-8 md:py-4 lg:px-12 lg:py-6 overflow-y-auto">
            <Card
              post_at={"13 May 2000"}
              support={12}
              comment={0}
              title="loerem ipsum dolor amet dugil adigung adman orion satur sido gjghd jghjg gjgj"
              content={" ddada dadad dadad dada dada sdfdaf dasda fdfdvc dffds dsd"}
            />
             <Card
              post_at={"13 May 2000"}
              support={12}
              comment={0}
              title="loerem ipsum dolor amet dugil adigung adman orion satur sido gjghd jghjg gjgj"
              content={" ddada dadad dadad dada dada sdfdaf dasda fdfdvc dffds dsd"}
            />
             <Card
              post_at={"13 May 2000"}
              support={12}
              comment={0}
              title="loerem ipsum dolor amet dugil adigung adman orion satur sido gjghd jghjg gjgj"
              content={" ddada dadad dadad dada dada sdfdaf dasda fdfdvc dffds dsd"}
            />
             <Card
              post_at={"13 May 2000"}
              support={12}
              comment={0}
              title="loerem ipsum dolor amet dugil adigung adman orion satur sido gjghd jghjg gjgj"
              content={" ddada dadad dadad dada dada sdfdaf dasda fdfdvc dffds dsd"}
            />
          </div>
          <div className="hidden lg:flex flex-col basis-4/12 border-l py-6 px-12">
            <div className="flex flex-row">
              <input
                className="outline-none px-3 py-1.5 border"
                placeholder="search"
              />
              <button className="rounded-none">search</button>
            </div>
            <div className="flex flex-col p-2 border-b">
              <h3>Populer</h3>
              <h6>Artikel yang paling banyak dibaca:</h6>
            </div>
            <div className="flex flex-col py-2">
              <CardPopular
                title="CI/CD dengan Github Action"
                post_at={"13 May 2000"}
                comment={20}
                support={12}
              />
              <CardPopular
                title="CI/CD dengan Github Action"
                post_at={"13 May 2000"}
                comment={20}
                support={12}
              />
              <CardPopular
                title="CI/CD dengan Github Action"
                post_at={"13 May 2000"}
                comment={20}
                support={12}
              />
              <CardPopular
                title="CI/CD dengan Github Action"
                post_at={"13 May 2000"}
                comment={20}
                support={12}
              />
              <CardPopular
                title="Automatisati deploment dengan  dsdsada dsaad github CI/CD"
                post_at={"13 May 2000"}
                comment={20}
                support={12}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
