import PostCard from "./components/PostCard";
import SideCompNav from "./components/SideCompNav";
import SideHashTag from "./components/SideHashTag";
import NavBar from "./components/NavBar";
import SideRightCard from "./components/SideRigthCard";
import { compnav, compnav2 } from "./data/compnav";
import { compcard } from "./data/compcard";
import { compsideht } from "./data/compsideht";
import {
  compsideright,
  compsideright2,
  compsideright3,
} from "./data/compsideright";

export default function App() {
  return (
    <>
      <NavBar />

      <div className="container mx-auto bg-[#f5f5f5] min-h-screen">
        <div className="grid grid-cols-12 gap-4 border-2 border-blue-700">
          <div className="col-start-1 col-end-4 text-center block">
            <section className="flex flex-col border-2 border-green-600 p-3">
              <ul className="flex flex-col border-2 border-amber-600">
                {compnav.map((comp, index) => {
                  return (
                    <SideCompNav
                      key={`side-comp-nav-${index}`}
                      name={comp.name}
                      image={comp.image}
                    />
                  );
                })}
                <h2 className="text-left text-slate-950 font-bold p-5">
                  Other
                </h2>
                {compnav2.map((comp, index) => {
                  return (
                    <SideCompNav
                      key={`side-comp-nav-${index}`}
                      name={comp.name}
                      image={comp.image}
                    />
                  );
                })}
              </ul>
            </section>
            <div className="flex flex-row justify-around h-15 p-3">
              <a className="p-1" href="">
                <svg
                  className="hover:rounded-lg hover:bg-[#e4e3f3] hover:fill-blue-700"
                  width="30px"
                  height="30px"
                >
                  <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                </svg>
              </a>
              <a className="p-1" href="">
                <svg
                  className="hover:rounded-lg hover:bg-[#e4e3f3] hover:fill-blue-700"
                  width="30px"
                  height="30px"
                >
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
                </svg>
              </a>
              <a className="p-1" href="">
                <svg
                  className="hover:rounded-lg hover:bg-[#e4e3f3] hover:fill-blue-700"
                  width="30px"
                  height="30px"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </a>
              <a className="p-1" href="">
                <svg
                  className="hover:rounded-lg hover:bg-[#e4e3f3] hover:fill-blue-700"
                  width="30px"
                  height="30px"
                >
                  <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                </svg>
              </a>
              <a className="p-1" href="">
                <svg
                  className="hover:rounded-lg hover:bg-[#e4e3f3] hover:fill-blue-700"
                  width="30px"
                  height="30px"
                >
                  <path d="M 6 4 L 4 8 L 4 24 L 9 24 L 9 27 L 13 27 L 16 24 L 20 24 L 26 18 L 26 4 L 6 4 z M 8 6 L 24 6 L 24 17 L 21 20 L 15 20 L 12 23 L 12 20 L 8 20 L 8 6 z M 13 9 L 13 16 L 15 16 L 15 9 L 13 9 z M 17 9 L 17 16 L 19 16 L 19 9 L 17 9 z"></path>
                </svg>
              </a>
              <a className="p-1" href="">
                <svg
                  className="hover:rounded-lg hover:bg-[#e4e3f3] hover:fill-blue-700"
                  width="30px"
                  height="30px"
                >
                  <path d="M21.327 8.566c0-4.339-2.843-5.61-2.843-5.61-1.433-.658-3.894-.935-6.451-.956h-.063c-2.557.021-5.016.298-6.45.956 0 0-2.843 1.272-2.843 5.61 0 .993-.019 2.181.012 3.441.103 4.243.778 8.425 4.701 9.463 1.809.479 3.362.579 4.612.51 2.268-.126 3.541-.809 3.541-.809l-.075-1.646s-1.621.511-3.441.449c-1.804-.062-3.707-.194-3.999-2.409a4.523 4.523 0 0 1-.04-.621s1.77.433 4.014.536c1.372.063 2.658-.08 3.965-.236 2.506-.299 4.688-1.843 4.962-3.254.434-2.223.398-5.424.398-5.424zm-3.353 5.59h-2.081V9.057c0-1.075-.452-1.62-1.357-1.62-1 0-1.501.647-1.501 1.927v2.791h-2.069V9.364c0-1.28-.501-1.927-1.502-1.927-.905 0-1.357.546-1.357 1.62v5.099H6.026V8.903c0-1.074.273-1.927.823-2.558.566-.631 1.307-.955 2.228-.955 1.065 0 1.872.409 2.405 1.228l.518.869.519-.869c.533-.819 1.34-1.228 2.405-1.228.92 0 1.662.324 2.228.955.549.631.822 1.484.822 2.558v5.253z"></path>
                </svg>
              </a>
            </div>
            <nav className="p-3">
              <header className="flex flex-row justify-between m-0 p-1">
                <h2 className="text-left text-slate-950 font-bold p-5">
                  My Tags
                </h2>
                <a className="py-3 px-px" href="#">
                  <img
                    src="src/assets/nut_icon_175027.png"
                    alt="links"
                    width="35px"
                    height="35px"
                  />
                </a>
              </header>
              <div className="max-h-60 overflow-auto p-3">
                {compsideht.map((comp, index) => {
                  return (
                    <SideHashTag
                      key={`side-nav-hasht${index}`}
                      hashName={comp.hashName}
                    />
                  );
                })}
              </div>
            </nav>
            <div className="bg-white border-solid border-2 border-[#e0e0e0] rounded-md p-3 max-h-80 overflow-auto">
              <div className="flex flex-row items-center p-1 justify-between">
                <div className="text-sm font-light">DEV Community</div>
                <button className="bg-white border-none p-1">
                  <img
                    src="src/assets/susp.png"
                    alt="link"
                    width="30px"
                    height="30px"
                  />
                </button>
              </div>
              <div className="p-3">
                <p className="mb-3.5">
                  <img src="src/assets/8nuyrw43yfedpbj2iieb.jpg" alt="image" />
                </p>
                <h2 className="text-2xl mb-3 text-left">
                  <a className="text-slate-900 no-underline" href="#">
                    Is time to change it up
                  </a>
                </h2>
                <p className="text-left mb-3">
                  You can change your feed and see more relevant posts by adding
                  a rating to different tags on DEV.
                  <a href="#">Head here</a>
                  to adjust your weights
                </p>
              </div>
            </div>
          </div>
          <div className="col-start-4 col-span-6 text-center grow-0 shrink-0 basis-auto">
            <div className="flex flex-row mb-2 gap-4">
              <button className="bg-white text-blue-700 border border-blue-700 rounded-md p-2.5 my-2">
                <a href="#">Relevant</a>
              </button>
              <button className="bg-white text-blue-700 border border-blue-700 rounded-md p-2.5 my-2">
                <a href="#">Latest</a>
              </button>
              <button className="bg-white text-blue-700 border border-blue-700 rounded-md p-2.5 my-2">
                <a href="#">Top</a>
              </button>
            </div>
            {compcard.map((card, index) => {
              return (
                <PostCard
                  key={`post-card-${index}`}
                  isFirst={card.isFirst}
                  imagePost={card.imagePost}
                  imageUser={card.imageUser}
                  nameUser={card.nameUser}
                  datePost={card.datePost}
                  titlePost={card.titlePost}
                  numReactions={card.numReactions}
                  numComments={card.numComments}
                  timeRead={card.timeRead}
                />
              );
            })}
          </div>
          <div className="col-end-13 col-span-3 text-center">
            <div className="flex flex-col border-solid border-2 border-[##e0e0e0] rounded-md mr-4 mt-4">
              <div className="flex flex-row justify-between bg-white">
                <div>
                  <h3 className="text-xl font-bold py-2 pl-2">Listings</h3>
                </div>
                <div className="p-2">
                  <a className="" href="#">
                    <span className="text-xs text-blue-700">See All</span>
                  </a>
                </div>
              </div>
            </div>
            {compsideright.map((comp, index) => {
              return (
                <SideRightCard
                  key={`side-card-${index}`}
                  name={comp.name}
                  theme={comp.theme}
                />
              );
            })}
            <div className="flex flex-col border-solid border-2 border-[##e0e0e0] rounded-md mr-4 mb-4">
              <div className="flex flex-row justify-center bg-white">
                <div>
                  <h3 className="text-base font-normal py-2 pl-2">
                    Create a Listing
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col border-solid border-2 border-[##e0e0e0] rounded-md mr-4">
              <div className="flex flex-row justify-between bg-white">
                <div>
                  <h3 className="text-xl font-bold py-2 pl-2">#discuss</h3>
                </div>
              </div>
            </div>
            {compsideright2.map((comp, index) => {
              return (
                <SideRightCard
                  key={`side-card-${index}`}
                  name={comp.name}
                  theme={comp.theme}
                />
              );
            })}
            <div className="flex flex-col border-solid border-2 border-[##e0e0e0] rounded-md mr-4 mt-4">
              <div className="flex flex-row justify-between bg-white">
                <div>
                  <h3 className="text-xl font-bold py-2 pl-2">#watercooler</h3>
                </div>
              </div>
            </div>
            {compsideright3.map((comp, index) => {
              return (
                <SideRightCard
                  key={`side-card-${index}`}
                  name={comp.name}
                  theme={comp.theme}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
