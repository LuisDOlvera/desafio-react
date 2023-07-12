export default function SideHashTag(props) {
  return (
    <a
      className="flex flex-row justify-between text-slate-950 font-semibold p-3 border-0 bg-[#f5f5f5] hover:rounded-md hover:bg-[#e4e3f3] hover:text-blue-700 hover:underline decoration-blue-700"
      href="#"
    >
      {props.hashName}
    </a>
  );
}
