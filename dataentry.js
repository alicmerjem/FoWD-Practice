document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault();

    const fname = document.getElementById("fname").value;
    localStorage.setItem("fname", fname);

    const lname = document.getElementById("lname").value;
    localStorage.setItem("lname", lname);

    const jobtitle = document.getElementById("jobtitle").value;
    localStorage.setItem("jobtitle", jobtitle);
    
    document.getElementById("result").innerText = `Hello, ${fname} ${lname}, ${jobtitle}!`;
    this.reset();
})