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
            name: "Movies 2",
            items: [
                {
                    id: "mv-2",
                    title: "Predator.Badlands.2025",
                    version: "2160p.iT.WEB-DL.DV.HDR10+.MULTi.DDP5.1.Atmos.H265.MP4-BEN.THE.MEN",
                    size: "22.9GB",
                    seeders: 693,
                    leechers: 1045,
                    magnets: [String.raw`magnet:?xt=urn:btih:9c652e73c46947b41384594c92dc4996b919583e&dn=Predator.Badlands.2025.2160p.iT.WEB-DL.DV.HDR10 .MULTi.DDP5.1.Atmos.H265.MP4-BEN.THE.MEN&xl=24591767116&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.opentrackr.org:1337&tr=udp://open.stealth.si:80/announce&tr=udp://public.demonoid.ch:6969/announce&tr=udp://explodie.org:6969/announce&tr=udp://open.demonii.com:1337/announce&tr=udp://open.demonoid.ch:6969/announce&tr=http://bvarf.tracker.sh:2086/announce&tr=http://tracker.renfei.net:8080/announce&tr=https://tracker.pmman.tech:443/announce&tr=udp://bandito.byterunner.io:6969/announce&tr=udp://d40969.acod.regrucolo.ru:6969/announc&tr=http://tracker.bt4g.com:2095/announce&tr=http://bt.okmp3.ru:2710/announce&tr=udp://tracker.torrent.eu.org:451/announce`],
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
            name: "Formula 1 2026 : R02 ChineseGP",
            items: [
                {
                    id: "fc-2",
                    title: "Sprint Race",
                    version: "F1TV 4K HLG 2160p",
                    size: null,
                    seeders: null,
                    leechers: null,
                    magnets: null,
                    torrents: null
                },
                {
                    id: "fc-3",
                    title: "Qualifying",
                    version: "F1TV 4K HLG 2160p",
                    size: null,
                    seeders: null,
                    leechers: null,
                    magnets: null,
                    torrents: null
                },
                {
                    id: "fc-4",
                    title: "Race",
                    version: "F1TV 4K HLG 2160p",
                    size: null,
                    seeders: null,
                    leechers: null,
                    magnets: null,
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