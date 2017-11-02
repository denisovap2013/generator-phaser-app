# A generator for scaffolding a basic Phaser application

### The generator forms the following structure of the project.

* `index.html`  
* `gruntfile.js`  
* `package.json`  
* `assets`  
  * `images`  
    * `...`    
  * `...`  
* `src`  
  * `app.js`  
  * `states`  
    * `Boot.js`  
    * `Preload.js`  
    * `Game.js`  
* `scripts`  
  * `phaser.js`  
  * `app.js`  

##### After installing the module use `yo phaser-app` inside of your project folder ([Yeoman](http://yeoman.io/learning/index.html) is required).
During the scaffolding process, the generator will automatically install all node dependencies.  
The **_phaser.js_** full build is included by default into the **scripts** folder (_current version is 2.9.1_).  
However, it's recommended to visit the official [Phaser.io](http://phaser.io/) site to get the latest version (also you can find it on GitHub [photonstorm/phaser-ce](https://github.com/photonstorm/phaser-ce/tree/v2.9.1)).  

### __Gruntfile.js__ has several built-in tasks to maintain your project ( [Grunt](https://gruntjs.com/getting-started) module is required).
##### You can run following commands from the root directory of your project:
##### `grunt default` or just `grunt`
This task will compile all scripts in the "__src__" folder and its subfolders (The entry for the __*babelify*__ module is the __*app.js*__), then the lightweight server and the __*watch*__ module will be launched (this allows to automatically compile and update all your scripts onec they are changed).
**DO NOT** close the command prompt if you want the lightweight server and the __*watch*__ continue working.
From your browser you can go to `localhost:9001` or `127.0.0.1:9001` to test your project.

##### `grunt compile`
Translate javascript files from the ECMAScript6 to ECMAScript5 standard (not all browsers support new JavaScript standards)

##### `grunt build`
Creates the final version of the project with minified javascript files and place it to the __build__ folder. (During this process all previous files presented in the __build__ folder will be deleted)