import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useLinkProps } from '@react-navigation/native';

const OutletScreen =(props)=>{
    return(
        <View style={{flex:1}}>
            <ScrollView>
            <View style={{backgroundColor:"red", height:220}}> 
                <Text style={{marginTop:90, display:"flex", justifyContent:"center", alignItems:"center", marginLeft:50, fontSize:30}}>OUTLET</Text>
            </View>

            <View>
            <View style={{width:340, height:190, borderRadius:5, backgroundColor:"#ff7200", flexDirection:"row", marginTop:20, marginLeft:20}}>
            <View style={{flex:5}}>
            <Image source={require('../pictures/found2.jpeg')} style={{width:130, height:190, borderTopLeftRadius:10, borderBottomLeftRadius:10}}/>
            </View>
            <View style={{flex:7, paddingTop:30}}>
             <Text style={{fontSize:20, paddingLeft:15, color:"white", fontWeight:"bold"}}>Multifunctional set</Text> 
            <Text style={{paddingLeft:15, color:"white", fontSize:20, fontWeight:"bold"}}>Hair clipper</Text>
            <Text style={{fontSize:20, paddingTop:5, fontWeight:"bold", paddingLeft:15, color:"white"}}>GHC109.00</Text>
            <TouchableOpacity style={{height:32, width:130, marginTop:20, borderRadius:30, display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#EDF5E1",  marginLeft:20}}>
              <Text style={{color:"#ff7200", fontWeight:"bold"}}>Buy Now</Text>
            </TouchableOpacity>
          </View>
          </View>
          </View>

          <View>
            <View style={{width:340, height:190, borderRadius:5, backgroundColor:"#ff7200", flexDirection:"row", marginTop:20, marginLeft:20}}>
            <View style={{flex:5}}>
            <Image source={require('../pictures/found2.jpeg')} style={{width:130, height:190, borderTopLeftRadius:10, borderBottomLeftRadius:10}}/>
            </View>
            <View style={{flex:7, paddingTop:30}}>
             <Text style={{fontSize:20, paddingLeft:15, color:"white", fontWeight:"bold"}}>Multifunctional set</Text> 
            <Text style={{paddingLeft:15, color:"white", fontSize:20, fontWeight:"bold"}}>Hair clipper</Text>
            <Text style={{fontSize:20, paddingTop:5, fontWeight:"bold", paddingLeft:15, color:"white"}}>GHC109.00</Text>
            <TouchableOpacity style={{height:32, width:130, marginTop:20, borderRadius:30, display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#EDF5E1",  marginLeft:20}}>
              <Text style={{color:"#ff7200", fontWeight:"bold"}}>Buy Now</Text>
            </TouchableOpacity>
          </View>
          </View>
          </View>

          <View>
            <View style={{width:340, height:190, borderRadius:5, backgroundColor:"#ff7200", flexDirection:"row", marginTop:20, marginLeft:20}}>
            <View style={{flex:5}}>
            <Image source={require('../pictures/found2.jpeg')} style={{width:130, height:190, borderTopLeftRadius:10, borderBottomLeftRadius:10}}/>
            </View>
            <View style={{flex:7, paddingTop:30}}>
             <Text style={{fontSize:20, paddingLeft:15, color:"white", fontWeight:"bold"}}>Multifunctional set</Text> 
            <Text style={{paddingLeft:15, color:"white", fontSize:20, fontWeight:"bold"}}>Hair clipper</Text>
            <Text style={{fontSize:20, paddingTop:5, fontWeight:"bold", paddingLeft:15, color:"white"}}>GHC109.00</Text>
            <TouchableOpacity style={{height:32, width:130, marginTop:20, borderRadius:30, display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#EDF5E1",  marginLeft:20}}>
              <Text style={{color:"#ff7200", fontWeight:"bold"}}>Buy Now</Text>
            </TouchableOpacity>
          </View>
          </View>
          </View>
          <View>
            <View style={{width:340, height:190, borderRadius:5, backgroundColor:"#ff7200", flexDirection:"row", marginTop:20, marginLeft:20}}>
            <View style={{flex:5}}>
            <Image source={require('../pictures/found2.jpeg')} style={{width:130, height:190, borderTopLeftRadius:10, borderBottomLeftRadius:10}}/>
            </View>
            <View style={{flex:7, paddingTop:30}}>
             <Text style={{fontSize:20, paddingLeft:15, color:"white", fontWeight:"bold"}}>Multifunctional set</Text> 
            <Text style={{paddingLeft:15, color:"white", fontSize:20, fontWeight:"bold"}}>Hair clipper</Text>
            <Text style={{fontSize:20, paddingTop:5, fontWeight:"bold", paddingLeft:15, color:"white"}}>GHC109.00</Text>
            <TouchableOpacity style={{height:32, width:130, marginTop:20, borderRadius:30, display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#EDF5E1",  marginLeft:20}}>
              <Text style={{color:"#ff7200", fontWeight:"bold"}}>Buy Now</Text>
            </TouchableOpacity>
          </View>
          </View>
          </View>



          </ScrollView>

        </View>
    );
}

export default OutletScreen;