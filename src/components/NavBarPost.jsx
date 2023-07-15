export default function NavBarPost() {
  return (
    <div className=" bg-white border-indigo-500/100 flex flex-row px-24 gap-4">
      <img
        className="mx-1 py-2"
        src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
        alt="devto"
        width="50px"
        height="40px"
      />
      <div className="max-w-md grow shrink basis-0 pt-5">
        <span>Create Post</span>
      </div>
      <div className="flex ml-auto gap-3">
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
