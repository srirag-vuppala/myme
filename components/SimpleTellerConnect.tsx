import React from 'react';

import {
  TellerConnect,
  TellerConnectOnSuccess,
  TellerConnectOnEvent,
  TellerConnectOnExit,
} from 'teller-connect-react';

interface Props {}

class TellerConnectClass extends React.Component<Props> {
  appId: string;

  constructor(props: Props) {
    super(props);
    this.appId = 'app_ookjq6vfh1rjcoicpg000';
  }

  onSuccess: TellerConnectOnSuccess = (authorization) => {
    console.log(authorization);
  };

  onEvent: TellerConnectOnEvent = (name, data) => {
    console.log(name, data);
  };

  onExit: TellerConnectOnExit = () => {
    console.log("TellerConect was dismissed by the user");
  };

  render() {
    return (
      <TellerConnect
        className="CustomButton"
        style={{ padding: '20px', fontSize: '16px', cursor: 'pointer' }}
        applicationId={this.appId}
        onSuccess={this.onSuccess}
        onEvent={this.onEvent}
        onExit={this.onExit}
        environment='sandbox'
      >
        Link your bank account
      </TellerConnect>
    );
  }
}

export default TellerConnectClass;