let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [083813417529] 
│ •  [083813417529]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
