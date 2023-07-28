import NavBar from "../components/NavBar";

export default function Post() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto bg-[#f5f5f5] min-h-screen border border-indigo-700">
        <div className="grid grid-cols-12 gap-4 border-2 bg-[#f5f5f5] border-indigo-700">
          <div className="col-start-1 col-end-2 text-center bg-[#f5f5f5] block border border-indigo-400">
            <div className="p-4">
              <div className="inline-flex flex-col gap-4 pt-10">
                <button className="inline-flex flex-col items-center">
                  <span className="w-8 h-8 p-1">
                    <svg width="24px" height="24px">
                      <path
                        d="M19 14V17H22V19H18.999L19 22H17L16.999 19H14V17H17V14H19ZM20.243 4.75698C22.505 7.02498 22.583 10.637 20.479 12.992L19.059 11.574C20.39 10.05 20.32 7.65998 18.827 6.16998C17.324 4.67098 14.907 4.60698 13.337 6.01698L12.002 7.21498L10.666 6.01798C9.09103 4.60598 6.67503 4.66798 5.17203 6.17198C3.68203 7.66198 3.60703 10.047 4.98003 11.623L13.412 20.069L12 21.485L3.52003 12.993C1.41603 10.637 1.49503 7.01898 3.75603 4.75698C6.02103 2.49298 9.64403 2.41698 12 4.52898C14.349 2.41998 17.979 2.48998 20.242 4.75698H20.243Z"
                        fill="#525252"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-sm font-extralight">153</span>
                </button>
                <button className="inline-flex flex-col items-center">
                  <span className="w-8 h-8 p-1">
                    <svg width="24px" height="24px">
                      <path d="M10 3h4a8 8 0 010 16v3.5c-5-2-12-5-12-11.5a8 8 0 018-8zm2 14h2a6 6 0 000-12h-4a6 6 0 00-6 6c0 3.61 2.462 5.966 8 8.48V17z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-extralight">11</span>
                </button>
                <button className="inline-flex flex-col items-center">
                  <span className="w-8 h-8 p-1">
                    <svg width="24px" height="24px">
                      <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z"></path>
                    </svg>
                  </span>
                  <span className="text-sm font-extralight">239</span>
                </button>
                <div className="inline-flex flex-col items-center">
                  <button className="p-2">
                    <svg width="24px" height="24px">
                      <path d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-2 col-span-8 text-center grow-0 shrink-0 basis-auto border border-indigo-600 bg-[#f5f5f5]">
            <div className="flex flex-col bg-white border-solid border-2 border-[#e0e0e0] rounded-md mb-3">
              <img
                className="w-100"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--Mq_e71-E--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w3na00dnzqmtigth9990.png"
                alt="image"
              />
              <div className="p-5 block">
                <div className="block pl-12 mb-3">
                  <div className="flex flex-row justify-start gap-4">
                    <img
                      className="rounded-full"
                      src="https://randomuser.me/api/portraits/men/78.jpg"
                      alt="User"
                      width="40px"
                      height="40px"
                    />
                    <div>
                      <p className="margin-0 text-sm font-bold">
                        Pancho el Sancho
                      </p>
                      <p className="margin-0 text-xs text-start font-extralight">
                        23/03/2023
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start text-sm pl-12 flex-wrap gap-12">
                  <span className="flex flex-row w-7 h-7 gap-x-1.5">
                    <img
                      src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                      alt="fire"
                      width="24px"
                      height="24px"
                    />
                    <span className="text-base py-1">125</span>
                  </span>
                  <span className="flex flex-row w-7 h-7 gap-x-1.5">
                    <img
                      src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                      alt="fire"
                      width="24px"
                      height="24px"
                    />
                    <span className="text-base py-1">125</span>
                  </span>
                  <span className="flex flex-row w-7 h-7 gap-x-1.5">
                    <img
                      src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                      alt="fire"
                      width="24px"
                      height="24px"
                    />
                    <span className="text-base py-1">134</span>
                  </span>
                  <span className="flex flex-row w-7 h-7 gap-x-1.5">
                    <img
                      src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                      alt="unicorn"
                      width="24px"
                      height="24px"
                    />
                    <span className="text-base py-1">113</span>
                  </span>
                  <span className="flex flex-row w-7 h-7 gap-x-1.5">
                    <img
                      src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                      alt="like"
                      width="24px"
                      height="24px"
                    />
                    <span className="text-base py-1">233</span>
                  </span>
                </div>
                <div className="pl-12">
                  <h2 className="font-bold text-5xl m-0 pt-3 text-left hover:text-blue-700">
                    15 Advanced TypeScript Tips for Development
                  </h2>
                  <div className="flex flex-row gap-2 justify-start mt-3 mb-3">
                    <a
                      className="flex flex-row pl-0 items-center text-sm font-light"
                      href="#"
                    >
                      <span>#webdev</span>
                    </a>
                    <a
                      className="flex flex-row pl-0 items-center text-sm font-light"
                      href="#"
                    >
                      <span>#vscode</span>
                    </a>
                    <a
                      className="flex flex-row pl-0 items-center text-sm font-light"
                      href="#"
                    >
                      <span>#productivity</span>
                    </a>
                    <a
                      className="flex flex-row pl-0 items-center text-sm font-light"
                      href="#"
                    >
                      <span>#beginners</span>
                    </a>
                    <a
                      className="flex flex-row pl-0 items-center text-sm font-light"
                      href="#"
                    >
                      <span>#ios</span>
                    </a>
                  </div>
                  <p className="text-base text-start">
                    1.Optional Chaining (?.): Optional chaining allows you to
                    safely access nested properties or methods without worrying
                    about null or undefined values. It short-circuits the
                    evaluation if any intermediate property is null or
                    undefined.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-end-13 col-span-3 text-center border bg-[#f5f5f5] border-indigo-400">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              dignissimos, vero suscipit et enim ad maiores hic, culpa aperiam
              ipsa sequi fugiat unde nobis iusto aliquam blanditiis pariatur
              numquam quos?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
