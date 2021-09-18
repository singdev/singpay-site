function toogleMenu(navId){
  document.getElementById(navId).classList.toggle("show-nav");
}

function hideMenu(navId){
  document.getElementById(navId).classList.remove("show-nav");
}

async function sendMessage(){
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const telephone = document.getElementById("telephone").value;
  const message = document.getElementById("message").value;
  
  const htmlContent = getMessage(nom, email, telephone, message);
  const dest = `orphee.nve@sing.ga`;
  const subject = "Nouveau message";
  const labelName = 'SingPay';
  
  const url = "https://client.singpay.ga/mail";
  
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      htmlContent, dest, subject, labelName
    })
  });
  
  if(res.status == 200){
    alert("Message envoyé avec succès");
  } else {
    const message = await res.json();
    console.log(message);
    alert("Votre message n'a pas été envoyé, veullez recommancer s'il vous plait");
  }
}