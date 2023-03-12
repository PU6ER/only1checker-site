import * as React from "react";

const Hero = () => {
  const handleSubmit = (e:any) => {
    e.preventDefault()
  }
  return (
    <div className="flex font-Poppins">
      <div className="flex w-full max-w-1110 mx-auto">
        <div className="flex flex-col max-w-[274px] break-words text-clip max-h-44 h-full  mt-40">
          <div className="">
            <span className=" font-semibold  text-white mr-2 text-40">
              Validate <span className="text-only1">your</span> email{" "}
              <span className="text-only1">lists</span> &nbsp;&nbsp;{" "}
              <span className="text-only1">in</span> one-click
            </span>
          </div>
          <span className=" font-medium text-only1 mr-2 text-lg">
            Subscribe for updates.
          </span>
          <div className="mt-8 flex flex-col">
            <form  className="" onSubmit={handleSubmit}>
              <label htmlFor="" className="relative gro~up ">
              
              <input type="text" placeholder="Your Email" className="bg-transparent transition ease-in delay-100 rounded-xl indent-10 border-2   placeholder:transition placeholder:ease-in placeholder:delay-100 placeholder:hover:text-only1  hover:border-only1 ocus:border-only1 focus:outline-none border-only1input h-11 text-white placeholder:text-only1input max-w-[274px] w-full"></input>
              <img src={process.env.PUBLIC_URL + "/envelope.svg"} className="absolute left-3 bottom-1  group-hover:content-envelopeLight transition ease-in delay-100 " alt="#" />
              
              </label>   
              <button className="font-medium  border-transparent text-sm max-w-[274px] mt-4 w-full rounded-xl border-2 hover:bg-green-500 bg-green-600 text-white h-11">Join to waitlist</button>
            </form>
               
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Hero;
