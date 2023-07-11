export type ToggleMenuProps = {
    title: string,
    items: Item[],
}

export type MenuStyle = {
    open: boolean
}

export type Item = {
    children: React.ReactNode,
    onClick: Function
}