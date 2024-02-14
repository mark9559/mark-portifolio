import React from 'react';
import { Footer, FooterCopyright, FooterIcon } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const FlowbiteFooter = () => {
  return (
    <Footer container className="bg-gray-800 text-white mt-8 py-4">
      <div className="w-full">
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="/" by="Mark Mwangi™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FlowbiteFooter;
