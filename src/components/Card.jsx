import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-in-headphones-showing-programming-process-on-a-laptop.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              eius distinctio, fugiat beatae quae amet dolor aliquid natus sit
              pariatur?
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{props.username}</div>
            <div className="text-slate-700 dark:text-slat">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Card;
