import React from "react";
import { useComments } from "../hooks/useComments";
import Comment from "./Comment";
import { useParams } from "react-router-dom";

const CommentsSection = () => {
  const { videoID } = useParams();

  const { data: comments, isLoading, isError } = useComments(videoID || "");
  const [isInputFocusOn, setIsInputFocusOn] = React.useState(false);

  const handleFocusAnimation = () => {
    setIsInputFocusOn(true);
  };
  const handleOnBlur = () => {
    setIsInputFocusOn(false);
  };
  return (
    <section className="pr-4 mt-4">
      {isLoading ? (
        ""
      ) : isError ? (
        <p>something went wrong :(</p>
      ) : (
        <>
          <div className="mb-4">
            <span>{comments?.pageInfo?.totalResults} comments</span>
          </div>

          <form className=" flex gap-2">
            <img
              src=""
              alt=""
              className="w-[60px] h-[60px] bg-light-black rounded-[50%] object-cover"
            />
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Adicione um comentário..."
                className="h-[32px] w-full border-b-light-black border-b-[1px] outline-none bg-black"
                onFocus={handleFocusAnimation}
                onBlur={handleOnBlur}
              />
              <div
                className={`input-focus ${isInputFocusOn && "active"}`}
              ></div>
            </div>
          </form>
          <div className="flex flex-col gap-4 mt-8">
            {comments?.items?.map((comment, index) => (
              <Comment key={index} {...comment} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default CommentsSection;
