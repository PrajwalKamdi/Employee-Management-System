import React from "react";

const Footer = () => {
  return (
    // <footer className='bg-green-400 h-[250px] flex items-center justify-center'>
    //   <div className='flex flex-col text-center'>
    //     <h3>2025 All Rights Reserved</h3>
    //     <h5>Made with love</h5>
    //   </div>
    // </footer>
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-semibold">© 2025 All Rights Reserved</h3>
        <p className="text-sm mt-2">Made with ❤️ by Prajwal</p>

        {/* <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
