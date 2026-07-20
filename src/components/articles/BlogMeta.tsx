import React from "react";

interface BlogMetaProps {
  author: string;
  date: string;
  readTime: string;
}

const BlogMeta: React.FC<BlogMetaProps> = ({ author, date, readTime }) => {
  return (
    <div className="flex flex-wrap  items-center gap-6 text-gray-600 text-sm md:text-base">
      {/* Author */}
      <div className="flex items-center gap-2">
        <svg
          className={`h-4 w-4 text-gray-600`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8327 17.5V15.8333C15.8327 14.9493 15.4815 14.1014 14.8564 13.4763C14.2313 12.8512 13.3834 12.5 12.4993 12.5H7.49935C6.61529 12.5 5.76745 12.8512 5.14233 13.4763C4.5172 14.1014 4.16602 14.9493 4.16602 15.8333V17.5"
            stroke="#6A6A6A"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.99935 9.16667C11.8403 9.16667 13.3327 7.67428 13.3327 5.83333C13.3327 3.99238 11.8403 2.5 9.99935 2.5C8.1584 2.5 6.66602 3.99238 6.66602 5.83333C6.66602 7.67428 8.1584 9.16667 9.99935 9.16667Z"
            stroke="#6A6A6A"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="font-normal text-xs">{author}</span>
      </div>

      {/* Date */}
      <div className="flex items-center gap-2">
        <svg
          className={`h-4 w-4 text-gray-600`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66602 1.66666V4.99999"
            stroke="#6A6A6A"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.334 1.66666V4.99999"
            stroke="#6A6A6A"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8333 3.33334H4.16667C3.24619 3.33334 2.5 4.07954 2.5 5.00001V16.6667C2.5 17.5872 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5872 17.5 16.6667V5.00001C17.5 4.07954 16.7538 3.33334 15.8333 3.33334Z"
            stroke="#6A6A6A"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 8.33334H17.5"
            stroke="#6A6A6A"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="font-normal text-xs">{date}</span>
      </div>

      {/* Read Time */}
      <div className="flex items-center gap-2">
        <svg
          className={`h-4 w-4 text-gray-600`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99935 18.3333C14.6017 18.3333 18.3327 14.6024 18.3327 9.99999C18.3327 5.39762 14.6017 1.66666 9.99935 1.66666C5.39698 1.66666 1.66602 5.39762 1.66602 9.99999C1.66602 14.6024 5.39698 18.3333 9.99935 18.3333Z"
            stroke="#6A6A6A"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 5V10L13.3333 11.6667"
            stroke="#6A6A6A"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="font-normal text-xs">{readTime}</span>
      </div>
    </div>
  );
};

export default BlogMeta;
