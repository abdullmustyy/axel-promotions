interface INav {
    name: string;
    href: string;
}

interface ILinkNavItem extends INav {
    type: "link";
}

interface IDropdownNavItem extends Pick<INav, "name"> {
    type: "dropdown";
    dropdownItems: INav[];
}

type INavItem = ILinkNavItem | IDropdownNavItem;
