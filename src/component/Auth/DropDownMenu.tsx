/* eslint-disable react/jsx-handler-names */
import { useState } from "react";

interface Props {
  //boolean to always open ddm (for presentation)
  forceOpen?: boolean;
  label?: string;
  withDivider?: boolean;
  icon?: JSX.Element;
  items: DDMItem[];
  withBackground?: boolean;
}

export interface DDMItem {
  icon?: JSX.Element;
  label: string;
  desc?: string;
  link?: string;
}

export const DropDownMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="inline-block relative text-left">
      <div>
        <button
          type="button"
          onClick={() => {
            return setIsOpen(!isOpen);
          }}
          className={` ${
            props.withBackground ? "border border-gray-300 bg-white dark:bg-gray-800 shadow-sm" : ""
          } flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500`}
          id="options-menu"
        >
          {props.label}

          {props.icon || (
            <svg
              width="25"
              fill="currentColor"
              height="25"
              className="text-blue-600"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
            </svg>
          )}
        </button>
      </div>

      {(props.forceOpen || isOpen) && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right">
          <div
            className={`py-1 ${props.withDivider ? "divide-y divide-gray-100" : ""}`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {props.items.map((item) => {
              return (
                <a
                  key={item.label}
                  href={item.link || "#"}
                  className={`${
                    item.icon ? "flex items-center" : "block"
                  } block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600`}
                  role="menuitem"
                >
                  {item.icon}

                  <span className="flex flex-col">
                    <span>{item.label}</span>
                    {item.desc && <span className="text-xs text-gray-400">{item.desc}</span>}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
