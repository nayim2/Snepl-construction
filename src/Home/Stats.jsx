import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // runs only once
    threshold: 0.3, // triggers when 30% visible
  });

  return (
    <div ref={ref} className="w-full py-10">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 text-center gap-10">

        {/* Year Established */}
        <div>
          <h2 className="text-5xl font-bold text-red-600">
            {inView && <CountUp start={0} end={2006} duration={2} />}
          </h2>
          <p className="text-xl font-semibold text-red-600 mt-2">
            Year Established
          </p>
        </div>

        {/* Work Force */}
        <div>
          <h2 className="text-5xl font-bold text-red-600">
            {inView && <CountUp start={0} end={200} duration={2} />}+
          </h2>
          <p className="text-xl font-semibold text-red-600 mt-2">
            Work source
          </p>
        </div>

        {/* Customers */}
        <div>
          <h2 className="text-5xl font-bold text-red-600">
            {inView && <CountUp start={0} end={700} duration={2} />}+
          </h2>
          <p className="text-xl font-semibold text-red-600 mt-2">
            Customers
          </p>
        </div>

      </div>
    </div>
  );
};

export default Stats;
