# <a href="https://imgbb.com/"><img src="https://i.ibb.co/QY7Ggv0/costume3-1-1.png" alt="costume3-1-1" border="0" /></a>
>[demo](#) | [download](https://github.com/trisn0w/enscript/releases/latest)

## Welcome to EnScript!
This is a Easy-to-use Node.js superset (hence the name, "EnScript") that I made for Node beginners, and people that want a different type of Node.js. You can use normal Node with it aswell.

## `.en` VS `.en.native`
**Note**: This is for the coming soon v1.2 update. If you want this feature ASAP, then download the [PTB](runCode.js)

Comparison between the two:
| File Extension | Pros | Cons |
|----------------|----------|------|
|`.en` | - Has better backwards compatibility</br>- More like a seperate language than a superset | May be confusing at first |
|`.en.native` |- More like a superset </br>- Has better JavaScript support</br>- Most syntax is removed so you can use plain JavaScript along with EnScript | May not have a lot of backwards compatibility |

## Installation/Usage
1. Download the runCode.js
2. Make a `script.en` file that looks something like this:
   ```js
   log 'Hello World!';
   ```
 <br>  
3. Go to the path of both files and run this code in the terminal

```sh
node runCode.js [name-Of-En-File]
```

## Syntax / Examples
Here is an example of console logging (the famous "Hello World!" one)
```js
log 'Hello World!';
```

as you can see, instead of `console.log()`, it got reduced to just `log `. This makes things simple, and easy to use.

Also, notice how we added the `;` symbol into there too. Keep that in mind while I keep showing examples.

Here is another example, with functions.
```js
function test() {
log 'Wowie!';
};

test();      
```

Now, see how there is a lot of the character `;`? It helps the interpreter know it's the end of a line, AND helps in another way too. (I may go into depth soon)

Let's do one more example. A Discord bot!

```js
!! this code has been tested by us, and should work!
var Discord = import discord.js;
var client = new Discord.Client();

client.on('ready', () => {;
  log `Ready as ${client.user.username}`;
});

client.on('message', (message) => {;
  if (message.content == "ping") {;
    message.reply('Pong!');
  };
});

client.login('YOUR_TOKEN_HERE');
```
This code seems a little different than Node.js, but it really isn't that different.

## More of the README is being worked on and is coming soon!
