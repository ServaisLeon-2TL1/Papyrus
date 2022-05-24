import React, { useState } from "react";

export const sliderItems = [
    {
        id: 1,
        img: "https://www.botanica.brussels/files/2021/01/bouquet-de-roses-rouges-et-blanches-livraison-bruxelles-uccle-ixelles-forest-saint-gilles-ukkel-molenbeek-schaerbeek-evere-boisfort-auderghem.jpg",
        title: "Créez votre bouquet en 3D !",
        desc: "Notre nouvelle saison",
        bg: "f5fafd",
    },
    {
        id: 2,
        img: "https://m.media-amazon.com/images/I/719nmlA950L._AC_SX425_.jpg",
        title: "Voici nos fleurs",
        desc: "",
        bg: "fcf1ed",
    },
];

export const categories = [
    {
        id: 1,
        img: "https://www.ikea.com/be/fr/images/products/smycka-fleur-artificielle-pivoine-blanc__0611399_pe685423_s5.jpg?f=s",
        title: "ROSE BLANCHE",
    },
    {
        id: 2,
        img: "https://www.ikea.com/be/fr/images/products/smycka-fleur-artificielle-pivoine-rose__0611398_pe685428_s5.jpg?f=s",
        title: "ROSE ROSE",
    },
    {
        id: 3,
        img: "https://www.ikea.com/be/fr/images/products/smycka-fleur-artificielle-rose-rouge__0636963_pe698124_s5.jpg?f=s",
        title: "ROSE ROUGE",
    },
];

export const popularProducts = [
    {
        id:1,
        img:"https://scontent.xx.fbcdn.net/v/t1.15752-9/277855271_663458451377740_732131581303785660_n.jpg?stp=dst-jpg_s206x206&_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=OUU48HdLZC4AX__xoUj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLZ_KjIIVddDYew6-uQ_bwm_kYqu2PbOgJk7KiLQAacXA&oe=6272AFED",
        price:2,
    },
    {
        id:2,
        img:"https://scontent.xx.fbcdn.net/v/t1.15752-9/277827939_1198851494246534_810522047349290721_n.jpg?stp=dst-jpg_s206x206&_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=pueSk5iMLLEAX-i0udO&_nc_oc=AQmAJiUZuLS-3d5URyi1bwjLbPtQiqADLHPWlrV1jdHXk2IyBTQB6puNqdYbKXrNkuf5F84dregAhs9hlFFHZk5Q&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLz-LOgcL3o1VIKtzwR_LxIgB5qoMly2AnbIQnY6QxDNw&oe=6272E068",
        price:4,
    },
    {
        id:3,
        img:"https://scontent.xx.fbcdn.net/v/t1.15752-9/277659967_730216898150136_4944359241188025350_n.png?stp=dst-png_s206x206&_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=4bzamkZx0MIAX_T6xyo&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKHVStKQR8PICXjjtb82Vv3GV2Jh-4b52QUaBWZugdCpw&oe=62740BDE",
        price:3,
    },
    {
        id:4,
        img:"https://scontent.xx.fbcdn.net/v/t1.15752-9/277468345_380415104096210_3326746036548180930_n.jpg?stp=dst-jpg_s206x206&_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_ohc=bhbIYWdwpUIAX-SJvEK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLYoFHvLXuNLfdqLO7kNjGJ1aH_UtyuevqUgVMTa1HmHw&oe=6274FA61",
        price:2,
    },
    {
        id:5,
        img:"https://scontent.xx.fbcdn.net/v/t1.15752-9/277713869_528320078700677_2781813537089891597_n.jpg?stp=dst-jpg_s206x206&_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=YzaWCSP4YqgAX8wIZRv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIHKHjtb4w-sFgwANgcTHVDoq8KXna_JJRSKy7LK6m4ZA&oe=627486E7",
        price:8,
    },
    {
        id:6,
        img:"https://scontent.xx.fbcdn.net/v/t1.15752-9/277687997_274975501503977_489036693901227201_n.jpg?stp=dst-jpg_s206x206&_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_ohc=lrRfobRL1MMAX-7spyt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ-4_tH-hcz9FK0sfagjyvORf8y3aPrS05GK8JP-R2LqA&oe=62736BC0",
        price:2,
    },
    {
        id:7,
        img:"https://scontent.xx.fbcdn.net/v/t1.15752-9/277589134_701767434336197_1814586746931983344_n.jpg?stp=dst-jpg_s206x206&_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_ohc=GfH7Pw1RMdMAX-pubmE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIAv4iINV-erlIl9u4BlvTZkVPiGY7SWL4VHv9cqwmiuw&oe=627353D9",
        price:2.5,
    },
    {
        id:8,
        img:"https://scontent.xx.fbcdn.net/v/t1.15752-9/277591456_1360277517818542_6759505628706260217_n.jpg?stp=dst-jpg_s206x206&_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=i5kTkAhQKogAX_FSXMn&_nc_oc=AQmwmecpD-DOfVinMi2yRp5paNXlTuyUlN10-cKor08gUjvtexMUFCythTygaAPx2ZEt-Hw16JlKlJ4ioDRj1MMc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ8_dHKC5ladctfdXD4o2HFuMqC99DgFG6MCZWDKnQejQ&oe=6272BB39",
        price:27,
    },
    {
        id:9,
        img:"https://scontent.xx.fbcdn.net/v/t1.15752-9/277585794_655570502169134_8877859450627416502_n.jpg?stp=dst-jpg_s206x206&_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_ohc=PYdlxUbO8O8AX__YPPA&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKouia1eiEjv-rBaG-lROb1IF9bWMl5OTbOxhD4BrXg5A&oe=62744AEB",
        price:2,
    },
    {
        id:10,
        img:"https://scontent.xx.fbcdn.net/v/t1.15752-9/277468345_380415104096210_3326746036548180930_n.jpg?stp=dst-jpg_s206x206&_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_ohc=bhbIYWdwpUIAX-SJvEK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLYoFHvLXuNLfdqLO7kNjGJ1aH_UtyuevqUgVMTa1HmHw&oe=6274FA61",
        price:2,
    },
    {
        id:11,
        img:"https://scontent.xx.fbcdn.net/v/t1.15752-9/277713869_528320078700677_2781813537089891597_n.jpg?stp=dst-jpg_s206x206&_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=YzaWCSP4YqgAX8wIZRv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIHKHjtb4w-sFgwANgcTHVDoq8KXna_JJRSKy7LK6m4ZA&oe=627486E7",
        price:24,
    },
    {
        name:12,
        img:"https://scontent.xx.fbcdn.net/v/t1.15752-9/277687997_274975501503977_489036693901227201_n.jpg?stp=dst-jpg_s206x206&_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_ohc=lrRfobRL1MMAX-7spyt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ-4_tH-hcz9FK0sfagjyvORf8y3aPrS05GK8JP-R2LqA&oe=62736BC0",
        price:2,
    },

];