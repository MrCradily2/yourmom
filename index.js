html = ''
var recents = localStorage.getItem("recents").split("|");
for(i=0; i < recents.length; i++) { html += recents[i] }
document.getElementById('recents').innerhtml = html