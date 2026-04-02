import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Image from "next/image";

function CounterStats() {
  return (
    <section className="text-white bg-no-repeat w-full bg-cover  mt-[60px] bg-[url('/images/banner.png')]">
      <div className="max-w-screen-xl px-4 py-10 text-center mx-auto md:px-6 lg:px-8">
        <div className="w-full">
          <h2 className="text-2xl lg:text-4xl  font-bold ">Helping Clients</h2>

          <p className="mt-4 sm:text-xl lg:px-[10rem]">
            By delivering the best in class enterprise solutions
          </p>
        </div>
        <VisibilitySensor partialVisibility offset={{ top: 10 }}>
          {({ isVisible }) => (
            <ul className="grid grid-cols-2 gap-8 mt-8  lg:grid-cols-4">
              <li className=" px-8 pt-8 flex flex-col items-center justify-center shadow-xl rounded-xl ">
                <Image
                  height={80}
                  width={80}
                  alt=""
                  src="/images/solutions.png"
                />
                <div>
                  {isVisible ? (
                    <CountUp
                      end={8}
                      duration={2}
                      className="text-3xl font-extrabold after:content-['+']"
                    />
                  ) : null}

                  <p className="mt-1 text-xl font-medium ">Solutions</p>
                </div>
              </li>

              <li className="flex flex-col items-center justify-center  px-8 pt-8 shadow-xl rounded-xl">
                <Image
                  height={80}
                  width={80}
                  alt=""
                  src="/images/customers.png"
                />
                {isVisible ? (
                  <CountUp
                    end={50}
                    duration={2}
                    className="text-3xl font-extrabold after:content-['+']"
                  />
                ) : null}

                <p className="mt-1 text-xl font-medium">Customers</p>
              </li>

              <li className=" flex flex-col items-center justify-center  px-8 pt-8 shadow-xl rounded-xl">
                <Image
                  height={80}
                  width={80}
                  alt=""
                  src="/images/location.png"
                />
                {isVisible ? (
                  <CountUp
                    end={2}
                    duration={2}
                    className="text-3xl font-extrabold"
                  />
                ) : null}

                <p className="mt-1 text-xl font-medium">Locations</p>
              </li>
              <li className="flex flex-col items-center justify-center   px-8 pt-8 shadow-xl rounded-xl">
                <Image
                  height={80}
                  width={80}
                  alt=""
                  src="/images/satisfaction.png"
                />

                {isVisible ? (
                  <CountUp
                    end={100}
                    duration={2}
                    className="text-3xl font-extrabold after:content-['%']"
                  />
                ) : null}

                <p className="mt-1 text-xl font-medium">Satisfaction</p>
              </li>
            </ul>
          )}
        </VisibilitySensor>
      </div>
    </section>
  );
}

export default CounterStats;
