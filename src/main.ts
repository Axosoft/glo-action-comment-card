import * as core from '@actions/core';
import GloSDK from '@axosoft/glo-sdk';

async function run() {
  const authToken = core.getInput('authToken');
  const boardID = core.getInput('boardID');
  const cardID = core.getInput('cardID');
  const comment = core.getInput('comment');

  try {
    // add the comment
    await GloSDK(authToken).boards.cards.comments.create(boardID, cardID, {
      text: comment
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
