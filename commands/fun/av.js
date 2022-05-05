module.exports = {
type: "basicCommand",
name: "avatar",
code: `$title[1; Here's the avatar you want]
$image[1;$userAvatar[$message]]`
}