# SamanthaAGI bot

This discord repo provides everything you need to create your own SamanthaAGI discord bot - the same as from http://meetsamantha.ai

Samantha uses the [SocialAGI](https://github.com/opensouls/SocialAGI) library to create her digital soul through just a few commands.

The [SocialAGI](https://github.com/opensouls/SocialAGI) library gives Samantha a basic introspective thought process on every message to make her feel more alive and agentic in dialog.

## Discord integration tutorial

First export your OpenAI api key:

```
export OPENAI_API_KEY=sk_...
```

Second, create a new discord application at https://discord.com/developers/applications. Make sure to create a fun name, username, and profile image.

You'll need a few environment variables to run the bot

```
export DISCORD_TOKEN_SAMANTHA=...
```

You can find your discord application's API token here:

<img width="1386" alt="Screen Shot 2023-05-29 at 10 28 52 PM" src="https://github.com/opensouls/samantha-discordbot/assets/8204988/43a517af-4e0d-429c-8ae9-029fee4c11d1">

Next, you'll need to decide which channel you're going to deploy the bot to in your server

```
export DISCORD_DEPLOYMENT_CHANNEL=...
```

You can find the `channelID` by visiting your target discord server/channel inside the web browser

<img width="564" alt="image" src="https://github.com/opensouls/samantha-discordbot/assets/8204988/ea2ccef6-a9d7-4de6-abda-9606c5e8e132">

Now, you'll need to add the discord bot to your server using the discord URL generator with the appropriate permissions

<img width="955" alt="Screen Shot 2023-05-29 at 10 50 22 PM" src="https://github.com/opensouls/samantha-discordbot/assets/8204988/60acb5ca-d7fb-49a0-9e5e-82092310fb8c">

At the bottom of this page you'll get a URL

<img width="1036" alt="Screen Shot 2023-05-29 at 10 30 02 PM" src="https://github.com/opensouls/samantha-discordbot/assets/8204988/443ebab1-8f64-4a01-ab23-f93fc395c956">

Copy this url and then add your new application's bot to your target server

<img width="405" alt="Screen Shot 2023-05-29 at 10 50 33 PM" src="https://github.com/opensouls/samantha-discordbot/assets/8204988/0e677da2-f81f-462e-a855-fc54ac2eb450">

## Running the discord bot server locally

Now that your discord bot is in your server, you'll need to install the bot's dependencies

```
npm install
```

and run the bot

```
node bot.js
```

Now, your bot should be in your server running and you should be able to talk to Samantha.

<img width="723" alt="image" src="https://github.com/opensouls/samantha-discordbot/assets/8204988/d3d606b7-c30a-4260-adb4-e6cc78063508">

### Running the discord bot server on heroku

This repo is intended to be deployed to heroku easily.

You'll need to do the following steps:

```
heroku login
```

Then create a heroku git repo

```
heroku create <desired-git-name>
```

Now, deploy the bot to heroku

```
git push heroku main
```

Now that the bot is deployed, you'll have to configure Heroku. First, go to settings and add the appropriate env

<img width="817" alt="Screen Shot 2023-05-29 at 10 40 26 PM" src="https://github.com/opensouls/samantha-discordbot/assets/8204988/624e1fdb-af64-4ef9-bf3b-e49ecebd667a">

Lastly, adjust the resources to run the bot. Your resources should look like this:

<img width="1241" alt="Screen Shot 2023-05-29 at 10 40 13 PM" src="https://github.com/opensouls/samantha-discordbot/assets/8204988/e3f393bc-88cf-4815-bff8-306e4ee0d4f2">

Make sure to kill your local discord bot server.

That's it! Now you should be able to talk to Samantha running from your Heroku instance

Now, your bot should be in your server running and you should be able to talk to Samantha.

<img width="723" alt="image" src="https://github.com/opensouls/samantha-discordbot/assets/8204988/d3d606b7-c30a-4260-adb4-e6cc78063508">
