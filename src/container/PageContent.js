// PageContent.js
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './route';

const PageContent = () => {
  return (
    <Suspense fallback={<div className='text-center text-xl'> Loading subpage route</div>}>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default PageContent;
