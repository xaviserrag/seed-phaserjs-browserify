#Phaser starting project boilerplate

This boilerplate allows you to create a phaser game were is possible to load scripts on demand.

In the example of the project you can see that the settings is in a separated .js. This file is loaded
when you click on the phaser logo (simulating a settings button).

## Install the boilerplate

First of all clone the project on your machine.

```javascript
git clone https://github.com/xaviserrag/seed-phaserjs-browserify.git
```

Once you have the project cloned, just run npm install on the project folder.

```javascript
cd seed-phaserjs-browserify
npm install
```

Now you have the project prepared! It's time to test it :)

```javascript
npm run build
```

Go to `localhost:8282` and press the logo! If you open the developer tools on the networking tab, you'll see how the
settings.js is downloaded when you click the logo. This is really powerful using the `Phaser.Loader` because you can load
images just after loading the script, having the code really modularized and reducing a lot the downloading time of the game
loading on demand things that are not used on the start of the game.


##How to load Modules on demand
First of all, you need to create a module like settings.js, just extend some Phaser component, like a sprite, or group.
Then load the images that the elements needs on that script with `Phaser.Loader` (you can see how i do it on the example).

The next step is to prepare the mapping.json to separate the files correctly.

Example:
```javascript
   {
     "ab.js": ["./a.js, ./b.js"],
     "settings.js": ["./settings.js"]
   }
```

The first statement `ab.js` or `settings.js` are the output files and the others are the input files. Every file on the output
will be prepared to be downloaded on demand. The first one will be the one loaded on the `<script>´ tag.

```javascript
<script src="js/ab.js"></script>
```

Then if you want to load the settings.js. (In the example is loaded on the play.js). Simply use the loadjs function:

```javascript
            loadjs(['./src/game/extra/settings'], function(settings) {
                self.settings = new settings(self.game);
            });
```

The url that you  pass to the loadjs is the original  url, not the build url  (this is how the plugin works internally).


