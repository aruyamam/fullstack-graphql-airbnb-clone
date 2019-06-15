import React, { PureComponent } from 'react';
import { RegisterController } from '@abb/controller';

import { RegisterView } from './ui/RegisterView';

export class RegisterConnector extends PureComponent {
  render() {
    return (
      <RegisterController>
        {({ submit }: { submit: any }) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}
