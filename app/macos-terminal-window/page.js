import Navbar from "@/components/Navbar";
import PageMargin from "@/components/PageMargin";

const MacOSWindow = () => (
  <>
    <Navbar />
    <PageMargin>
      <h1 className="text-center text-2xl font-semibold w-full mb-3">MacOS terminal window with CSS</h1>
      <div className="shadow-lg w-full flex flex-col text-white rounded-lg bg-black h-56">
        <div className="flex items-center bg-neutral-700 h-8 px-2 relative rounded-t-lg">
          <div className="flex gap-1">
            <div className="bg-red-500 size-3 rounded-full" ></div>
            <div className="bg-amber-500 size-3 rounded-full"></div>
            <div className="bg-green-500 size-3 rounded-full"></div>
          </div>
          <p className="absolute left-1/2 transform -translate-x-1/2">Terminal</p>
        </div>
        <div className="grow py-1 px-2">
          andrerwfreitas@my-computer - %&nbsp;
        </div>
      </div>
    </PageMargin>
  </>
);

export default MacOSWindow;