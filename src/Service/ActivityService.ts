import Notiflix from "notiflix";

Notiflix.Notify.init({
  position: "left-bottom",
  success: {
    background: "hsl(176 39% 55%)",
    notiflixIconColor: "hsl(176 39% 100%)",
  },
  failure: {
    background: "hsl(0 84% 80%)",
    notiflixIconColor: "hsl(176 39% 100%)",
  },
});

function hideExistingNotifications() {
  const existingNotifications = document.querySelectorAll(".notiflix-notify");
  existingNotifications.forEach((notification) => {
    (notification as HTMLElement).style.display = "none";
  });
}

function displaySuccessMessage(message: string) {
  hideExistingNotifications();
  Notiflix.Notify.success(message);
}

function displayErrorMessage(message: string) {
  hideExistingNotifications();
  Notiflix.Notify.failure(message);
}

export const ActivityService = { displaySuccessMessage, displayErrorMessage };
