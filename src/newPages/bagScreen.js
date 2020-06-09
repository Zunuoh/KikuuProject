import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const BagScreen =({navigation})=>{
    return(
        <View style={{flex:1}}>
            <View style={{paddingTop:60, height:110, borderWidth:2, borderBottomColor:"#eae8e8"}}>
            <TextInput style={{ height:36, width:280, paddingLeft:20, borderRadius:30, marginLeft:40, backgroundColor:"#eae8e8"}}>
                    <Ionicons style={{marginLeft:20}}
                    name="ios-search"
                    size="20"/>
                     <Text style={{display:"flex", justifyContent:"center", alignItems:"center"}}>  search</Text>
                </TextInput>
         </View>

         <ScrollView>
             <View style={{flexDirection:"row"}}>
             <View style={{flex:3}}> 

              <View style={{padding:15}}>
              <Text style={{fontSize:15}}>Recommend</Text>
              </View>
             
               <TouchableOpacity style={{backgroundColor:"#eae8e8", height:52}} onPress={()=>{navigation.navigate('Home')}}>
                 <Text style={{padding:20}}>Clothing</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"#eae8e8", height:52, marginTop:5}}>
                 <Text style={{padding:20}}>Shoes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"#eae8e8", height:52, marginTop:5}}>
                 <Text style={{padding:20}}>Luggage</Text>
                 <Text style={{padding:20}}>bags</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"#eae8e8", height:52, marginTop:5}}>
                 <Text style={{padding:20}}>Watch</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"#eae8e8", height:52, marginTop:5}}>
                 <Text style={{padding:20}}>Kids & Toys</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"#eae8e8", height:52, marginTop:5}}>
                 <Text style={{padding:20}}>Home & Appliances</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"#eae8e8", height:52, marginTop:5}}>
                 <Text style={{padding:20}}>Beauty</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"#eae8e8", height:52, marginTop:5}}>
                 <Text style={{padding:20}}>Weddings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"#eae8e8", height:52, marginTop:5}}>
                 <Text style={{padding:20}}>Hair</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"#eae8e8", height:52, marginTop:5}}>
                 <Text style={{padding:20}}>Phones & Tel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"#eae8e8", height:52, marginTop:5}}>
                 <Text style={{padding:20}}>Clothing</Text>
                </TouchableOpacity>
             </View>

             <View style={{flex:8}}>
              <View style={{padding:15}}>
              <Text style={{fontSize:20, fontWeight:"bold"}}>Women's Bag</Text>
              </View>

             

              <View style={{padding:15, flexDirection:"row"}}>
              <View>
                  <Image source={require('../pictures/bag2.jpeg')} style={{width:70, height:70}}/>
                  <Text style={{paddingLeft:1}}>Shoulder bags</Text>
                  </View>
                  <View>
                  <Image source={require('../pictures/bag3.jpeg')} style={{width:70, height:70, marginLeft:20}}/>
                  <Text style={{paddingLeft:20}}>Handle bag</Text>
                  </View>
                  <View>
                  <Image source={require('../pictures/bag4.jpeg')} style={{width:70, height:70, marginLeft:20}}/>
                  <Text style={{paddingLeft:20}}>Travel bag</Text>
                  </View>
              </View>
                
                <View style={{paddingTop:60}}>
                    <Text style={{fontSize:20, fontWeight:"bold"}}>Men's Bag</Text>
                </View>
              <View style={{padding:15, flexDirection:"row"}}>
                  <View>
                  <Image source={require('../newPages/menb4.jpeg')} style={{width:70, height:70}}/>
                  <Text style={{paddingLeft:10}}>Backpacks</Text>
                  </View>
                  <View>
                  <Image source={require('../newPages/menb3.jpeg')} style={{width:70, height:70, marginLeft:20}}/>
                  <Text style={{paddingLeft:30}}>Shoulder bag</Text>
                  </View>
                  <View>
                  <Image source={require('../newPages/mensh1.jpeg')} style={{width:70, height:70, marginLeft:20}}/>
                  <Text style={{paddingLeft:30}}>Work shoes</Text>
                  </View>
              </View>

            
             </View>
             </View>
         </ScrollView>
          

        </View>
    );
}

export default BagScreen;