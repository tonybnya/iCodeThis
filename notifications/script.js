const notificationsWrapper = document.querySelector('.notifications-wrapper');
const bellBtn = document.querySelector('.bell-btn');

const markAsReadBtn = document.querySelector('.mark-as-read-btn');
const notificationsList = document.querySelector('.notifications-list');

const declineBtn = document.querySelector('.decline-btn');
const acceptBtn = document.querySelector('.accept-btn');
const notificationItemBtns = document.querySelector('.notification-item-btns');

let isMinimized = true;

notificationsWrapper.style.transformOrigin = 'top right';
notificationsWrapper.style.transition = '0.3s linear';

bellBtn.addEventListener('click', () => {
  if (isMinimized) {
    notificationsWrapper.style.scale = 0;
    isMinimized = false;
  } else {
    notificationsWrapper.style.scale = 1;
    isMinimized = true;
  }
});

markAsReadBtn.addEventListener('click', () => {
  notificationsList.innerHTML = '<li class="notification-item">Notifications up to date!</li>';
});

declineBtn.addEventListener('click', () => {
  notificationItemBtns.innerHTML = '<p>The notification has been declined</p>';
});

acceptBtn.addEventListener('click', () => {
  notificationItemBtns.innerHTML = '<p>The notification has been accepted</p>';
});
