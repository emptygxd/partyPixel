document.addEventListener("DOMContentLoaded", () => {
  const authModal = document.getElementById("authModal");
  const openBtns = document.querySelectorAll(".open-auth");
  const closeEls = authModal.querySelectorAll(".js-modal-close");
  const signUpBtns = document.querySelectorAll(".js-open-signup");

  function openAuth() {
    authModal.classList.remove("hidden");
  }
  function closeAuth() {
    authModal.classList.add("hidden");
  }

  openBtns.forEach((b) => b.addEventListener("click", openAuth));
  closeEls.forEach((el) => el.addEventListener("click", closeAuth));

  signUpBtns.forEach((b) =>
    b.addEventListener("click", (e) => {
      e.preventDefault();
      closeAuth();
      document.querySelector(".js-open-signup").click();
    })
  );
});
