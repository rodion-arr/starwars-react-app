import {render} from "@testing-library/react";
import {Header} from "../Header";
import { BrowserRouter as Router } from "react-router-dom"

describe('Header', () => {
  it('should render correctly', function () {
    const {container} = render(<Router><Header /></Router>);

    expect(container).toMatchSnapshot();
  });
});
