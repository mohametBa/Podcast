import { Button, Text, View } from "react-native";
import { Component } from "react";

class ComponentEtat extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    incriment(){
        this.setState({
            count : this.state.count + 1
        })
    
    }
    soustract(){
        this.setState({
            count : this.state.count - 1
        })}

    render(){
        const Cc = this.state.count;
        return <View>
            <Text>{Cc}</Text>
            <Button title="Appuyez moi!!!" onPress={() => this.incriment()

            }></Button>
            <Button title="Appuyez moi!!!" onPress={() => this.soustract()

}></Button>
        </View>
    }
}

export default ComponentEtat