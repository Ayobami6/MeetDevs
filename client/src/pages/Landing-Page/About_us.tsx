import { IoIosPeople } from "react-icons/io";
import {GiFlexibleLamp} from "react-icons/gi";
import {MdLaptopMac} from "react-icons/md";
import {CiBadgeDollar} from "react-icons/ci";
import { IconType } from "react-icons";

interface MotivationItem {
  iconPath: IconType;
  title: string;
  subtitle: string;
}

const motivationItems: MotivationItem[] = [
  {
    iconPath: IoIosPeople,
    title: "Exclusive Connections",
    subtitle:
      "Our approach is unique. We ensure that developers commit to only one employer at a time. This exclusivity guarantees undivided attention and dedication to your projects, fostering exceptional results.",
  },
  {
    iconPath: CiBadgeDollar,
    title: "Global Talent Pool",
    subtitle:
      "We connect you with tech talent from all corners of the world. This global reach allows you to tap into a diverse range of skills, experiences, and perspectives.",
  },
  {
    iconPath: MdLaptopMac,
    title: "Efficient Hiring",
    subtitle:
      "Our platform streamlines the hiring process, making it faster and more efficient. Access a pool of dedicated developers, shortening the time it takes to bring exceptional talent on board.",
  },
  {
    iconPath: GiFlexibleLamp,
    title: "Flexibility",
    subtitle:
      "Whether you're seeking full-time, part-time, or freelance talent, MeetDevs caters to your needs. Specify your requirements, and we'll connect you with developers who fit the bill",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-slate-900 border-t-8 border-gray-600">
      <section className="flex flex-col mx-20 px-15 items-center justify-center py-14 bg-neutral-light-grayish-blue lg:py-24">
        <div className="container text-center lg:text-left">
          <div className="grid lg:grid-cols-2 mb-8 lg:mb-16">
            <div className="col-span-1 justify-center">
              <h2 className="text-3xl lg:text-4xl text-primary-dark-blue pb-5">
                Why choose MeetDevs?
              </h2>
              <p className="text-lg lg:text-lg font-light leading-5">
                We believe in the power of connection. We're more than just a
                job-matching platform; we're the bridge that connects talented
                developers with forward-thinking employers, revolutionizing the
                tech talent landscape.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-9 lg:gap-6 lg:grid-cols-4">
            {motivationItems.map((item) => {
              return (
                <div key={item.title} className="justify-center">
                    {/* Increase size of the icons */}
                  <div className="flex justify-center lg:justify-start ">
                    <div className="rounded bg-green-500 p-2 transform transition-all duration-300 ease-in-out hover:scale-150">
                      <item.iconPath className="text-6xl"/>
                      </div>
                  </div>

                  <h2 className="text-lg text-primary-dark-blue py-4 lg:pt-9 lg:pb-6 lg:text-xl lg:font-bold">
                    {item.title}
                  </h2>
                  <p className="text-lg lg:text-lg font-light leading-5">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
