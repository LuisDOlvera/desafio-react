export default function SideCompNav(props) {
  return (
    <li className="border-0 bg-[#f5f5f5] hover:rounded-md hover:bg-[#e4e3f3] hover:text-blue-700 hover:underline decoration-blue-700">
      <a className="flex flex-row justify-start px-2.5 py-2.5" href="#">
        <span className="flex flex-row mr-2.5 ml-1.5">
          <img src={props.image} alt="home" width="24px" height="24px" />
        </span>
        {props.name}
      </a>
    </li>
  );
}
