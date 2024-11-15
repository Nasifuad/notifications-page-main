const count = document.querySelector(".count");
const mark = document.querySelector(".mark");
const notifications = document.querySelectorAll(".notification");

mark.addEventListener("click", () => {
  count.innerHTML = "0";
  notifications.forEach((notification) => {
    notification.classList.remove("unread");
  });
});
notifications.forEach((notification) => {
  notification.addEventListener("click", () => {
    notification.classList.toggle("unread");
    if (notification.classList.contains("unread")) {
      count.innerHTML = parseInt(count.innerHTML) + 1;
    } else {
      count.innerHTML = parseInt(count.innerHTML) - 1;
    }
  });
});
