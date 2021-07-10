"use strict";

var hamburgerButtonElement = document.querySelector("#hamburgerButton");
var menuElement = document.querySelector(".menu");
var rightAppMain = document.querySelector(".right_app");
var shadowELement = document.querySelector(".shadow");
var settingsElement = document.querySelector("#settings");
var settingsModalElement = document.querySelector(".settings__modal");
var closeSettings = document.querySelector("#closeSettings");
var threedotList = document.querySelector(".threedot__list");
var threeDot = document.querySelector("#threedot");
var searchFormElement = document.querySelector(".search__form");
var searchInputElement = document.querySelector(".search__input");
var searchListElement = document.querySelector(".account__list");
var searchNameElement = searchListElement.querySelectorAll(".account__name");
var profileName = document.querySelector(".profile__name");
var profileTime = document.querySelector(".profile__slog");
var rightAppHeader = document.querySelector(".right_app__header");
var profileModal = document.querySelector(".profile__modal");
var chatModal = document.querySelector(".chat__modal");
var userBtn = document.querySelector(".user__btn");
var leftArrowButton = document.querySelector(".left-arrow_button");
var infoNameImg = document.querySelector(".info__name__img");
var infoNameText = document.querySelector(".info__name__text");
var infoNameTime = document.querySelector(".info__name__time");
var mobileNum = document.querySelector(".mobile__num");
var infoName = document.querySelector(".info__name");
var accountSlog = document.querySelector(".account__slog");
var emojiList = document.querySelector(".emoji-list");
var emojiButton = document.querySelector(".emoji__button");
var usersListElement = document.querySelector(".account__list");
var messagesListElement = document.querySelector(".message__list");
var messageTextForm = document.querySelector(".message__form");
var messagesTextInput = document.querySelector(".message__textarea");
var emojies = ["😀", "😋", "😅", "😏", "😀", "😃", "😄", "😁", "😆", "😄", "😅", "😂", "😏", "😞", "😅", "😚", "🙊", "😌", "😀", "😋", "😆", "😐", "😕", "🥶", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤚", "🖐", "✋"];
var inputValue = "";
var currentChat = 1;
leftArrowButton.addEventListener("click", function () {
  rightAppMain.classList.add("chat-hidden");
  shadowELement.classList.add("shadowHidden");
});
shadowELement.addEventListener("click", function (evt) {
  menuElement.classList.add("hidden");
  shadowELement.classList.toggle("shadowHidden");
  settingsModalElement.classList.add("settingsHidden");
  menuElement.style.transform = "translateX(-100%)";
  chatModal.classList.add('chatHidden');
});
hamburgerButtonElement.addEventListener("click", function (evt) {
  menuElement.classList.remove("hidden");
  shadowELement.classList.remove("shadowHidden");
  menuElement.style.transform = "translateX(0)";
});
settingsElement.addEventListener("click", function (evt) {
  settingsModalElement.classList.remove("settingsHidden");
  menuElement.classList.add("hidden");
  menuElement.style.transform = "translateX(-100%)";
});
closeSettings.addEventListener("click", function (evt) {
  settingsModalElement.classList.add("settingsHidden");
  shadowELement.classList.toggle("shadowHidden");
});
threeDot.addEventListener("click", function (event) {
  threedotList.classList.toggle("threedotHidden");
});
searchInputElement.addEventListener("click", function (event) {
  event.target.classList.add("border-input");
});
profileModal.addEventListener("click", function () {
  chatModal.classList.remove('chatHidden');
  shadowELement.classList.remove("shadowHidden");
});
userBtn.addEventListener("click", function () {
  chatModal.classList.add('chatHidden');
  shadowELement.classList.add("shadowHidden");
});
var DATA = [{
  id: 1,
  name: "Ogabek Olimov",
  photo: "./images/account__image1.jpg",
  date: moment(Date.now()).format('dddd'),
  number: "+99890 000 00 00",
  message: [{
    body: "Salom qalaysan",
    isMine: true
  }, {
    body: "Rahmat",
    isMine: false
  }]
}, {
  id: 2,
  name: "Mehriddin Rajabov",
  photo: "./images/account__image2.jpg",
  date: moment(Date.now()).startOf('day'),
  number: "+99890 111 00 00",
  message: [{
    body: "Salom qalaysan",
    isMine: true
  }, {
    body: "Rahmat",
    isMine: false
  }]
}];
var malumot = JSON.parse(localStorage.getItem("data")) || DATA;
localStorage.setItem("data", JSON.stringify(malumot));

var _loop2 = function _loop2() {
  var item = _emojies[_i];
  var newLiElement = document.createElement("li");
  newLiElement.classList.add("emoji-item");
  newLiElement.textContent = item;
  emojiList.appendChild(newLiElement);
  newLiElement.addEventListener("click", function () {
    messagesTextInput.value += item;
  });
};

for (var _i = 0, _emojies = emojies; _i < _emojies.length; _i++) {
  _loop2();
}

emojiButton.addEventListener('click', function (evt) {
  emojiList.classList.toggle("emojiListHidden");
  evt.preventDefault();
  messagesTextInput.focus();
});
messagesTextInput.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    if (messagesTextInput.value == 0) return;
    var messageBody = event.target.value;
    var userData = malumot.find(function (user) {
      return user.id == currentChat;
    });
    var userIndex = malumot.findIndex(function (user) {
      return user.id == currentChat;
    });
    malumot[userIndex] = userData;
    localStorage.setItem("data", JSON.stringify(malumot));
    userData.message.push({
      body: messageBody,
      isMine: true
    });
    renderMessages(messagesListElement, userData.message);
    localStorage.setItem("data", JSON.stringify(malumot));
    event.target.value = "";
  }
});
messageTextForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (messagesTextInput.value == 0) return;
  var messageBody = messagesTextInput.value;
  var userData = malumot.find(function (user) {
    return user.id == currentChat;
  });
  var userIndex = malumot.findIndex(function (user) {
    return user.id == currentChat;
  });
  malumot[userIndex] = userData;
  localStorage.setItem("data", JSON.stringify(malumot));
  userData.message.push({
    body: messageBody,
    isMine: true
  });
  localStorage.setItem("data", JSON.stringify(malumot));
  renderMessages(messagesListElement, userData.message);
  localStorage.setItem("data", JSON.stringify(malumot));
  evt.target.reset();
  evt.target.focus();
});
renderUsers(usersListElement, malumot);

function renderUsers(parentElement, data) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var user = _step.value;
      var newLiElement = document.createElement("li");
      var newImgElement = document.createElement("img");
      var newSpanElement = document.createElement("span");
      var newH2Element = document.createElement("h2");
      var newPElement = document.createElement("p");
      var newTimePlement = document.createElement("p");
      newLiElement.classList.add("account__item");
      newImgElement.classList.add("account__image");
      newSpanElement.classList.add("account__text");
      newH2Element.classList.add("account__name");
      newPElement.classList.add("account__slog");
      newTimePlement.classList.add("account__time");
      newImgElement.src = user.photo;
      newH2Element.textContent = user.name;
      newTimePlement.textContent = user.date;
      newPElement.textContent = "Hello";
      newLiElement.addEventListener("click", function () {
        renderMessages(messagesListElement, user.message);
        localStorage.setItem("data", JSON.stringify(malumot));
        currentChat = user.id;
        profileName.textContent = user.name;
        profileTime.textContent = user.date;
        messagesTextInput.disabled = false;
        rightAppMain.classList.remove("chat-hidden");
        localStorage.getItem("data");
        rightAppHeader.addEventListener('click', function (evt) {
          infoNameImg.src = user.photo;
          infoNameText.textContent = user.name;
          infoNameTime.textContent = user.date;
          mobileNum.textContent = user.number;
        });
      });
      newSpanElement.appendChild(newH2Element);
      newSpanElement.appendChild(newPElement);
      newLiElement.appendChild(newImgElement);
      newLiElement.appendChild(newSpanElement);
      newLiElement.appendChild(newTimePlement);
      parentElement.appendChild(newLiElement);
    };

    for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function renderMessages(parentElement, data) {
  parentElement.textContent = "";
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var messages = _step2.value;
      var newLiElement = document.createElement("li");
      var newDiv1Element = document.createElement("div");
      var newDiv2Element = document.createElement("div");
      var newPElement = document.createElement("p");
      var newTimeElement = document.createElement("p");
      var newCheckElement = document.createElement("img");

      if (messages.isMine) {
        newLiElement.classList.add("message__item1");
        newDiv1Element.classList.add("message__box1");
        newDiv2Element.classList.add("message__box2");
        newPElement.classList.add("message__text");
        newTimeElement.classList.add("message__time");
        newCheckElement.classList.add("message__check__icon");
        newPElement.textContent = messages.body;
        newTimeElement.textContent = moment(Date.now()).format('LT');
        newCheckElement.src = "/images/check.svg";
      } else {
        newLiElement.classList.add("message__item");
        newDiv1Element.classList.add("message__box");
        newDiv2Element.classList.add("message__box2");
        newPElement.classList.add("message__text");
        newTimeElement.classList.add("message__time");
        newCheckElement.classList.add("message__check__icon");
        newPElement.textContent = messages.body;
        newTimeElement.textContent = moment(Date.now()).format('LT');
      }

      newDiv2Element.appendChild(newTimeElement);
      newDiv2Element.appendChild(newCheckElement);
      newDiv1Element.prepend(newPElement);
      newLiElement.prepend(newDiv1Element);
      newLiElement.appendChild(newDiv2Element);
      parentElement.prepend(newLiElement);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

searchInputElement.addEventListener('input', function (e) {
  if (!inputValue) {
    renderUsers(usersListElement, malumot);
  }

  inputValue = e.target.value;
  clearList();
  var searchResult = malumot.filter(function (value) {
    return value.name.toLowerCase().includes(inputValue);
  });
  renderUsers(usersListElement, searchResult);
});

function clearList() {
  while (usersListElement.firstChild) {
    usersListElement.removeChild(usersListElement.firstChild);
  }
}