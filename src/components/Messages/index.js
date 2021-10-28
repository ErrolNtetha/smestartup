import { name, image } from "faker";
import uuid from 'uuid';

const { firstName, lastName } = name;
const { avatar } = image;

export const chats = [
    {
        name: firstName(),
        lastName: lastName(),
        message: "Hey please check your emails!",
        profilePicture: avatar(),
        id: uuid(),
    },
    {
        name: firstName(),
        lastName: lastName(),
        message: "When the company was established?",
        profilePicture: avatar(),
        id: uuid(),
    },
    {
        name: firstName(),
        lastName: lastName(),
        message: "Good morning Mr. Jones!",
        profilePicture: avatar(),
        id: uuid(),
    },
    {
        name: firstName(),
        lastName: lastName(),
        message: "Call me later when you are ready",
        profilePicture: avatar(),
        id: uuid(),
    },
    {
        name: firstName(),
        lastName: lastName(),
        message: "Send me your number and i will call you...",
        profilePicture: avatar(),
        id: uuid(),
    },
]

export default chats;