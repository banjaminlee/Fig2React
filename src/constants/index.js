import { amsterdam, calendar, friendTicket, guestList, rotterdam, show_img, show_img_2, show_img_2_desk, show_img_desk, weekend } from "../assets";

export const categories = [
    {
        img: amsterdam,
        text: "Amsterdam"
    },
    {
        img: rotterdam,
        text: "Rotterdam"
    },
]

export const calendar_info = [
    {
        img: calendar,
        text: "Vandaag"
    },

    {
        img: weekend,
        text: "Dit weekend"
    },

    {
        img: calendar,
        text: "Kies datum"
    },
]

export const searchList = [
    {
        img: guestList,
        title: "Charlee - Lovelee",
        date: "8 juni 23:00",
        place: "Gastenlijst"
    },
    {
        img: guestList,
        title: "Freaky - Supperclub",
        date: "8 juni 23:00",
        place: "Gastenlijst"
    },
    {
        img: guestList,
        title: "Mimi - Chin Chin",
        date: "8 juni 23:00",
        place: "Gastenlijst"
    },
    {
        img: friendTicket,
        title: "Super Social - Chicago Social Club",
        date: "8 juni 23:00",
        place: "Gastenlijst"
    },
]

const Donderdag = [
    {
        img: show_img,
        img_desk: show_img_desk,
        name: "Charlee",
        time: "23:00",
        place: "Lovelee, Amsterdam",
        age: "18+",
        ticket: "Gastenlijst",
        tooltip: "We zetten jouw naam op de gastenlijst, <br />zodat je gratis of goedkoper<br /> naar binnen kan."
    },
    {
        img: show_img,
        img_desk: show_img_desk,
        name: "Freaky",
        time: "23:00",
        place: "Lovelee, Amsterdam",
        age: "18+",
        ticket: "Gastenlijst",
        tooltip: "We zetten jouw naam op de gastenlijst, <br />zodat je gratis of goedkoper<br /> naar binnen kan."
    },
    {
        img: show_img,
        img_desk: show_img_desk,
        name: "Mimi",
        time: "23:00",
        place: "Lovelee, Amsterdam",
        age: "18+",
        ticket: "Gastenlijst",
        tooltip: "We zetten jouw naam op de gastenlijst, <br />zodat je gratis of goedkoper<br /> naar binnen kan."
    },
    {
        img: show_img,
        img_desk: show_img_desk,
        name: "Super Social",
        time: "23:00",
        place: "Lovelee, Amsterdam",
        age: "18+",
        ticket: "Vriendenticket",
        tooltip: "Voor dit event verzekeren wij jou<br />van het aller goedkoopste <br />kaartje doormiddel een vriendenticket."
    },
    
]

const Vrijdag = [
    {
        img: show_img_2,
        img_desk: show_img_2_desk,
        name: "Happy feelings",
        time: "16:00",
        place: "Thuishaven, Amsterdam",
        age: "18+",
        ticket: "Gastenlijst",
        tooltip: "We zetten jouw naam op de gastenlijst, <br />zodat je gratis of goedkoper<br /> naar binnen kan."
    }
]

const Zaterdag = [
    {
        img: show_img_2,
        img_desk: show_img_2_desk,
        name: "Happy feelings",
        time: "16:00",
        place: "Thuishaven, Amsterdam",
        age: "18+",
        ticket: "Gastenlijst",
        tooltip: "We zetten jouw naam op de gastenlijst, <br />zodat je gratis of goedkoper<br /> naar binnen kan."
    }
]


const shows = [
    {
    show_name: "Donderdag",
    show_date: "8 June",
    shows : Donderdag
    },

    {
        show_name: "Vrijdag",
        show_date : "5 July",
        shows: Vrijdag
    },
    {
        show_name: "Zaterdag",
        show_date : "8 July",
        shows: Zaterdag
    }
]

export default shows;