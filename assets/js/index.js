document.addEventListener("DOMContentLoaded", () => {
    const formulaire = document.querySelector("form");

    formulaire.addEventListener("submit", async(event) => {
      event.preventDefault(); 
  
      const firstname = document.querySelector("#first_name").value;
      const lastname = document.querySelector("#last_name").value;
      const email = document.querySelector("#email").value;
      const message = document.querySelector("#message").value;
  
      console.log(firstname, lastname, email, message);
  
      const response = await axios.post("http://localhost:3000/form", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        message: message,
      });
  
      console.log(response.data.status);
  
      if (response.data.status === 200) {
        document.getElementById("succes").classList.toggle("hiden");
      }
    });











});
