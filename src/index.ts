import * as prompts from "prompts";
import { sendEmail } from "./email";
import { trelloApi } from "./trello";

(async () => {
  const boards = await trelloApi.boards.all();
  const { boardId } = await prompts({
    type: "select",
    name: "boardId",
    message: "Select board",
    choices: boards.map(({ id: value, name: title }) => ({ title, value })),
  });

  const lists = await trelloApi.lists(boardId);

  const { listId } = await prompts({
    type: "select",
    name: "listId",
    message: "Select list",
    choices: lists.map(({ id: value, name: title }) => ({ title, value })),
  });

  const cards = await trelloApi.cards(listId);
  const listIssuesText = cards
    .map((card) => [card.name, card.desc].filter((a) => a).join("\n"))
    .join("\n\n");

  await sendEmail({ body: listIssuesText });
})();
