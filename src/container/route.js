// route.js
import { useEffect } from 'react';

// Function to recursively import files and folders from the page directory
const importAll = (r) => {
  const files = r.keys().map((key) => ({
    path: key.substr(1).replace(/\/index\.js$/, '').replace(/\.js$/, '').toLowerCase(),
    component: r(key).default
  }));

  const folders = r.keys().filter((key) => key.indexOf('/') !== -1 && key.endsWith('/')).map((folder) => {
    const folderName = folder.substr(1).replace(/\/$/, '').toLowerCase();
    const folderFiles = importAll(require.context(`../pages/${folderName}`, true, /\.js$/));
    return folderFiles.map((file) => ({
      path: `${folderName}/${file.path}`,
      component: file.component
    }));
  }).flat();

  return [...files, ...folders];
};

// Dynamically import all JavaScript files and folders in the specified directory and its subdirectories
const routes = importAll(require.context('../pages', true, /\.js$/));

export { routes };
