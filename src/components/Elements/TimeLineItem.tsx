import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import animationAOS from "../../AOS/setting";
import type { TimeLineItem } from "@/models/timeLine";

interface TimeLineItemProps {
  study: TimeLineItem;
  index: number;
}

export default function TimeLineItem({ study, index } : TimeLineItemProps) {
  const { time, title, subtitle, desc } = study;
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    animationAOS();
  });
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay={(index + 2) * 250}
      data-aos-once="true"
    >
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-dark "></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400 ">
          {time}
        </time>
        <div className="cursor-pointer " onClick={() => setIsShow(!isShow)}>
          <div>
            <h3 className="text-medium md:text-xl font-semibold text-gray-900 dark:text-gray-300 ">
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
            <h4 className="text-base md:text-lg font-semibold text-slate-700 dark:text-gray-400">
              {subtitle}
            </h4>
          </div>
        </div>
        <p
          className={`${
            isShow ? "block" : "absolute opacity-0 -translate-y-20 -z-10"
          } mb-4 text-sm md:text-lg font-normal text-gray-500  transition duration-300 dark:text-gray-400`}
        >
          {desc}
        </p>
      </li>
    </div>
  );
}
