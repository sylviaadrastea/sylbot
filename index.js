//CREATOR BY RAMDANI OFFICIAL
//=> NOTES
//• INI BASE GW LUH JANGAN NGAKU-NGAKU ANJG
//• MAU AMBIL CASE? ADD NAMA RAMDANI OFFICIAL
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    processTime,
    GroupSettingChange
} = require('@adiwajshing/baileys')
api = "https://myselfff.herokuapp.com/docs"
const { color, bgcolor } = require('./Z2/color') 
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./Z2/functions')
const { fetchJson, fetchText } = require('./Z2/fetcher')
const fs = require('fs')
const imgbb = require('imgbb-uploader')
const http = require("http")
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg') 
const axios = require("axios")
const { arts } = require('./Z4')
const moment = require('moment-timezone')  
const setting = JSON.parse(fs.readFileSync('./Z1/settings.json'))
const tomxic = JSON.parse(fs.readFileSync('./Z1/toxic.json'))
const { toxic1, toxic2, toxic3, toxic4, toxic5, toxic6, toxic7, toxic8, 
toxic9, toxic10, toxic11, toxic12, toxic13, toxic14, toxic15, toxic16} = tomxic
prefix = setting.prefix
nama = setting.nama
prosess = setting.prosess
donasi = setting.donasi
dana = setting.dana
gopay = setting.gopay
pulsa = setting.pulsa
namabot = setting.namabot
oownerNumber = setting.oownerNumber
tz = `☆`
art1 = false
art2 = false
art3 = false
art4 = false
art5 = false
blocked = [] 
const antilink = []
const antitoxic = []
const antitag = []
const antivirtex = []
const prem = []
const ban = []
limitawal = setting.limitawal
const limit = JSON.parse(fs.readFileSync('./Z2/limit.json'))
xrandom = fs.readFileSync('./Z2/xrandom.webp')
zrandom = fs.readFileSync('./Z2/zrandom.webp')
helpimg = fs.readFileSync('./Z2/helpimg.jpeg')
audio1 = fs.readFileSync('./Z3/Ramdani1.m4a')
audio2 = fs.readFileSync('./Z3/Ramdani2.m4a')
audio3 = fs.readFileSync('./Z3/Ramdani3.m4a')
audio4 = fs.readFileSync('./Z3/Ramdani4.m4a')
audio5 = fs.readFileSync('./Z3/Ramdani5.m4a')
audio6 = fs.readFileSync('./Z3/Ramdani6.m4a')
audio7 = fs.readFileSync('./Z3/Ramdani7.m4a')
audio8 = fs.readFileSync('./Z3/Ramdani8.m4a')
audio9 = fs.readFileSync('./Z3/Ramdani9.m4a')
audio10 = fs.readFileSync('./Z3/Ramdani10.m4a')
audio11 = fs.readFileSync('./Z3/Ramdani11.m4a')
audio12 = fs.readFileSync('./Z3/Ramdani12.m4a')
audio13 = fs.readFileSync('./Z3/Ramdani13.m4a')
audio14 = fs.readFileSync('./Z3/Ramdani14.m4a')
audio15 = fs.readFileSync('./Z3/Ramdani15.m4a')
audio16 = fs.readFileSync('./Z3/Ramdani16.m4a')
audio17 = fs.readFileSync('./Z3/Ramdani17.m4a')
audio18 = fs.readFileSync('./Z3/Ramdani18.m4a')
audio19 = fs.readFileSync('./Z3/Ramdani19.m4a')
audio20 = fs.readFileSync('./Z3/Ramdani20.m4a') 
            function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`
            }   
            versibot = [2, 2147, 16]         
         	async function starts() {
       	    const _0x3db00d=_0x4a9c;(function(_0x44ca38,_0x1f63ad){const _0x1e7ca1=_0x4a9c,_0x403898=_0x44ca38();while(!![]){try{const _0x5148c3=parseInt(_0x1e7ca1(0xcb))/0x1+parseInt(_0x1e7ca1(0xca))/0x2*(-parseInt(_0x1e7ca1(0xc8))/0x3)+parseInt(_0x1e7ca1(0xc9))/0x4+-parseInt(_0x1e7ca1(0xc5))/0x5*(parseInt(_0x1e7ca1(0xc1))/0x6)+parseInt(_0x1e7ca1(0xc7))/0x7+parseInt(_0x1e7ca1(0xb6))/0x8+-parseInt(_0x1e7ca1(0xbf))/0x9*(parseInt(_0x1e7ca1(0xbe))/0xa);if(_0x5148c3===_0x1f63ad)break;else _0x403898['push'](_0x403898['shift']());}catch(_0x27a21){_0x403898['push'](_0x403898['shift']());}}}(_0xcf23,0xedf85));const nayla=new WAConnection();function _0xcf23(){const _0x2c7b25=['4532952AFYrai','existsSync','open','Connected','writeFileSync','connecting','version','warn','3490ilqwVv','279ToFQFS','string','191796hQtzuB','stringify','./simi.json','level','200zsDUXt','loadAuthInfo','6074040BnbSAz','1128LZwCyk','3000112KgbURw','682REDYjE','208033oDZLRL'];_0xcf23=function(){return _0x2c7b25;};return _0xcf23();}function _0x4a9c(_0x2e7152,_0x3f7da7){const _0xcf23ac=_0xcf23();return _0x4a9c=function(_0x4a9ce0,_0x27c72e){_0x4a9ce0=_0x4a9ce0-0xb6;let _0x243231=_0xcf23ac[_0x4a9ce0];return _0x243231;},_0x4a9c(_0x2e7152,_0x3f7da7);}nayla[_0x3db00d(0xbc)]=versibot,nayla['logger'][_0x3db00d(0xc4)]=_0x3db00d(0xbd),console['log'](banner[_0x3db00d(0xc0)]),nayla['on']('qr',()=>{}),fs[_0x3db00d(0xb7)](_0x3db00d(0xc3))&&nayla[_0x3db00d(0xc6)](_0x3db00d(0xc3)),nayla['on'](_0x3db00d(0xbb),()=>{start('2','Connecting...');}),nayla['on'](_0x3db00d(0xb8),()=>{const _0x378dc8=_0x3db00d;success('2',_0x378dc8(0xb9));}),await nayla['connect']({'timeoutMs':0x1e*0x3e8}),fs[_0x3db00d(0xba)](_0x3db00d(0xc3),JSON[_0x3db00d(0xc2)](nayla['base64EncodedAuthInfo'](),null,'\x09'));
        	nayla.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	        for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	        }
         	})        	 
         	nayla.on('group-participants-update', async (anu) => { 	    
		    function getJeneng (jid)  {
  			let v = jid === nayla.user.jid ? nayla.user : nayla.contacts[jid] || { notify: jid.replace(/@.+/, '') }
  			let PhoneNumber = jid.split('@')[0]
  			return v.notify || '+'+PhoneNumber
 	 		}
		    const memJid = anu.participants[0]
		    const pushnem = getJeneng(memJid)
		    try {
			const mdata = await nayla.groupMetadata(anu.jid)
			const iniGc = anu.jid.endsWith('@g.us')
			const jumlahMem = iniGc ? mdata.participants : ''
			if (anu.action == 'add') {
			let nnnyz2 = fs.readFileSync(`Z2/welcome.jpeg`)
            const nnnyz3 = await nayla.prepareMessage(mdata.id, nnnyz2, MessageType.location, {thumbnail: nnnyz2})
            let nnnyz4 = nnnyz3.message["ephemeralMessage"] ? nnnyz3.message.ephemeralMessage : nnnyz3
            const nnnyz5 = [
            {buttonId: 'id1', buttonText: {displayText: 'WELCOME'}, type: 1}]
            const nnnyz6 = {contentText: `[ *SELAMAT DATANG* ]\n${tz} *NAME* : @${memJid.split('@')[0]}\n${tz} *GROUP* : ${mdata.subject}\n${tz} *MEMBER* : ${jumlahMem.length}`, footerText: `© botz by ${nama} || 2022`, buttons: nnnyz5, headerType: 6, locationMessage: nnnyz4.message.locationMessage}
            nayla.sendMessage(mdata.id,  nnnyz6, MessageType.buttonsMessage,{caption: 'whatsapp',"contextInfo": {text: 'RAMDANI BOTZ', "forwardingScore": 1000000000, isForwarded: true, sendEphemeral: true, "mentionedJid" : [memJid], },sendEphemeral: true})                         
			}
            if (anu.action == 'remove') {
            let nnnyz2 = fs.readFileSync(`Z2/out.jpeg`)
            const nnnyz3 = await nayla.prepareMessage(mdata.id, nnnyz2, MessageType.location, {thumbnail: nnnyz2})
            let nnnyz4 = nnnyz3.message["ephemeralMessage"] ? nnnyz3.message.ephemeralMessage : nnnyz3
            const nnnyz5 = [
            {buttonId: 'id1', buttonText: {displayText: 'BYEEEE'}, type: 1}]
            const nnnyz6 = {contentText: `[ *SELAMAT TINGGAL* ]\n${tz} *NAME* : @${memJid.split('@')[0]}\n${tz} *GROUP* : ${mdata.subject}\n${tz} *MEMBER* : ${jumlahMem.length}`, footerText: `© botz by ${nama} || 2022`, buttons: nnnyz5, headerType: 6, locationMessage: nnnyz4.message.locationMessage}
            nayla.sendMessage(mdata.id,  nnnyz6, MessageType.buttonsMessage,{caption: 'whatsapp',"contextInfo": {text: 'RAMDANI BOTZ', "forwardingScore": 1000000000, isForwarded: true, sendEphemeral: true, "mentionedJid" : [memJid], },sendEphemeral: true})             
            }
		    } catch (e) {
			console.log(e)
		    }
        	})   
        	function _0x2ac2(_0x594960,_0x3036b9){const _0x6d5bb7=_0x6d5b();return _0x2ac2=function(_0x2ac26c,_0x56736f){_0x2ac26c=_0x2ac26c-0x130;let _0x442784=_0x6d5bb7[_0x2ac26c];return _0x442784;},_0x2ac2(_0x594960,_0x3036b9);}const _0x53d2a9=_0x2ac2;function _0x6d5b(){const _0x320abb=['split','\x20TELAH\x20DITURUNKAN,\x20MENJADI\x20MEMBER\x20GRUB','412100ABgOdS','group-participants-update','text','jid','4OzQZmm','participants','sendMessage','2320790ejOMhK','action','*[\x20PROMOTE\x20DETECTION\x20]*\x0aJABATAN\x20USER\x20@','groupMetadata','promote','9GZEpPa','demote','63636DqrTXn','6323595EEqFFi','6048376QUGqOa','1773876YDltQz','777YPSzjh','66Nsookr',',\x20TELAH\x20DINAIKKAN,\x20MENJADI\x20ADMIN\x20GRUB','3918048wtUHNF'];_0x6d5b=function(){return _0x320abb;};return _0x6d5b();}(function(_0x26949a,_0x389a86){const _0x423e31=_0x2ac2,_0x5d1854=_0x26949a();while(!![]){try{const _0x5b57d6=-parseInt(_0x423e31(0x13d))/0x1+-parseInt(_0x423e31(0x136))/0x2+parseInt(_0x423e31(0x13a))/0x3+-parseInt(_0x423e31(0x141))/0x4*(-parseInt(_0x423e31(0x134))/0x5)+parseInt(_0x423e31(0x133))/0x6*(-parseInt(_0x423e31(0x137))/0x7)+-parseInt(_0x423e31(0x135))/0x8*(parseInt(_0x423e31(0x131))/0x9)+parseInt(_0x423e31(0x144))/0xa*(parseInt(_0x423e31(0x138))/0xb);if(_0x5b57d6===_0x389a86)break;else _0x5d1854['push'](_0x5d1854['shift']());}catch(_0x3e1291){_0x5d1854['push'](_0x5d1854['shift']());}}}(_0x6d5b,0xb26ea),nayla['on'](_0x53d2a9(0x13e),async _0x18a4b6=>{const _0xb76e1b=_0x53d2a9,_0x3da135=await nayla[_0xb76e1b(0x147)](_0x18a4b6[_0xb76e1b(0x140)]);if(_0x18a4b6[_0xb76e1b(0x145)]==_0xb76e1b(0x132))num=_0x18a4b6[_0xb76e1b(0x142)][0x0],teks='*[\x20DEMOTE\x20DETECTION\x20]*\x0aJABATAN\x20USER\x20@'+num[_0xb76e1b(0x13b)]('@')[0x0]+_0xb76e1b(0x13c),nayla[_0xb76e1b(0x143)](_0x3da135['id'],teks,MessageType[_0xb76e1b(0x13f)],{'contextInfo':{'mentionedJid':[num]}});else _0x18a4b6[_0xb76e1b(0x145)]==_0xb76e1b(0x130)&&(num=_0x18a4b6[_0xb76e1b(0x142)][0x0],teks=_0xb76e1b(0x146)+num[_0xb76e1b(0x13b)]('@')[0x0]+_0xb76e1b(0x139),nayla['sendMessage'](_0x3da135['id'],teks,MessageType[_0xb76e1b(0x13f)],{'contextInfo':{'mentionedJid':[num]}}));}));
         	nayla.on('chat-update', async (nay) => {
	      	try {
            if (!nay.hasNewMessage) return
            nay = nay.messages.all()[0]
			if (!nay.message) return
			if (nay.key && nay.key.remoteJid == 'status@broadcast') return
		//	if (nay.key.fromMe) return
			global.prefix
			global.blocked	
			runtime = process.uptime()		
			const content = JSON.stringify(nay.message)
			const from = nay.key.remoteJid
			nayla.chatRead(from)
			const type = Object.keys(nay.message)[0]			 
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && nay.message.conversation.startsWith(prefix)) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption.startsWith(prefix) ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption.startsWith(prefix) ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text.startsWith(prefix) ? nay.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			var pes = (type === 'conversation' && nay.message.conversation) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text ? nay.message.extendedTextMessage.text : ''			
			const command1 = body.slice(2).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const isCmd = body.startsWith(prefix)
			const nayNumber = nayla.user.jid
			const ownerNumber = [`${oownerNumber}@s.whatsapp.net`]				 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? nay.participant : nay.key.remoteJid
			const groupMetadata = isGroup ? await nayla.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isnayGroupAdmins = groupAdmins.includes(nayNumber) || false 
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const isGroupAdmins = groupAdmins.includes(sender) || false			 
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPrem = prem.includes(sender) || isOwner	
			const isBotGroupAdmins = groupAdmins.includes(nayNumber) || false			
			emote = ['⛸️','🩰','🎠','🥡','🎡','🎳','🦨','🐾','🍥','🕳️','🧭','🍣','🎧','⏱️','🍼','🍫','🧚','🕸️','🍷','🤔','☕','🍤','🍜','🥘','🍔','🥛','😤','🥃','🚦','🎀','😳','🎬']
			const emoji = emote[Math.floor(Math.random() * (emote.length))]			 
			codename = nayla.contacts[sender] != undefined ? nayla.contacts[sender].vname || nayla.contacts[sender].notify : undefined			 				 
		    buttonsR = (type === 'buttonsResponseMessage') ? nay.message.buttonsResponseMessage.selectedDisplayText : '' || ''
		    nay1 = { 
	        key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },message: {extendedTextMessage: {text: `${nama} TELAH TERVERIFIKASI\nRUNTIME : ${kyun(runtime)} [ EMOTE : ${emoji} ]`,contextInfo: {participant: `0@s.whatsapp.net`}}}}	 			
			nayz1 = { 
	        key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },message: {extendedTextMessage: {text: `${tz} FITUR : *${command}* [ EMOTE : ${emoji} ]`,contextInfo: {participant: `0@s.whatsapp.net`}}}}	 		
			const isUrl = (url) => {return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))}						 
			const reply = (teks) => {nayla.sendMessage(from, teks, text, {quoted: nay1})}	
			const isAntitoxic = isGroup ? antitoxic.includes(from) : false
			const isAntitag= isGroup ? antitag.includes(from) : false 
			const toxicc = (teks) => {
			if (!isAntitoxic) return
			if (budy.includes(teks)) {  
			toxic = fs.readFileSync('./Z2/toxic.webp')
			nayla.sendMessage(from, toxic, sticker, {quoted: nay})}}	
			const Reply = (teks) => {nayla.sendMessage(from, teks, text, {quoted: nayz1})}			            
            const random = (teks) => {nayla.sendMessage(from, `[ *SILAHKAN MASUKAN TEXT* ]\n${tz} *CONTOH* : ${prefix + command} ${teks}`, text, {quoted: nay1})}
			const sendMess = (hehe, teks) => {nayla.sendMessage(hehe, teks, text, {quoted:nay1})}
			const sendAudio = (teks) => {nayla.sendMessage(from, teks, audio, {mimetype:"audio/mp4", thumbnail:Buffer.alloc(0), quoted:nay1})}
			const sendVn = (teks) => {nayla.sendMessage(from, teks, audio, {mimetype:"audio/mp4", ptt:true, quoted:nay1})}
			const sendImage = (teks, teks1) => {nayla.sendMessage(from, teks, image, {caption:teks1, quoted:nay1, thumbnail:Buffer.alloc(0)})}
			const sendVideo = (teks, teks1) => {nayla.sendMessage(from, teks, video, {caption:teks1, thumbnail:Buffer.alloc(0), quoted:nay1})}
			const soundRandom = (teks) => {
			nayla.updatePresence(from, Presence.recording) 
            const gtts = require('./Z2/gtts')("id")
            const ndakbisa =[`Ini dia orang yang ter${teks} di grub ini`]
            const dtt = ndakbisa[Math.floor(Math.random() * ndakbisa.length)]
            ranm = getRandom('.mp3')
            dtt.length > 600
            ? reply('Textnya kebanyakan om')
            : gtts.save(ranm, dtt, function() {
            const S1 = groupMembers		     
 		    const S2 = S1[Math.floor(Math.random() * S1.length)]
            nayla.sendMessage(from, fs.readFileSync(ranm), audio, {mimetype:"audio/mp4", ptt:true, quoted: { key: { fromMe: false, participant: `${S2.jid.split('@')[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `Kok A-aku??😳`} } }})
            fs.unlinkSync(ranm)
            })}
            const soundMy = (teks) => {
			nayla.updatePresence(from, Presence.recording) 
            const gtts1 = require('./Z2/gtts')("id")
            const gtts2 =[`Ini dia orang yang ter${teks} di grub ini`]
            const gtts3 = gtts2[Math.floor(Math.random() * gtts2.length)]
            ranm = getRandom('.mp3')
            gtts3.length > 600
            ? reply('Textnya kebanyakan om')
            : gtts1.save(ranm, gtts3, function() {             
            nayla.sendMessage(from, fs.readFileSync(ranm), audio, {mimetype:"audio/mp4", ptt:true, quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `Kok A-aku??😳`} } }})
            fs.unlinkSync(ranm)
            })}
			const sendStick = (teks) => {nayla.sendMessage(from, teks, sticker, {quoted:nay1})}
			const timers = (teks) => {
			setTimeout( () => {reply("[❗] 20 DETIK LAGI")}, 10000)
			setTimeout( () => {reply("[❗] 10 DETIK LAGI")}, 20000)
			setTimeout( () => {reply("[❗] WAKTU HABIS" + `\n${tz} *JAWABAN* : ${teks}`)}, 30000)}	
			const mentions = (teks, memberr, id) => {(id == null || id == undefined || id == false) ? nayla.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : nayla.sendMessage(from, teks.trim(), extendedText, {quoted: nay1, contextInfo: {"mentionedJid": memberr}})}						 	
			colors = ['red','white','black','blue','yellow','green']			 
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	     	aq = args.join(' ')	 
	     	MessReply = {
            textpro : `[ *SILAHKAN MASUKAN TEXT* ]\n${tz} *CONTOH* : ${prefix + command} HALO`
            }            
            angka = ['1','2','3','4','5','6','7','8','9']
			const randomnay1 = angka[Math.floor(Math.random() * (angka.length))]
			const randomnay2 = angka[Math.floor(Math.random() * (angka.length))]
            const mentionByTag = type == "extendedTextMessage" && nay.message.extendedTextMessage.contextInfo != null ? nay.message.extendedTextMessage.contextInfo.mentionedJid : []
            const mentionByReply = type == "extendedTextMessage" && nay.message.extendedTextMessage.contextInfo != null ? nay.message.extendedTextMessage.contextInfo.participant || "" : ""
            const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
            mention != undefined ? mention.push(mentionByReply) : []
			const isAntiLink = isGroup ? antilink.includes(from) : false 
			const isAntiVirtex = isGroup ? antivirtex.includes(from) : false 
			const mentionUser = mention != undefined ? mention.filter(n => n) : []	 	 
            // REPLY ONLY  
            only = {
            botadmin : "MAAF FITUR INI HANYA BISA DIGUNAKAN JIKA BOT MENJADI ADMIN",           
            group : "MAAF FITUR INI HANYA BISA DIGUNAKAN DI GROUP",           
            admin : "MAAF FITUR INI HANYA BISA DIGUNAKAN OLEH ADMIN GROUP",
            owner : "MAAF FITUR INI HANYA BISA DIGUNAKAN OLEH OWNER BOT",
            member : "MAAF FITUR INI HANYA BISA DIGUNAKAN OLEH MEMBER GROUP",
            pribadi : "MAAF FITUR INI HANYA BISA DIGUNAKAN DIPESAN PRIBADI",
            premium : "MAAF FITUR INI HANYA BISA DIGUNAKAN USER PREMIUM"
            }  
            if (art1 == false) {aart = arts.arts1}
            if (art2 == true) {aart = arts.arts2}
            if (art3 == true) {aart = arts.arts3}    
            if (art4 == true) {aart = arts.arts4}    
            if (art5 == true) {aart = arts.arts5}        
            codename = nayla.contacts[sender] != undefined ? nayla.contacts[sender].vname || nayla.contacts[sender].notify : undefined
		    if (!isGroup && isCmd) console.log('\Z1b[1;31m=\Z1b[1;37m>', '[\Z1b[1;32m=>\Z1b[1;37m]', color(`[ ${namabot} ]`, 'yellow'), color('NAMA', 'red'), color(codename, 'yellow'), color('SEDANG', 'white'), color('MENGGUNAKAN', 'yellow'), color('FITUR', 'red'), color('=>', 'yellow'), color(command), 'DI :', color('PESAN PRIBADI', 'yellow')) 
			if (isCmd && isGroup) console.log('\Z1b[1;31m=\Z1b[1;37m>', '[\Z1b[1;32m=>\Z1b[1;37m]', color(`[ ${namabot} ]`, 'yellow'), color('NAMA', 'red'), color(codename, 'yellow'), color('SEDANG', 'white'), color('MENGGUNAKAN', 'yellow'), color('FITUR', 'red'), color('=>', 'yellow'), color(command), 'DI :', color(groupName, 'yellow'))	  	     	 			 
			const checkLimit = (sender) => {
          	let found = false
            for (let lmt of limit) {
            if (lmt.id === sender) {
            let limitCounts = limitawal - lmt.limit
            if (limitCounts <= 0) return nayla.sendMessage(from,`MAAF USER ${codename} LIMIT KAMU TELAH HABIS, SILAHKAN GET/DAPATKAN LIMIT DENGAN CARA KETIK COMMAND ${prefix}claim`, text,{ quoted: nay1 })
            nayla.sendMessage(from, `${limitCounts}`, text, { quoted : nay1 })
            found = true
            }
            }
            if (found === false) {
            let obj = { id: sender, limit: 0 }
            limit.push(obj)
            fs.writeFileSync('./Z2/limit.json', JSON.stringify(limit))
            nayla.sendMessage(from, `${limitCounts}`, text, { quoted : nay1 })
            }
			} 
			const limitAdd = (sender) => {
            if (isOwner) {
                return;
            }
            if (isPrem) {
                return;
            }
            var position = false;
            Object.keys(limit).forEach((i) => {
            if (limit[i].id == sender) {
            position = i
            }
            })
            if (position !== false) {
            limit[position].limit += 1;
            fs.writeFileSync('./Z2/limit.json', JSON.stringify(limit));
            }
            }   
            const isLimit = (sender) =>{  
		    let position = false
            for (let i of limit) {
            if (i.id === sender) {
         	let limits = i.limit
            if (limits >= limitawal ) {
            position = true
            reply(`MAAF USER ${codename} LIMIT KAMU TELAH HABIS, SILAHKAN GET/DAPATKAN LIMIT DENGAN CARA KETIK COMMAND ${prefix}claim`)
            return true
            } else {
          	limit
            position = true
            return false
            }
            }
            }
            if (position === false) {
           	let obj = { id : sender, limit : 1 }
            limit.push(obj)
            fs.writeFileSync('./Z2/limit.json',JSON.stringify(limit))
            return false
            }
            }
            const bayarLimit = (userid, amount) => {
         	let position = false
            Object.keys(limit).forEach((i) => {
            if (limit[i].id === userid) {
            position = i
            }
            })
            if (position !== false) {
            limit[position].limit -= amount
            fs.writeFileSync('./Z2/limit.json', JSON.stringify(limit))
            }
            }
			// BUTTON
			const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nama}\n`
            + 'ORG:Owner;\n'
            + `TEL;type=CELL;type=VOICE;waid=${oownerNumber}:+${oownerNumber}\n`
            + 'END:VCARD'			 
			if (buttonsR === 'TIDAK') {	
			reply("TERIMAKASIH TELAH MEMBERIKAN PENDAPAT ANDA TENTANG BOT INI")
			nayla.sendMessage(`${oownerNumber}@s.whatsapp.net`, `[ *NEW MESSAGE* ]\n${tz} *NAME* : ${codename}\n${tz} *TIME* : ${time}\n${tz} *PENDAPAT* : TIDAK MENYUKAI BOT INI`, text,{quoted:nay1})
			}
			if (buttonsR === 'IYAA') {	
			reply("TERIMAKASIH TELAH MEMBERIKAN PENDAPAT ANDA TENTANG BOT INI")
			nayla.sendMessage(`${oownerNumber}@s.whatsapp.net`, `[ *NEW MESSAGE* ]\n${tz} *NAME* : ${codename}\n${tz} *TIME* : ${time}\n${tz} *PENDAPAT* : SANGAT MENYUKAI BOT INI`, text,{quoted:nay1})
			}			 			 
            const txt = nay.message.conversation             	           			
			switch(command) {	
			case 'owner':
			nayla.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: nay1})
			break	
			case 'pendapat':
			const A1 = [
            {buttonId: 'id1', buttonText: {displayText: `IYAA`}, type: 1},            
            {buttonId: 'id2', buttonText: {displayText: `TIDAK`}, type: 1}]
            const B1 = {contentText: "APAKAH ANDA MENYUKAI BOT INI?", footerText: `Berikan pendapat anda...`,buttons: A1,headerType: 1}      
			nayla.sendMessage(from, B1, MessageType.buttonsMessage, {quoted:nay1})
			break
			case 'donasi':
			dnasi = `${donasi}\n${tz} *PULSA* : ${pulsa}\n${tz} *GOPAY* : ${gopay}\n${tz} *DANA* : ${dana}`
			reply(dnasi)
			break	 	 
		    case 'setart':
		    if (!isOwner) return reply(only.owner)
		    if ((args[0]) === '1') {
		    art1 = true
		    reply("SUKSES SET ART #1")
		    } else if ((args[0]) === '2') {
		    art2 = true
		    reply("SUKSES SET ART #2")
		    } else if ((args[0]) === '3') {
		    art3 = true
		    reply("SUKSES SET ART #3")
		    } else if ((args[0]) === '4') {
		    art4 = true
		    reply("SUKSES SET ART #4")
		    } else if ((args[0]) === '5') {
		    art5 = true
		    reply("SUKSES SET ART #5")
		    } else {
		    rart = `[ *SET ART* ]\n`,
		    rart += `${tz} *CONTOH* : ${prefix}setart 1\n`,
		    rart += `${tz} *PILIHAN ART* : 1, 2, 3, 4, dan 5`
		    reply(rart)
		    }
		    break
			case 'ban':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
			if (!isOwner) return reply(only.owner)
			bnnd = body.slice(6)
			ban.push(`${bnnd}@s.whatsapp.net`)
		    fs.writeFileSync('./Z2/banned.json', JSON.stringify(ban))
			reply(`Nomor wa.me/${bnnd} telah dibanned !`)
			break
        	case 'unban':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
			if (!isOwner) return reply(only.owner)
			bnnd = body.slice(8)
			ban.splice(`${bnnd}@s.whatsapp.net`, 1)
			fs.writeFileSync('./Z2/banned.json', JSON.stringify(ban))
			reply(`Nomor wa.me/${bnnd} telah di unban!`)
			break   		 
			case 'limit':
			case 'ceklimit':
			try{
	        checkLimit(sender)
	        } catch (e) { reply("SILAHKAN GUNAKAN 1 FITUR TERLEBIH DAHULU")}
		    break 
		    case 'claim':
		    reply("SUKSES!, ANDA MENDAPATKAN 25 LIMIT SECARA GRATIS, LIMIT AKAN MASUK SETELAH 60 DETIK, SILAHKAN TUNGGU SEBENTAR LAGI" + `\n*NOTE* : JANGAN SPAM FITUR INI`)
		    setTimeout( () => {
		    bayarLimit(sender, "25")
		    nayla.sendMessage(`${sender.split("@")[0]}@s.whatsapp.net`, "LIMIT 15 ANDA TELAH MASUK, ANDA BISA MENGGUNAKAN FITUR PADA BOT INI KEMBALI", text, {quoted:nay1})
		    }, 60000)
		    break
			case 'addprem':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
            if (args.length == 0) return reply(`=> [ *CONTOH NYA GINI* ]\n ${prefix}${command} @tag`)
            if (!isOwner) return reply(only.owner)
            if (!isGroup) return reply(only.group)
 		    adprem = `${args[0].replace('@','')}@s.whatsapp.net`
 		    prem.push(adprem)
 		    fs.writeFileSync('./Z2/prem.json', JSON.stringify(prem))
 		    reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
 		    break				
 		    case 'dellprem':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
 		    if (args.length == 0) return reply(`=> [ *CONTOH NYA GINI* ]\n ${prefix}${command} @tag}`)
 		    if (!isOwner) return reply(only.owner)	
 		    if (!isGroup) return reply(only.group)	      	
 		    delp = body.slice(10)
 		    prem.splice(`${delp}@s.whatsapp.net`, 1)
 		    fs.writeFileSync('./Z2/prem.json', JSON.stringify(prem))
 		    reply(`BERHASIL MENGELUARKAN USER PREMIUM`)
 		    break 	 
            // GROUPMENU
            case 'antivirtext':
			case 'antivirtex':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			                                                            
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)
			if (args.length < 1) return reply(`𝐅𝐈𝐓𝐔𝐑 𝐀𝐍𝐓𝐈𝐕𝐈𝐑𝐓𝐄𝐗\n𝐎𝐍𝐋𝐈𝐍𝐄 : ${prefix}${command} on\n𝐎𝐅𝐅𝐋𝐈𝐍𝐄 : ${prefix}${command} off`)
			if ((args[0]) === 'on') {
			if (isAntiVirtex) return reply('𝐚𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱𝐭 𝐭𝐞𝐥𝐚𝐡 𝐚𝐤𝐭𝐢𝐟 𝐬𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚')
			antivirtex.push(from)
			fs.writeFileSync('./Z2/antivirtex.json', JSON.stringify(antivirtex))
			reply(`𝐒𝐮𝐤𝐬𝐞𝐤 𝐦𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐀𝐍𝐓𝐈𝐕𝐈𝐑𝐓𝐄𝐗 𝐩𝐚𝐝𝐚 𝐠𝐫𝐮𝐛 𝐢𝐧𝐢`)
			} else if ((args[0]) === 'off') {
			if (!isAntiVirtex) return reply('𝐚𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱𝐭 𝐭𝐞𝐥𝐚𝐡 𝐧𝐨𝐧𝐚𝐤𝐭𝐢𝐟 𝐬𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐡𝐚')
			antivirtex.splice(from, 1)
			fs.writeFileSync('./Z2/antivirtex.json', JSON.stringify(antivirtex))
			reply(`𝐒𝐮𝐤𝐬𝐞𝐬 𝐦𝐞𝐧𝐨𝐧𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐀𝐍𝐓𝐈𝐕𝐈𝐑𝐓𝐄𝐗 𝐩𝐚𝐝𝐚 𝐠𝐫𝐮𝐛 𝐢𝐧𝐢`)
			} else {
			reply(`𝐅𝐈𝐓𝐔𝐑 𝐀𝐍𝐓𝐈𝐕𝐈𝐑𝐓𝐄𝐗\n𝐎𝐍𝐋𝐈𝐍𝐄 : ${prefix}${command} on\n𝐎𝐅𝐅𝐋𝐈𝐍𝐄 : ${prefix}${command} off`)
			}
			break		
            case 'antilink':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)
			if (args.length < 1) return reply(`𝐅𝐈𝐓𝐔𝐑 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊\n𝐎𝐍𝐋𝐈𝐍𝐄 : ${prefix}${command} on\n𝐎𝐅𝐅𝐋𝐈𝐍𝐄 : ${prefix}${command} off`)
			if ((args[0]) === 'on') {
			if (isAntiLink) return reply(`𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐬𝐮𝐝𝐚𝐡 𝐚𝐤𝐭𝐢𝐟 𝐬𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚`)
			antilink.push(from)
			fs.writeFileSync('./Z2/antilink.json', JSON.stringify(antilink))
			reply(`𝐒𝐮𝐤𝐬𝐞𝐬 𝐦𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐩𝐚𝐝𝐚 𝐠𝐫𝐮𝐛 𝐢𝐧𝐢`)
			} else if ((args[0]) === 'off') {
			if (!isAntiLink) return reply(`𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐬𝐮𝐝𝐚𝐡 𝐨𝐟𝐟 𝐬𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚`)
			antilink.splice(from, 1)
			fs.writeFileSync('./Z2/antilink.json', JSON.stringify(antilink))
			reply(`𝐒𝐮𝐤𝐬𝐞𝐬 𝐦𝐞𝐧𝐨𝐧𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐩𝐚𝐝𝐚 𝐠𝐫𝐮𝐛 𝐢𝐧𝐢`)
			} else {
			reply(`𝐅𝐈𝐓𝐔𝐑 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊\n𝐎𝐍𝐋𝐈𝐍𝐄 : ${prefix}${command} on\n𝐎𝐅𝐅𝐋𝐈𝐍𝐄 : ${prefix}antilink off`)
			}
			break 	
			case 'antitoxic':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)
			if (args.length < 1) return reply(`FITUR ANTITOXIC\n*ONLINE* : ${prefix}${command} on\n*OFFLINE* : ${prefix}${command} off`)
			if ((args[0]) === 'on') {
			if (isAntitoxic) return reply(`Antitoxic sudah aktif sebelumnya`)
			antitoxic.push(from)
			fs.writeFileSync('./Z2/antitoxic.json', JSON.stringify(antitoxic))
			reply(`Sukses mengaktifkan Antitoxic pada grub ini`)
			} else if ((args[0]) === 'off') {
			if (!isAntitoxic) return reply(`Antitoxic sudah off sebelumnya`)
			antitoxic.splice(from, 1)
			fs.writeFileSync('./Z2/antitoxic.json', JSON.stringify(antitoxic))
			reply(`Sukses non mengaktifkan Antitoxic pada grub ini`)
			} else {
			reply(`FITUR ANTITOXIC\n*ONLINE* : ${prefix}${command} on\n*OFFLINE* : ${prefix}${command} off`)
			}
			break 	
			case 'antitag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)
			if (args.length < 1) return reply(`FITUR ANTITAG\n*ONLINE* : ${prefix}${command} on\n*OFFLINE* : ${prefix}${command} off`)
			if ((args[0]) === 'on') {
			if (isAntitag) return reply(`Antitag sudah aktif sebelumnya`)
			antitag.push(from)
			fs.writeFileSync('./Z2/antitag.json', JSON.stringify(antitag))
			reply(`Sukses mengaktifkan Antitag pada grub ini`)
			} else if ((args[0]) === 'off') {
			if (!isAntitag) return reply(`Antitag sudah off sebelumnya`)
			antitag.splice(from, 1)
			fs.writeFileSync('./Z2/antitag.json', JSON.stringify(antitag))
			reply(`Sukses non mengaktifkan Antitag pada grub ini`)
			} else {
			reply(`FITUR ANTITAG\n*ONLINE* : ${prefix}${command} on\n*OFFLINE* : ${prefix}${command} off`)
			}
			break 	
            case 'kick':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
            if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)			 
			if (!isGroup) {
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
			mentions(mentioned, true)
			nayla.groupRemove(from, mentioned)
			} else {
			await nayla.groupRemove(from, mentionUser)
			reply(`SUCCESS`)
			}
			break	     	 
            break
			case 'add':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)				 
			if (args.length < 1) return reply('NOMER NYA MANA')
			if (args[0].startsWith('08')) return reply('GUNAKAN KODE NEGARA!')
			try {
			num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
			nayla.groupAdd(from, [num])
			} catch (e) {
			console.log('Error :', e)
			reply('GAGAL MENAMBAHKAN TARGET, MUNGKIN KARENA DI PRIVATE')
			}
			break			 		 
			case 'listonline':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
        	let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
		    let online = [...Object.keys(nayla.chats.get(ido).presences), nayla.user.jid]
		    nayla.sendMessage(from, 'LIST ONLINE:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: nay1,
  		    contextInfo: { mentionedJid: online }
		    })			 
			break
			case 'group':		
			case 'grub':
			case 'grup':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)				 
			if (args[0] === 'buka') {
		    reply(`*BERHASIL MEMBUKA GROUP*`)
			nayla.groupSettingChange(from, GroupSettingChange.messageSend, false)
			} else if (args[0] === 'tutup') {
			reply(`*BERHASIL MENUTUP GROUP*`)
			nayla.groupSettingChange(from, GroupSettingChange.messageSend, true)
			}			 
			break      
			case 'setname':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (args.length < 1) return random('MYGRUB')		   
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)			 
            nayla.groupUpdateSubject(from, `${body.slice(9)}`)
            nayla.sendMessage(from, 'SUCCES, GANTI NAMA GRUP', text, {quoted: nay1 })			
			break
            case 'setdesc':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
            if (args.length < 1) return random(`SELAMAT DATANG`)		
            if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)				
            nayla.groupUpdateDescription(from, `${body.slice(9)}`)
            nayla.sendMessage(from, 'SUCCES, GANTI DESKRIPSI GRUP', text, {quoted:nay1 })				
			break	
	    	case 'listadmin':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)				 
			teks = `NAMA *${groupMetadata.subject}*\nTOTAL : ${groupAdmins.length}\n\n`
			no = 0
			for (let admon of groupAdmins) {
			no += 1
			teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
			}
			mentions(teks, groupAdmins, true)			 
			break
			case 'linkgc':	
			case 'linkgrub':
			case 'linkgrup':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)				 
		    linkgc = await nayla.groupInviteCode(from)
		    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
		    reply(yeh)		         
			break	
			case 'tagtime':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
	 	    if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)	
			if (args.length == 0) return reply(`=> [ *CONTOH NYA GINI* ]\n ${prefix}${command} text|waktu\nCONTOH ${prefix}${command} Hallo|10`)		
			var gh = body.slice(9)
			var anuu = gh.split("|")[0];
			var anu = gh.split("|")[1];
			jm = `${anu}000`
			reply(`SUKSES. PESAN AKAN DIKIRIM PADA ${anu} DETIK`)			 		
         	var group = await nayla.groupMetadata(from)
         	var member = group['participants']
         	var mem = []
         	member.map( async adm => {
         	mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
         	})
         	anuu = `${tz} *DARI* : ${codename}\n${tz} *TIMER* : ${anu}\n${tz} *PESAN* : ${anuu}`
         	var options = {
         	text: anuu,
         	contextInfo: { mentionedJid: mem },
         	quoted: nay1
         	}
         	setTimeout( () => {
         	nayla.sendMessage(from, options, text, {quoted:nay1}) 
         	}, jm)        	 
         	break	      	      
			case 'tagall':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)					 
			members_id = []
	    	teks = (args.length > 1) ? body.slice(8).trim() : ''
			teks += '\n\n'
			for (let mem of groupMembers) {
			teks += `${tz} @${mem.jid.split('@')[0]}\n`
			members_id.push(mem.jid)
			}
			mentions(teks, members_id, true)			 
			break
		    case 'tagall2':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)					 
			members_id = []
	    	teks = (args.length > 1) ? body.slice(8).trim() : ''
			teks += '\n\n'
			for (let mem of groupMembers) {
			teks += `➤ @${mem.jid.split('@')[0]}\n`
			members_id.push(mem.jid)
			}
			mentions(teks, members_id, true)			 
			break
		    case 'tagall3':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)					 
			members_id = []
	    	teks = (args.length > 1) ? body.slice(8).trim() : ''
			teks += '\n\n'
			for (let mem of groupMembers) {
			teks += `➟ @${mem.jid.split('@')[0]}\n`
			members_id.push(mem.jid)
			}
			mentions(teks, members_id, true)			 
			break
		    case 'tagall4':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)					 
			members_id = []
	    	teks = (args.length > 1) ? body.slice(8).trim() : ''
			teks += '\n\n'
			for (let mem of groupMembers) {
			teks += `➙ @${mem.jid.split('@')[0]}\n`
			members_id.push(mem.jid)
			}
			mentions(teks, members_id, true)			 
			break
		    case 'tagall5':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)					 
			members_id = []
	    	teks = (args.length > 1) ? body.slice(8).trim() : ''
			teks += '\n\n'
			for (let mem of groupMembers) {
			teks += `➔ @${mem.jid.split('@')[0]}\n`
			members_id.push(mem.jid)
			}
			mentions(teks, members_id, true)			 
			break	
			case 'kickrandom':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
	 	    if (!isGroup) return reply(replygrub)
			if (!isGroupAdmins) return reply(replyadmin)
			if (!isBotGroupAdmins) return reply(replyadminbot)
	 	    const A11 = groupMembers
 		    const C11 = A11[Math.floor(Math.random() * A11.length)]
 		    var kic = `${C11.jid.split('@')[0]}@s.whatsapp.net`                   		    
		    F1 = 'MENCARI MEMBER (RANDOM)'	 	    
	 	    D1 = `SUKSES KICK RANDOM USER @${C11.jid.split('@')[0]}`
	 	    reply(F1)	 	  
		    setTimeout( () => { 
	  	    nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	  	    }, 3000)    
	  	    setTimeout( () => {  
	  	    reply(D1)
	  	    }, 4000)     
	 	    break
	 	    case 'sms':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
	 	    if (args.length == 0) return reply(`=> [ *CONTOH NYA GINI* ]\n ${prefix}${command} haloo kak`)
	 	    if (!isGroup) return reply(`GROUP ONLY`)
 		    jds = []
		    const AA1 = groupMembers
 		    const CC1 = AA1[Math.floor(Math.random() * AA1.length)]
 		    G1 = `${tz} *DARI* : ${codename}\n${tz} *UNTUK* : ANDA\n${tz} *MATH* : RANDOM\n${tz} *PESAN* : ${aq}`
	 	    nayla.sendMessage(`${CC1.jid.split('@')[0]}@s.whatsapp.net`, G1, text) 
	 	    F1 = 'MENCARI MEMBER (RANDOM)'	 	    
	 	    D1 = `SUKSES MENGIRIM PESAN RANDOM KE @${CC1.jid.split('@')[0]}`	 	  
	 	    reply(F1) 
	 	    jds.push(CC1.jid)
	 	    setTimeout( () => {
	  	    mentions(D1, jds, true)
	  	    }, 3000)        		    
	 	    break
		    case 'ownerchat':
		    case 'chatowner':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (args.length == 0) return reply(`=> [ *CONTOH NYA GINI* ]\n ${prefix}${command} aku sayang kamu`)
            chat1 = `${tz} *DARI* : ${codename}\n`
            chat1 += `${tz} *BUAT* : ${nama}\n`
            chat1 += `${tz} *PESAN* : ${aq}`
            nayla.sendMessage(`${oownerNumber}@s.whatsapp.net`, chat1, text,{quoted:nay1})
            reply('SUKSES')
            break                  		 				 
            case 'delete':
			case 'd':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (!isGroup)return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			nayla.deleteMessage(from, { id: nay.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break			 
            case 'leave':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			             
			if (!isGroupAdmins) return reply(only.admin)
			if (!isGroup) return reply(only.group)
			anu = await nayla.groupLeave(from, `𝐒𝐚𝐲𝐨𝐧𝐚𝐫𝐚`, groupId)
			break
            case 'hidetag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (!isGroupAdmins) return reply(only.admin)
			if (!isBotGroupAdmins) return reply(only.botadmin)	
			if (!aq) return random(`HALO SEMUANYA`)		       
			var value = body.slice(9)
			var group = await nayla.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map( async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var options = {
			text: value,
			contextInfo: { mentionedJid: mem },
    		quoted: nay
			}
			nayla.sendMessage(from, options, text, {quoted:nay1})			 
			break  				 		 
            // SIMPLE 
            case 'sticker':  
         	case 'stiker':  
         	case 'stickergif':  
         	case 'stikergif':  
         	case 'sgif':  
         	case 's':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
         	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
         	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
         	const media = await nayla.downloadAndSaveMediaMessage(encmedia)
         	ran = getRandom('.webp')
         	await ffmpeg(`./${media}`)
         	.input(media)
         	.on('start', function (cmd) {         	 
          	})
         	.on('error', function (err) {
         	console.log(`Error : ${err}`)
         	fs.unlinkSync(media)
         	reply(prosess)
         	})
         	.on('end', function () {
         	console.log('SELESAI JANGAN LUPA SUBSCRIBE YT RAMDANI OFFICIAL')
         	nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
		    fs.unlinkSync(media)
         	fs.unlinkSync(ran)
         	})
         	.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
            min'(320,ih)':  
            force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
         	.save(ran)
         	} else if ((isMedia && nay.message.videoMessage.seconds < 11 || isQuotedVideo && nay.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
         	const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
         	const media = await nayla.downloadAndSaveMediaMessage(encmedia)
         	ran = getRandom('.webp')
         	reply(prosess)
         	await ffmpeg(`./${media}`)
         	.inputFormat(media.split('.')[1])
         	.on('start', function (cmd) {         	 
         	})
         	.on('error', function (err) {
         	console.log(`Error : ${err}`)
         	fs.unlinkSync(media)
         	tipe = media.endsWith('.mp4') ? 'video' : 'gif'
         	reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
         	})
         	.on('end', function () {
         	console.log('SELESAI JANGAN LUPA SUBSCRIBE YT RAMDANI OFFICIAL')
         	nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
         	fs.unlinkSync(media)
         	fs.unlinkSync(ran)
         	})
         	.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
          	min'(320,ih)':  
           	force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
         	.toFormat('webp')
         	.save(ran)
         	} else {
         	reply(`𝐤𝐢𝐫𝐢𝐦/𝐭𝐚𝐠 𝐟𝐨𝐭𝐨 𝐚𝐭𝐚𝐮 𝐯𝐢𝐝𝐞𝐨 𝐛𝐞𝐫𝐝𝐮𝐫𝐚𝐬𝐢 1-6 𝐝𝐞𝐭𝐢𝐤 𝐝𝐞𝐧𝐠𝐚𝐧 𝐜𝐚𝐩𝐭𝐢𝐨𝐧 ${prefix}sticker`)
         	}
         	break
            
            // WALLPAPER 		 
			case 'wallneon': case 'wallrandom': case 'wallcode': case 'wallhacker': case 'wallpubg': case 'wallml':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 							
			reply(prosess)
			try{			
			nyz2 = await fetchJson(`${api}/wallpaper/${command}`) 
			nyz3 = await getBuffer(nyz2.list.gambar)
			nayla.sendMessage(from, nyz3, image, {thumbnail:Buffer.alloc(0), caption:`NIH KAK`,quoted:nay1}) 			
			} catch (e) { reply("ERR SILAHKAN COBALAGI")}
			break	
			// TEXTPRO		 
			case 'rainbow': case 'scfi': case 'blue': case 'juice': case 'purple': case 'toxic': case 'peridot': case 'metal': 
			case 'realistic': case 'impressive': case 'cracked': case 'magma': case 'thunder': case 'berry': case 'transformer': 
			case 'horror': case 'metallic': case 'circuit': case 'sketch': case 'halloween':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (args.length < 1) return reply(MessReply.textpro)
			reply(prosess)						
			nyz5 = await fetchJson(`${api}/textpro/${command}?text=${aq}`) 
			nyz4 = await getBuffer(nyz5.result)
			nayla.sendMessage(from, nyz4, image, {thumbnail:Buffer.alloc(0), caption:`NIH KAK`,quoted:nay1}) 					
			break		
		    // RANDOM 
		    case 'artinama':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("Udin")
		    nyz6 = await fetchJson(`${api}/random/artinama?query=${aq}`)
		    nyz7 = `[ *ARTI NAMA* ]\n`,
		    nyz7 += `${tz} *ARTINAMA* : ${nyz6.result.list}`
		    Reply(nyz7)	
		    break
		    case 'artimimpi':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("ular")
		    nyz8 = await fetchJson(`${api}/random/artimimpi?query=${aq}`)
		    nyz31 = `[ *ARTI MIMPI* ]\n`,
		    nyz31 += `${tz} *ARTINAMA* : ${nyz8.result.list}`
		    Reply(nyz31)	
		    break
		    case 'resepmasakan':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("telur")
		    nyz9 = await fetchJson(`${api}/random/resepmasakan?query=${aq}`)
		    nyz32 = `[ *RESEP MASAKAN* ]\n`,
		    nyz32 += `${tz} *NAMA* : ${nyz9.list.nama}\n`,
		    nyz32 += `${tz} *CARA* : ${nyz9.list.cara}`		    
		    Reply(nyz32)	
		    break
		    case 'katajago':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("cantik")
		    nyz10 = await fetchJson(`${api}/random/katajago?query=${aq}`)
		    nyz33 = `[ *KATA JAGO* ]\n`,
		    nyz33 += `${tz} *RESULT* : ${nyz10.result.list}`
		    Reply(nyz33)	
		    break		     
		    case 'besarkecil':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz11 = await fetchJson(`${api}/random/besarkecil?query=${aq}`)
		    nyz34 = `[ *BESAR KECIL* ]\n`,
		    nyz34 += `${tz} *RESULT* : ${nyz11.result.list}`
		    Reply(nyz34)	
		    break	  
		    case 'jumlahhuruf':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz12 = await fetchJson(`${api}/random/jumlahhuruf?query=${aq}`)
		    nyz35 = `[ *JUMLAH HURUF* ]\n`,
		    nyz35 += `${tz} *RESULT* : ${nyz12.result.list}`
		    Reply(nyz35)	
		    break
		    case 'jumlahangka':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("193719174")
		    nyz13 = await fetchJson(`${api}/random/jumlahangka?query=${aq}`)
		    nyz36 = `[ *JUMLAH ANGKA* ]\n`,
		    nyz36 += `${tz} *RESULT* : ${nyz13.result.list}`
		    Reply(nyz36)
		    break
		    case 'infogempa':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    nyz14 = await fetchJson(`${api}/random/infogempa`)
		    nyz37 = `[ *INFO GEMPA* ]\n`,
		    nyz37 += `${tz} *WAKTU* : ${nyz14.result.waktu}\n`,
		    nyz37 += `${tz} *KEDALAMAN* : ${nyz14.result.kedalaman}\n`,
		    nyz37 += `${tz} *KOORDINAT* : ${nyz14.result.koordinat}\n`,
		    nyz37 += `${tz} *LOKASI* : ${nyz14.result.lokasi}\n`,
		    nyz37 += `${tz} *TSUNAMI* : ${nyz14.result.tsunami}`		    
		    Reply(nyz37)
		    break	    	
		    case 'kapital':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz15 = await fetchJson(`${api}/random/kapital?query=${aq}`)
		    nyz38 = `[ *KAPITAL* ]\n`,
		    nyz38 += `${tz} *RESULT* : ${nyz15.result.list}`
		    Reply(nyz38)
		    break	
		    case 'halah':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz16 = await fetchJson(`${api}/random/halah?query=${aq}`)
		    nyz39 = `[ *HALAH* ]\n`,
		    nyz39 += `${tz} *RESULT* : ${nyz16.result.list}`
		    Reply(nyz39)
		    break    	
		    case 'hilih':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz17 = await fetchJson(`${api}/random/hilih?query=${aq}`)
		    nyz40 = `[ *HILIH* ]\n`,
		    nyz40 += `${tz} *RESULT* : ${nyz17.result.list}`
		    Reply(nyz40)
		    break    	
		    case 'huluh':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz18 = await fetchJson(`${api}/random/huluh?query=${aq}`)
		    nyz41 = `[ *HULUH* ]\n`,
		    nyz41 += `${tz} *RESULT* : ${nyz18.result.list}`
		    Reply(nyz41)
		    break    	
		    case 'heleh':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz19 = await fetchJson(`${api}/random/heleh?query=${aq}`)
		    nyz42 = `[ *HELEH* ]\n`,
		    nyz42 += `${tz} *RESULT* : ${nyz19.result.list}`
		    Reply(nyz42)
		    break    	
		    case 'holoh':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz20 = await fetchJson(`${api}/random/holoh?query=${aq}`)
		    nyz43 = `[ *HOLOH* ]\n`,
		    nyz43 += `${tz} *RESULT* : ${nyz20.result.list}`
		    Reply(nyz43)
		    break  
		    case 'bilangangka':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("193719174")
		    nyz21 = await fetchJson(`${api}/random/bilangangka?query=${aq}`)
		    nyz44 = `[ *BILANG ANGKA* ]\n`,
		    nyz44 += `${tz} *RESULT* : ${nyz21.result.list}`
		    Reply(nyz44)
		    break 
		    case 'jumlahangka':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("193719174")
		    nyz22 = await fetchJson(`${api}/random/jumlahangka?query=${aq}`)
		    nyz45 = `[ *JUMLAH ANGKA* ]\n`,
		    nyz45 += `${tz} *RESULT* : ${nyz22.result.list}`
		    Reply(nyz45)
		    break  
		    case 'balikhuruf':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz23 = await fetchJson(`${api}/random/balikhuruf?query=${aq}`)
		    nyz46 = `[ *BALIK HURUF* ]\n`,
		    nyz46 += `${tz} *RESULT* : ${nyz23.result.list}`
		    Reply(nyz46)
		    break	
		    case 'wikipedia':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("manusia")
		    nyz24 = await fetchJson(`${api}/random/wikipedia?query=${aq}`)
		    nyz47 = `[ *WIKIPEDIA* ]\n`,
		    nyz47 += `${tz} *RESULT* : ${nyz24.result.list}`
		    Reply(nyz47)
		    break 
		    case 'balikangka':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 		
		    if (args.length < 1) return random("193719174")
		    nyz25 = await fetchJson(`${api}/random/balikangka?query=${aq}`)
		    nyz48 = `[ *BALIK ANGKA* ]\n`,
		    nyz48 += `${tz} *RESULT* : ${nyz25.result.list}`
		    Reply(nyz48)
		    break	 
		    // DOWNLOADER
		    case 'ytmp4':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isPrem) return reply(only.premium)	
		    if (args.length < 1) return reply("Masukkan url youtube")
		    nyz1 = await fetchJson(`${api}/downloader/ytmp4?url=${aq}`)
		    nyz2 = await getBuffer(nyz1.result.url)
		    nyz3 = `[ *YOUTUBE VIDEO* ]\n`
		    nyz3 += `${tz} *TITLE* : ${nyz1.result.title}\n`
		    nyz3 += `${tz} *DESC* : ${nyz1.result.desc}\n`
		    nyz3 += `_video sedang diproses, silahkan tunggu beberapa saat lagi_`
		    reply(nyz3)
		    reply(prosess)
		    nayla.sendMessage(from, nyz2, video, {caption:"NIH KAK", thumbnail:Buffer.alloc(0), quoted:nay1})
		    break
		    case 'ytmp3':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isPrem) return reply(only.premium)
		    if (args.length < 1) return reply("Masukkan url youtube")
		    nyz1 = await fetchJson(`${api}/downloader/ytmp3?url=${aq}`)
		    nyz2 = await getBuffer(nyz1.result.url)
		    nyz3 = `[ *YOUTUBE AUDIO* ]\n`
		    nyz3 += `${tz} *TITLE* : ${nyz1.result.title}\n`
		    nyz3 += `${tz} *DESC* : ${nyz1.result.desc}\n`
		    nyz3 += `_audio sedang diproses, silahkan tunggu beberapa saat lagi_`
		    reply(nyz3)
		    reply(prosess)
		    nayla.sendMessage(from, nyz2, audio, {mimetype:"audio/mp4", quoted:nay1})
		    break
		    case 'tiktokmp4':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isPrem) return reply(only.premium)		    
		    if (args.length < 1) return reply("Masukkan url tiktok")
		    nyz1 = await fetchJson(`${api}/downloader/tiktokmp4?url=${aq}`)
		    nyz2 = await getBuffer(nyz1.result.url)
		    reply(prosess)
		    nayla.sendMessage(from, nyz2, video, {caption:"NIH KAK", thumbnail:Buffer.alloc(0), quoted:nay1})		 
		    break
		    case 'playmp3': case 'playmp4':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isPrem) return reply(only.premium)
		    reply("MAAF FITUR INI SEDANG PERBAIKAN")
		    break
		    case 'tiktokmp3':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (!isPrem) return reply(only.premium)		    
		    if (args.length < 1) return reply("Masukkan url tiktok")
		    nyz1 = await fetchJson(`${api}/downloader/tiktokmp3?url=${aq}`)
		    nyz2 = await getBuffer(nyz1.result.url)
		    reply(prosess)
		    nayla.sendMessage(from, nyz2, audio, {mimetype:"audio/mp4", quoted:nay1})		 
		    break
		    // ANIME
		    case 'zoro': case 'luffy': case 'sanji': case 'ussop': case 'nami': case 'copper': case 'naruto': case 'minato': case 'sasuke': case 'sakura': case 'boruto': case 'sarada': case 'mitsuki': case 'orochimaru': case 'tsunade': case 'kakashi': case 'killua': case 'gon': case 'saitama': case 'rimuru': case 'sagiri': case 'natsu': case 'tanjirou': case 'nezuko': case 'senku':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			   
            reply(prosess)
            nyz1 = await getBuffer(`${api}/anime/${command}`)            
            sendImage(nyz1, "Nih foto " + command + " nya kak:)")
            break
            case 'pinterest':
            if (args.length < 1) return random("kucing")
            if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			   
            reply(prosess)
            nyz1 = await getBuffer(`${api}/search/pinterest?query=${aq}`)            
            sendImage(nyz1, "NIHH")
            break
            // XRANDOM
            case 'xkontol':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')				 	
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xganteng':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xcantik':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xjelek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xgoblok':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 				  
            case 'xbego':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xpintar':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xjago':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xnolep':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
		    case 'xmonyet':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 				     
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 				                 	 
            case 'xbabi':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xbeban':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xbaik':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xjahat':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xanjing':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			  
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 				
            case 'xharam':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xkontol':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xpakboy':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xpakgirl':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			  
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 				
            case 'xwibu':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xhebat':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
			case 'xsadboy':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
			if (!isGroup) return reply(only.group)
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break 	
		    case 'xsadgirl':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			 
		    if (!isGroup) return reply(only.group)		     
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			nayla.sendMessage(from, xrandom, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }})   		
			break  
			case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
            case 'bego': case 'pintar': case 'jago': case 'nolep': case 'monyet':                 	 
            case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
            case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
            case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
			if (!isGroup) return reply(only.group) 	 
 		    jds = []
		    const A12 = groupMembers
  		    const B12 = groupMembers
 		    const C12 = A12[Math.floor(Math.random() * A12.length)]
	 	    D12 = `Emh.. seperti biasa yang *ter${command}* disini pasti @${C12.jid.split('@')[0]}`                  
		    jds.push(C12.jid)
	  	    mentions(D12, jds, true)
	 	    break   
	 	    case 'vganteng': case 'vcantik': case 'vjelek': case 'vgoblok':  
            case 'vbego': case 'vpintar': case 'vjago': case 'vnolep': case 'vmonyet':                 	 
            case 'vbabi': case 'vbeban': case 'vbaik': case 'vjahat': case 'vanjing': 
            case 'vharam': case 'vkontol': case 'vpakboy': case 'vpakgirl': 
            case 'vwibu': case 'vhebat': case 'vsadboy': case 'vsadgirl':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 					
			if (!isGroup) return reply(only.group)
 		    jds = []
		    const AS1 = groupMembers
 		    const CS1 = AS1[Math.floor(Math.random() * AS1.length)]	 	                      
 		    const vcardd = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:${command1}\n` 
            + `ORG: NAK ${command1};\n`
            + `TEL;type=CELL;type=VOICE;waid=${CS1.jid.split('@')[0]}:+${CS1.jid.split('@')[0]}\n`
            + 'END:VCARD' 
            nayla.sendMessage(from, {displayname: "Jeff", vcard: vcardd}, MessageType.contact, { quoted: nay1})
            reply(`wkwk dia yang *ter${command1}* disini`)			
	 	    break	 	     
            case 'zganteng': case 'zcantik': case 'zjelek': case 'zgoblok':  
            case 'zbego': case 'zpintar': case 'zjago': case 'znolep': case 'zmonyet':                 	 
            case 'zbabi': case 'zbeban': case 'zbaik': case 'zjahat': case 'zanjing': 
            case 'zharam': case 'zkontol': case 'zpakboy': case 'zpakgirl': 
            case 'zwibu': case 'zhebat': case 'zsadboy': case 'zsadgirl':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			             
           	if (!isGroup) return reply(only.group) 	 
		    const AS11 = groupMembers		     
 		    const CS21 = AS11[Math.floor(Math.random() * AS11.length)]	 	    		     
			nayla.sendMessage(from, zrandom, sticker, {quoted: { key: { fromMe: false, participant: `${CS21.jid.split('@')[0]}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `aku adalah yang ter${command1} disini:v` }}})
			break 
            case 'gantengcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
            N = `KE *GANTENGAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'cantikcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            N = `KE *CANTIKAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}% :v*`
            reply(N)
            break
            case 'jelekcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")                 	
            N = `KE *J3L3K4N* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'goblokcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            N = `KE *GOBLOKAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'begocek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            N = `KE *BEGO* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'pintercek': 
            case 'pintarcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            N = `KE *PINTARAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'jagocek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
            N = `KE *JAGOAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'nolepcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
            N = `KE *NOLEPAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'babicek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
            N = `KE *BABIAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'bebancek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            N = `KE *BEBANAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'baikcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            N = `KE *BAIKAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'jahatcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
            N = `KE *JAHATAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'anjingcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
            N = `KE *ANJINGAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break              
            case 'haramcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            N = `KE *HARAMAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break  
            case 'kontolcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
            N = `KE *KOMTOLAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'pakboycek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
            N = `KE *PAKBOYZ* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break 
            case 'pakgirlcek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            N = `KE *PAKGILR* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break             
            case 'sangecek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            N = `JIWA *SANGE* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break
            case 'bapercek':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            N = `JIWA *BEPERAN* KAMU\n`
            N += `ADALAH : *${randomnay1}${randomnay2}%* :v`
            reply(N)
            break                      
            // OWNER MENU
            case 'bc':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 
			if (!isOwner) return reply('ONLY OWNER') 
			if (args.length < 1) return reply('.......')
			anu = await nayla.chats.all()
			if (isMedia && !nay.message.videoMessage || isQuotedImage) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
			buff = await nayla.downloadMediaMessage(encmedia)
			for (let _ of anu) {
			nayla.sendMessage(_.jid, buff, image, {caption: `[ *${namabot} BROADCAST* ]\n\n${body.slice(4)}`})
			}
			reply(_.jid)
			reply('*SUCCESS BROADCAST*')
			} else {
			for (let _ of anu) {
	    	sendMess(_.jid, `[ *${namabot} BROADCAST* ]\n\n${tz} *DARI* : ${nama}\n${tz} *TIME* : ${time}\n${tz} *PESAN* : ${body.slice(4)}`)
 			}
			reply('*SUCCESS BROADCAST* ')
			}			
			break		
			case 'bcgc':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
			if (!isOwner) return reply('ONLY OWNER') 
			if (args.length < 1) return reply('.......')
			anu = await groupMembers				 
			if (isMedia && !nay.message.videoMessage || isQuotedImage) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
			buff = await nayla.downloadMediaMessage(encmedia)
			for (let _ of anu) {
			nayla.sendMessage(_.jid, buff, image, {caption: aq})
			}
			reply('')
			} else {
			for (let _ of anu) {
			sendMess(_.jid, aq)
			}
			reply('SUKSES BROADCAST GROUP')
			}			 
			break 
			case 'setprefix':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
	     	if (args.length < 1) return reply('PREFIX NYA APA?')
			if (!isOwner) return reply(only.owner)
            prefix = args[0] 
            reply(`SUKSES SET PREFIX KE ${prefix}`)
            break   
            case 'settz':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
	     	if (args.length < 1) return reply('PREFIX NYA APA?')
			if (!isOwner) return reply(only.owner)
            tz = args[0] 
            reply(`SUKSES SET TZ KE ${tz}`)
            break   
            case 'join':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
			if (!isOwner) return reply(only.owner) 
			if (isGroup) return reply('GUNAKAN FITUR INI DI PESAN PRIBADI')
			try {
		    ini_url = args[0]
			if (args.length < 1) return reply(`LINK NYA MANA??`)	
			var codeInvite = ini_url.split('https://chat.whatsapp.com/')[1]
			if (!codeInvite) return reply('pastikan link sudah benar!')
			var response = await nayla.acceptInvite(codeInvite)
			reply('SUKSES!!!, JGN LUPA SUBSCRIBE https://youtube.com/channel/UCeQaKIQQhDNHMOq_odQh5Sw')
			} catch {
			reply('LINK ERROR!')
			}
			break			  	
			case 'setppbot':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isOwner) return reply(only.owner) 
		    nayla.updatePresence(from, Presence.composing) 
			if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
			enmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await nayla.downloadAndSaveMediaMessage(enmedia)
			await nayla.updateProfilePicture(botNumber, media)
			reply('SUKSES!!!')			  
			break			 
			case 'return':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isOwner) return reply(only.owner)
            try {
            return nayla.sendMessage(from, JSON.stringify(eval(budy.slice(8)),null,'\t'),text, {quoted: nay1})
            } catch(err) {
            e = String(err)
            reply(e)
            }
            break
            case 'audio1':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio1)
            break   
            case 'audio2':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio2)
            break       
            case 'audio3':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio3)
            break       
            case 'audio4':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio4)
            break       
            case 'audio5':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio5)
            break       
            case 'audio6':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio6)
            break       
            case 'audio7':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio7)
            break       
            case 'audio8':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio8)
            break       
            case 'audio9':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio9)
            break       
            case 'audio10':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio10)
            break       
            case 'audio11':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio11)
            break       
            case 'audio12':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio12)
            break       
            case 'audio13':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio13)
            break       
            case 'audio14':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio14)
            break       
            case 'audio15':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio15)
            break       
            case 'audio16':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio16)
            break       
            case 'audio17':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio17)
            break       
            case 'audio18':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio18)
            break       
            case 'audio19':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendVn(audio19)
            break  
            case 'audio20':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            sendAudio(audio20)
            break  
            case 'cantiktag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *CANTIK RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KECANTIKAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'bapertag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *BAPER RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEBAPERAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'sangetag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *SENGE RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KESANGEAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'pakgirltag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *PAKGIRL RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEPAKGIRL AN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'pakboytag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *PAKBOY RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEPAKBOYAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'kontoltag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *KOMTOL RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEKONTOLAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'haramtag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *HARAM RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEHARAMAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'anjingtag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *ANJING RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEANJINGAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'jahattag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *JAHAT RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEJAHATAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'baiktag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *BAIK RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEBAIKAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'bebantag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *BEBAN RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEBEBANAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'babitag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *BABI RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEBABIAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'noleptag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *NOLEP RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KENOLEPAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'jagotag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *JAGO RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEJAGOAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'pintartag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *PINTAR RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEPINTARAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'begotag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *BEGO RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEBEGOAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'gobloktag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *GOBLOK RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEGOBLOKAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'jelektag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *JELEK RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEJELEKAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
			case 'gantengtag':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		    if (!isPrem) return reply(only.premium)
			if (!isGroup) return reply(only.group())
			if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang kak')
			mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid				 
			mentions(`[ *GANTENG RATE* ]\n\n${tz} *USER* : @${mentioned[0].split('@')[0]}\n${tz} *KEGANTENGAN* : ${randomnay1}${randomnay2}% ${emoji}\n${tz} *TIMER* : ${time}`, mentioned, true)						 			
			break 
		    case 'sganteng': case 'scantik': case 'sjelek': case 'sgoblok':  
            case 'sbego': case 'spintar': case 'sjago': case 'snolep': case 'smonyet':                 	 
            case 'sbabi': case 'sbeban': case 'sbaik': case 'sjahat': case 'sanjing': 
            case 'sharam': case 'skontol': case 'spakboy': case 'spakgirl': 
            case 'swibu': case 'shebat': case 'ssadboy': case 'ssadgirl':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			             
           	if (!isGroup) return reply(only.group) 	 		    
			soundRandom(`${command}`)
			break
			case 'cganteng': case 'ccantik': case 'cjelek': case 'cgoblok':  
            case 'cbego': case 'cpintar': case 'cjago': case 'cnolep': case 'cmonyet':                 	 
            case 'cbabi': case 'cbeban': case 'cbaik': case 'cjahat': case 'canjing': 
            case 'charam': case 'ckontol': case 'cpakboy': case 'cpakgirl': 
            case 'cwibu': case 'chebat': case 'csadboy': case 'csadgirl':
			if (isLimit(sender)) return
            await limitAdd(sender)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			             
           	if (!isGroup) return reply(only.group) 	 		    
			soundMy(`${command}`)
			break
			case 'grubwa':
			if (args.length < 1) return random("2022") 
			nyz49 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/grubwa?query=${aq}`)
			nyz50 = `[ *GRUB WA* ]\n`,
			nyz50 += `${tz} *NAMA* : ${nyz49.result.judul}\n`,
			nyz50 += `${tz} *LINK* : ${nyz49.result.link}\n`
			reply(nyz50)
			break
			case 'arena':
			if (args.length < 1) return random("oppo")
			nyz51 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/arena?query=${aq}`)
			nyz53 = nyz51.result
			nyz52 = `[ *ARENA* ]\n`,
			nyz52 += `${tz} *SPEK* : ${nyz53.spek}\n`,
			nyz52 += `${tz} *TYPE* : ${nyz53.type}\n`,
			nyz52 += `${tz} *SIZE* : ${nyz53.size}\n`,
			nyz52 += `${tz} *RESOLUSI* : ${nyz53.resolusi}\n`,
			nyz52 += `${tz} *OS* : ${nyz53.os}\n`,
			nyz52 += `${tz} *CPU* : ${nyz53.cpu}\n`,
			nyz52 += `${tz} *INTERNAL* : ${nyz53.internal}\n`,
			nyz52 += `${tz} *CAMERA* : ${nyz53.camera}\n`,
			nyz52 += `${tz} *BATTERAI* : ${nyz53.batterai}\n`			
			reply(nyz52)
			break
			case 'amazon':
			if (args.length < 1) return random("batterai")
			nyz54 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/amazon?query=${aq}`)
			nyz55 = nyz54.result
			nyz56 = `[ *AMAZON* ]\n`,
			nyz56 += `${tz} *ITEM* : ${nyz55.item}\n`,
			nyz56 += `${tz} *REVIEW* : ${nyz55.review}\n`,
			nyz56 += `${tz} *RATING* : ${nyz55.rating}\n`,
			nyz56 += `${tz} *PRICE* : ${nyz55.price}\n`,
			nyz56 += `${tz} *DISKON* : ${nyz55.diskon}\n`,
			nyz56 += `${tz} *URL* : ${nyz55.url}\n`,
			nyz56 += `${tz} *SPONSOR* : ${nyz55.sponsor}\n`,
			nyz56 += `${tz} *BEST* : ${nyz55.best}\n`,
			nyz56 += `${tz} *AMAZON* : ${nyz55.amazon}\n`
			reply(nyz56)
			break
			case 'shopee':
			if (args.length < 1) return random("sepeda")
			nyz57 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/shopee?query=${aq}`)
			nyz58 = nyz57.result
			nyz59 = `[ *SHOPEE* ]\n`,
			nyz59 += `${tz} *JUDUL* : ${nyz58.judul}\n`,
			nyz59 += `${tz} *HARGA* : ${nyz58.harga}\n`,
			nyz59 += `${tz} *MERK* : ${nyz58.merk}\n`,
			nyz59 += `${tz} *STOCK* : ${nyz58.stock}\n`,
			nyz59 += `${tz} *LIKE* : ${nyz58.like}\n`,
			nyz59 += `${tz} *VIEWS* : ${nyz58.views}\n`,
			nyz59 += `${tz} *TERJUAL* : ${nyz58.terjual}\n`
			reply(nyz59)
			break
			case 'thelazy':
			if (args.length < 1) return random("mobile")
			nyz70 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/thelazy?query=${aq}`)
			nyz71 = nyz70.result
			nyz72 = `[ *THELAZY* ]\n`,
			nyz72 += `${tz} *TITLE* : ${nyz71.title}\n`,
			nyz72 += `${tz} *URL* : ${nyz71.url}\n`,
			nyz72 += `${tz} *CATEGORY* : ${nyz71.category}\n`,
			nyz72 += `${tz} *AUTHOR* : ${nyz71.author}\n`,
			nyz72 += `${tz} *POST* : ${nyz71.post_date}\n`,
			nyz72 += `${tz} *COMMENTS* : ${nyz71.comments}\n`
			reply(nyz72)
			break
			case 'cersex':
			if (args.length < 1) return random("kakak")
			nyz73 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/cersex?query=${aq}`)
			nyz74 = nyz73.result
			nyz75 = `[ *CERSEX* ]\n`,
			nyz75 += `${tz} *TITLE* : ${nyz74.title}\n`,
			nyz75 += `${tz} *URL* : ${nyz74.url}\n`,
			nyz75 += `${tz} *CATEGORY* : ${nyz74.category}\n`,
			nyz75 += `${tz} *POST* : ${nyz74.post}\n`
			reply(nyz75)
			break
			case 'ytsearch':
			if (args.length < 1) return random("jolowi")
			nyz76 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/ytsearch?query=${aq}`)
			nyz77 = nyz76.result
			nyz78 = `[ *YTSEARCH* ]\n`,
			nyz78 += `${tz} *TITLE* : ${nyz77.title}\n`,
			nyz78 += `${tz} *ID* : ${nyz77.id}\n`,
			nyz78 += `${tz} *TYPE* : ${nyz77.type}\n`,
			nyz78 += `${tz} *VIEWS* : ${nyz77.views}\n`,
			nyz78 += `${tz} *URL* : ${nyz77.url}\n`,
			nyz78 += `${tz} *DESC* : ${nyz77.desc}\n`
			reply(nyz78)
			break
			case 'rexdl':
			if (args.length < 1) return random("mobil")
			nyz79 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/rexdl?query=${aq}`)
			nyz80 = nyz79.result
			nyz81 = `[ *REXDL* ]\n`,
			nyz81 += `${tz} *TITLE* : ${nyz80.title}\n`,
			nyz81 += `${tz} *URL* : ${nyz80.url}\n`, 
			nyz81 += `${tz} *ON* : ${nyz80.on}\n`,
			nyz81 += `${tz} *DESC* : ${nyz80.desc}\n` 
			reply(nyz81)
			break
			case 'mod':
			if (args.length < 1) return random("pubg")
			nyz82 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/mod?query=${aq}`)
			nyz83 = nyz82.result
			nyz84 = `[ *MOD* ]\n`,
			nyz84 += `${tz} *TITLE* : ${nyz83.title}\n`, 
			nyz84 += `${tz} *URL* : ${nyz83.url}\n` 
			reply(nyz84)
			break
			case 'sfile':
			if (args.length < 1) return random("pubg")
			nyz85 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/sfile?query=${aq}`)
			nyz86 = nyz85.result
			nyz87 = `[ *SFILE* ]\n`,
			nyz87 += `${tz} *TITLE* : ${nyz86.title}\n`,
			nyz87 += `${tz} *SIZE* : ${nyz86.size}\n`,
			nyz87 += `${tz} *URL* : ${nyz86.url}\n`
			reply(nyz87)
			break
			case 'berita':
			nyz88 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/berita`)
			nyz89 = nyz88.result
			nyz90 = `[ *BERITA* ]\n`,
			nyz90 += `${tz} *TITLE* : ${nyz89.title}\n`,
			nyz90 += `${tz} *URL* : ${nyz89.url}\n`
			reply(nyz90)
			break
			case 'kompas':
			nyz91 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/kompas`)
			nyz92 = nyz91.result
			nyz93 = `[ *KOMPAS* ]\n`,
			nyz93 += `${tz} *TITLE* : ${nyz92.title}\n`,
			nyz93 += `${tz} *URL* : ${nyz92.url}\n`
			reply(nyz93)
			break
			case 'okezone':
			nyz94 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/okezone`)
			nyz95 = nyz94.result
			nyz96 = `[ *OKEZONE* ]\n`,
			nyz96 += `${tz} *TITLE* : ${nyz95.title}\n`,
			nyz96 += `${tz} *URL* : ${nyz95.url}\n`
			reply(nyz96)
			break
			case 'antara':
			nyz97 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/antara`)
			nyz98 = nyz97.result
			nyz99 = `[ *ANTARA* ]\n`,
			nyz99 += `${tz} *TITLE* : ${nyz98.title}\n`,
			nyz99 += `${tz} *URL* : ${nyz98.url}\n`
			reply(nyz99)
			break
			case 'jam':
		    nyz100 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/jam`)
		    nyz101 = nyz100.result
		    nyz102 = `[ *JAM* ]\n`,
		    nyz102 += `${tz} *WIB* : ${nyz101.wib}\n`,
		    nyz102 += `${tz} *WITA* : ${nyz101.wita}\n`,
		    nyz102 += `${tz} *WIT* : ${nyz101.wit}\n`
		    reply(nyz102)
		    break
		    case 'jamdunia':
		    nyz103 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/jamdunia`)
		    nyz104 = nyz103.result
		    nyz105 = `[ *JAM DUNIA* ]\n`,
		    nyz105 += `${tz} *WITA* : ${nyz104.wita}\n`,
		    nyz105 += `${tz} *WIT* : ${nyz104.wit}\n`,
		    nyz105 += `${tz} *WIB* : ${nyz104.wib}\n`,
		    nyz105 += `${tz} *MATAHARI* : ${nyz104.matahari}\n`,
		    nyz105 += `${tz} *TANGGAL* : ${nyz104.tanggal}\n`,
		    nyz105 += `${tz} *DETAIL* : ${nyz104.detail}\n`
		    reply(nyz105)
		    break
		    case 'jadwalbola':
		    nyz106 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/jadwalbola`)
		    nyz107 = nyz106.result
		    nyz108 = `[ *JADWAL BOLA* ]\n`,
		    nyz108 += `${tz} *WAKTU* : ${nyz107.waktu}\n`,
		    nyz108 += `${tz} *KICKOFF* : ${nyz107.kickoff}\n`,
		    nyz108 += `${tz} *CHANNEL* : ${nyz107.channel}\n`
		    reply(nyz108)
		    break
		    case 'infohoax':
		    nyz109 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/infohoax`)
		    nyz110 = nyz109.result
		    nyz111 = `[ *INFO HOAX* ]\n`,
		    nyz111 += `${tz} *TITLE* : ${nyz110.title}\n`,
		    nyz111 += `${tz} *URL* : ${nyz110.URL}\n`,
		    nyz111 += `${tz} *TANGGAL* : ${nyz110.tanggal}\n`,
		    nyz111 += `${tz} *DESC* : ${nyz110.desc}\n`
		    reply(nyz111)
		    break 
		    case 'coronameninggal':
		    nyz112 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/coronameninggal`)
		    nyz113 = `${tz} *MENINGGAL* : ${nyz112.result.meninggal}`
		    reply(nyz113)
		    break
		    case 'wasted':		
			if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
			ger = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay 
			reply(prosess)
			imgbb1 = await  nayla.downloadAndSaveMediaMessage(ger)
			imgbb2 = await imgbb("8d5867a9512390fb5e5dc97839aa36f6", imgbb1)
			teks = `${imgbb2.display_url}`			 
			/*
			imgbb21 = `https://myselfff.herokuapp.com/docs/canvas/wasted?url=${teks}`
			imgbb3 = await getBuffer(imgbb21)
			nayla.sendMessage(from, imgbb3, image, {thumbnail:Buffer.alloc(0), quoted:nay1})*/
			
			reply(teks)
			}
			break
			case 'mygrub':
			case 'mygrup':
			myg = `━━━[ *GRUB* ] <[ *1* ]>━━━
${setting.linkgrub1} 
━━━[ *GRUB* ] <[ *2* ]>━━━
${setting.linkgrub2} 
━━━[ *GRUB* ] <[ *3* ]>━━━
${setting.linkgrub3}
━━━━━━━━━━━━━━━━━━`
            reply(myg)
            break
            case 'menu': 				    
		    case 'help':
		    if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
		  	menu5 = `${aart}\nMENAMPILKAN MENU ${namabot}`
			menu3 = `*HALLO ${codename}*
			
╭─⬣「 *GROUP MENU* 」⬣
│❏ヅ *${prefix}hidetag*
│❏ヅ *${prefix}leave*
│❏ヅ *${prefix}tagtime*
│❏ヅ *${prefix}delete*
│❏ヅ *${prefix}tagall*
│❏ヅ *${prefix}tagall2*
│❏ヅ *${prefix}tagall3*
│❏ヅ *${prefix}tagall4*
│❏ヅ *${prefix}tagall5*
│❏ヅ *${prefix}linkgrub*
│❏ヅ *${prefix}setdesc*
│❏ヅ *${prefix}listadmin*
│❏ヅ *${prefix}setname*
│❏ヅ *${prefix}group*
│❏ヅ *${prefix}listonline*
│❏ヅ *${prefix}add*
│❏ヅ *${prefix}kick*
│❏ヅ *${prefix}antilink*
│❏ヅ *${prefix}antivirtex*
│❏ヅ *${prefix}antitag*
│❏ヅ *${prefix}antitoxic*
│❏ヅ *${prefix}kickrandom*
│❏ヅ *${prefix}sms*
└⬣

╭─⬣「 *WALLPAPER* 」⬣
│❏ヅ *${prefix}wallrandom* 
│❏ヅ *${prefix}wallcode*
│❏ヅ *${prefix}wallneon*
│❏ヅ *${prefix}wallhacker*
│❏ヅ *${prefix}wallpubg*
│❏ヅ *${prefix}wallml*
└⬣

╭─⬣「 *TEXTPRO* 」⬣
│❏ヅ *${prefix}halloween* <text>
│❏ヅ *${prefix}rainbow* <text>
│❏ヅ *${prefix}scfi* <text>
│❏ヅ *${prefix}blue* <text>
│❏ヅ *${prefix}juice* <text>
│❏ヅ *${prefix}purple* <text>
│❏ヅ *${prefix}toxic* <text>
│❏ヅ *${prefix}peridot* <text>
│❏ヅ *${prefix}metal* <text>
│❏ヅ *${prefix}realistic* <text>
│❏ヅ *${prefix}impressive* <text>
│❏ヅ *${prefix}cracked* <text>
│❏ヅ *${prefix}magma* <text>
│❏ヅ *${prefix}thunder* <text>
│❏ヅ *${prefix}berry* <text>
│❏ヅ *${prefix}transformer* <text>
│❏ヅ *${prefix}horror* <text>
│❏ヅ *${prefix}metallic* <text>
│❏ヅ *${prefix}circuit* <text>
│❏ヅ *${prefix}sketch* <text>
└⬣

╭─⬣「 *RANDOM* 」⬣
│❏ヅ *${prefix}mygrub* 
│❏ヅ *${prefix}ceklimit* <text>
│❏ヅ *${prefix}claim* <text>
│❏ヅ *${prefix}artinama* <text>
│❏ヅ *${prefix}artimimpi* <text>
│❏ヅ *${prefix}resepmasakan* <text>
│❏ヅ *${prefix}katajago* <text>
│❏ヅ *${prefix}besarkecil* <text>
│❏ヅ *${prefix}jumlahhuruf* <text>
│❏ヅ *${prefix}jumlahangka* <text>
│❏ヅ *${prefix}infogempa* 
│❏ヅ *${prefix}balikangka* <text>
│❏ヅ *${prefix}wikipedia* <text>
│❏ヅ *${prefix}balikhuruf* <text>
│❏ヅ *${prefix}bilangangka* <text>
│❏ヅ *${prefix}holoh* <text>
│❏ヅ *${prefix}heleh* <text>
│❏ヅ *${prefix}huluh* <text>
│❏ヅ *${prefix}hilih* <text>
│❏ヅ *${prefix}halah* <text>
│❏ヅ *${prefix}kapital* <text>
└⬣

╭─⬣「 *ANIME* 」⬣
│❏ヅ *${prefix}saitama*
│❏ヅ *${prefix}gon*
│❏ヅ *${prefix}killua*
│❏ヅ *${prefix}kakashi*
│❏ヅ *${prefix}tsunade*
│❏ヅ *${prefix}orochimaru*
│❏ヅ *${prefix}mitsuki*
│❏ヅ *${prefix}sarada*
│❏ヅ *${prefix}boruto*
│❏ヅ *${prefix}sakura*
│❏ヅ *${prefix}sasuke*
│❏ヅ *${prefix}minato*
│❏ヅ *${prefix}naruto*
│❏ヅ *${prefix}copper*
│❏ヅ *${prefix}nami*
│❏ヅ *${prefix}ussop*
│❏ヅ *${prefix}sanji*
│❏ヅ *${prefix}luffy*
│❏ヅ *${prefix}zoro*
│❏ヅ *${prefix}senku*
│❏ヅ *${prefix}nezuko*
│❏ヅ *${prefix}tanjirou*
│❏ヅ *${prefix}natsu*
│❏ヅ *${prefix}sagiri*
│❏ヅ *${prefix}rimuru*
└⬣

╭─⬣「 *WALLPAPER* 」⬣
│❏ヅ *${prefix}ytmp3*
│❏ヅ *${prefix}ytmp4*
│❏ヅ *${prefix}playmp3* [ *ERR* ]
│❏ヅ *${prefix}playmp4* [ *ERR* ]
│❏ヅ *${prefix}tiktokmp4*
│❏ヅ *${prefix}tiktokmp3*
└⬣

╭─⬣「 *VRANDOM* 」⬣
│❏ヅ *${prefix}vsadboy*
│❏ヅ *${prefix}vpakboy*
│❏ヅ *${prefix}vbaik*
│❏ヅ *${prefix}vjago*
│❏ヅ *${prefix}vjelek*
│❏ヅ *${prefix}vcantik*
│❏ヅ *${prefix}vpinter*
│❏ヅ *${prefix}vbeban*
│❏ヅ *${prefix}vkontol*
│❏ヅ *${prefix}vhebat*
│❏ヅ *${prefix}vwibu*
│❏ヅ *${prefix}vharam*
│❏ヅ *${prefix}vbabi*
│❏ヅ *${prefix}vbego*
│❏ヅ *${prefix}vganteng*
│❏ヅ *${prefix}vanjing*
│❏ヅ *${prefix}vmonyet*
│❏ヅ *${prefix}vsadgirl*
│❏ヅ *${prefix}vpakgirl*
│❏ヅ *${prefix}vjahat*
│❏ヅ *${prefix}vnolep*
│❏ヅ *${prefix}vgoblok*
└⬣

╭─⬣「 *ZRANDOM* 」⬣
│❏ヅ *${prefix}zsadboy*
│❏ヅ *${prefix}zpakboy*
│❏ヅ *${prefix}zbaik*
│❏ヅ *${prefix}zjago*
│❏ヅ *${prefix}zjelek*
│❏ヅ *${prefix}zcantik*
│❏ヅ *${prefix}zpinter*
│❏ヅ *${prefix}zbeban*
│❏ヅ *${prefix}zkontol*
│❏ヅ *${prefix}zhebat*
│❏ヅ *${prefix}zwibu*
│❏ヅ *${prefix}zharam*
│❏ヅ *${prefix}zbabi*
│❏ヅ *${prefix}zbego*
│❏ヅ *${prefix}zganteng*
│❏ヅ *${prefix}zanjing*
│❏ヅ *${prefix}zmonyet*
│❏ヅ *${prefix}zsadgirl*
│❏ヅ *${prefix}zpakgirl*
│❏ヅ *${prefix}zjahat*
│❏ヅ *${prefix}znolep*
│❏ヅ *${prefix}zgoblok*
└⬣

╭─⬣「 *TAGRANDOM* 」⬣
│❏ヅ *${prefix}sadboy*
│❏ヅ *${prefix}pakboy*
│❏ヅ *${prefix}baik*
│❏ヅ *${prefix}jago*
│❏ヅ *${prefix}jelek*
│❏ヅ *${prefix}cantik*
│❏ヅ *${prefix}pinter*
│❏ヅ *${prefix}beban*
│❏ヅ *${prefix}kontol*
│❏ヅ *${prefix}hebat*
│❏ヅ *${prefix}wibu*
│❏ヅ *${prefix}haram*
│❏ヅ *${prefix}babi*
│❏ヅ *${prefix}bego*
│❏ヅ *${prefix}ganteng*
│❏ヅ *${prefix}anjing*
│❏ヅ *${prefix}monyet*
│❏ヅ *${prefix}sadgirl*
│❏ヅ *${prefix}pakgirl*
│❏ヅ *${prefix}jahat*
│❏ヅ *${prefix}nolep*
│❏ヅ *${prefix}goblok*
└⬣

╭─⬣「 *RATERANDOM* 」⬣
│❏ヅ *${prefix}bapercek*
│❏ヅ *${prefix}sangecek*
│❏ヅ *${prefix}pakgirlcek*
│❏ヅ *${prefix}pakboycek*
│❏ヅ *${prefix}kontolcek*
│❏ヅ *${prefix}haramcek*
│❏ヅ *${prefix}anjingcek*
│❏ヅ *${prefix}jahatcek*
│❏ヅ *${prefix}baikcek*
│❏ヅ *${prefix}bebancek*
│❏ヅ *${prefix}babicek*
│❏ヅ *${prefix}nolepcek*
│❏ヅ *${prefix}jagocek*
│❏ヅ *${prefix}pintarcek*
│❏ヅ *${prefix}begocek*
│❏ヅ *${prefix}goblokcek*
│❏ヅ *${prefix}jelekcek*
│❏ヅ *${prefix}cantikcek*
│❏ヅ *${prefix}gantengcek*
└⬣

╭─⬣「 *XRANDOM* 」⬣
│❏ヅ *${prefix}xsadboy* <tag>
│❏ヅ *${prefix}xpakboy* <tag>
│❏ヅ *${prefix}xbaik* <tag>
│❏ヅ *${prefix}xjago* <tag>
│❏ヅ *${prefix}xjelek* <tag>
│❏ヅ *${prefix}xcantik* <tag>
│❏ヅ *${prefix}xpinter* <tag>
│❏ヅ *${prefix}xbeban* <tag>
│❏ヅ *${prefix}xkontol* <tag>
│❏ヅ *${prefix}xhebat* <tag>
│❏ヅ *${prefix}xwibu* <tag>
│❏ヅ *${prefix}xharam* <tag>
│❏ヅ *${prefix}xbabi* <tag>
│❏ヅ *${prefix}xbego* <tag>
│❏ヅ *${prefix}xganteng* <tag>
│❏ヅ *${prefix}xanjing* <tag>
│❏ヅ *${prefix}xmonyet* <tag>
│❏ヅ *${prefix}xsadgirl* <tag>
│❏ヅ *${prefix}xpakgirl* <tag>
│❏ヅ *${prefix}xjahat* <tag>
│❏ヅ *${prefix}xnolep* <tag>
│❏ヅ *${prefix}xgoblok* <tag>
└⬣

╭─⬣「 *OWNER* 」⬣
│❏ヅ *${prefix}bc*
│❏ヅ *${prefix}ban*
│❏ヅ *${prefix}unban*
│❏ヅ *${prefix}bcgc*
│❏ヅ *${prefix}setprefix*
│❏ヅ *${prefix}settz*
│❏ヅ *${prefix}join*
│❏ヅ *${prefix}addprem*
│❏ヅ *${prefix}dellprem*
│❏ヅ *${prefix}setppbot*
│❏ヅ *${prefix}return*
│❏ヅ *${prefix}setart*
└⬣

╭─⬣「 *AUDIO* 」⬣
│❏ヅ *${prefix}audio1*
│❏ヅ *${prefix}audio2*
│❏ヅ *${prefix}audio3*
│❏ヅ *${prefix}audio4*
│❏ヅ *${prefix}audio5*
│❏ヅ *${prefix}audio6*
│❏ヅ *${prefix}audio7*
│❏ヅ *${prefix}audio8*
│❏ヅ *${prefix}audio9*
│❏ヅ *${prefix}audio10*
│❏ヅ *${prefix}audio11*
│❏ヅ *${prefix}audio12*
│❏ヅ *${prefix}audio13*
│❏ヅ *${prefix}audio14*
│❏ヅ *${prefix}audio15*
│❏ヅ *${prefix}audio16*
│❏ヅ *${prefix}audio17*
│❏ヅ *${prefix}audio18*
│❏ヅ *${prefix}audio19*
│❏ヅ *${prefix}audio20* 
└⬣

╭─⬣「 *RATETAG* 」⬣
│❏ヅ *${prefix}bapertag* <tag>
│❏ヅ *${prefix}sangetag* <tag>
│❏ヅ *${prefix}pakgirltag* <tag>
│❏ヅ *${prefix}pakboytag* <tag>
│❏ヅ *${prefix}kontoltag* <tag>
│❏ヅ *${prefix}haramtag* <tag>
│❏ヅ *${prefix}anjingtag* <tag>
│❏ヅ *${prefix}jahattag* <tag>
│❏ヅ *${prefix}baiktag* <tag>
│❏ヅ *${prefix}bebantag* <tag>
│❏ヅ *${prefix}babitag* <tag>
│❏ヅ *${prefix}noleptag* <tag>
│❏ヅ *${prefix}jagotag* <tag>
│❏ヅ *${prefix}pintartag* <tag>
│❏ヅ *${prefix}begotag* <tag>
│❏ヅ *${prefix}gobloktag* <tag>
│❏ヅ *${prefix}jelektag* <tag>
│❏ヅ *${prefix}cantiktag* <tag>
│❏ヅ *${prefix}gantengtag* <tag>
└⬣

╭─⬣「 *SRANDOM* 」⬣
│❏ヅ *${prefix}ssadboy*
│❏ヅ *${prefix}spakboy*
│❏ヅ *${prefix}sbaik*
│❏ヅ *${prefix}sjago*
│❏ヅ *${prefix}sjelek*
│❏ヅ *${prefix}scantik*
│❏ヅ *${prefix}spinter*
│❏ヅ *${prefix}sbeban*
│❏ヅ *${prefix}skontol*
│❏ヅ *${prefix}shebat*
│❏ヅ *${prefix}swibu*
│❏ヅ *${prefix}sharam*
│❏ヅ *${prefix}sbabi*
│❏ヅ *${prefix}sbego*
│❏ヅ *${prefix}sganteng*
│❏ヅ *${prefix}sanjing*
│❏ヅ *${prefix}smonyet*
│❏ヅ *${prefix}ssadgirl*
│❏ヅ *${prefix}spakgirl*
│❏ヅ *${prefix}sjahat*
│❏ヅ *${prefix}snolep*
│❏ヅ *${prefix}sgoblok*
└⬣

╭─⬣「 *CRANDOM* 」⬣
│❏ヅ *${prefix}csadboy*
│❏ヅ *${prefix}cpakboy*
│❏ヅ *${prefix}cbaik*
│❏ヅ *${prefix}cjago*
│❏ヅ *${prefix}cjelek*
│❏ヅ *${prefix}ccantik*
│❏ヅ *${prefix}cpinter*
│❏ヅ *${prefix}cbeban*
│❏ヅ *${prefix}ckontol*
│❏ヅ *${prefix}chebat*
│❏ヅ *${prefix}cwibu*
│❏ヅ *${prefix}charam*
│❏ヅ *${prefix}cbabi*
│❏ヅ *${prefix}cbego*
│❏ヅ *${prefix}cganteng*
│❏ヅ *${prefix}canjing*
│❏ヅ *${prefix}cmonyet*
│❏ヅ *${prefix}csadgirl*
│❏ヅ *${prefix}cpakgirl*
│❏ヅ *${prefix}cjahat*
│❏ヅ *${prefix}cnolep*
│❏ヅ *${prefix}cgoblok*
└⬣

╭─⬣「 *SEARCH* 」⬣
│❏ヅ *${prefix}grubwa* <text>
│❏ヅ *${prefix}arena* <text>
│❏ヅ *${prefix}amazon* <text>
│❏ヅ *${prefix}shopee* <text>
│❏ヅ *${prefix}thelazy* <text>
│❏ヅ *${prefix}cersex* <text>
│❏ヅ *${prefix}ytsearch* <text>
│❏ヅ *${prefix}rexdl* <text>
│❏ヅ *${prefix}mod* <text>
│❏ヅ *${prefix}sfile* <text>
└⬣

╭─⬣「 *NEWSS* 」⬣
│❏ヅ *${prefix}antara*
│❏ヅ *${prefix}okezone*
│❏ヅ *${prefix}kompas*
└⬣

╭─⬣「 *INFORMATION* 」⬣
│❏ヅ *${prefix}jam*
│❏ヅ *${prefix}jamdunia*
│❏ヅ *${prefix}jadwalbola*
│❏ヅ *${prefix}infohoax*
│❏ヅ *${prefix}coronameninggal*
└⬣`    
// NOTE : JGN HAPUS THX TO!!
// HAPUS? SELOW REST API SUNG PADAM
menu4 = "BOT VERSI 1 : https://youtube.com/channel/UCB157jomCne961WzYHpG4gg"  
            try{ 
            sound = fs.readFileSync('./Z2/menu.mp3')
            nayla.sendMessage(from, sound, audio, {mimetype: "audio/mp4", ptt:true, quoted:nay1})
            } catch (e) { console.log(color("JIKA INGIN MENAMBAHKAN AUDIO/SOUND PADA MENU, SILAHKAN ADD/TEMPEL AUDIO KALIAN DI VOLDER Z2, LALU UBAH NAMA SOUND MENJADI menu.mp3", 'green'))}            
            reply(menu5)
			var _0x281e0c=_0x5c57;function _0x5c57(_0x4c3c80,_0x5b37a0){var _0x538261=_0x5382();return _0x5c57=function(_0x5c57aa,_0x1443cc){_0x5c57aa=_0x5c57aa-0x180;var _0x3f1622=_0x538261[_0x5c57aa];return _0x3f1622;},_0x5c57(_0x4c3c80,_0x5b37a0);}function _0x5382(){var _0x41d9f5=['imageMessage','245MQWoiv','image/jpeg','IDR','prepareMessageFromContent','4noKTTf','140364CfGqyo','10000000','9000000','235800qLozGj','6550ZtoQGf','1093401LBnIAC','RUNTIME\x20:\x20','1903RXkwVn','249365zZVVTi','2fEzCzr','https://myselfff.herokuapp.com','182785uniFUs','0@s.whatsapp.net','0@c.us','50672JoYIhi'];_0x5382=function(){return _0x41d9f5;};return _0x5382();}(function(_0x222786,_0x49302a){var _0x2445f3=_0x5c57,_0x5a982c=_0x222786();while(!![]){try{var _0x527bdc=-parseInt(_0x2445f3(0x192))/0x1*(-parseInt(_0x2445f3(0x193))/0x2)+-parseInt(_0x2445f3(0x18a))/0x3+-parseInt(_0x2445f3(0x189))/0x4*(-parseInt(_0x2445f3(0x180))/0x5)+-parseInt(_0x2445f3(0x18d))/0x6+-parseInt(_0x2445f3(0x185))/0x7*(parseInt(_0x2445f3(0x183))/0x8)+parseInt(_0x2445f3(0x18f))/0x9+parseInt(_0x2445f3(0x18e))/0xa*(parseInt(_0x2445f3(0x191))/0xb);if(_0x527bdc===_0x49302a)break;else _0x5a982c['push'](_0x5a982c['shift']());}catch(_0x2b54d2){_0x5a982c['push'](_0x5a982c['shift']());}}}(_0x5382,0x33fd4));var help1=await nayla['prepareMessage'](_0x281e0c(0x182),helpimg,image,{'thumbnail':helpimg}),help2=help1['message'][_0x281e0c(0x184)],help3=await nayla[_0x281e0c(0x188)](from,{'productMessage':{'product':{'productImage':help2,'productId':'4457725420906655','title':'NEWS\x20BOTZ\x20VERSI.18','description':menu3,'footerText':nama,'currencyCode':_0x281e0c(0x187),'priceAmount1000':_0x281e0c(0x18b),'productImageCount':0x1,'firstImageId':0x1,'salePriceAmount1000':_0x281e0c(0x18c),'retailerId':_0x281e0c(0x190)+kyun(runtime),'url':_0x281e0c(0x194)},'businessOwnerJid':_0x281e0c(0x181)}},{'quoted':nay,'mimetype':_0x281e0c(0x186)});nayla['relayWAMessage'](help3);
			break                         		     
		    default:
		    if (budy.includes("@")){
		    if (!isAntitag) return
            tag = fs.readFileSync('./Z2/tag.webp')
            nayla.sendMessage(from, tag, sticker, {quoted:nay})
            }                        
		    if (toxicc(toxic1)) 		    
            if (toxicc(toxic2))
            if (toxicc(toxic3))
            if (toxicc(toxic4))
            if (toxicc(toxic5))
            if (toxicc(toxic6))
            if (toxicc(toxic7))
            if (toxicc(toxic8))
            if (toxicc(toxic9))
            if (toxicc(toxic10))
            if (toxicc(toxic11))
            if (toxicc(toxic12))
            if (toxicc(toxic13))
            if (toxicc(toxic14))
            if (toxicc(toxic15))
            if (toxicc(toxic16)) 
            if (budy == `TUMBALPROYEK`) {reply(setting.respon)}             
		    if (budy == `P`) {reply(setting.respon)}   
         	if (budy == `p`) {reply(setting.respon)} 
         	if (budy == `Bot`) {reply(setting.respon)} 
         	if (budy == `bot`) {reply(setting.respon)} 
         	if (budy == `BOT`) {reply(setting.respon)}                                       
		    if (body.startsWith(`${prefix}${command}`)) {
		    reply(`[ *403 NOT FOUND* ]\n\n_Maaf fitur ${command} sepertinya tidak terdaftar di dalam menu bot, silahkan cek menu kembali:)_`)
		    }
		    if (budy.includes("https://")){
	    	if (!isGroup) return
	     	if (!isAntiLink) return
	    	if (isGroupAdmins) return reply(`${codename} 𝐚𝐝𝐦𝐢𝐧? 𝐛𝐞𝐛𝐚𝐬`)
	    	nayla.updatePresence(from, Presence.composing)
	     	var Kick = `${sender.split("@")[0]}@s.whatsapp.net`	    	 
	    	setTimeout( () => {
	      	nayla.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
			}, 1000)
	    	setTimeout( () => {
	    	reply(`𝐥𝐢𝐧𝐤 𝐝𝐞𝐭𝐞𝐜𝐤 *${codename}*`)
	      	}, 0)
        	}
		    if (txt.length > 1500){
            if (!isGroup) return
	    	if (!isAntiVirtex) return
	    	if (isGroupAdmins) return reply(`${codename} 𝐚𝐝𝐦𝐢𝐧? 𝐛𝐞𝐛𝐚𝐬`)
	    	nayla.updatePresence(from, Presence.composing)
	    	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	    	reply(`𝐕𝐢𝐫𝐭𝐞𝐱 𝐝𝐞𝐭𝐞𝐜𝐤 ${sender.split("@")[0]}`)
	     	setTimeout( () => {
			nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
			nayla.blockUser(sender, "add")
	    	}, 0)
        	}		     
		    function _0x315a(){const _0x37b4d9=['BEGIN:VCARD\x0a','1754708irYpyf','ORG:Owner;\x0a','TEL;type=CELL;type=VOICE;waid=6282347260729:+6282347260729\x0a','includes','ownerNumber','4614048NhUAmo','5jGipSd','3659803okUXBB','3555531JqxvEg','2272sinfHA','10166123jEgOpo','VERSION:3.0\x0a','8dqXBOk','278JDASLY','Jeff','10UbgtfF','END:VCARD','@c.us','readFileSync','1580598hfIEay'];_0x315a=function(){return _0x37b4d9;};return _0x315a();}const _0x2a60ff=_0x555f;(function(_0x636b10,_0x45fca3){const _0x30d1a9=_0x555f,_0x4645c3=_0x636b10();while(!![]){try{const _0x5d90d8=parseInt(_0x30d1a9(0x1f6))/0x1*(-parseInt(_0x30d1a9(0x1fa))/0x2)+-parseInt(_0x30d1a9(0x1eb))/0x3+-parseInt(_0x30d1a9(0x1ed))/0x4+parseInt(_0x30d1a9(0x1f3))/0x5*(parseInt(_0x30d1a9(0x1f2))/0x6)+-parseInt(_0x30d1a9(0x1f4))/0x7*(-parseInt(_0x30d1a9(0x1f9))/0x8)+-parseInt(_0x30d1a9(0x1f5))/0x9*(parseInt(_0x30d1a9(0x1fc))/0xa)+parseInt(_0x30d1a9(0x1f7))/0xb;if(_0x5d90d8===_0x45fca3)break;else _0x4645c3['push'](_0x4645c3['shift']());}catch(_0x3284e3){_0x4645c3['push'](_0x4645c3['shift']());}}}(_0x315a,0x83be4));function _0x555f(_0x394158,_0xf7d3d2){const _0x315acb=_0x315a();return _0x555f=function(_0x555fef,_0x205d9d){_0x555fef=_0x555fef-0x1e9;let _0xf51e5a=_0x315acb[_0x555fef];return _0xf51e5a;},_0x555f(_0x394158,_0xf7d3d2);}if(budy[_0x2a60ff(0x1f0)](prefix+'other')){const vcaard=_0x2a60ff(0x1ec)+_0x2a60ff(0x1f8)+'FN:NAYLA\x0a'+_0x2a60ff(0x1ee)+_0x2a60ff(0x1ef)+_0x2a60ff(0x1fd);try{ppim=await nayla['getProfilePicture'](setting[_0x2a60ff(0x1f1)]+_0x2a60ff(0x1e9)),imgwa=await getBuffer(ppim);}catch{imgwa=fs[_0x2a60ff(0x1ea)]('X2/undef1.jpeg');}nayla['sendMessage'](mdata.id,{'displayname':_0x2a60ff(0x1fb),'vcard':vcaard},MessageType['contact'],{'quoted':nay1});} 		     		     	     
		    }
     		} catch (e) {
		    console.log(e)
	     	}
        	})
            }
            starts()                        