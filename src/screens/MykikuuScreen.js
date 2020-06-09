import React from 'react';
import {View, Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {FontAwesome, Ionicons, Entypo, MaterialCommunityIcons, AntDesign, MaterialIcons, Fontisto} from '@expo/vector-icons';

const MykikuuScreen =()=>{
    return(
        <ScrollView>
        <View style={{flex:1}}>
            <View style={{height:180, backgroundColor:"#d6a966"}}>
                <View style={{paddingTop:50, paddingLeft:"80%"}}>
                    <Ionicons
                    name="ios-settings"
                    size={24}
                    color="white"/>
                </View>
                <View style={{height:140, width:340, marginTop:10, marginLeft:20, marginRight:30, backgroundColor:"#5b5959", borderRadius:10, padding:30}}>
                    <View style={{flexDirection:"row"}}>
                    <View>
                    <Image source={require('../pictures/blouse3.jpeg')} style={{width:50, height:50, borderRadius:30, resizeMode:"contain"}}/>
                    </View>
                    <View style={{paddingLeft:20}}>
                    <Text style={{fontSize:20}}>Audrey Ponu</Text>
                    <Text style={{paddingTop:5}}>VIP</Text>
                    </View>
                    </View>
                    <Text style={{paddingTop:10, fontSize:18}}>KiKUU Premium</Text>
                </View>
            </View>

            <View style={{paddingRight:20, paddingLeft:20}}>
                <View style={{flexDirection:"row", paddingTop:90}}>
                <Text style={{fontSize:18, fontWeight:"bold"}}>My Orders</Text>
                <Text style={{paddingLeft:210, color:"blue"}}>View All</Text>
                </View>
                
                <View style={{paddingTop:20, flexDirection:"row", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <View style={{flex:2, paddingLeft:20}}>
               <Entypo
               name="hour-glass"
               size={30}
               color="black"/>
                <Text>Pending</Text>
                <Text>Pending</Text>
                </View>

                <View style={{flex:2}}>
                <MaterialCommunityIcons
                name="truck"
                size={30}
                color="black"/>
                <Text>Pending</Text>
                <Text>Pending</Text>
                </View>

                <View style={{flex:2}}>
                <Image source={require('../pictures/pic1.png')} style={{width:50, height:50, borderRadius:30}}/>
                <Text>Pending</Text>
                <Text>Pending</Text>
                </View>

                <View style={{flex:2}}>
                <Image source={require('../pictures/pic1.png')} style={{width:50, height:50, borderRadius:30}}/>
                <Text>Pending</Text>
                <Text>Pending</Text>
                </View>
                </View>

             
            </View>
            
          
            <View style={{backgroundColor:"white", marginTop:20, paddingLeft:20, paddingRight:20}}>
                <View style={{flexDirection:"row"}}>
                <FontAwesome style={{paddingTop:10}}
                    name="heart"
                    size={20}/>
                     <Text style={{fontSize:20,paddingTop:10, marginLeft:20}}>Wish List</Text>
                </View>
                   
                   <View style={{flexDirection:"row"}}>
                   <FontAwesome style={{paddingTop:30}}
                    name="heart"
                    size={20}/>
                   <Text style={{fontSize:20, paddingTop:30, marginLeft:20}}>Store Followed</Text>
                   </View>

                   <View style={{flexDirection:"row"}}>
                   <FontAwesome style={{paddingTop:25}}
                    name="timer-outline"
                    size={20}/>
                    <Text style={{fontSize:20, paddingTop:30, marginLeft:20}}>Recently Viewed</Text>
                   </View>
                   
                   <View style={{flexDirection:"row"}}>
                   <FontAwesome style={{paddingTop:30}}
                    name="heart"
                    size={20}/>
                     <Text style={{fontSize:20, paddingTop:30, marginLeft:20}}>My Coupons</Text>
                   </View>
                
                   <View style={{flexDirection:"row"}}>
                   <Ionicons style={{paddingTop:30}}
                    name="ios-home"
                    size={20}/>
                     <Text style={{fontSize:20, paddingTop:30, paddingBottom:20, marginLeft:20}}>My K-Pay</Text>
                   </View>
                   
            </View>

            <View style={{backgroundColor:"white", marginTop:20, paddingLeft:20, paddingRight:20}}>
            <View style={{flexDirection:"row"}}>
                   <Ionicons style={{paddingTop:30}}
                    name="home"
                    size={20}/>
                     <Text style={{fontSize:20, paddingTop:30, marginLeft:20}}>Address Management</Text>
                   </View>
                   <View style={{flexDirection:"row"}}>
                   <AntDesign style={{paddingTop:30}}
                    name="customerservice"
                    size={20}/>
                     <Text style={{fontSize:20, paddingTop:30, marginLeft:20}}>Service Center</Text>
                   </View>
                   <View style={{flexDirection:"row"}}>
                   <MaterialIcons style={{paddingTop:30}}
                    name="person-pin"
                    size={20}/>
                     <Text style={{fontSize:20, paddingTop:30, marginLeft:20}}>Invite Friend</Text>
                   </View>
                   <View style={{flexDirection:"row"}}>
                   <Ionicons style={{paddingTop:30}}
                    name="ios-mail"
                    size={20}/>
                     <Text style={{fontSize:20, paddingTop:30, marginLeft:20, marginBottom:30}}>Friend's code</Text>
                   </View>
            </View>
              
           
           
               

        </View>
        </ScrollView>
    );
}

export default MykikuuScreen;