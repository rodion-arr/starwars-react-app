import {render} from "@testing-library/react";
import {EntityDetailPage} from "../EntityDetailPage";

describe('EntityDetailPage', () => {
  it('should render correctly', function () {
    const {container} = render(<EntityDetailPage
      name="Unit test"
      image="/test"
      charProps={{
        test: 'value',
        test2: 'value 2',
      }}
    >
      <span>children</span>
    </EntityDetailPage>);

    expect(container).toMatchSnapshot();
  });

  it('should render correctly without optional params', function () {
    const {container} = render(<EntityDetailPage
      name="Unit test"
      image="/test"
    />);

    expect(container).toMatchSnapshot();
  });
});
