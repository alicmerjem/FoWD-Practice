document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const cvData = {
        name: document.getElementById("name").value,
        jobTitle: document.getElementById("jobtitle").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        location: document.getElementById("location").value,
        education: document.getElementById("education").value,
        skills: document.getElementById("skills").value,
        introduction: document.getElementById("intruduction").value,
        experience: document.getElementById("experience").value,
        hobbies: document.getElementById("hobbies").value,
    };
    
    localStorage.setItem("cvData", JSON.stringify(cvData));

    window.location.reload = 'cv.html';
})