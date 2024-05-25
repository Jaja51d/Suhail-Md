const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "447893986862";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_23_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA0NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDUyLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNixcbiAgICAgICAgOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDY0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MyxcbiAgICAgICAgNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgODUsXG4gICAgICAgIDk0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc2LFxuICAgICAgICA1MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMixcbiAgICAgICAgNzksXG4gICAgICAgIDQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzLFxuICAgICAgICA0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDMwLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2OSxcbiAgICAgICAgODYsXG4gICAgICAgIDM0LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2LFxuICAgICAgICA0LFxuICAgICAgICA0MyxcbiAgICAgICAgNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY3LFxuICAgICAgICA5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2LFxuICAgICAgICA0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNixcbiAgICAgICAgMTE0LFxuICAgICAgICA1NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImw1d2s1TW1pMU0rTmFaR3czVXk3b3hQNVB3azEzMlhUYmtIY3h0Si9EVk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDQ3ODkzOTg2ODYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDMDgzNjJCNjhDMzY4MTY2NzRGREEzNDRDRUMzNjAyM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY2MzI2MzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDc4OTM5ODY4NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNCRjdGQzU2OEUyQTg3MzAzOUUyOEE3NkIyMkFBNjJBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjYzMjYzNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvampNNTM5U1I1NnhNdXdBR3V0bEVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ0Yzk0NzFhLWQwOWEtNDBkNC04ZjRjLWUwNzRhMTAwMjE0Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MSxcbiAgICAgIDExMixcbiAgICAgIDk2LFxuICAgICAgMTU2LFxuICAgICAgMTQxLFxuICAgICAgMjQ1LFxuICAgICAgMTc5LFxuICAgICAgMjUsXG4gICAgICAxNjIsXG4gICAgICAyNDAsXG4gICAgICAzOSxcbiAgICAgIDE0NixcbiAgICAgIDE0MixcbiAgICAgIDE3NixcbiAgICAgIDYxLFxuICAgICAgOTYsXG4gICAgICA3MCxcbiAgICAgIDIzNyxcbiAgICAgIDEwNixcbiAgICAgIDE0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDYsXG4gICAgICAxNDEsXG4gICAgICAxNzcsXG4gICAgICA1MSxcbiAgICAgIDEwNSxcbiAgICAgIDEyMyxcbiAgICAgIDE3MSxcbiAgICAgIDE1NSxcbiAgICAgIDEzMyxcbiAgICAgIDE0NCxcbiAgICAgIDIyOCxcbiAgICAgIDE0OCxcbiAgICAgIDg1LFxuICAgICAgMTQ2LFxuICAgICAgMjMxLFxuICAgICAgMTM5LFxuICAgICAgMTAzLFxuICAgICAgMTgxLFxuICAgICAgMTc2LFxuICAgICAgMjM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNSRVZMRVdGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0NDc4OTM5ODY4NjI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlp6cnRcIixcbiAgICBcImxpZFwiOiBcIjIzNjY5NjE2NzgwNTAyNjo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tYUnI3QUJFTFQ0eHJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTjRpVjhuUGEzQ3NpN1VJZlc0S3lBQStRYXZTZ3pFL3NxN3RaM3RKeFlqbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXL0FLeUhtTjJiRFUwWGpILzVMVnM2R3JVeFcvdGlzTkRIQVU5Y012b25MNTZOcUY2M2NCQllrZU1JL0Q1Q3JBNDJMS2JDNk1yb3kwMWxJQ3RmOWhCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1eFB1QTh3d0lVVGN2eE9HY3FJcEgzam80VjBvZ3pnU3NQREZGaGZUNmJoanc5OG45UUNLeHNNLytNUFJJSnNhY1RDcndEQVUzN1MrN2lKTmFBUW5qQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDc4OTM5ODY4NjI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NjMyNjMxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGdQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMZ1AuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZL3pDUmY2VFQ4WnFSUnBvK1FYRnB6RzlHM0JpREZDZ1Awc25ZOExZeXF3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM2OTg3OTIwNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE2NjMyNjMzNTQwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
