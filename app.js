
function fetchGithubUser() {
    let username = document.getElementById("searchInput").value;
  
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.message === "Not Found") {
          alert(data.message);
        } else {
          document.getElementById("userDetails").innerHTML = `
            <div class="profile">
                <div class="profile-image">
                    <img class="profile-image-icon" src="${data.avatar_url}" />
                </div>
                <div class="profile-details">
                    <h2 class="name">${data.name}</h2>
                    <p class="username">@${data.login}</p>
                    <p class="bio">${data.bio ? data.bio : 'This account doesn\'t have a bio'}</p>
  
                    <div class="stats">
                        <div>
                            <div class="stats-name">Public Repos</div>
                            <div class="stats-name">${data.public_repos}</div>
                        </div>
                        <div>
                            <div class="stats-name">Followers</div>
                            <div class="stats-name">${data.followers}</div>
                        </div>
                        <div>
                            <div class="stats-name">Following</div>
                            <div class="stats-name">${data.following}</div>
                        </div>
                    </div>
                    <div class="text-center mt-2">
                    <a class="btn text-center" target="_blank" href="${data.html_url}" onclick="visit()">Visit Profile</a>
                  </div>
            `;
        }
      })
      .catch((error) => {
        swal("An error occurred: " + error.message,);
      });
  }
  