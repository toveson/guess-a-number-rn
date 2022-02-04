import { StyleSheet, Text, View } from 'react-native';

const Card = (props) => {
    return (
        <View style={{ ...styles.card, ...props.style }} >
            {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        // ios only shadow 
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        // android only shadow
        elevation: 8,
    },
});

export default Card;
