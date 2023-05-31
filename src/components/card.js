import React from "react";

const CardLayout = () => {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <h2 className=" ml-[0] lg:ml-[-14px]  px-2 bg-[#EC1B26] text-white  text-center rounded-[5px] mb-4 lg:w-fit">
        <a classname="text-[13px] font-bold p-2 uppercase ">
          Lands &amp; Homes Exclusive
          <i className="fa-solid fa-arrow-right-long ml-1 "></i>
        </a>
      </h2>
      <div className="flex overflow-x-scroll md:flex-wrap -mx-1 lg:-mx-4 gap-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div className="my-1 px-1 w-[80vw]  lg:max-w-[21.8vw] lg:px-4 ">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://s3.ap-south-1.amazonaws.com/lands-and-homes/property_gallery/1680240458pexels-curtis-adams-3555615.jpg"
                />
              </a>
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a
                    className="no-underline hover:underline text-black"
                    href="#"
                  >
                    Article Title
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">11/1/19</p>
              </header>
              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    className="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p className="ml-2 text-sm">Author Name</p>
                </a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span className="hidden">Like</span>
                  <i className="fa fa-heart" />
                </a>
              </footer>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardLayout;
