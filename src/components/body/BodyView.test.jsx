import { changeCard, saveCard } from './BodyView';

test('changeCard should change selectedCard and showCard values', () => {
  //Arrange
  const id = 123;
  const setShowCard = jest.fn();
  const setSelectCard = jest.fn();
  
  //Act
  changeCard(id, false, setShowCard, setSelectCard);
  
  //Assert
  expect(setShowCard).toHaveBeenCalledWith(true);
  expect(setSelectCard).toHaveBeenCalledWith(id);
});

// test('saveCard should change selectedCard and showCard values', () => {
//   //Arrange
//   const setShowCard = jest.fn();
//   const setSelectCard = jest.fn();

//   //Act
//   saveCard(setShowCard, setSelectCard);
  
//   //Assert
//   expect(setShowCard).toHaveBeenCalledWith(false);
//   expect(setSelectCard).toHaveBeenCalledWith(null);
// });
