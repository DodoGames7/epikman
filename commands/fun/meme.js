module.exports = {
  name: "meme",
  code: `$title[1;$getObjectProperty[title];$getObjectProperty[image]]
  $image[1;$getObjectProperty[image]]
  $footer[1;👍 $getObjectProperty[upvotes] | 💬 $replaceText[$getObjectProperty[comments];;0;-1]
  $color[1;#5F8DCE] $createObject[$jsonRequest[https://api.popcat.xyz/meme;]]
`
} // posts random Reddit memes from pop cat api