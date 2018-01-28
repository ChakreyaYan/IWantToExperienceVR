# IWantToExperienceVR
This is the IWantToExperience project. This is being made using React VR. There needs to be some styling done.

To properly use this project you need to do the following:

* Install Node.js
* Install Wepack


Action Commands:

Make these statements within the command terminal. Navigate to your local repository and then make these prompts.
* $ npm install
* $ npm init
* $ npm install -S webpack
* $ npm install -g webpack
* $ npm install webpack-dev-server
* $ webpack
* $ webpack --watch // this is the prompt so that the webpack wathes the files. 

There needs to be a webpack.config.js file within the local directory. Make one. This tells webpack how to act. You can get the code for this file (as a template) from: https://gist.github.com/learncodeacademy/25092d8f1daf5e4a6fd3
There are dependencies within the JSON file that need to be copied and pasted. Copy and paste the package-json. You will get the same file if you clone what I have already done. This is important. 

The webpack.config.js file needs to also be changed so that the entry field is equal to your main .js file (with regard to React, the file that is processing the other React files). In this scenario it is client.js. Webpack preprocesses it and renders it as client.min.js. As long as your React ReactDOM.render is included in the file that the webpack.config.js as the target file, then it will be fine.
