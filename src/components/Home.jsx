"use client"
import { GrPowerReset } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { reset, increment } from "../redux/counterSlice";

const Home = () => {
	const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <p className="text-xl">
        Navigate between pages to check how the state persists.
      </p>
      {/* app container */}
      <section className="w-96 shadow-[rgb(30,30,30)_0px_3px_6px_0px] rounded-xl relative flex flex-col justify-center">
        {/* display */}
        <div className="w-full h-48 bg-gray-600 flex items-center justify-center rounded-t-xl p-7">
          <div className="w-full bg-white border border-gray-300 h-full rounded-xl flex items-center justify-center text-[6rem] tracking-widest text-gray-700 shadow-[rgba(50,50,93,0.25)_0px_30px_60px_-12px_inset,rgba(0,0,0,0.3)_0px_18px_36px_-18px_inset]">
            {count}
          </div>
        </div>
        {/* buttons */}
        <div className="w-full h-24 bg-gray-600 flex items-center justify-center rounded-b-xl p-7 border-t border-gray-500">
          <div className="flex w-full justify-around text-gray-900">
            <button
              aria-label="Reset value"
              onClick={() => dispatch(reset())}
              className="bg-white rounded px-3 py-0.5 shadow active:translate-x-0.5 active:translate-y-0.5 tracking-tighter flex items-center gap-1.5"
            >
              <GrPowerReset />
              Reset
            </button>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
              className="bg-white rounded px-3 py-0.5 shadow active:translate-x-0.5 active:translate-y-0.5 tracking-tighter"
            >
              Increment
            </button>
          </div>
        </div>
        {/* right nob */}
        <div className="absolute h-10 w-6 bg-gradient-to-b from-gray-700 to-gray-800 -right-6" />
      </section>
    </>
  );
};

export default Home;
