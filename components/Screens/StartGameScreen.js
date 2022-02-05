import { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../Card';
import Colors from '../../constants/colors';
import Input from '../Input';

const StartGameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    };

    return (
        // dismisses keyboard when any other part of the screen is touched
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss()}}>
            <View style={styles.screen} >
                <Text style={styles.title} >Start a New Game!</Text>

                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input
                        style={styles.input}
                        // allows check to dismiss keyboard on Android
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect='false'
                        maxLength={2}
                        keyboardType='number-pad'
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer} >
                        <View style={styles.button} >
                            <Button title='Reset' onPress={() => { }} color={Colors.primary} />
                        </View>
                        <View style={styles.button} >
                            <Button title='Confirm' onPress={() => { }} color={Colors.accent} />
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: 100,
        // borderColor:
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
});

export default StartGameScreen;
