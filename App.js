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
  const [input, setInput] = useState('');
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
    console.log('Called UseEffect()');
    setTipAmount((preTotal * tipPercent) / 100);
    setPostTotal(preTotal + tipAmount);
  }, [preTotal, tipPercent, tipAmount]);

  const displayAmount = amount => {
    if (isNaN(amount)) return '--';
    return amount.toFixed(2);
  };

  return (
    <Container>
      <Header>
        <Body>
          <Title>Tip Calculator</Title>
        </Body>
      </Header>

      <Container style={styles.body}>
        <Content>
          <View style={styles.inputContainer}>
            <Item floatingLabel>
              <Label style={styles.inputLabel}>Enter your pre-tip total</Label>
              <Input
                keyboardType="numeric"
                numeric
                style={styles.inputText}
                value={input}
                onChange={event => {
                  setInput(event.nativeEvent.text);
                  setPreTotal(parseFloat(event.nativeEvent.text));
                }}
              />
            </Item>
          </View>

          {/* <RadioForm
            style={styles.tipRadio}
            radio_props={radio_props}
            formHorizontal={true}
            labelHorizontal={false}
            buttonSize={40}
            onPress={value => {
              setTipPercent(value);
            }}
          /> */}

          <RadioForm
            style={styles.tipRadioForm}
            formHorizontal={true}
            animation={true}>
            {/* To create radio buttons, loop through your array of options */}
            {radio_props.map((obj, i) => (
              <RadioButton labelHorizontal={false} key={i}>
                {/*  You can set RadioButtonLabel before RadioButtonInput */}
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={tipPercent === obj.value}
                  buttonSize={40}
                  buttonWrapStyle={{marginLeft: 10, marginRight: 10}}
                  onPress={value => {
                    setTipPercent(value);
                  }}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={false}
                  labelStyle={{fontSize: 20}}
                  labelWrapStyle={{marginLeft: 0, marginTop: 10}}
                  style={styles.radioButtonLabel}
                />
              </RadioButton>
            ))}
          </RadioForm>

          <Text style={styles.tipAmount}>Tip: {displayAmount(tipAmount)}</Text>
          <Text style={styles.postTotal}>
            Total: {displayAmount(postTotal)}
          </Text>
        </Content>
      </Container>
    </Container>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: '10%',
  },
  inputContainer: {
    marginHorizontal: '8%',
    padding: '4%',
    fontSize: 25,
  },
  inputLabel: {
    fontSize: 25,
  },
  inputText: {
    fontSize: 25,
    marginBottom: 10,
    marginTop: 20,
  },
  tipRadioForm: {
    margin: '8%',
    alignSelf: 'center',
  },
  tipAmount: {
    margin: '8%',
    fontSize: 25,
  },
  postTotal: {
    margin: '8%',
    fontSize: 25,
  },
  radioButtonWrap: {
    marginRight: '10em',
  },
});

export default App;
