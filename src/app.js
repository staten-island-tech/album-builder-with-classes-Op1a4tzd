class Album {
    contructor(title, artist, url){
        this.title = title;
        this.artist = artist;
        this.url = url;
    }
}


document.getElementById("form").addEventListener("submit", function (e) {

    const title = document.getElementById("title").value;
    const artist = document.getElementById("artist").value;
    const url = document.getElementById("url").value;

    const album = new Album(title, artist, url);
    const ui
}
)