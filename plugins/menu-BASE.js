let handler  = async (m, { conn, usedPrefix: _p }) => {
  let preview = {}
  try {
    if (!conn.menu) preview = await conn.generateLinkPreview('https://github.com/Arya274/Arya-Bot')
  } catch (e) {
    try {
      if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
    } catch (e) {}
  } finally {
    let exp = global.DATABASE.data.users[m.sender].exp
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id-Id'
    let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    let text =  conn.menu ? conn.menu
      .replace(/%p/g, _p)
      .replace(/%exp/g, exp)
      .replace(/%name/g, name)
      .replace(/%weton/g, weton)
      .replace(/%week/g, week)
      .replace(/%date/g, date)
      .replace(/%time/g, time): `




🇸 🇱  🇨 🇾 🇧 🇪 🇷 
🇼 🇦 🇷 🇷 🇮 🇴 🇷 🇸 

*❮ 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗕𝗢𝗧 ❯* 
[*]
┋
●
╭══•› *「 INTRO」*
│
│OWNERS: John kener 
│                & Dave smith
│
│@ CYBER WARRIORS™
│
╰═════════════⦂⦁
Hi, ${name} 👋
Exp: ${exp}
📟 Time: ${time}
📆 Date: ${week}, ${date}
${more.repeat(1000)}
How to Add XP:
+1 Exp/regular message
+10 Exp/command
⚙
╠═✪〘 *MENU* 〙✪═
║
╠═〘 Commands 〙 ═
╠➥ ${_p}menu
╠➥ ${_p}help
╠➥ ${_p}info
╠➥ ${_p}?
║
╠═〘 👉🖤👈 〙 ═
║
╠➥${_p}command1
║
║
╠➥${_p}command2
║
║
╠➥${_p}command3
║
║
╠➥${_p}command4
║
║
╠➥${_p}command5
║
║
╠➥${_p}command6
║
║
╠➥${_p}command7
║
║
╠➥${_p}command8
║
║
╠➥${_p}command9
║
║
╠➥${_p}command10
║
║
║
╠➥ ${_p}stiker (caption)
║( ෆොටෝ ➜ ස්ටිකර්ස් )
║
╠➥ ${_p}toimg (reply)
║(ස්ටිකර් ➜ ෆොටෝ )
║
╠➥ ${_p}ssweb <url>
║(website preview  
║  screenshots )
║
╠➥ ${_p}modApk
║(මොඩ් ඇප් සෙට් එක )
║
╠➥ ${_p}bucin
╠➥ ${_p}sswebf <url>
╠➥ ${_p}google <pencarian>
╠➥ ${_p}googlef <pencarian>
╠➥ ${_p}readmore <teks>|<sembunyi>
╠➥ ${_p}quran
╠➥ ${_p}gtts
●
╠═ *〘 Group 〙* ═
╠➥ ${_p}add[62xxxxxxxxx]
╠➥ ${_p}promote [@tagmember]
╠➥ ${_p}demote [@tagadmin]
╠➥ ${_p}linkgrup
╠➥ ${_p}pengumuman [text]
╠➥ ${_p}hidetag [text]
╠➥ ${_p}kick @Member
║
║
╠═〘  *OWNER* 〙 ═
╠➥ ${_p}bcgc <teks>
╠➥ ${_p}setmenu <teks>
╠➥ ${_p}deletechat (chat grup)
╠➥ ${_p}deletechat group
╠➥ ${_p}mutechat (chat grup)
╠➥ ${_p}mutechat group
║
╠═〘 *JOIN WITH US* 〙 ═
║
╠➥ YouTube : 
║         https://bit.ly/3a3R4Vr
║
╠➥ Facebook group : 
║         https://bit.ly/2YYBMeq
╠➥ Facebook page :
║         https://bit.ly/2NakzfB
╠➥ Telegram :
║         https://t.me/by_sstp
║
╠═〘 Info Bot 〙 ═
╠➥ ${_p}info
╠➥ @CYBER_WARRIORS™
║
╠═════
║ Advanced:
║  > return m
║
●
*⦁𝗦𝗟 𝗖𝗬𝗕𝗘𝗥 𝗪𝗔𝗥𝗥𝗜𝗢𝗥𝗦 𝗕𝗢𝗧⦁*

(මේක එඩිට් කරලා ඔයාගේ පෝස්ට් එක දාගන්න )



`.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(main|help|\?|මීට අමතරව ඕනේ නම් දාගන්න)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
