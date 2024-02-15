import React from 'react';
import { Footer, FooterCopyright } from 'flowbite-react';

const FlowbiteFooter = () => {
  return (
    <Footer container className="bg-gray-800 text-white mt-8 p-3">
      <div className="w-full text-center">
        <div className="sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="/" by="Mark Mwangi™" year={2024} />
          <p className="text-sm text-gray-500 mt-2 hidden sm:block">All Rights Reserved Inc.</p>
        </div>
      </div>
    </Footer>
  );
};

export default FlowbiteFooter;