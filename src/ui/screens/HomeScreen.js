import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import {Navigation} from 'react-native-navigation';

import {  Container,
          Header, Title,
          Content,
          Footer, FooterTab,

          Button, Icon
} from 'native-base';

import MainController from '../../controllers/MainController';

export default class HomeScreen extends Component {


  constructor(props) {
    super(props);

    this.state = {
    };

    // if we want to listen on navigator events, set this up
    //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  };

  onNavigatorEvent(event)
  {
    //event.id === 'event_id'
  };

  onEvent(param)
  {
    // MainController.event_this(param);
    alert('Cool! I have been pressed.');
  };

  render() {
    return (
      <Container>

        <Content style={styles.content}>

          <Button dark transparent
          style={styles.center}
          onPress={() => this.onEvent()}>
            <Text>KREYOL</Text>
          </Button>

          <Button dark transparent
          style={styles.center}
          onPress={() => this.onEvent()}>
            <Text>ENGLISH</Text>
          </Button>

          <Button dark transparent
          style={styles.center}
          onPress={() => this.onEvent()}>
            <Text>FRANCAIS</Text>
          </Button>

        </Content>

      </Container>
    );
  };

}

const styles = {
  content: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
};
