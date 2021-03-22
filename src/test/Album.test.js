import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Album from '../components/Album/Album';
import { BrowserRouter as Router } from 'react-router-dom';

test('component album render image', () => {
  const albums = [{userId: 1, id: 1, title: "quidem molestiae enim"}];
  const photoData = { 1: [{
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
  }]};
  const { getByAltText } = render(<Router><Album albums={albums} photoData={photoData} /></Router>);
  const altText = albums[0].title;
  const url = photoData[1][0].thumbnailUrl;
  expect(getByAltText(altText)).toHaveAttribute('src', url);
});

test('component album render info', () => {
  const albums = [{userId: 1, id: 1, title: "quidem molestiae enim"}];
  const photoData = { 1: [{
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
  }]};
  const { container } = render(<Router><Album albums={albums} photoData={photoData} /></Router>);
  expect(container.querySelector('.container__elements__element__info')).toBeInTheDocument();
});