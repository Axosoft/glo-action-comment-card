# GitHub action to add a comment to Glo Boards cards

Use this action to add a comment to cards on a [Glo Board](https://www.gitkraken.com/glo).
The action requires an array of objects with board and card IDs, and the comment text as inputs.

## Requirements
The action requires an auth token in the form of a PAT that you can create in your GitKraken account.
See the [Personal Access Tokens](https://support.gitkraken.com/developers/pats/) page on our support site.

This token should be stored in your GitHub repo secrets (in repo Settings -> Secrets).

## Inputs
The `cards` input is an array of objects that contain the board ID and card ID pairs:
```ts
interface ICard {
  boardId: string;
  cardId: string;
}
```

The `comment` input is the text of the comment to add to the cards.

## Usage
Add a step in your workflow file to perform this action and use the output of the `glo-action-parse-links` action:
```yaml
    steps:
    - uses: Axosoft/glo-action-parse-links@v1
      id: glo-parse

    - uses: Axosoft/glo-action-comment-card@v1
      with:
        authToken: ${{ secrets.GLO-PAT }}
        cards: '${{ steps.glo-parse.outputs.cards }}'
        comment: 'The build has completed'
      id: glo-comment
```
