import React from "react";
import ToggleMenu from './index'
import { Item } from "./types";
import Flex from "../Flex";

export default {
    title: 'Components/ToggleMenu',
    component: ToggleMenu,
};

const MenuItem = (title) => {
    return (
        <Flex direction="row">
            <div style={{ padding: '0px 10px' }}>{title}</div>
            <img src="./branding/svg/arrow-left.svg" />
        </Flex>
    );
}

const CustomItemContent: Item[] = [
    {
        children: MenuItem('My Profile'),
        onClick: () => { }
    },
    {
        children: MenuItem('Edit Profile'),
        onClick: () => { }
    }
]

const SimpleItemContent: Item[] = [
    {
        children: 'My Profile',
        onClick: () => { }
    },
    {
        children: 'Edit Profile',
        onClick: () => { }
    },
    {
        children: 'Help',
        onClick: () => { }
    },
    {
        children: 'Setting',
        onClick: () => { }
    },
    {
        children: 'Logout',
        onClick: () => { }
    }
];

const Template = (args) => <ToggleMenu {...args} />;

export const Main = Template.bind({});
Main.args = {
    title: 'Simple Toggle Title',
    items: SimpleItemContent,
};

export const Custom = Template.bind({});
Custom.args = {
    title: 'Custom Toggle Title',
    items: CustomItemContent,
};