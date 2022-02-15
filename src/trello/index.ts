import { apiRequest } from "./apiRequest";

export interface TrelloBoard {
  id: string;
  name: string;
}
export interface TrelloList {
  id: string;
  name: string;
}

export interface TrelloCard {
  name: string;
  desc: string;
  dateLastActivity: string;
  cover: {
    idAttachment: string | null;
  };
}

const boards = {
  all: (): Promise<TrelloBoard[]> =>
    apiRequest<TrelloBoard[]>("members/me/boards"),
};

const lists = (boardId: string): Promise<TrelloList[]> =>
  apiRequest<TrelloList[]>(`boards/${boardId}/lists`);

const cards = (listId: string): Promise<TrelloCard[]> =>
  apiRequest<TrelloCard[]>(`/lists/${listId}/cards`);

export const trelloApi = { boards, lists, cards };
