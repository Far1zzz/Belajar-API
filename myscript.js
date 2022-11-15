let namaTim = document.getElementById("timName");
let dataTim = document.getElementById("dataPemain");
let coachName = document.getElementById("coach");
let coachNationality = document.getElementById("nationality");
let birthCoach = document.getElementById("coachBirth");
let runKompe = document.getElementById("runCompe")


fetch("http://127.0.0.1:5500/test.json")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    console.log(data.squad)
    namaTim.innerHTML = "<img src='https://crests.football-data.org/90.png' width = '60px'></img>" +"  " + data.name + "(" + data.shortName + ")"
    coachName.innerHTML = "Coach : " + data.coach.name
    coachNationality.innerHTML = "Nationality : " + data.coach.nationality
    birthCoach.innerHTML = "Date Of Birth : " + data.coach.dateOfBirth
    runKompe.innerHTML = "Competitions : " + "<img src='https://crests.football-data.org/EL.png' width = '18px'></img>" + data.runningCompetitions[1].name + "(" + data.runningCompetitions[1].type + ")"
    data.squad.forEach(showData)
  })
.catch(error => {
  console.log(error)
});

function showData(value, index){
  dataTim.innerHTML += `<tr><td>${value.name}</td><td>${value.position}</td><td>${value.dateOfBirth}</td><td>${value.nationality}</td></tr>`
}

