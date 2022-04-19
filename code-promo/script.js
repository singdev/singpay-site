const url = "http://localhost:1051/v1/code-promo/user";


async function createCodePromoUser(){
  const code = document.getElementById("code").value;
  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;
  const telephone = document.getElementById("telephone").value;
  const email = document.getElementById("email").value;
  
  document.getElementById("button").style.display = "none";
  
  const res = await fetch(url, {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      code, nom, prenom, telephone, email
    })
  });
  
  if(res.status == 200){
    const form = document.querySelector(".home-screen");
    const result = document.querySelector(".result-screen");
    result.classList.add("show-content");
    form.classList.remove("show-content");
    
    const data = await res.json();
    
    document.getElementById("result-code").innerHTML = data.code;
    document.getElementById("result-nom").innerHTML = nom + " " + prenom;
    document.getElementById("result-reduction").innerHTML = data.reduction + "% de réduction";
    document.getElementById("result-message").innerHTML = data.influenceur_message;
    document.getElementById("result-detail").innerHTML = data.detail;
    
  } else {
    alert("Impossible de vous enregistré à ce code !");
  }
  
  document.getElementById("button").style.display = "block";
}