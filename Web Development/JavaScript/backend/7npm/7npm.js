console.log("npm: Node Package Manager");

// npm is a package manager for Node.js

// npm init -> to initialise a node package.
// |
// +-->    
//     package.json
//     node_modules
//     |
//     +-->all intalled modules e.g. slugify, nodemon, express

// intalling package
//     $ npm install <package-name> 
//                 or
//     $ npm i <package-name>

// installing package only for development
//     $ npm install <package-name> --dev-save

// installing package globally
//     $ npm install <package-name> --global

// uninstalling package
//     $ npm uninstall <package-name>

// to see version of package
//     $ npm view <package-name> version

// ****
// version: 3.5.6
// version: major.minor.patch

// "dependencies": {
//     "slugify": "^1.3.5",  -> ^ -> exact version
//     "nodemon": "~1.4.5",  -> ~ -> latest patch
//     "express": ">3.2.5"   -> > -> greter than
// };
