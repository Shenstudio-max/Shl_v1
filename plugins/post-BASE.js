let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `

ඔයා command menu එකේ දාපු කමාන්ඩ් එකට හරියන පෝස්ට් එක මෙතන දාන්න..

`.trim(), m)
}
handler.command = /^(මේ පෝස්ට් එක එන්න ඕනේ මොන කමන්ඩ් එක ගහපුවාමද කියල දාන්න මෙතන)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

