const { Client } = require('discord.js');
const { Soul, Blueprints } = require('socialagi');
const { GatewayIntentBits, MessageType } = require('discord-api-types/v10');
const {DISCORD_TOKEN_SAMANTHA, DISCORD_DEPLOYMENT_CHANNEL} = require('./config');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});


const soul = new Soul(Blueprints.SAMANTHA);

soul.on('thinking', () => {
  const channel = client.channels.cache.get(DISCORD_DEPLOYMENT_CHANNEL);
  channel.sendTyping();
});

soul.on('says', message => {
  console.warn('SEND MESSAGE for', soul.blueprint.name, message);
  const channel = client.channels.cache.get(DISCORD_DEPLOYMENT_CHANNEL);
  channel.send(message);
});

client.once('ready', async () => {
  console.log('Ready ...');
});

client.on('messageCreate', async message => {
  if (message.author.bot) return;
  if (message.mentions.users.size > 0) return;
  
  const msgInTargetChannel = message.channelId === DISCORD_DEPLOYMENT_CHANNEL;

  if (msgInTargetChannel && MessageType.Default === message.type ) {
    soul.tell(`[${message.author.username}] :: ${message.content}`);
  }
});

client.login(DISCORD_TOKEN_SAMANTHA);