import {CatalogItem} from "../CatalogItem";
import {render} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"

describe('CatalogItem', () => {
  it('should render correctly', function () {
    const {container} = render(<Router><CatalogItem img="test-image" title="test title" url="/test" /></Router>);

    expect(container).toMatchSnapshot();
  });
})
