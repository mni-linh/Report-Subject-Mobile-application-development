import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons'
import VideoPlayer from './VideoPlayer';

import api from '../api';

export default class DetailMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
          displayVideo: false
        };

        const { navigation } = this.props;
        const imdbID = navigation.getParam('imdbID');
        console.log(imdbID)
        api.view(imdbID).then((data) => {
            console.log(data)
            this.setState(data[0]);
        });
    }

    // static navigationOptions = {
    //     title: 'Movie Detail'
    // }

    seperator() {
        return (
            <View style={{ height: 1, backgroundColor: '#1E434C', margin: 5 }} />
        );
    }
    downtheline(){
      return(
        <View style={{height:1, margin: 5}}/>
      );
    }

    render() {
        return (
              <View style={styles.container}>
                    <View>                        
                      {this.state.displayVideo && <VideoPlayer url={this.state.url_mp4}/> }
                    </View>
                    {(!this.state.displayVideo) && <Image style={styles.image} source={{ uri: this.state.Poster }} /> }
                    {(!this.state.displayVideo) &&
                    <TouchableOpacity style={styles.playIconContainer}   
                      onPress={() => {
                        this.setState({
                          displayVideo: true
                        })
                      }}>
                      <FontAwesome5 name='play' size={22} color='#02ad94' style={{marginLeft: 4}}/>
                    </TouchableOpacity> }
                    <View style={{alignItems:'center', paddingTop: 5}}>
                      <View style={{marginTop:28}}>
                        <Text style={styles.subTitle}>
                          {/* <b>Meta:</b>  */}
                          {this.state.Metascore}
                        </Text>
                      </View>
                      <Text style={styles.subTitle}>
                        {/* <b>imDB:</b>  */}
                        {this.state.imdbRating}
                      </Text>
                      <Text> {this.state.Evaluate}</Text>
                    </View>
                <View style={{ flex: 2, padding: 10 }}>
                    <Text style={styles.title}>{this.state.Title} ({this.state.Year})</Text>
                    <Text style={{color:"#FFF"}}>
                      {/* <b>Genre:</b>  */}
                      {this.state.Genre}
                    </Text>
                    {this.seperator()}
                    <Text style={{color:"#FFF"}}>
                      {/* <b>Scri-Fi:</b>  */}
                      {this.state.Runtime}
                    </Text>
                    {this.seperator()}
                    <Text style={{color:"#FFF"}}>
                      {/* <b>Release:</b>  */}
                      {this.state.Released}
                    </Text>
                    {this.seperator()}
                    <Text style={{color:"#FFF"}}>
                      {/* <b>Summary:</b>  */}
                      {this.state.Plot}
                    </Text>
                    {this.seperator()}
                    <Text style={{color:"#FFF"}}>
                      {/* <b>Director:</b>  */}
                      {this.state.Director}
                    </Text>
                    {this.seperator()}
                    <Text style={{color:"#FFF"}}>
                      {/* <b>Writer:</b>  */}
                      {this.state.Writer}
                    </Text>
                    {this.seperator()}
                    <Text style={{color:"#FFF"}}>
                      {/* <b>Actors:</b>  */}
                      {this.state.Actors}
                    </Text>
                </View>
                <View style={{flex: 1, flexDirection:'row'}}>
                  <View style={{flexDirection:'column', marginRight: 20, alignItems:'center'}}>
                    <Image style={styles.imageActors} source={{uri: this.state.ImgActor1}}/>
                    {this.downtheline()}
                    <Text style={{alignItems:'center', color:"#FFF"}}>{this.state.Actor1}</Text>
                   </View>
                 
                  <View style={{flexDirection:'column', marginRight: 20}}>
                    <Image style={styles.imageActors} source={{uri: this.state.ImgActor2}}/>
                    {this.downtheline()}
                    <Text style={{alignItems:'center', color:"#FFF"}}>{this.state.Actor2}</Text>
                   </View>
                 
                  <View style={{flexDirection:'column', marginRight: 20}}>
                    <Image style={styles.imageActors} source={{uri: this.state.ImgActor3}}/>
                    {this.downtheline()}
                    <Text style={{alignItems:'center', color:"#FFF"}}>{this.state.Actor3}</Text>
                  </View>
                 
                    
                  
                </View>
            </View>
        );
    }
}
let styles = StyleSheet.create({
    container: {
      backgroundColor:'#063852',
      color: 'red',
        flex: 1,
        padding: 10,
        paddingTop: 70,
        flexDirection: 'column'
    },
    image: {
        height: 200
    },
    title: {
        fontSize: 25,
        color: '#FFF'
    },
    subTitle: {
        fontSize: 20,
        color:"#FFF"
    },
    imageActors:{
      height: 50,
      width: 50,
      borderRadius: 80,
    },
    playIconContainer:{
      backgroundColor: '#212121',
      padding: 18,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 10,
      borderWidth: 4,
      borderColor: 'rgba(2,173,148,0.2)',
      marginBottom: 14,
      width: 60,
      height: 60,
      marginLeft: 230,
      position: 'absolute',
      top: '25.5%',
      right: '40%'
    }
});


