import Image from "next/image";
import cmt from "@my/public/icons/comment.svg";
import up from "@my/public/icons/thumb_up.svg";
import { useRouter } from "next/router";

export function CardPopular({ title, post_at, support, comment }) {
  const route = useRouter() 
  const push = () => {
    route.push("/article/8797567")
  }
  
  return (
    <div onClick={push} className="flex flex-col mb-2 py-1 px-2 cursor-pointer hover:bg-gray-100">
      <h4 className="mb-1">{title}</h4>
      <div className="flex flex-row">
        <h6 className="text-xs my-auto border-r pr-2">
          Like: {support}
        </h6>
        <h6 className="text-xs my-auto ml-2">
          Comment: {comment}
        </h6>
      </div>
    </div>
  );
}

export function Card({ post_at, support, comment, title, content }) {
  const route = useRouter() 
  const push = () => {
    route.push("/article/8797567")
  }

  return (
    <div onClick={push} className="flex flex-col justify-between mb-2 py-3 px-4 cursor-pointer hover:bg-gray-100 border-b">
      <div className="flex flex-row">
        <h6 className="text-xs my-auto text-gray-600 font-semibold">
          Post At: {post_at}
        </h6>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h3 className="text-lg md:text-xl lg:text-2xl my-1.5">{title}</h3>
          <p className="hidden md:flex">{content}</p>
        </div>
        <div className="flex flex-col">
          <div className="w-20 h-14 lg:w-28 lg:h-28  bg-gray-500 m-2"></div>
        </div>
      </div>
      <div className="flex flex-row mt-2">
        <h6 className="text-xs my-auto border-r pr-2 mr-2">
          Like: {support}
        </h6>
        <h6 className="text-xs my-auto border-r pr-2 mr-2">
          Comment: {comment}
        </h6>
        <h6 className="text-xs my-auto">
          Share
        </h6>
      </div>
    </div>
  );
}
