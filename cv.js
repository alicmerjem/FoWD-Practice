
    // Retrieve data from localStorage
    const cvData = JSON.parse(localStorage.getItem("cvData"));

    if (cvData) {
        // Populate data in the CV
        document.querySelector(".main-header h1").innerText = cvData.name;
        document.querySelector(".main-header p").innerText = cvData.jobTitle;

        // Contact Section
        document.querySelector(".contact").innerHTML = `
            <h3>Contact</h3>
            <p><strong>Phone:</strong> ${cvData.phone}</p>
            <p><strong>Email:</strong> ${cvData.email}</p>
            <p><strong>Location:</strong> ${cvData.location}</p>
        `;

        // Education Section
        document.querySelector(".education").innerHTML = `
            <h3>Education</h3>
            <ul>
                <li>${cvData.education}</li>
            </ul>
        `;

        // Skills Section
        document.querySelector(".skills").innerHTML = `
            <h3>Skills</h3>
            <ul>
                ${cvData.skills.split(",").map(skill => `<li>${skill.trim()}</li>`).join("")}
            </ul>
        `;

        // Introduction Section
        document.querySelector(".introduction").innerHTML = `
            <h2>Introduction</h2>
            <p>${cvData.introduction}</p>
        `;

        // Experience Section
        document.querySelector(".experience").innerHTML = `
            <h2>Experience</h2>
            <ul>
                ${cvData.experience.split(",").map(exp => `<li>${exp.trim()}</li>`).join("")}
            </ul>
        `;

        // Hobbies Section
        document.querySelector(".hobbies").innerHTML = `
            <h2>Hobbies</h2>
            <p>${cvData.hobbies}</p>
        `;
    } else {
        alert("No data found. Please fill out the form first.");
    }
