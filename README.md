# Trello email report

Send an email report from a Trello list:

```
# ? Select board › - Use arrow-keys. Return to submit.
❯   Example board
❯   Another board

# ? Select list › - Use arrow-keys. Return to submit.
❯   ToDo
❯   Done

Sending email report:

1. This is an example
2. And another one
```

# Getting started

1. Create a `.env` file.
1. Get your api key from [https://trello.com/app-key](https://trello.com/app-key).
1. On the same page, click "Manually generate a Token"
1. Find your board id from `https://api.trello.com/1/members/me/boards?key=<YOUR API KEY>&token=YOUR API TOKEN`
1. Add `TRELLO_API_KEY=<YOUR API KEY>` to the `.env` file.
1. Add `TRELLO_API_TOKEN=<YOUR API TOKEN>` to the `.env` file.
1. `npm install`
1. `npm start`
