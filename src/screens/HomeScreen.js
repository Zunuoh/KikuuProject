import React, { useState } from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';
// import ArrayScreen from '../arrays';
const productList=[{"id":"0", "price":"GHC221", "orders":"211", "image":require('../pictures/bag1.jpeg')}, {"id":"1", "price":"GHC221", "orders":"211", "image":require('../pictures/blouse1.jpeg')},
{"id":"2", "price":"GHC221", "orders":"211", "image":require('../pictures/curl1.jpeg')}, {"id":"3", "price":"GHC221", "orders":"211", "image":require('../pictures/dress1.jpeg')}, 
{"id":"4", "price":"GHC221", "orders":"211", "image":require('../pictures/ear1.jpeg')}, {"id":"5", "price":"GHC221", "orders":"211", "image":require('../pictures/found1.jpeg')} ]

const dealList=[{"id":"0", "price":"GHC221", "orders":"211", "image":require('../pictures/heel4.jpeg')}, {"id":"1", "price":"GHC221", "orders":"211", "image":require('../pictures/jewel1.jpeg')},
{"id":"2", "price":"GHC221", "orders":"211", "image":require('../pictures/makeup3.jpeg')}, {"id":"3", "price":"GHC221", "orders":"211", "image":require('../pictures/ring2.jpeg')}, 
{"id":"4", "price":"GHC221", "orders":"211", "image":require('../pictures/roller2.jpeg')}, {"id":"5", "price":"GHC221", "orders":"211", "image":require('../pictures/shoe3.jpeg')},
{"id":"6", "price":"GHC221", "orders":"211", "image":require('../pictures/slipper1.jpeg')}, {"id":"7", "price":"GHC221", "orders":"211", "image":require('../pictures/hair1.jpeg')},
 {"id":"8", "price":"GHC221", "orders":"211", "image":require('../pictures/heel5.jpeg')}, {"id":"9", "price":"GHC221", "orders":"211", "image":require('../pictures/blouse4.jpeg')},
 {"id":"10", "price":"GHC221", "orders":"211", "image":require('../pictures/bag3.jpeg')}, {"id":"11", "price":"GHC221", "orders":"211", "image":require('../pictures/hair2.jpeg')}]

const HomeScreen =(props)=>{
  const [products, setProducts]=useState(productList);
  const [totalDeals, settotalDeal]=useState(dealList);
    return(
        <View style={{flex:1}}>
               <ScrollView>
            <View style={{paddingTop:60, backgroundColor:"#edadec", height:230}}>
            <TextInput style={{ height:36, width:280, paddingLeft:20, borderRadius:30, marginLeft:40, backgroundColor:"#eae8e8"}}>
                    <Ionicons style={{marginLeft:20}}
                    name="ios-search"
                    size="20"/>
                     <Text style={{display:"flex", justifyContent:"center", alignItems:"center"}}>  search</Text>
                </TextInput>
                <View style={{flexDirection:"row"}}>
                <View style={{paddingLeft:40, paddingTop:20, flex:7}}>
                <Text style={{fontSize:30, fontWeight:"bold", color:"white"}}>Men's</Text>
                <Text style={{fontSize:30, fontWeight:"bold", color:"white"}}>Clothes</Text>
                <Text style={{color:"white", fontWeight:"bold", fontSize:"15"}}>Shop now>></Text>
                <View style={{flexDirection:"row"}}>
                <View style={{width:10, height:10, borderRadius:20, backgroundColor:"white", marginTop:20}}/>
                <View style={{width:10, height:10, borderRadius:20, backgroundColor:"white", marginTop:20, marginLeft:10}}/>
                <View style={{width:10, height:10, borderRadius:20, backgroundColor:"orange", marginTop:20, marginLeft:10}}/>
                </View>
                </View>
                <View style={{flex:3, padding:20}}>
                <Image source={require('../pictures/shoe2.jpeg')} style={{width:100, height:100, borderRadius:10, resizeMode:"contain"}}/>
                    
                </View>
                   
                </View>
            
               
               
               
                </View>
              
         
        
            <View style={{paddingTop:40, paddingRight:10, paddingLeft:10}}>
                <View style={{flexDirection:"row", display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <View>
                    <Image source={require('../pictures/blouse4.jpeg')} style={{width:55, height:55, borderRadius:30}}/>
                    <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5}}>Wish List</Text>
                    </View>
                   
                   <View>
                   <Image source={require('../pictures/roller2.jpeg')} style={{width:55, height:55, borderRadius:30, marginLeft:30}}/>
                   <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5, paddingLeft:20}}>Limited Offer</Text>
                   </View>
                  
                   <View>
                   <Image source={require('../pictures/kid4.jpeg')} style={{width:55, height:55, borderRadius:30, marginLeft:30}}/>
                   <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5, paddingLeft:30}}>In Accra</Text>
                   </View>

                     <View>
                   <Image source={require('../pictures/jewel4.jpeg')} style={{width:55, height:55, borderRadius:30, marginLeft:30}}/>
                   <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5, paddingLeft:20}}>New Arrival</Text>
                   </View>
                </View>
                  {/* ####################################################################################### */}
                <View style={{flexDirection:"row", display:"flex", alignItems:"center", justifyContent:"center", paddingTop:25}}>
                    <View>
                    <Image source={require('../pictures/shoe2.jpeg')} style={{width:55, height:55, borderRadius:30, resizeMode:"contain"}}/>
                    <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5}}>Sneakers</Text>
                    </View>
                   
                   <View>
                   <Image source={require('../pictures/blouse1.jpeg')} style={{width:55, height:55, borderRadius:30, marginLeft:30, resizeMode:"contain"}}/>
                   <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5, paddingLeft:20}}>Dresses</Text>
                   </View>
                  
                   <View>
                   <Image source={require('../pictures/curl1.jpeg')} style={{width:55, height:55, borderRadius:30, marginLeft:30, resizeMode:"contain"}}/>
                   <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5, paddingLeft:30}}>Tops</Text>
                   </View>

                     <View>
                   <Image source={require('../pictures/found1.jpeg')} style={{width:55, height:55, borderRadius:30, marginLeft:30, resizeMode:"contain"}}/>
                   <Text style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:5, paddingLeft:20}}>Shoulder</Text>
                   </View>
                </View>
     {/* ##################################################################################### */}

            <View style={{paddingTop:20, paddingLeft:10, paddingRight:10}}>
                <Text style={{fontSize:25, fontWeight:"bold"}}>Flash Sales</Text>
            </View>
            <ScrollView horizontal={true}>
              {products.map(product=>{
                return(
                  <View style={{paddingTop:10, paddingLeft:5, flexDirection:"row"}}>
                  <Image source={ product.image} style={{width:120, height:120, borderRadius:5}}/>
              </View>
                )
              })}
            
            </ScrollView>
{/* ###################################################################################################33 */}
            <View style={{paddingTop:20}}>
                <Text style={{fontSize:20, fontWeight:"bold"}}>KiKUU Picks</Text>
            </View>
            <View style={{paddingTop:10, flexDirection:"row", paddingRight:10}}> 
                <Image source={require('../pictures/curl1.jpeg')} style={{width:"60%", height:130}}/>
                <Image source={require('../pictures/heel4.jpeg')} style={{width:"68%", height:60, marginLeft:10}}/>
            </View>
            <View style={{paddingTop:10, flexDirection:"row", paddingRight:10}}> 
                <Image source={require('../pictures/heel3.jpeg')} style={{width:"60%", height:130, resizeMode:"contain"}}/>
                <Image source={require('../pictures/ear2.jpeg')} style={{width:"48%", height:60, marginLeft:10}}/>
            </View>
{/* ######################################################################################### */}
            <View>
                <Text style={{fontWeight:"bold", fontSize:25, paddingTop:20}}>Today's Deal</Text>
            </View>
            <View style={{paddingTop:10, flexDirection:"row",flexWrap:"wrap"}}> 
            {totalDeals.map(totalDeal=>{
              return(
               
                <View style={{width:"48%", height:270, paddingLeft:5, paddingRight:5,  borderWidth:1, borderColor:"white", marginTop:10, backgroundColor:"white", paddingRight:5, marginLeft:5}}>
                <Image source={totalDeal.image} style={{width:"100%", height:150, resizeMode:"strech", borderRadius:30, borderWidth:1, borderColor:"white"}}/>
                <Text style={{fontSize:20,  paddingLeft:10, paddingTop:10, fontSize:25}}>GHC25.00</Text>
                <Text style={{fontSize:20, fontWeight:"bold", paddingLeft:10, paddingTop:2}}>211 orders</Text>
                <View style={{flexDirection:"row", paddingLeft:10}}> 
                <Ionicons 
                 name="ios-star"
                 size={14}
                 color="#05386B"/>
                   <Ionicons style={{paddingLeft:5}}
                 name="ios-star"
                 size={14}
                 color="#05386B"/>
                   <Ionicons style={{paddingLeft:5}}
                 name="ios-star"
                 size={14}
                 color="#05386B"/>
                   <Ionicons style={{paddingLeft:5}}
                 name="ios-star"
                 size={14}
                 color="#05386B"/>
                 <Ionicons style={{paddingLeft:5}}
                 name="ios-star-half"
                 size={14}
                 color="#05386B"/>
                 </View>
                    <TouchableOpacity style={{height:20, borderWidth:1, borderRadius:30, width:90, marginLeft:10, marginTop:2, display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <Text>Free Shipping</Text>
                    </TouchableOpacity>

                    {/* <View >
                  <Image source={require('../pictures/bag1.jpeg')} style={{width:50, height:50}}/>
                  </View> */}

                      {/* <View style={{ width:"100%",height:270}}>
                    <Image source={require('../pictures/bag1.jpeg')} style={{width:"80%", height:150, marginLeft:20}}/>
                    <Text style={{fontSize:20,  paddingLeft:25, paddingTop:10, fontSize:25}}>GHC25.00</Text>
                <Text style={{fontSize:20, fontWeight:"bold", paddingLeft:25, paddingTop:2}}>211 orders</Text>
                <View style={{flexDirection:"row", paddingLeft:25}}> 
                <Ionicons 
                 name="ios-star"
                 size={24}
                 color="#05386B"/>
                   <Ionicons style={{paddingLeft:5}}
                 name="ios-star"
                 size={24}
                 color="#05386B"/>
                   <Ionicons style={{paddingLeft:5}}
                 name="ios-star"
                 size={24}
                 color="#05386B"/>
                   <Ionicons style={{paddingLeft:5}}
                 name="ios-star"
                 size={24}
                 color="#05386B"/>
                 <Ionicons style={{paddingLeft:5}}
                 name="ios-star-half"
                 size={24}
                 color="#05386B"/>
                 </View>
                    <TouchableOpacity style={{height:20, borderWidth:1, borderRadius:30, width:90, marginLeft:25, marginTop:2, display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <Text>Free Shipping</Text>
                    </TouchableOpacity>
                    </View> */}

                </View>

              








               


             
              );
            })}

                   </View>
                   
               
                </View>
            
            
         


            </ScrollView>
        </View>
    );
}

export default HomeScreen;