export default function SideRightCard(props) {
  return (
    <div className="bg-white border-solid border-2 border-[##e0e0e0] rounded-md mr-4 p-3">
      <a href="">
        <h3 className="text-left font-extralight hover:text-blue-700">
          {props.name}
        </h3>
      </a>
      <p className="text-left font-extralight py-2">{props.theme}</p>
    </div>
  );
}
