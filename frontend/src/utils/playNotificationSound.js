import notificationSound from "../assets/sounds/notification.mp3";

export const playNotificationSound = () => {
  const sound = new Audio(notificationSound);
  sound.play().catch((error) => {
    console.log("Autoplay error:", error);
  });
};
