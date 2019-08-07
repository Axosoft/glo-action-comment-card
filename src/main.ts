import * as core from '@actions/core';
import GloSDK from '@axosoft/glo-sdk';

interface ICard {
  boardId: string;
  cardId: string;
}

async function run() {
  const authToken = core.getInput('authToken');
  const cardsJson = core.getInput('cards');
  const comment = core.getInput('comment');

  try {
    const cards = JSON.parse(cardsJson);
    if (!cards) {
      return;
    }

    for (let i = 0; i < cards.length; i++) {
      const cardData = cards[i] as ICard;
      const {boardId, cardId} = cardData;

      // add the comment
      await GloSDK(authToken).boards.cards.comments.create(boardId, cardId, {
        text: comment
      });
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
