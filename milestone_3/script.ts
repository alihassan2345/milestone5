var form = document.getElementById("resume-form") as HTMLFormElement;
var resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement

form.addEventListener("submit ", (event: Event) => {
    event.preventDefault();
    
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const phone = (document.getElementById("phone") as HTMLInputElement).value
    
    const experience = (document.getElementById("experience") as HTMLInputElement).value
    const skill = (document.getElementById("skill") as HTMLInputElement).value;

    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>
   <h3>Education</h3>
   <p>${experience}</p>
   <h3>Experience</h3>
   <p>${experience}</p>
   <h3>Skills</h3>
   <p>${skill}</p>
    `;
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}else{
    console.error("the resume display is missing.");
}
})