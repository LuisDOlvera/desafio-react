export default function PostCard(props) {
  const title = props.titlePost;

  return (
    <div className="flex flex-col bg-white border-solid border-2 border-[#e0e0e0] rounded-md mb-3">
      <img
        className={
          props.isFirst
            ? "[&:not(first-of-type)]:w-100"
            : "[&:not(first-of-type)]:hidden w-100"
        }
        src={props.imagePost}
        alt="image"
      />
      <div className="p-5 block">
        <div className="block">
          <div className="flex flex-row justify-start gap-4">
            <img
              className="rounded-full"
              src={props.imageUser}
              alt="User"
              width="40px"
              height="40px"
            />
            <div>
              <p className="margin-0 text-sm font-bold">{props.nameUser}</p>
              <p className="margin-0 text-xs text-start font-extralight">
                {props.datePost}
              </p>
            </div>
          </div>
        </div>
        <div className="pl-12">
          <h2 className="font-bold text-3xl m-0 pt-3 text-left hover:text-blue-700">
            {title}
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
          <div className="flex flex-row justify-between text-sm">
            <div className="flex flex-row items-center text-sm">
              <div className="flex flex-row">
                <a className="py-1 px-2" href="#">
                  <div className="flex flex-row items-center">
                    <span className="flex flex-row items-center">
                      <span className="inline-block bg-[#f5f5f5] border-2 border-solid border-white rounded-2xl -mr-2.5 w-7 h-7">
                        <img
                          src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                          alt="fire"
                          width="18px"
                          height="18px"
                        />
                      </span>
                      <span className="inline-block bg-[#f5f5f5] border-2 border-solid border-white rounded-2xl -mr-2.5 w-7 h-7">
                        <img
                          src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                          alt="fire"
                          width="18px"
                          height="18px"
                        />
                      </span>
                      <span className="inline-block bg-[#f5f5f5] border-2 border-solid border-white rounded-2xl -mr-2.5 w-7 h-7">
                        <img
                          src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                          alt="fire"
                          width="18px"
                          height="18px"
                        />
                      </span>
                      <span className="inline-block bg-[#f5f5f5] border-2 border-solid border-white rounded-2xl -mr-2.5 w-7 h-7">
                        <img
                          src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                          alt="unicorn"
                          width="18px"
                          height="18px"
                        />
                      </span>
                      <span className="inline-block bg-[#f5f5f5] border-2 border-solid border-white rounded-2xl -mr-2.5 w-7 h-7">
                        <img
                          src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                          alt="like"
                          width="18px"
                          height="18px"
                        />
                      </span>
                    </span>
                    <span className="ml-4">
                      <span className="inline">{props.numReactions}</span>
                    </span>
                  </div>
                </a>
                <a className="flex flex-row items-center py-1 px-2" href="#">
                  <svg width="24px" height="24px">
                    <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                  </svg>
                  <span>{props.numComments}</span>
                </a>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <small className="text-xs mr-2">{props.timeRead}</small>
              <button className="p-2" type="button">
                <svg width="24px" height="24px">
                  <path d="M6.75 4.5h10.5a.75.75 0 0 1 .75.75v14.357a.375.375 0 0 1-.575.318L12 16.523l-5.426 3.401A.375.375 0 0 1 6 19.607V5.25a.75.75 0 0 1 .75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
