const IconEyes = ({ isOpen }) => {
  if (isOpen) {
    return (
      <div id="open" className="ml-auto grid place-items-center pr-2 bg-white">
        <svg
          className="p-0.5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          color={"#000000"}
          fill={"none"}
        >
          <path
            d="M2 8C2 8 6.47715 3 12 3C17.5228 3 22 8 22 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M21.544 13.045C21.848 13.4713 22 13.6845 22 14C22 14.3155 21.848 14.5287 21.544 14.955C20.1779 16.8706 16.6892 21 12 21C7.31078 21 3.8221 16.8706 2.45604 14.955C2.15201 14.5287 2 14.3155 2 14C2 13.6845 2.15201 13.4713 2.45604 13.045C3.8221 11.1294 7.31078 7 12 7C16.6892 7 20.1779 11.1294 21.544 13.045Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    );
  }

  // Retorno para o caso `isOpen` ser falso
  return (
    <div className="ml-auto grid place-items-center pr-2 bg-white ">
      <svg
        className="p-0.5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        color={"#000000"}
        fill={"none"}
      >
        <path
          d="M22 8C22 8 18 14 12 14C6 14 2 8 2 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M15 13.5L16.5 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 11L22 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 13L4 11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 13.5L7.5 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default IconEyes;
