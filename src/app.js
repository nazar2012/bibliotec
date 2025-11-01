// import { nanoid } from "nanoid"

// const people = [
//     { name: "Андрій", age: 15 },
//     { name: "Марія", age: 14 },
//     { name: "Олег", age: 16 },
//     { name: "Ірина", age: 13 },
//     { name: "Назар", age: 15 },
//     { name: "Софія", age: 14 },
//     { name: "Дмитро", age: 16 },
//     { name: "Катерина", age: 15 },
//     { name: "Максим", age: 13 },
//     { name: "Олена", age: 14 }
// ];
// people.forEach(person => {
//     person.id = nanoid(10)
// })

// console.log(people);




import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});


const btn = document.querySelector("button")
btn.addEventListener("click", () => {
    error({
        title: 'Все пропало!',
        text: 'Спробуйте ще.',
        delay: 1000
    });
})