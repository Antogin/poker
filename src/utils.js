import { flatten }from 'lodash';

export const values = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
export const suits = ["D", "H", "S", "C"];

export const getColourForSuit = suit => suit === "D" || suit === "H" ? "red" : "black";

export const generateId = () => {
    return Math.random().toString(36).substr(2, 5);
};

export const newDeck = () => flatten(suits.map(suit => {
    return values.map((value) => {
        return {value, suit, pair: `${value}${suit}`}
    })
}));
