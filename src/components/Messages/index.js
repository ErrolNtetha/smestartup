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
        message: "Hey please check your emails!",
        profilePicture: avatar(),
        id: uuid(),
    },
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
        message: "Hey please check your emails!",
        profilePicture: avatar(),
        id: uuid(),
    },
    {
        name: firstName(),
        lastName: lastName(),
        message: "Hey please check your emails!",
        profilePicture: avatar(),
        id: uuid(),
    },
]

export default chats;