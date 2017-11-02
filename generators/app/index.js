var Generator = require("yeoman-generator");

module.exports = class extends Generator {
	writing() {
		this.fs.copy(
			this.templatePath(),
			this.destinationPath()
		);
	}

	install () {
		this.installDependencies({
			npm: true,
			bower: false,
			yarn: false
		});
	}

	end () {
		this.log("\n\n\x1b[33m%s\x1b[0m","You have a full  Phaser build in your \"scripts\" folder.");
		this.log("\n\x1b[33m%s\x1b[0m\n\n","However, you can download the phaser project source files via \"bower install\"");
	}
};