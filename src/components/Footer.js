import React from "react";

const Footer = () => {
  return (
    <footer className="  bg-[#252C41]">
      <div className="container mx-auto py-5 px-[13%] sm:px-6 lg:px-8 text-white">
        {/* Small devices (4 columns) */}
        <div className="grid grid-cols-1  lg:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="mb-4 text-[#858b9f] space-y-5">
            <img
              src="https://landsandhomes.com/front/images/footer-logo.svg"
              className="text-lg font-bold mb-2 w-[66%] sm:w-[75%]"
            />
            <p>
              <i className="fa-solid fa-location-dot"></i> Bangalore, India
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> +91 8888854888
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> info@landsandhomes.com
            </p>
          </div>

          {/* Column 2 */}
          <div className="mb-4 text-[#858b9f]  col-span-1 lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="mb-5">
                <h4 className="text-lg font-bold mb-3 text-white">
                  Quick Links
                </h4>
                <ul className="text-[#858b9f]  space-y-5">
                  <li>
                    <a href="https://landsandhomes.com/agents">Agents</a>
                  </li>
                  <li>
                    <a href="https://landsandhomes.com/blogs">Blogs</a>
                  </li>
                  <li>
                    <a href="https://landsandhomes.com/about-us">About Us</a>
                  </li>
                  <li>
                    <a href="https://landsandhomes.com/contact">Contact</a>
                  </li>
                  <li>
                    <a href="https://landsandhomes.com/product-and-pricing">
                      Product &amp; Pricing
                    </a>
                  </li>
                  <li>
                    <a href="https://landsandhomes.com/terms-and-conditions">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="https://landsandhomes.com/privacy-policy">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://landsandhomes.com/refund-and-cancellation-policy">
                      Refund &amp; Cancellation Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-3 text-white">
                  More Information
                </h4>
                <ul className="text-[#858b9f] space-y-5">
                  <li>
                    <a href="https://landsandhomes.com/contact">
                      All Properties
                    </a>
                  </li>
                  <li>
                    <a href="https://landsandhomes.com/contact">
                      Houses for sale
                    </a>
                  </li>
                  <li>
                    <a href="https://landsandhomes.com/contact">
                      Houses for rent
                    </a>
                  </li>
                  <li>
                    <a href="https://landsandhomes.com/contact">
                      Houses for lease
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3*/}
          <div className="mb-4 col-span-1  sm:col-span-2 lg:col-span-1 space-y-5">
            <h4 className="text-lg font-bold mb-2">Download Apps</h4>

            <div className="flex justify-start p-1 mt-1 border-2 border-[#353d56] cursor-pointer">
              <div>
                <i className="fa-brands fa-google-play text-[#f02c2d] text-[1.9rem] p-2"></i>
              </div>
              <div className="text">
                <h6 className="text-white text-[1rem]">Google Play</h6>
                <p className="p-0 m-0 text-[#858b9f]">Get it now</p>
              </div>
            </div>
            <div className="flex justify-start p-1 mt-1 border-2 border-[#353d56] cursor-pointer">
              <div>
                <i className="fa-brands fa-apple text-[#f02c2d] text-[1.9rem] p-2"></i>
              </div>
              <div className="text">
                <h6 className="text-white text-[1rem]">Google Play</h6>
                <p className="p-0 m-0 text-[#858b9f]">Get it now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1B2132] p-3">
        <h2 className="text-center text-white text-[1rem]">
          © 2023 Lands & Homes. All rights reserved by Lands & Homes.
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
