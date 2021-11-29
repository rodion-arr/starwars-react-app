import {render} from "@testing-library/react";
import {WithRouter} from "../WithRouter";
import {BrowserRouter as Router} from "react-router-dom";

describe('WithRouter', () => {
  it('should render routes', () => {
    const TestComponent = (): JSX.Element => <>rendered</>
    const routes = [{
      element: <TestComponent />,
      path: '*',
    }]
    const {container} = render(<Router><WithRouter routes={routes} /></Router>);

    expect(container).toMatchSnapshot();
  });
});
