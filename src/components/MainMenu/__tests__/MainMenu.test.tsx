import {render, fireEvent} from "@testing-library/react";
import {MainMenu} from "../MainMenu";
import { BrowserRouter as Router } from "react-router-dom"

describe('MainMenu', () => {
  it('should render correctly', function () {
    const {container} = render(<MainMenu />);

    expect(container).toMatchSnapshot();
  });

  it('should open on burger menu click', function () {
    const {container} = render(<MainMenu />);
    const burgerMenu = container.getElementsByClassName('burger-menu')[0];

    fireEvent.click(burgerMenu);

    expect(document.body).toHaveClass('side-menu-opened');
  });

  it('should close menu page area click', function () {
    const portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'side-menu-portal');
    document.body.appendChild(portalRoot)

    const {container, unmount} = render(<Router><MainMenu /></Router>);

    const burgerMenu = container.getElementsByClassName('burger-menu')[0];
    const overlay = document.getElementsByClassName('sidebar__overlay')[0];

    fireEvent.click(burgerMenu);
    fireEvent.click(overlay);

    expect(document.body).not.toHaveClass('side-menu-opened');
    unmount();
  });
});
