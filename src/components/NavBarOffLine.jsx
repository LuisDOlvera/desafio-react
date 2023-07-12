import { useParams } from "react-router-dom";

export default function NavBarOffLine() {
  return (
    <div className=" bg-white border-indigo-500/100 flex flex-row px-24 gap-4">
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
        <a href=""></a>
        <div>
          <span>
            <a className="p-3 mr-2" href="#">
              Log in
            </a>
          </span>
          <a href="#">
            <button className="bg-white text-blue-700 border border-blue-700 rounded-md p-2.5 my-2">
              Create account
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
