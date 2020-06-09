import React from 'react';
import {View, Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons'

const CheckoutScreen =()=>{
    return(
        <View style={{flex:1}}>
            <View style={{paddingTop:50, display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                <Text style={{fontSize:30, fontWeight:"bold"}}>Cart</Text>
            </View>
           <ScrollView>
              <View style={{height:210, backgroundColor:"white", marginTop:10, padding:20}}>
              <View style={{flexDirection:"row"}}>
                  <View style={{height:15, width:15, borderRadius:20, borderColor:"black", borderWidth:1, marginTop:2}}/>
                  <Text style={{fontSize:20, fontWeight:"bold", paddingLeft:10}}>Seller:Xueju Jewelery Wholesale</Text>
                  </View>
                  <View style={{paddingTop:20, flexDirection:"row"}}>
                  <View style={{flex:2}}>
                  <Image source={require('../pictures/jewel1.jpeg')} style={{width:60, height:60}}/>
                  </View>
                  <View style={{flex:7, paddingLeft:20}}>
                  <Text style={{fontSize:18}}>11 pcs/Set Boho Vintage Punk...</Text>
                  <Text style={{paddingTop:5}}>Silver</Text>
                  <Text style={{fontWeight:"700", paddingTop:5, fontSize:18}}>GHC 18.94</Text>
                  <Text style={{paddingLeft:100}}>1</Text>
                  </View>
                 </View>
                 <Text style={{paddingTop:10}}>Wholesale Discount</Text>
              </View>

              <View style={{height:210, backgroundColor:"white", marginTop:10, padding:20}}>
                  <View style={{flexDirection:"row"}}>
                  <View style={{height:15, width:15, borderRadius:20, borderColor:"black", borderWidth:1, marginTop:2}}/>
                  <Text style={{fontSize:20, fontWeight:"bold", paddingLeft:10}}>Seller:Xueju Jewelery Wholesale</Text>
                  </View>
                
                  <View style={{paddingTop:20, flexDirection:"row"}}>
                  <View style={{flex:2}}>
                  <Image source={require('../pictures/jewel2.jpeg')} style={{width:60, height:60, resizeMode:"contain"}}/>
                  </View>
                  <View style={{flex:7, paddingLeft:20}}>
                  <Text style={{fontSize:18}}>11 pcs/Set Boho Vintage Punk...</Text>
                  <Text style={{paddingTop:5}}>Silver</Text>
                  <Text style={{fontWeight:"700", paddingTop:5, fontSize:18}}>GHC 18.94</Text>
                  <Text style={{paddingLeft:100}}>1</Text>
                  </View>
                 </View>
                 <Text style={{paddingTop:10}}>Wholesale Discount</Text>
              </View>

              <View style={{height:210, backgroundColor:"white", marginTop:10, padding:20}}>
              <View style={{flexDirection:"row"}}>
                  <View style={{height:15, width:15, borderRadius:20, borderColor:"black", borderWidth:1, marginTop:2}}/>
                  <Text style={{fontSize:20, fontWeight:"bold", paddingLeft:10}}>Seller:Xueju Jewelery Wholesale</Text>
                  </View>
                  <View style={{paddingTop:20, flexDirection:"row"}}>
                  <View style={{flex:2}}>
                  <Image source={require('../pictures/jewel3.jpeg')} style={{width:60, height:60}}/>
                  </View>
                  <View style={{flex:7, paddingLeft:20}}>
                  <Text style={{fontSize:18}}>11 pcs/Set Boho Vintage Punk...</Text>
                  <Text style={{paddingTop:5}}>Silver</Text>
                  <Text style={{fontWeight:"700", paddingTop:5, fontSize:18}}>GHC 18.94</Text>
                  <Text style={{paddingLeft:100}}>1</Text>
                  </View>
                 </View>
                 <Text style={{paddingTop:10}}>Wholesale Discount</Text>
              </View>

              <View style={{height:210, backgroundColor:"white", marginTop:10, padding:20}}>
              <View style={{flexDirection:"row"}}>
                  <View style={{height:15, width:15, borderRadius:20, borderColor:"black", borderWidth:1, marginTop:2}}/>
                  <Text style={{fontSize:20, fontWeight:"bold", paddingLeft:10}}>Seller:Xueju Jewelery Wholesale</Text>
                  </View>
                  <View style={{paddingTop:20, flexDirection:"row"}}>
                  <View style={{flex:2}}>
                  <Image source={require('../pictures/jewel4.jpeg')} style={{width:60, height:60}}/>
                  </View>
                  <View style={{flex:7, paddingLeft:20}}>
                  <Text style={{fontSize:18}}>11 pcs/Set Boho Vintage Punk...</Text>
                  <Text style={{paddingTop:5}}>Silver</Text>
                  <Text style={{fontWeight:"700", paddingTop:5, fontSize:18}}>GHC 18.94</Text>
                  <Text style={{paddingLeft:100}}>1</Text>
                  </View>
                 </View>
                 <Text style={{paddingTop:10}}>Wholesale Discount</Text>
              </View>



           </ScrollView>
           <View style={{height:40, display:"flex", justifyContent:"center", alignItems:"center"}}>
               <Text style={{}}>Total: GHC0.00<Text>CHECKOUT</Text></Text>
           </View>

        </View>
    );
}

export default CheckoutScreen;