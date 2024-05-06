import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

// import loginImg from "../../../public/images/laptop-image.avif";
import { Chakra_Petch, Poppins, Quicksand } from "next/font/google";
const chakraPetch = Chakra_Petch({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const quickSand = Quicksand({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

const login = () => {
  return (
    <>
      {/* mobile responsive */}
      <div className="md:hidden">
        <div className="mx-auto flex justify-center items-center mt-[30%]">
          <div className=" space-y-2 flex flex-col justify-center text-center w-full mx-5">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome Back
            </h1>
            <p className="text-sm text-muted-foreground">
              Please enter your details
            </p>
            <Input type="email" placeholder="name@example.com" />
            <Input type="password" placeholder="password" />
            <Button>Login with Email </Button>
          </div>
        </div>
      </div>

      {/* desktop and tab responsive */}
      <div className="container relative hidden min-h-screen flex-col items-center justify-center md:grid md:max-w-none md:grid-cols-2 md:px-0">
        <div className="mx-auto flex w-full flex-col justify-center text-center sm:w-[350px]">
          <div className="mb-10">
            <h1
              className={`text-3xl font-semibold tracking-tight text-[#232323] mb-4 ${quickSand.className}`}
            >
              Welcome Back
            </h1>
            <p className=" text-muted-foreground text-[#232323]">
              Please enter your details
            </p>
          </div>
          <Input type="email" placeholder="name@example.com" className="mb-4" />
          <Input type="password" placeholder="password" className="mb-4" />
          <Button className="bg-[#232323] hover:bg-[#343434]">
            {" "}
            Login with Email{" "}
          </Button>

          <p className="mt-10">
            Don't have an account?{" "}
            <span className="hover:underline">Sign up</span>{" "}
          </p>
        </div>
        <div className="relative w-full  h-full">
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Picture of the author"
            className="h-full w-full"
          />{" "}
          <div className="absolute top-2/3 w-full flex flex-col p-8 gap-4">
            {/* <div className="flex items-center text-white">

            </div> */}
            <p
              className={`text-center text-white font-medium text-2xl ${chakraPetch.className}`}
            >
              Technology is the present and future!!
            </p>
            <p
              className={`text-white text-center text-md font-medium ${poppins.className}`}
            >
              "Once a new technology rolls over you, if you're not part of the
              steamroller, you're part of the road."
              <span className={`block text-base ${poppins.className}`}>
                - Stewart Brand
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
