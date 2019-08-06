# GitHub action to add a comment to a Glo card

Use this action to add a comment to a card on a Glo board.
The action requires the board ID, card ID, and comment text as inputs.

## Requirements
The action requires an auth token in the form of a PAT that you can create in your GitKraken account.
See the [Personal Access Tokens](https://support.gitkraken.com/developers/pats/) page on our support site.

This token should be stored in your GitHub repo secrets (in repo Settings -> Secrets).

## Usage
Add a step in your workflow file to perform this action:
```yaml
    steps:
    - uses: Axosoft/glo-action-comment-card@v1
      with:
        authToken: ${{ secrets.GLO-PAT }}
        boardID: '12345'
        cardID: '12345'
        comment: 'The build has completed'
      id: glo-comment
```
