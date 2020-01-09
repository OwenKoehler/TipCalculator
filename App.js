/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

import {
  Container,
  Header,
  Content,
  ListItem,
  Text,
  Radio,
  Right,
  Left,
  Icon,
  Body,
  Title,
  Input,
  Item,
  Label,
} from 'native-base';

function App() {
  const [tipPercent, setTipPercent] = useState(10);
  const [preTotal, setPreTotal] = useState(0);
  const [postTotal, setPostTotal] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);

  const radio_props = [
    {label: '10%', value: 10},
    {label: '15%', value: 15},
    {label: '20%', value: 20},
    {label: '25%', value: 25},
  ];

  useEffect(() => {
    console.log('UE');
    setTipAmount((preTotal * tipPercent) / 100);
    setPostTotal(preTotal + tipAmount);
  }, [preTotal, tipPercent, tipAmount]);

  return (
    <Container>
      <Header>
        <Body>
          <Title>Tip Calculator</Title>
        </Body>
      </Header>

      <Container style={styles.body}>
        <Content>
          <Item floatingLabel style={styles.input}>
            <Label>Enter your pre-tip total</Label>
            <Input
              keyboardType="numeric"
              numeric
              value={preTotal.toString()}
              onChange={event => {
                setPreTotal(parseFloat(event.nativeEvent.text));
              }}
            />
          </Item>

          <Text>{tipPercent}</Text>
          <RadioForm
            radio_props={radio_props}
            formHorizontal={true}
            labelHorizontal={false}
            onPress={value => {
              setTipPercent(value);
            }}
          />
          <Text>Tip: {tipAmount}</Text>
          <Text>Total: {postTotal}</Text>
        </Content>
      </Container>
    </Container>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    
  },
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  // engine: {
  //   position: 'absolute',
  //   right: 0,
  // },
  // body: {
  //   backgroundColor: Colors.white,
  // },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: Colors.black,
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  //   color: Colors.dark,
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
  // footer: {
  //   color: Colors.dark,
  //   fontSize: 12,
  //   fontWeight: '600',
  //   padding: 4,
  //   paddingRight: 12,
  //   textAlign: 'right',
  // },
});

export default App;
