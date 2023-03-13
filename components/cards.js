import Image from "next/image";
import { useRouter } from "next/router";

export function CardMini({ title, post_at, view }) {
  const route = useRouter();
  const push = () => {
    route.push("/article/8797567");
  };

  return (
    <div onClick={push} className="card-mini">
      <h4 className="mb-1">{title}</h4>
      <div className="flex flex-row">
        <h6 className="card-mini-post-at">Post At: {post_at}</h6>
        <h6 className="card-mini-viewed">Viewed: {view}</h6>
      </div>
    </div>
  );
}

export function Card({ post_at, view, title, content }) {
  const route = useRouter();
  const push = () => {
    route.push("/article/8797567");
  };

  return (
    <div className="card">
      <h6 className="card-post-at">Post At: {post_at}</h6>
      <div onClick={push} className="flex flex-row justify-between my-1.5">
        <div className="flex flex-col">
          <h3 className="card-title">{title}</h3>
          <p className="card-content">{content}</p>
        </div>
        <div className="flex flex-col">
          <div className="card-ilustation"></div>
        </div>
      </div>
      <div className="flex flex-row">
        <h6 className="card-viewed">Viewed: {view}</h6>
        <h6 className="card-share">Share</h6>
      </div>
    </div>
  );
}
