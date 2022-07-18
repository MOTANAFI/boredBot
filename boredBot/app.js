document.getElementById("get-activity").addEventListener("click", function() {
    fetch('url')
      .then(response => response.json())
      .then(data => {
        document.getElementById("activity").textContent = data.activity
        document.getElementById("title").textContent = "🦾 HappyBot🦿"
        document.body.classList.add("fun")
      })
  })
