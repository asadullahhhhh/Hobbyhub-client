import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../assets/Contexts/Context';
import Banner from '../../Components/BannerSlider/Banner';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Homepage = () => {
  const { darkLight } = use(AuthContext);

  const { bannerData } = useLoaderData();
  console.log(bannerData);

  // React Simple Typewriter
  const [text] = useTypewriter({
    words : ['Drawing & Painting ?',
     'Photography ?',
      'Video Gaming ?',
      'Fishing ?',
      'Running ?',
      'Cooking ?',
      'Reading ?',
      'Writing ?',
      ],
    loop : 0
  })

  return (
    <section
      className={`mt-[0.5px] py-5 ${darkLight ? "dark" : ""} dark:bg-[#333]`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Banner Div */}
        <div>
          <Banner bannerData={bannerData}></Banner>
        </div>

        {/* Title */}
        <div className="text-center mt-10">
          <div>
            <h2 className="text-3xl font-semibold">We Supports your hobby</h2>
            <h2 className="text-lg text-center font-semibold">
              Whats your hobby{" "}
              <span className="font-black text-green-400">{text}</span>
              <Cursor></Cursor>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;