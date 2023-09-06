export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  
  export const classData = {
    inputSelector: 'popup__input',
    buttonSubmitClass: 'popup__button-save',
    disableButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input_type_error',
    activeErrorClass: 'popup__input-error_visible',
  };
  
  export const profileElement = document.querySelector('.profile');
  export const profileNameSelector = '.profile__name';
  export const profileAboutSelector = '.profile__about';
  export const profileEditButton = profileElement.querySelector('.profile__button-edit');
  export const addCardButton = profileElement.querySelector('.profile__button-add');
  
  export const popupProfileSelector = '.popup_edit';
  export const popupNewPlaceSelector = '.popup_add';
  export const popupPhotosSelector = '.popup_photos';
  
  export const cardsContainerSelector = '.elements__list';
  export const cardSelector = '#card-template';