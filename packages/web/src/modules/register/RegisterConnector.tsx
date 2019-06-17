import React, { PureComponent } from 'react';
import { RegisterController } from '@abb/controller';

import { RegisterView } from './ui/RegisterView';

export class RegisterConnector extends PureComponent {
  render() {
    return (
      <RegisterController>
        {({ submit }) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}
