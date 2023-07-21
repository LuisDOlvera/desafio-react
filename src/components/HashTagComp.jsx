export default function HashTagComp(props) {
  return (
    <div className="flex flex-row justify-start w-full">
      <div className="flex flex-row mr-1 mb-1 mt-2 rounded-md border border-black">
        <button className="bg-[#5627651a] p-1" type="button">
          <span className="text-violet-800">#</span>
          {props.text}
        </button>
        <button
          className="bg-[#5627651a] p-1"
          type="button"
          onClick={props.OnDelete}
        >
          <svg className="" width="24px" height="24px">
            <path d="m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
