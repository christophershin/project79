import React, {Component} from 'react';
import {Text, View } from 'react-native';

export default class StarMapScreen extends Component {
    render() {
        return(
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Star Map Screen </Text>

            </View>
        )
    }
    getStarLocation = () => {
        axios
            .get("https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true")
            .then(response => {
                this.setState({ location: response.data })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }
    
}

const { longitude, latitude}= this.setState;
const path = 'https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showerlabels=true&gridless_az=true&live=true&projection=stereo&showdate=false&showposition=false'
