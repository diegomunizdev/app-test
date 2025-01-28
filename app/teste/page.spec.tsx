import { render } from '@testing-library/react';

import TestePage from "./page";
import '@testing-library/jest-dom';

const setup = () => render(<TestePage title="teste" />);

describe('Page', () => {
  it('renders a heading', () => {
    const { getByTestId } = setup();

    getByTestId('testando');
  });
});
