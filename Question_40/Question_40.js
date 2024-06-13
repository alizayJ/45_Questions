function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Create three different album objects using make_album function
var album1 = make_album('BBC Earth', 'Planet Earth II Soundtrack');
var album2 = make_album('National Geographic', 'Wildlife Wonders');
var album3 = make_album(' NASA', ' NASA', 27);
// Print each album object to the console
console.log(album1);
console.log(album2);
console.log(album3);
// Create an album with the number of tracks included
var album4 = make_album('Stephen Hawking', 'A Brief History of Time', 6);
// Print the album with tracks to the console
console.log(album4);
