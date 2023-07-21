import { useState } from "react";
import HashTagComp from "../components/HashTagComp";

export default function New() {
  const [tags, setTags] = useState([]);
  const [text, setText] = useState(""); //Guarda el valor del input

  function onAddItem() {
    //Se ejecuta al dar clic en el botón de agregar
    setTags([text, ...tags]);
    setText(""); //limpiar el input
  }

  function onEnter(event) {
    if (event.key === "Enter") {
      //Añadir al dar enter
      onAddItem();
    }
  }

  function onDelete(indexToDelete) {
    tags.splice(indexToDelete, 1);
    setTags([...tags]);
  }

  return (
    <main className=" bg-[#f5f5f5] min-h-screen">
      <form
        className="container mx-auto px-4 grid grid-rows-3 grid-cols-3 gap-x-4 cont-grid_princ h-screen"
        action=""
      >
        <div className="flex flex-row col-start-1 col-end-3 p-0 items-center h-14">
          <span className="mr-4">
            <a href="#">
              <img
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt="devto"
                width="50px"
                height="40px"
              />
            </a>
          </span>
          <div className="flex flex-row grow shrink basis-0 items-center">
            <span>Create Post</span>
          </div>
          <nav className="ml-auto">
            <ul className="flex flex-row m-0">
              <li className="">
                <button className="flex p-4 border-0 bg-[#f5f5f5] hover:rounded-md hover:bg-[#e4e3f3] hover:text-blue-700 hover:underline decoration-blue-700">
                  Edit
                </button>
              </li>
              <li className="">
                <button className="flex p-4 border-0 bg-[#f5f5f5] hover:rounded-md hover:bg-[#e4e3f3] hover:text-blue-700 hover:underline decoration-blue-700">
                  Previev
                </button>
              </li>
            </ul>
          </nav>
          <div className="absolute right-0 top-0 ml-0">
            <button className="p-4">
              <svg className="" width="24px" height="24px">
                <path d="m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col col-start-2 col-end-2 bg-white rounded-md overflow-auto">
          <div className="py-8 px-16">
            <div className="flex flex-row items-center h-9 mb-5">
              <div className="flex items-center border-slate-200 h-full py-1 px-3 m-1 rounded-md">
                <label className="" htmlFor="">
                  Add a cover image
                </label>
              </div>
            </div>
            <div className="mb-2 relative">
              <textarea
                className="max-h-15 min-h-5 text-5xl font-bold placeholder-slate-600 text-content-area overflow-auto"
                type="text"
                name=""
                id=""
                cols="28"
                rows="3"
                placeholder="New post title here..."
              ></textarea>
            </div>

            <div className="relative">
              <div className="p-0 items-center">
                <ul className=" w-full list-none">
                  <li className="w-max list-item">
                    <input
                      className="placeholder-slate-600 text-black"
                      type="text"
                      placeholder="Add up to 4 tags..."
                      onChange={(event) => setText(event.target.value)} //Evento cuando cambia de valor el input (texto del input)
                      onKeyUp={onEnter}
                      value={text} //establece el valor del input
                    />
                    <div className="flex flex-reverse">
                      {tags.map((tag, index) => {
                        return (
                          <HashTagComp
                            key={`tag-${index}`}
                            text={tag}
                            onDelete={() => onDelete(index)}
                          />
                        );
                      })}
                    </div>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="bg-[#3b49df] text-white p-2 rounded w-24 mt-2"
                onClick={onAddItem}
              >
                Add Tag
              </button>
            </div>
          </div>
          <div className="py-8 px-16 flex flex-col relative">
            <div className="bg-[#f5f5f5] sticky py-3 max-w-full mb-5">
              <div className="flex flex-row">
                <button className="p-2 mr-1 hover:rounded-lg hover:bg-[#e4e3f3] hover:fill-blue-700">
                  <svg width="24px" height="24px">
                    <path d="M8 11h4.5a2.5 2.5 0 0 0 0-5H8v5Zm10 4.5a4.501 4.501 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.5 4.5 0 0 1 18 15.5ZM8 13v5h5.5a2.5 2.5 0 0 0 0-5H8Z"></path>
                  </svg>
                </button>
                <button className="p-2 mr-1 hover:rounded-lg hover:bg-[#e4e3f3] hover:fill-blue-700">
                  <svg width="24px" height="24px">
                    <path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15v2Z"></path>
                  </svg>
                </button>
                <button className="p-2 mr-1 hover:rounded-lg hover:bg-[#e4e3f3] hover:fill-blue-700">
                  <svg width="24px" height="24px">
                    <path d="M18.364 15.536 16.95 14.12l1.414-1.414a5.001 5.001 0 0 0-3.531-8.551 5 5 0 0 0-3.54 1.48L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 1 1 9.9 9.9l-1.415 1.414zm-2.828 2.828-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607 1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"></path>
                  </svg>
                </button>
                <button className="p-2 mr-1 hover:rounded-lg hover:bg-[#e4e3f3] hover:fill-blue-700">
                  <svg width="24px" height="24px">
                    <path d="M8 4h13v2H8zM5 3v3h1v1H3V6h1V4H3V3zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2zM8 11h13v2H8zm0 7h13v2H8z"></path>
                  </svg>
                </button>
                <button className="p-2 mr-1 hover:rounded-lg hover:bg-[#e4e3f3] hover:fill-blue-700">
                  <svg width="24px" height="24px">
                    <path d="M8 4h13v2H8zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8zm0 7h13v2H8z"></path>
                  </svg>
                </button>
                <button className="p-2 mr-1 hover:rounded-lg hover:bg-[#e4e3f3] hover:fill-blue-700">
                  <svg width="24px" height="24px">
                    <path d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7z"></path>
                  </svg>
                </button>
                <button className="p-2 mr-1 hover:rounded-lg hover:bg-[#e4e3f3] hover:fill-blue-700">
                  <svg width="24px" height="24px">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179z"></path>
                  </svg>
                </button>
                <button className="p-2 mr-1 hover:rounded-lg hover:bg-[#e4e3f3] hover:fill-blue-700">
                  <svg width="24px" height="24px">
                    <path d="m23 12-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414z"></path>
                  </svg>
                </button>
                <button className="p-2 mr-1 hover:rounded-lg hover:bg-[#e4e3f3] hover:fill-blue-700">
                  <svg width="24px" height="24px">
                    <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5zm15 7-3.536 3.536-1.414-1.415L16.172 12 14.05 9.879l1.414-1.415zM7.828 12l2.122 2.121-1.414 1.415L5 12l3.536-3.536L9.95 9.88z"></path>
                  </svg>
                </button>
                <button className="p-2 mr-1 hover:rounded-lg hover:bg-[#e4e3f3] hover:fill-blue-700">
                  <svg width="24px" height="24px">
                    <path d="M13 9h8L11 24v-9H4l9-15v9Zm-2 2V7.22L7.532 13H13v4.394L17.263 11H11Z"></path>
                  </svg>
                </button>
                <button className="p-2 mr-1 hover:rounded-lg hover:bg-[#e4e3f3] hover:fill-blue-700">
                  <svg width="24px" height="24px">
                    <path d="M20 5H4v14l9.292-9.294a1 1 0 0 1 1.414 0L20 15.01V5zM2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="min-h-[54px]">
              <textarea
                name=""
                id=""
                cols="62"
                rows="10"
                placeholder="Write your post content here..."
              ></textarea>
            </div>
          </div>
        </div>
        <div className="block">
          <div>
            <div className="relative">
              <h4 className="mb-2 font-bold">Editor Basics</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                alias esse itaque! Officia incidunt dolore, facere cum, porro
                maxime delectus praesentium eaque ab provident dicta deserunt
                numquam nobis libero autem?
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row col-start-2 col-span-2 relative items-center h-13">
          <button
            className="whitespace-nowrap mr-2 bg-[#3b49df] hover:bg[#2f3ab2] text-white font-bold h-10 rounded-md py-2 px-4"
            type="button"
          >
            Publish
          </button>
          <button
            className="whitespace-nowrap mr-2 h-10 py-2 px-4 hover:rounded-lg hover:bg-[#e4e3f3] hover:text-blue-700"
            type="button"
          >
            Save draft
          </button>
          <div className="relative h-10">
            <button
              className="py-1.5 px-2.5 hover:rounded-lg hover:bg-[#e4e3f3] hover:fill-blue-700"
              type="button"
            >
              <svg width="24px" height="24px">
                <path d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
              </svg>
            </button>
          </div>
          <div>
            <button
              className="whitespace-nowrap mr-2 h-10 py-2 px-4 hover:rounded-lg hover:bg-[#e4e3f3] hover:text-blue-700"
              type="button"
            >
              Revert new changes
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
