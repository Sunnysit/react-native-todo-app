import React ,{useState} from 'react';
import { StyleSheet,View ,Text, Button,TextInput} from 'react-native';

const AddTodo = ({submitHandler}) => {

    const [text,setText] = useState("");

    const changeHandler = (val)=>{
        setText(val);
    }

    

    return ( 
        <View>
            <TextInput placeholder="new todo..."
            onChangeText={changeHandler}
            style={styles.input}
            />
            <Button onPress={()=>submitHandler(text)} title="Add New Item" color="coral" />
        </View>
     );
}
 
export default AddTodo;

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:"#ddd"
    }
})