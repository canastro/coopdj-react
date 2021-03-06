module.exports = {
    PLAYLIST: {
        ALL: 'http://0.0.0.0:5000/playlist?action=all',
        NEXT: 'http://0.0.0.0:5000/playlist?action=next',
        RESET: 'http://0.0.0.0:5000/playlist?action=reset',
        POST: 'http://0.0.0.0:5000/playlist'
    },
    MUSIC: {
        PLAY: 'http://0.0.0.0:5000/musics/{{ID}}?action=play',
        VOTE_UP: 'http://0.0.0.0:5000/musics/{{ID}}?action=vote_up',
        VOTE_DOWN: 'http://0.0.0.0:5000/musics/{{ID}}?action=vote_down'
    }
}
