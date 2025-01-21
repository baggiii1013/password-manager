import DecryptedText from "./ui/DecryptedText";
import GradientText from "./ui/GradientText";
import StarBorder from "./ui/StarBorder";
import ShinyText from "./ui/ShinyText";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const iconRef = useRef(null);
  const passRef = useRef(null);
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    if (iconRef.current.state === "hover-look-around") {
      iconRef.current.state = "hover-cross";
      passRef.current.type = "password";
    } else {
      passRef.current.type = "text";
      iconRef.current.state = "hover-look-around";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    savePassword(form);
  };

  const savePassword = (formData) => {
    setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );
    console.log([...passwordArray, form]);
    setform({ site: "", username: "", password: "" })
  };

  const deletePassword = (id) => {
    console.log(`deleting password with id ${id}`);
    let d = confirm('Do you want to delete your password?')
    if(d){
      toast(`deleted your password`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setPasswordArray(passwordArray.filter(item=>item.id!==id))
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter(item=>item.id!==id))
      );
    }
  };

  const editPassword = (id) => {
    console.log(`editing password with id ${id}`);
    setform(passwordArray.filter(item=>item.id===id)[0])
    setPasswordArray(passwordArray.filter(item=>item.id!==id))
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    toast(`copied ${text}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex flex-col justify-center my-5 ">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <StarBorder
        as="div"
        className="custom-class mx-auto"
        color="cyan"
        speed="5s"
      >
        <div className="mx-auto">
          <h1 className="flex gap-2 justify-center">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="text-3xl font-medium"
            >
              <span className="text-transparent bg-clip-text">
                &lt;Pass-Man/&gt;
              </span>
            </GradientText>
            <DecryptedText
              text=": A new gen password storage for you"
              animateOn="view"
              revealDirection="start"
              speed={80}
              sequential={true}
              className="text-3xl font-medium text-custom-sub-text-color"
            />
          </h1>
          <form
            onSubmit={handleSubmit}
            className="text-custom-sub-text-color flex flex-col p-4"
          >
            <input
              className="m-1 rounded-full p-2 bg-custom-blue-dark border border-none"
              type="text"
              name="site"
              value={form.site}
              onChange={handleChange}
              placeholder="Website name(url)"
            />
            <div className="flex justify-center">
              <input
                className="w-full m-2 rounded-full p-2 bg-custom-blue-dark"
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Username"
              />
              <input
                className="w-full m-2 rounded-full p-2 bg-custom-blue-dark relative"
                ref={passRef}
                type=""
                name="password"
                value={form.password}
                onChange={handleChange}
                onClick={showPassword}
                placeholder="Password"
              />
              <span
                className="absolute right-[2.8rem] bottom-[86px] cursor-pointer"
                onClick={showPassword}
              >
                <lord-icon
                  ref={iconRef}
                  src="https://cdn.lordicon.com/dicvhxpz.json"
                  trigger="click"
                  stroke="bold"
                  state="hover-cross"
                  colors="primary:#fff,secondary:#60a5fa"
                />
              </span>
            </div>
            <StarBorder
              as="div"
              className="custom-class mx-auto"
              color="cyan"
              speed="5s"
            >
              <button type="submit">
                <GradientText
                  colors={[
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className=" font-medium"
                >
                  Confirm
                </GradientText>
              </button>
            </StarBorder>
          </form>
        </div>
      </StarBorder>

      <StarBorder
        as="div"
        className="custom-class my-5 w-[900px] mx-auto"
        color="cyan"
        speed="5s"
      >
        <div className=" flex justify-center m-2">
          <h1 className="">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="text-3xl font-medium"
            >
              Your passwords
            </GradientText>
          </h1>
        </div>
        {passwordArray.length === 0 ? (
          <div>
            <ShinyText
              text="No passwords to show"
              disabled={false}
              speed={2}
              className="custom-class"
            />
          </div>
        ) : (
          <table className="table-fixed w-full my-3 rounded-md overflow-hidden">
            <thead className="bg-custom-blue-dark">
              <tr className="">
                <th className="p-3 font-mono font-bold text-lg text-custom-blue-light">
                  Website
                </th>
                <th className="p-3 font-mono font-bold text-lg text-custom-blue-light">
                  Username
                </th>
                <th className="p-3 font-mono font-bold text-lg text-custom-blue-light">
                  Password
                </th>
                <th className="p-3 font-mono font-bold text-lg text-custom-blue-light">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {passwordArray.map((item) => {
                return (
                  <tr>
                    <td className="text-center font-mono p-3 text-custom-blue text-lg">
                      <div className=" flex gap-5 items-center justify-center">
                        <ShinyText
                          text={item.site}
                          disabled={false}
                          speed={2}
                          className="custom-class"
                        />
                        <div
                          className="cursor-pointer size-7"
                          onClick={() => {
                            copyText(item.site);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="morph"
                            colors="primary:#60a5fa"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className=" text-center font-mono p-3 text-custom-blue text-lg">
                      <div className=" flex gap-5 items-center justify-center">
                        <ShinyText
                          text={item.username}
                          disabled={false}
                          speed={2}
                          className="custom-class"
                        />
                        <div
                          className="cursor-pointer size-7"
                          onClick={() => {
                            copyText(item.username);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="morph"
                            colors="primary:#60a5fa"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className=" text-center font-mono p-3 text-custom-blue text-lg">
                      <div className=" flex gap-5 items-center justify-center">
                        <ShinyText
                          text={item.password}
                          disabled={false}
                          speed={2}
                          className="custom-class"
                        />
                        <div
                          className="cursor-pointer size-7"
                          onClick={() => {
                            copyText(item.password);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="morph"
                            colors="primary:#60a5fa"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className=" text-center font-mono p-3 text-custom-blue text-lg">
                      <span
                        className="cursor-pointer"
                        onClick={() => {
                          deletePassword(item.id);
                        }}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/skkahier.json"
                          trigger="hover"
                          colors="primary:#60a5fa"
                        ></lord-icon>
                      </span>
                      <span
                        className="cursor-pointer mx-3"
                        onClick={() => {
                          editPassword(item.id);
                        }}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/gwlusjdu.json"
                          trigger="hover"
                          colors="primary:#60a5fa"
                        ></lord-icon>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </StarBorder>
    </div>
  );
};

export default Manager;
