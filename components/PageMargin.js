import React from 'react';

const PageMargin = ({ children }) => {
  return (
    <div className="px-5 w-screen flex justify-center">
      <div className="py-11 w-full max-w-lg flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default PageMargin;