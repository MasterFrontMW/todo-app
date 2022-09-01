// HERE WE WILL WRITE SOME ENDING JS SCRIPTS TO MANIPULATE PAGE

import { Title } from "./src/Title/Title.js";


const initializeApp = () => {
    document.querySelector('#title').innerHTML = Title();
}

initializeApp();