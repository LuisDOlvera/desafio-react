export default function NavBar() {
  return (
    <div className=" bg-white border-b-[##e0e0e0] flex flex-row px-24 gap-4">
      <img
        className="mx-1 py-2"
        src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
        alt="devto"
        width="50px"
        height="40px"
      />
      <div className="max-w-md grow shrink basis-0 pt-2.5">
        <form className="block my-0" action="">
          <input className="text-base m-0" type="hidden" />
          <div className="flex flex-row flex-wrap">
            <div className="flex grow shrink basis-0 relative">
              <input
                className="placeholder:italic placeholder:text-slate-500 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-base"
                placeholder="Search..."
                type="text"
                name="search"
              />
              <button className="absolute ml-2 mt-2 py-0" type="submit">
                <svg width="24" height="24">
                  <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex ml-auto gap-3">
        <button className="bg-white text-blue-700 border border-blue-700 rounded-md p-2.5 my-2">
          Create Post
        </button>
        <a href="#">
          <svg className="mt-5" width="24" height="24">
            <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
          </svg>
        </a>
        <div>
          <button className="rounded-full p-0" type="button">
            <span>
              <img
                className="inline-block align-bottom rounded-full mx-1 mt-2.5"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--ujdKXJNI--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/307398/ffcf2ef5-0c4f-4321-a221-3c3cdd1ebd87.jpg"
                alt="image"
                width="45px"
                height="45px"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
