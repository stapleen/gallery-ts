import React from 'react';

interface ITitles {
  users: string,
  albums: string,
  gallery: string
}

export const titles: ITitles = {
  users: "Список авторов",
  albums: "Альбомы",
  gallery: "Фотографии"
};

export const TitleContext = React.createContext(titles);