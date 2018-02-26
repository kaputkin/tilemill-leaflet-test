var map =
    L.map('my-map').setView([40.713435,-73.971291], 12);
    var Stamen_TerrainBackground = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.{ext}', {
    	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    	subdomains: 'abcd',
    	minZoom: 8,
    	maxZoom: 14,
    	ext: 'png'
    }).addTo(map);

L.tileLayer('http://github.com/kaputkin/pools_voting_map/tree/master/data/data/{z}/{x}/{y}.png', {
  maxZoom: 14
}).addTo(map);
