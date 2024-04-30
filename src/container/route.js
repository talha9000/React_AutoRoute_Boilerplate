// route.js
import { useEffect } from 'react';

// Function to dynamically import files from the page folder
const importAll = (r) => {
  return r.keys().map((key) => {
    const component = r(key).default; // Assuming each file exports a default component
    const path = key.substr(1).replace(/\/index\.js$/, '').replace(/\.js$/, ''); // Remove leading './', '/index.js', and '.js' from path
    return { path, component };
  });
};

// Dynamically import all JavaScript files in the specified directory and its subdirectories
const pageFiles = importAll(require.context('../pages', true, /\.js$/));

// Export the route array
export const routes = pageFiles.map((file) => ({
  path: file.path,
  component: file.component,
}));

 
