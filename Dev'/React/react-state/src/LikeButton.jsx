import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [isClicks, setClicks] = useState(0);

  let toggleLike = () => {
    setIsLiked(!isLiked);
    setClicks(isClicks + 1);
  };

  let likeStyle = { color: "red" };

  return (
    <div>
      <p>Clicks = {isClicks}</p>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i class="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
