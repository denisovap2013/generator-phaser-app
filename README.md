# A generator for scaffolding a basic Phaser application

### Builds a basic structure of the phaser application
##### The generator forms the following structure of the project.

* `index.html`  
* `gruntfile.js`  
* `package.json`  
* `bower.json`  
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
**\!\!\!** Though _bower.json_ is presented, the generator **doesn't** call for `bower install`. **\!\!\!**  
File **_bower.json_** has only the Phaser module in its dependencies. One can install it by simply calling `bower install` and then `grunt bower` to get the Phaser main script (*phaser.js*) into **scripts** folder of your project. However, it's recommended to use `bower install phaser` instead to get the latest version of the Phaser (see [instructions](https://github.com/photonstorm/phaser-ce/tree/v2.9.1)).  
  
The **_phaser.js_** full build is included by default into the **scripts** folder, so install phaser packages only if you want to manage Phaser builds.  

### __Gruntfile.js__ has several built-in tasks to maintain your project ( [Grunt](https://gruntjs.com/getting-started) module is required).
##### You can run following commands from the root directory of your project:
##### `grunt default` or just `grunt`
This task will compile all scripts in the "__src__" folder and its subfolders (The entry for the __*babelify*__ module is the __*app.js*__), then the lightweight server and the __*watch*__ module will be launched (this allows to automatically compile and update all your scripts onec they are changed).
**DO NOT** close the command prompt if you want the lightweight server and the __*watch*__ continue working.
From your browser you can go to `localhost:9001` or `127.0.0.1:9001` to test your project.

##### `grunt compile`
Translate javascript files from the ECMAScript6 to ECMAScript5 standard (not all browsers support new JavaScript standards)
##### `grunt bower`
Copies all plain dependencies to the "__scripts__" folder (if no dependencies are installed, the __bower__ module will throw a fatal error - it is the standard behaviour of the __bower__ module).

##### `grunt build`
Creates the final version of the project with minified javascript files and place it to the __build__ folder. (During this process all previous files presented in the __build__ folder will be deleted)