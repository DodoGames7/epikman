module.exports = {
type: "basicCommand",
name: "stats",
code: `$title[1;$username[$clientID]'s stats]
$addField[1;Uptime;$uptime;yes]
$addField[1;Aoi.js;\`$packageVersion\`;yes]
$addField[1;cpu;$cpu;yes]
$addField[1;ram;$ram;yes]
$addField[1;ping;\`$pingms\`;yes]
$addField[1;Node;\`$nodeVersion\`;yes]
$addField[1;Dependencies;$packageDependencies;no]
$color[1;#5F8DCE]`
}