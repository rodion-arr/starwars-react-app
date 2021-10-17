import {render} from "@testing-library/react";
import {CatalogCategory} from "../CatalogCategory";
import { BrowserRouter as Router } from "react-router-dom"

describe('CatalogItem', () => {
  it('should render correctly', function () {
     const {container} = render(<Router><CatalogCategory
       title="Unit test"
       items={[{
         title: 'test',
         url: '/test',
         id: '0',
         image: '',
       }]}
       categoryUrl="/unit-test"
     /></Router>)

    expect(container).toMatchSnapshot();
  });

  it('should not render with empty items', function () {
     const {container} = render(<Router><CatalogCategory
       title="Unit test"
       items={[]}
       categoryUrl="/unit-test"
     /></Router>)

    expect(container).toMatchSnapshot();
  });

  it('should not render category link on empty categoryUrl', function () {
     const {container} = render(<Router><CatalogCategory
       title="Unit test"
       items={[{
         title: 'test',
         url: '/test',
         id: '0',
         image: '',
       }]}
     /></Router>)

    expect(container).toMatchSnapshot();
  });
});
