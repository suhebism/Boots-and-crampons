import React from "react";
import Image from "next/image";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaThreads } from "react-icons/fa6";

const index = () => {
  return (
    <main
      className="relative w-full -z-10 font-gilroy text-white bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/bg.png)" }}
    >
      <div className="bg-white h-full w-full absolute top-0 left-0 bg-opacity-[60%] -z-10"></div>

      <div className="h-[800px] mb-[100px] w-full flex flex-col items-center gap-5 justify-end">
        <h1 className="uppercase text-2xl md:text-4xl font-semibold text-[#002C4F]">
          follow us on:
        </h1>
        <div className="flex gap-8 text-[18px] md:text-[30px] text-[#002C4F] ">
          <FaFacebookF />
          <RiInstagramFill />
          <FaThreads />
          <FaYoutube />
        </div>
      </div>
      {/* Clip Path SVG */}
      <div className="py-[100px] relative h-full w-full bg-cover bg-center px-8 md:px-20 -z-10"
        style={{
          backgroundImage: "url(/assets/bg.png)",
          clipPath: "url(#clip-shape)",
        }}>
        <div className="absolute top-0 left-0 bg-[#002F4C] bg-opacity-80 h-full w-full -z-10"></div>

        <div className="flex flex-col items-center gap-10">
          <div className="w-[127px] h-[105px]">
            <Image
              src="/assets/logo.png"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>

          <h1 className="text-medium">
            Transforming Lives. One Climb at a Time.
          </h1>

          {/* Grid Container */}

          <div className="grid-container gap-y-10 md:gap-x-[130px]">
            <p className="text-center col-span-2 md:col-span-1">
              B&C specializes in providing premium-quality & safe mountaineering
              experiences around the world.
            </p>

            {/* IMPORTANT LINKS */}
            <div className="w-full flex flex-col items-center gap-y-5 col-span-2 md:col-span-1 md:row-span-3 md:h-full">
              <h2>IMPORTANT LINKS</h2>

              <div className="w-full flex justify-between text-center md:flex-col md:gap-5">
                <ul className="space-y-5">
                  <li>
                    <a>Merchandise</a>
                  </li>
                  <li>
                    <a>Adventure Camps</a>
                  </li>
                  <li>
                    <a>Treks and expedition</a>
                  </li>
                </ul>

                <ul className="space-y-5">
                  <li>
                    <a>Summit Run</a>
                  </li>
                  <li>
                    <a>B & C Foundation</a>
                  </li>
                  <li>
                    <a>About Us</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* COME JOIN US */}

            <div className="flex flex-col items-center text-center gap-5 col-span-2 md:col-span-1 md:row-span-2">
              <h2>COME JOIN US</h2>
              <p>
                Sign up to Boots & Crampons newsletter for latest news and
                expeditions.
              </p>
              <input
                typeof="email"
                placeholder="Enter your Email-ID"
                className="px-2 py-1 w-[80%] rounded-md placeholder:text-black"
              />
            </div>

            {/* CONTACT US */}

            <div className="w-[80%] space-y-3 md:row-span-2 md:text-center">
              <h2>CONTACT US</h2>
              <p>hello@bootsandcrampons.com</p>
              <p>
                Mad River Ltd, 5 Stratfield Saye, 20-22 Wellington Road,
                Bournemouth,Dorset BH8 8JN.
              </p>
            </div>

            {/* Social Icons */}

            <div className="flex flex-wrap gap-5 text-[20px] md:text-[28px]">
              <p className="hidden md:block">Follow us:</p>
              <FaFacebookF />
              <RiInstagramFill />
              <FaThreads />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>

      <footer className="text-black p-6 md:p-4 bg-white w-full text-center">
        © Copyright - Boots & Crampons 2023
      </footer>
    </main>
  );
};

export default index;
