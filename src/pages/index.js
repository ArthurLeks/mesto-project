import './index.css'; 
import Card from '../components/Card';
import FormValidator from '../components/FormValidator';
import { initialCards, classData } from '../components/initialData';

const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileAbout = profile.querySelector('.profile__about');
const profileEditButton = profile.querySelector('.profile__button-edit');
const addCardButton = profile.querySelector('.profile__button-add');

const popups = Array.from(document.querySelectorAll('.popup'));

const popupEdit = document.querySelector('.popup_edit');
const popupEditForm = popupEdit.querySelector('[name="profileData"]');
const inputName = popupEdit.querySelector('[name="profileName"]');
const inputAbout = popupEdit.querySelector('[name="profileAbout"]');

const popupAdd = document.querySelector('.popup_add');
const popupAddForm = popupAdd.querySelector('[name="placeData"]');
const inputPlaceName = popupAdd.querySelector('[name="placeName"]');
const inputPlaceLink = popupAdd.querySelector('[name="placeLink"]');

const popupEditFormValidator = new FormValidator(classData, popupEditForm);
popupEditFormValidator.enableValidation();

const popupAddFormValidator = new FormValidator(classData, popupAddForm);
popupAddFormValidator.enableValidation();

const cardsElement = document.querySelector('.elements__list');
const cardTemplate = '#card-template';

const popupPhotos = document.querySelector('.popup_photos');
const popupPhotosImage = popupPhotos.querySelector('.popup__image');
const popupPhotosDescription = popupPhotos.querySelector('.popup__description');


function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscapeClick);
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscapeClick);
}


function openPopupEdit() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  openPopup(popupEdit);
}

function handleSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupEdit);
}


function createCard(item) {
  const card = new Card(item, cardTemplate);
  return card.generateCard();
}

function handleSubmitCard(evt) {
  evt.preventDefault();
  const cardElement = {
    name: inputPlaceName.value,
    link: inputPlaceLink.value
  };
  popupAddForm.reset();
  cardsElement.prepend(createCard(cardElement));
  closePopup(popupAdd);
  popupAddFormValidator.toggleButtonState();
}

export function openPopupPhotos(imageLink, imageName) {
  popupPhotosImage.src = imageLink;
  popupPhotosImage.alt = imageName;
  popupPhotosDescription.textContent = imageName;
  openPopup(popupPhotos);
}

initialCards.forEach (card => {
  cardsElement.append(createCard(card));
});


function closePopupEscapeClick(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}


popups.forEach((element) => {
  element.addEventListener('mousedown', function (evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(element);
    }
    if (evt.target.classList.contains('popup__button-close')) {
      closePopup(element);
    }
  });
})


profileEditButton.addEventListener('click', openPopupEdit);
popupEditForm.addEventListener('submit', handleSubmitProfile);
addCardButton.addEventListener('click', () => openPopup(popupAdd));
popupAddForm.addEventListener('submit', handleSubmitCard);

