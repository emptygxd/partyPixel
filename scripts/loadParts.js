fetch("../modal.html")
  .then((res) => {
    if (!res.ok) throw new Error(`Error ${res.status}`);
    return res.text();
  })
  .then((html) => {
    document.getElementById("authModal").innerHTML = html;
  })
  .catch((err) => console.error(err));
