import inputTypes from "./inputTypes.js";
const { NUMBER, BOOLEAN, DATE, TEXT } = inputTypes;

export default [
    {
        id: 1,
        key: "ISBN",
        type: NUMBER,
    },
    {
        id: 2,
        key: "Author Name",
        type: TEXT,
    },
    {
        id: 3,
        key: "Book Name",
        type: TEXT,
    },
    {
        id: 4,
        key: "Price",
        type: NUMBER,
    },
    {
        id: 5,
        key: "Page Count",
        type: NUMBER,
    },
    {
        id: 6,
        key: "Discount",
        type: NUMBER,
    },
    {
        id: 7,
        key: "Date of publish",
        type: DATE,
    },
    {
        id: 8,
        key: "In stock",
        type: BOOLEAN,
    }
];