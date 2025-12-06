// data.js
const DATA = {
    categories: [
        {
            name: "Shows",
            items: [
                {
                    id: "shows-1",
                    title: "Pluribus S01E06",
                    version: "HDP 2160p ATVP WEB-DL DDP5 1 DV HDR H 265-NTb",
                    size: "8.73GB",
                    seeders: 2460,
                    leechers: 5527,
                    magnets: [String.raw`magnet:?xt=urn:btih:f665ecb9a834b6c3935e9c4baf672fe3ce5872b7&dn=Pluribus+S01E06+HDP+2160p+ATVP+WEB-DL+DDP5+1+DV+HDR+H+265-NTb+%5B+UIndex.org+%5D%20%20%20%20%20%20%20%20&tr=udp://tracker.bittor.pw:1337/announce%20%20%20%20%20%20%20%20&tr=udp://tracker.opentrackr.org:1337/announce%20%20%20%20%20%20%20%20&tr=udp://tracker.dler.org:6969/announce%20%20%20%20%20%20%20%20&tr=udp://open.stealth.si:80/announce%20%20%20%20%20%20%20%20&tr=udp://tracker.torrent.eu.org:451/announce%20%20%20%20%20%20%20%20&tr=udp://exodus.desync.com:6969/announce%20%20%20%20%20%20%20%20&tr=udp://open.demonii.com:1337/announce`],
                    torrents: [null]
                },
                {
                    id: "shows-2",
                    title: "Formula 1",
                    version: null,
                    size: null,
                    seeders: null,
                    leechers: null,
                    magnets: [String.raw`https://1337x.to/user/showstopper/`],
                    torrents: [null]
                }
            ]
        }
    ]
};

let downloadedData = { categories: [] };
let expandedCategory = null;
let showDownloaded = false;

window.DATA = DATA;
window.downloadedData = downloadedData;
window.expandedCategory = expandedCategory;
window.showDownloaded = showDownloaded;

// Date changed Dec 6 08:22 PM