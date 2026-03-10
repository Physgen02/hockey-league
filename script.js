function loadStandings(){

let html="<tr><th>Team</th><th>W</th><th>L</th><th>Pts</th></tr>"

league.teams.forEach(t=>{

html+=`
<tr>
<td>${t.name}</td>
<td>${t.wins}</td>
<td>${t.losses}</td>
<td>${t.points}</td>
</tr>
`
})

document.getElementById("standingsTable").innerHTML=html

}

function loadNextGames(){

let html=""

league.schedule.forEach(g=>{

html+=`
<div>
${g.date} — ${g.home} vs ${g.away}
</div>
`

})

document.getElementById("nextGames").innerHTML=html

}

loadStandings()
loadNextGames()
