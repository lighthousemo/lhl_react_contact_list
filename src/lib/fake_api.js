/**
 * This function simulates an API.
 * It will return an array of contacts after a 300ms delay using setTimeout
 */
export function getContacts(callback) {
  var contacts = [
    {id: 1, name: "Daffy Duck", email: "daffy@gmail.com", image_url: "http://www.avatarsdb.com/avatars/daffy_duck_05.jpg"},
    {id: 2, name: "Tweety", email: "tweety@gmail.com", image_url: "http://avatarbox.net/avatars/img35/tweety_smoke_avatar_picture_56672.jpg"},
    {id: 3, name: "Elmer Fudd", email: "elmer@gmail.com", image_url: "http://vignette3.wikia.nocookie.net/cnfantasyschedules/images/8/88/Elmer_Fudd_(Looney_Tunes).png"},
    {id: 4, name: "Bugs Bunny", email: "bugs.bunny@gmail.com", image_url: "http://static.comicvine.com/uploads/original/6/62058/2013735-59654_bugs_bunny.jpg"},
    {id: 5, name: "Wile E. Coyote", email: "wile@gmail.com", image_url: "https://38.media.tumblr.com/avatar_0442287fea85_128.png"},
    {id: 6, name: "Donald Duck", email: "donald@gmail.com", image_url: "http://www.avatarsdb.com/avatars/donald_duck_01.gif"},
  ]

  setTimeout(() => { callback(contacts) }, 1000)
}
