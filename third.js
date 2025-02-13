fetch('https://randomuser.me/api/?results=5')
            .then(response => response.json())
            .then(data => {
                const profileContainer = document.getElementById('profileContainer');
                
                data.results.forEach(user => {
                    const profileCard = document.createElement('div');
                    profileCard.classList.add('profile-card');
                    
                    profileCard.innerHTML = `
                        <img src="${user.picture.medium}" alt="Profile Picture">
                        <h3>${user.name.first} ${user.name.last}</h3>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Gender:</strong> ${user.gender}</p>
                        <p><strong>Country:</strong> ${user.location.country}</p>
                    `;
                    
                    profileContainer.appendChild(profileCard);
                });
            })
            .catch(error => console.error('Error fetching data:', error));