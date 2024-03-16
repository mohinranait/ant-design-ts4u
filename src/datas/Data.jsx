import { GoHome } from "react-icons/go"
import { RiProductHuntLine } from "react-icons/ri";
import { TbUserScan } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";

export const headerMenus = [
    {
        label: 'Home',
        key: "Home"
    },
    {
        label: 'Logout',
        key: "logout"
    },
    {
        label: 'Products',
        key: "Products"
    },
]

export const leftMenus = [
    {
        label: "Home",
        key: '/',
        icon: <GoHome />,
        children: [
            {
                label: "Products",
                key: '/products',
                icon: <RiProductHuntLine />,

            },
            {
                label: "Users",
                key: '/users',
                icon: <TbUserScan />
            },
            {
                label: "Calender",
                key: '/calender',
                icon: <CiCalendar />
            },
        ]
    },
    {
        label: "Products",
        key: '/products',
        icon: <RiProductHuntLine />,
        children: [
            {
                label: "Add Product",
                key: '/add-product',
                icon: <TbUserScan />
            },
        ]

    },
    {
        label: "Users",
        key: '/users',
        icon: <TbUserScan />
    },
    {
        label: "Calender",
        key: '/calender',
        icon: <CiCalendar />
    },
]

