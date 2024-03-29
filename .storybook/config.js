import { addDecorator, addParameters, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import { loadStories, storybookOptions } from 'storybook-common';

import './addons';

const req = require.context('../src', true, /\.stories\.(jsx?|tsx?)$/);

addParameters(storybookOptions('react-fleet'));
addDecorator(withA11y);

configure(() => loadStories(req), module);
