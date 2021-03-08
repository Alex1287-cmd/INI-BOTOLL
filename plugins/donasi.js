let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • SMART[SMARTFREENNN][08881393308]
│ • Telkomsel []
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
