import React from "react";
import Image from "next/image";

import delivery from "../../../../public/assets/fullBanner/icons8-in-transit-100.png";
import Return from "../../../../public/assets/fullBanner/icons8-reset-100.png";
import Security from "../../../../public/assets/fullBanner/icons8-security-shield-green-100.png";
import Trophy from "../../../../public/assets/fullBanner/icons8-trophy-64.png";
const Services = () => {
  return (
    <>
      <div className="item">
        <div className="flex space-x-5 items-center">
          <div>
            <Image src={delivery} width="50" height="50" />
          </div>
          <div>
            <p className="tetx-black font-bold mb-1 tracking-wide text-base">
              Free Shipping
            </p>
            <p className="  text-sm text-gray-500">When ordering over $100</p>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="flex space-x-5 items-center">
          <div>
            <Image src={Return} width="45" height="45" />
          </div>
          <div>
            <p className="tetx-black font-bold mb-1 tracking-wide text-base">
              Free Return
            </p>
            <p className="  text-sm text-gray-500">Get Return within 30 days</p>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="flex space-x-5 items-center">
          <div>
            <Image src={Security} width="45" height="45" />
          </div>
          <div>
            <p className="tetx-black font-bold mb-1 tracking-wide text-base">
              Secure Payment
            </p>
            <p className="  text-sm text-gray-500">
              100% Secure Online Payment
            </p>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="flex space-x-5 items-center">
          <div>
            <Image src={Trophy} width="45" height="45" />
          </div>
          <div>
            <p className="tetx-black font-bold mb-1 tracking-wide text-base">
              Best Quality
            </p>
            <p className="  text-sm text-gray-500">
              Original Product Guarenteed
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
