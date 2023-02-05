let url = "https://kontests.net/api/v1/all"

let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contests) => {
  console.log(contests)
  ihtml = ""
  for (item in contests) {
    console.log(contests[item])
    ihtml += `
         <div class="card" style="width: 22rem;">
      <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210125191729/Google%E2%80%99s-Coding-Competitions-You-Can-Consider-in-2021.png" class="card-img-top" alt="...">
      
      <div class="card-body">
        <h5 class="card-title">${contests[item].name}</h5>
        <p><h4> <span id="heading">Platform</span>:${contests[item].site}</h4></p>
        <p> <span id="heading">Duration</span>: ${contests[item].duration} min </p>
        <p> <span id="heading">Contest starts in 24Hrs?</span> : ${contests[item].in_24_hours}</p>
        <p> <span id="heading">Status</span>: ${contests[item].status}</p>
        <p> <span id="heading">Starts On</span> : ${contests[item].start_time}</p>
        <p> <span id="heading">End On</span> : ${contests[item].end_time}</p>
        <a href="${contests[item].url}" class="btn btn-primary">visit Now</a>
      </div>
    </div>

     `
  }
  cardContainer.innerHTML = ihtml
})

  document.getElementById('input').addEventListener('change', function() {
            document.body.classList.toggle("dark");
        })
