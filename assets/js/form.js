const userId = "_r0cF54zXz3jAKpLu"
const serviceId = "service_az2u04g"
const template = "template_6sistrg"


emailjs.init(userId);

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.querySelector("input[name=name]").value;
  let email = document.querySelector("input[name=email]").value;
  let message = document.querySelector("textarea[name=message]").value;

  if (!name || !email || !message) {
    return new Noty({
      theme: "mint",
      text: "Você precisa preencher todas as informações",
      type: "error",
      timeout: 4000,
    }).show();
  } 

  if (!/\S+@\S+\.\S+/.test(email)) {
    return new Noty({
      theme: "mint",
      text: "email inválido",
      type: "error",
      timeout: 4000,
    }).show();
  }

  try {
    emailjs.send(serviceId, template, {
      name: name,
      email: email,
      message: message,
    });

    document.querySelector("input[name=name]").value = ''
    document.querySelector("input[name=email]").value = ''
    document.querySelector("textarea[name=message]").value = ''

    new Noty({
      theme: "mint",
      text: "Formulário enviado com sucesso",
      type: "success",
      timeout: 4000,
    }).show();


  } catch (error) {
    new Noty({
      theme: "mint",
      text: "Um erro ocorreu, tente novamente mais tarde",
      type: "error",
      timeout: 4000,
    }).show();

  }
});
