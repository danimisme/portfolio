import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function TimeLineItem({ time, title, subtitle, desc }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-dark "></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {time}
      </time>
      <div className="cursor-pointer " onClick={() => setIsShow(!isShow)}>
        <div>
          <h3 className="text-medium md:text-xl font-semibold text-gray-900 ">
            {title}
            <span className="text-primary ml-4">
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`${
                  isShow ? "-rotate-180" : ""
                } transition duration-500`}
              />
            </span>
          </h3>
          <h4 className="text-base md:text-lg font-semibold text-slate-700">
            {subtitle}
          </h4>
        </div>
      </div>
      <p
        className={`${
          isShow ? "block" : "hidden"
        } mb-4 text-sm md:text-lg font-normal text-gray-500  transition duration-300`}
      >
        {desc}
      </p>
    </li>
  );
}
