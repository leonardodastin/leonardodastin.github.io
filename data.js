/*const DATA = {
    categories: [
        {
            name: "Movies",
            items: [
                {
                    id: "mv-1",
                    title: "Predator.Badlands.2025",
                    version: "2160p.iT.WEB-DL.DV.HDR10+.MULTi.DDP5.1.Atmos.H265.MP4-BEN.THE.MEN",
                    size: "22.9GB",
                    seeders: 693,
                    leechers: 1045,
                    magnets: [String.raw`magnet:?xt=urn:btih:9c652e73c46947b41384594c92dc4996b919583e&dn=Predator.Badlands.2025.2160p.iT.WEB-DL.DV.HDR10 .MULTi.DDP5.1.Atmos.H265.MP4-BEN.THE.MEN&xl=24591767116&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.opentrackr.org:1337&tr=udp://open.stealth.si:80/announce&tr=udp://public.demonoid.ch:6969/announce&tr=udp://explodie.org:6969/announce&tr=udp://open.demonii.com:1337/announce&tr=udp://open.demonoid.ch:6969/announce&tr=http://bvarf.tracker.sh:2086/announce&tr=http://tracker.renfei.net:8080/announce&tr=https://tracker.pmman.tech:443/announce&tr=udp://bandito.byterunner.io:6969/announce&tr=udp://d40969.acod.regrucolo.ru:6969/announc&tr=http://tracker.bt4g.com:2095/announce&tr=http://bt.okmp3.ru:2710/announce&tr=udp://tracker.torrent.eu.org:451/announce`],
                    torrents: ['Torrents/Predator.Badlands.2025.torrent']
                }
            ]
        },
        {
            name: "Sample",
            items: [
                {
                    id: "sa-2",
                    title: "Title",
                    version: "Version",
                    size: "GB",
                    seeders: 0,
                    leechers: 0,
                    magnets: [String.raw``],
                    torrents: null
                }
            ]
        }
    ]
};*/

// data.js
const DATA = {
    categories: [
        {
            name: "Breaking Bad",
            items: [
                {
                    id: "bb-21",
                    title: "Complete 1080p",
                    version: "Full HD BD-Remux by Wild_Cat",
                    size: "767.30 GB",
                    seeders: 16,
                    leechers: 30,
                    magnets: [String.raw`magnet:?xt=urn:btih:6CB44E28B6BF9868E1DEACB5A0F431C10C967C52&dn=Breaking+Bad+Complete+1080p+Full+HD+BD-Remux+by+Wild_Cat&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Fplab.site%2Fann%3Fuk%3DMmhjQy7wBS&tr=udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker2.dler.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.tvunderground.org.ru%3A3218%2Fannounce&tr=udp%3A%2F%2Fudp.tracker.projectk.org%3A23333%2Fannounce&tr=udp%3A%2F%2Ftracker.therarbg.to%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Fwepzone.net%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.tryhackx.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonoid.ch%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce`,
                        String.raw`magnet:?xt=urn:btih:6CB44E28B6BF9868E1DEACB5A0F431C10C967C52&dn=Breaking+Bad+Complete+1080p+Full+HD+BD-Remux+by+Wild_Cat+%5B+UIndex.org+%5D%20%20%20%20%20%20%20%20&tr=udp://tracker.bittor.pw:1337/announce%20%20%20%20%20%20%20%20&tr=udp://tracker.opentrackr.org:1337/announce%20%20%20%20%20%20%20%20&tr=udp://tracker.dler.org:6969/announce%20%20%20%20%20%20%20%20&tr=udp://open.stealth.si:80/announce%20%20%20%20%20%20%20%20&tr=udp://tracker.torrent.eu.org:451/announce%20%20%20%20%20%20%20%20&tr=udp://exodus.desync.com:6969/announce%20%20%20%20%20%20%20%20&tr=udp://open.demonii.com:1337/announce`
                    ],
                    torrents: null
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