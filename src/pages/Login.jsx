import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBarOffLine from "../components/NavBarOffLine";

export default function Login() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("response: ", response);
        if (response?.token) {
          localStorage.setItem("token", response?.token);

          //const token = localStorage.getItem("token");
          //localStorage.removeItem('token');
          navigate("/");
        } else {
          toast.error("No existe token, acceso denegado! 🔫");
        }
      })
      .catch(() => {
        toast.error("Falló el fetch :c");
      });
  }

  return (
    <>
      <NavBarOffLine />
      <div className=" bg-[#f5f5f5] min-h-screen">
        <div className="container mx-auto p-4">
          <div className="container bg-white mx-auto w-7/12 p-12 border-solid border-2 border-[#e0e0e0] rounded-md">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Welcome to DEV Community</h1>
              <p>
                DEV Community is a community of 1,098,529 amazing developers
              </p>
            </div>
            <div>
              <div className="grid grid-rows-4 gap-2">
                <form
                  className="bg-black w-full rounded-md flex flex-row"
                  action=""
                >
                  <button className="whitespace-nowrap grow text-white flex flex-row justify-center p-4">
                    <svg className="mr-2 fill-white" width="24px" height="24px">
                      <path d="M11.752 6.657c.828 0 1.867-.56 2.486-1.307.56-.677.969-1.623.969-2.568 0-.129-.012-.257-.036-.362-.922.035-2.03.618-2.696 1.4-.525.596-1.004 1.53-1.004 2.487 0 .14.024.28.035.326.059.012.152.024.245.024zM8.834 20.78c1.132 0 1.634-.759 3.046-.759 1.436 0 1.75.736 3.011.736 1.238 0 2.066-1.144 2.848-2.265.876-1.284 1.238-2.544 1.261-2.603-.082-.023-2.451-.992-2.451-3.711 0-2.358 1.867-3.42 1.972-3.502-1.237-1.774-3.116-1.82-3.63-1.82-1.389 0-2.52.84-3.233.84-.77 0-1.786-.794-2.988-.794-2.288 0-4.61 1.89-4.61 5.462 0 2.218.863 4.564 1.925 6.082.91 1.284 1.705 2.334 2.849 2.334z"></path>
                    </svg>
                    Continue with Apple
                  </button>
                </form>
                <form
                  className="bg-[#0a3e4a] w-full rounded-md flex flex-row"
                  action=""
                >
                  <button className="whitespace-nowrap grow text-white flex flex-row justify-center p-4">
                    <svg className="mr-2 fill-white" width="24px" height="24px">
                      <g
                        transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
                        fill="#ffff"
                        stroke="none"
                      >
                        <path d="M0 1000 l0 -1000 1000 0 1000 0 0 1000 0 1000 -1000 0 -1000 0 0 -1000z m1507 684 c91 -55 130 -189 84 -290 -22 -48 -95 -114 -128 -114 -19 0 -25 9 -39 57 l-17 57 26 20 c14 12 31 34 37 50 15 40 -14 98 -55 110 -52 15 -58 21 -72 70 -11 38 -12 51 -1 63 20 24 107 12 165 -23z m-247 -25 c6 -11 12 -39 13 -62 2 -41 2 -42 -45 -57 -68 -22 -70 -26 -52 -100 22 -88 28 -94 88 -76 26 8 54 12 61 10 15 -6 40 -97 32 -118 -3 -8 -31 -21 -61 -30 -31 -9 -56 -20 -56 -24 0 -4 18 -72 40 -152 22 -80 40 -153 40 -162 0 -21 -106 -56 -121 -41 -6 6 -25 68 -44 139 -43 167 -155 586 -160 600 -7 24 16 37 111 65 120 34 140 35 154 8z m-485 -185 c67 -33 136 -105 155 -163 16 -48 13 -53 -52 -74 l-48 -16 -17 26 c-10 15 -35 43 -55 64 -67 68 -175 71 -252 7 -48 -39 -67 -77 -71 -144 -1 -30 -5 -57 -7 -59 -10 -10 -97 -28 -110 -22 -38 14 -29 147 17 237 25 49 94 119 144 144 84 44 206 44 296 0z m791 -730 c12 -48 -2 -147 -30 -201 -37 -75 -76 -115 -148 -154 -58 -31 -70 -34 -148 -34 -73 0 -93 4 -143 29 -67 32 -128 92 -157 152 -25 51 -19 68 29 83 64 19 78 15 103 -30 33 -58 94 -92 168 -92 106 0 178 71 189 186 l6 61 40 12 c65 20 84 17 91 -12z"></path>
                      </g>
                    </svg>
                    Continue with Forem
                  </button>
                </form>
                <form
                  className="bg-[#24292e] w-full rounded-md flex flex-row"
                  action=""
                >
                  <button className="whitespace-nowrap grow text-white flex flex-row justify-center p-4">
                    <svg className="mr-2 fill-white" width="24px" height="24px">
                      <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"></path>
                    </svg>
                    Continue with GitHub
                  </button>
                </form>
                <form
                  className="bg-[#1da1f2] w-full rounded-md flex flex-row"
                  action=""
                >
                  <button className="whitespace-nowrap grow text-white flex flex-row justify-center p-4">
                    <svg className="mr-2 fill-white" width="24px" height="24px">
                      <path
                        d="M22.162 5.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.211 4.211 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.395 8.395 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z"
                        fill="#ffff"
                      ></path>
                    </svg>
                    Continue with Twitter
                  </button>
                </form>
              </div>
              <div>
                <div className="mb-4 relative text-center">
                  <span className="relative text-sm bg-white px-1 z-60 inline-block w-full affter:content-[''] after:w-full after:border border-solid after:border-[#d6d6d7] after:block after:absolute after:top-2 after:z-0">
                    Have a password? Continue with you email adress
                  </span>
                </div>
                <ToastContainer theme="dark" />
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <input type="hidden" />
                  <input type="hidden" />
                  <div className="flex flex-col mb-3 text-base">
                    <label className="font-medium" htmlFor="user_email">
                      Email
                    </label>
                    <input
                      className="p-3 w-full bg-[#e8f0fe] rounded-md"
                      type="text"
                      placeholder="e-mail"
                      {...register("username", {
                        required: {
                          value: true,
                          message: "Nombre de usuario requerido",
                        },
                      })}
                    />
                  </div>
                  <div className="flex flex-col mb-3 text-base">
                    <label className="font-medium" htmlFor="user_password">
                      Password
                    </label>
                    <input
                      className="p-3 w-full bg-[#e8f0fe] rounded-md"
                      type="password"
                      placeholder="Contraseña"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password requerido",
                        },
                      })}
                    />
                  </div>
                  <div className="inline-flex items-center">
                    <input type="hidden" />
                    <input
                      className="bg-[#3b49df] m-3"
                      type="checkbox"
                      checked="checked"
                    />
                    <label className="m-0 pr-2" htmlFor="user_remember">
                      Remember me
                    </label>
                  </div>
                  <div className="mb-2 pt-3">
                    <input
                      className="w-full rounded-md p-3 bg-[#3b49df] text-white"
                      type="submit"
                      value="Continue"
                    />
                  </div>
                </form>
                <p className="pt-6 text-center text-blue-700 text-sm">
                  I Forgot my password
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
