import {View, Text, Pressable, Image, StyleSheet } from 'react-native';

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
    return <View style={styles.MealItem}>
    <Pressable style={({ pressed }) =>  pressed ? styles.buttonPressed : null}>  
    <View style={styles.innerContainer}> 
    <View>
    <Image source={{uri: imageUrl }} style={styles.image} />


    <Text style={styles.title}>{title}</Text>

    </View>
    <View style={styles.details}>
        <Text style={styles.detailItem}> {duration}</Text>
        <Text style={styles.detailItem}>{complexity} </Text>
        <Text style={styles.detailItem}>{affordability}</Text>
    </View>

    </View>
    
        </Pressable>
    </View>

}

export default MealItem

const styles = StyleSheet.create({
    MealItem: {
        margin: 16,
            borderRadius: 8,
            overflow: 'hidden',
            backgroundColor: 'white',
            elevation: 4,
            backgroundColor: 'white',
            shadowColor: 'black',
            shadowOpacity: 0.25,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    buttonPressed: {
        opacity: 0.5,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})