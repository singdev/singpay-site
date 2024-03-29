AOS.init({
  duration: 1000
});

function toogleMenu(navId){
  document.getElementById(navId).classList.toggle("show-nav");
}

function hideMenu(navId){
  document.getElementById(navId).classList.remove("show-nav");
}

async function sendMessage(){
  const feeadback = document.getElementById("feedback");
  feeadback.innerHTML = "Veuillez patientez !";
  
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const telephone = document.getElementById("telephone").value;
  const message = document.getElementById("message").value;
  
  const dest = `contact@singpay.ga`;
  const subject = "Nouveau message";
  const labelName = 'SingPay';
  
  try {
    const url = "https://client.singpay.ga/mail";
  
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        nom, email, telephone, message, dest, subject, labelName
      })
    });
    
    if(res.status == 200){
      feeadback.innerHTML = "Message envoyé avec succès";
      feeadback.style.color = "green";
    } else {
      const message = await res.json();
      feeadback.innerHTML = "Votre message n'a pas été envoyé, veullez recommancer s'il vous plait";
      feeadback.style.color = "red";
    }
  } catch(err){
    console.log(err);
    feeadback.innerHTML = "";
  }
}