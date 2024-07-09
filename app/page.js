import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-white gap-4 h-[44vh]">
        <div className="font-bold text-5xl flex items-center justify-center">
          Buy Me A Chai
          <span>
            <img width={88} src="chai.gif"></img>
          </span>
        </div>
        <p>
          A crowdfunding platoform for creators. Get funded by your friends and
          followers. Start now!
        </p>
        <div>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Purple to blue
            </span>
          </button>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Read More
            </span>
          </button>
        </div>
      </div>

      <div className="h-1 w-[100%] bg-white opacity-10"></div>

      <div className="text-white container mx-auto  py-16">
        <h1 className="font-bold text-3xl text-center my-10">
          Fans can buy you a Chai
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="flex space-y-3 flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              src="avatar.gif"
              width={88}
            ></img>
            <p>Fund Yourself</p>
            <p>Your fans are available for you to help you</p>
          </div>
          <div className="flex space-y-3 flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              src="wired-lineal-290-coin.gif"
              width={88}
            ></img>
            <p>Fund Yourself</p>
            <p>Your fans are available for you to help you</p>
          </div>
          <div className="flex space-y-3 flex-col items-center justify-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              src="crowd.gif"
              width={88}
            ></img>
            <p>Fund Yourself</p>
            <p>Your fans are available for you to help you</p>
          </div>
        </div>
      </div>
      <div className="h-1 w-[100%] bg-white opacity-10"></div>

      <div className="text-white container mx-auto flex flex-col justify-center items-center  py-16">
        <h1 className="font-bold text-3xl text-center my-10">
          Learn more about us
        </h1>

        <iframe
          width="460"
          height="315"
          src="https://www.youtube.com/embed/uyVCneA_e3o?si=8kUfZiKXDRm6SvWu"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}
