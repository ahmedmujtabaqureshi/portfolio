function SendMSG(e) {
  e.preventDefault();
  
  let nam_txt = document.querySelector("#name");
  let email_txt = document.querySelector("#email");
  let subject_txt = document.querySelector("#subject");
  let message_txt = document.querySelector("#message");

  // Creating the email body
  let body = "Name: " + nam_txt.value + ",  " + "email: " + email_txt.value + ",  " + "subject: " + subject_txt.value +  ",  "+ "Message: " + message_txt.value;

  // Template variables to send to EmailJS
  let temp = {
      from_name: nam_txt.value,
      to_name: "Ahmed Mujtaba",  // You can change this to the intended recipient's name
      message: body
  };

  // Check if the form is completely filled
  if (nam_txt.value === "" || email_txt.value === "" || subject_txt.value === "" || message_txt.value === "" || body === "") {
      return alert("Please Fill Complete Details!!");
  }

  // Send email using EmailJS
  emailjs.send('service_70buzbc', 'template_5ka0iq5', temp, 'HFaEaWuxvT37LI57y')
  .then((res) => {
      if (res.status == 200) {
          success();
      } else {
          failure();
      }
  });

  // Reset form inputs
  nam_txt.value = "";
  email_txt.value = "";
  subject_txt.value = "";
  message_txt.value = "";
}

function success() {
  let thank = document.querySelector(".msg-pop-up");
  thank.style.display = "block";
  setTimeout(() => {
      thank.style.display = "none";
  }, 1000);
}

function failure() {
  let fail = document.querySelector(".failed-msgpop");
  fail.style.display = "block";
  setTimeout(() => {
      fail.style.display = "none";
  }, 1000);
}
