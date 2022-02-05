import { TextInput, StyleSheet } from 'react-native'

const Input = (props) => {
    
    return (
        <TextInput
            // allows TextInput props to be passed from where the Input component is used
            {...props}
            // uses styles from here but can be adjusted from where the Input component is used
            style={{...styles.input, ...props.style}}
        />
    )
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
    }
});

export default Input;
