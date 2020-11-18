#! /usr/bin/env node

const config = require('./config')
const meow = require('meow')
const cli = meow(config.helpText, config.flags)

if (!cli.flags.path) {
    return console.log('Error: Path is undefined')
}

const generateXML = require('./generate-xml')
const fs = require('fs')
const xml = generateXML(cli.flags)
const path = cli.flags.path
const file = `${cli.flags.name || 'default'}.sqpreset`
const dest = `${path}/${file}`

fs.writeFile(dest, xml, (err) => {
    if (err) return console.log(err)
    console.log(`File written to "${dest}"`)
})
