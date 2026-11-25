import React,{useState} from 'react';
import {SafeAreaView,View,Text,TextInput,Pressable,ScrollView,StyleSheet,Alert} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {API_BASE_URL} from './src/config';

export default function App(){
 const [uhid,setUhid]=useState(''); const [mobile,setMobile]=useState(''); const [reports,setReports]=useState([]);
 async function lookup(){
   Alert.alert('Patient portal setup','Patient OTP authentication is not connected in this starter. The secure patient account API and OTP provider must be implemented before real report access.');
 }
 return <SafeAreaView style={s.page}><StatusBar style="dark"/><ScrollView contentContainerStyle={s.wrap}>
 <Text style={s.brand}>LAKSHYA</Text><Text style={s.sub}>PATIENT PORTAL</Text>
 <View style={s.card}><Text style={s.heading}>Your Health Reports</Text><Text style={s.note}>Enter your UHID and registered mobile to begin secure access.</Text><TextInput style={s.input} placeholder="Patient UHID" value={uhid} onChangeText={setUhid} autoCapitalize="characters"/><TextInput style={s.input} placeholder="Registered mobile number" keyboardType="phone-pad" value={mobile} onChangeText={setMobile}/><Pressable style={s.btn} onPress={lookup}><Text style={s.btnText}>Continue securely</Text></Pressable></View>
 <View style={s.card}><Text style={s.heading}>Online Services</Text><Text style={s.item}>• View approved pathology reports</Text><Text style={s.item}>• QR report verification</Text><Text style={s.item}>• Test booking and home collection request</Text><Text style={s.item}>• Contact Lakshya Diagnostic Centre</Text></View>
 <Text style={s.footer}>Patient login/OTP and report downloads are planned features, not active in this prototype.</Text>
 </ScrollView></SafeAreaView>
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:'#f2f6fb'},wrap:{padding:22,gap:16},brand:{fontSize:30,fontWeight:'900',color:'#102b50',letterSpacing:2},sub:{color:'#1769aa',fontWeight:'700',letterSpacing:1},card:{backgroundColor:'#fff',padding:18,borderRadius:16,gap:12,elevation:2},heading:{fontSize:20,fontWeight:'800',color:'#102b50'},note:{color:'#687789',lineHeight:20},input:{borderWidth:1,borderColor:'#d7e1eb',borderRadius:10,padding:13,fontSize:16},btn:{backgroundColor:'#1769aa',padding:15,borderRadius:10,alignItems:'center'},btnText:{color:'#fff',fontWeight:'800'},item:{color:'#24364b',lineHeight:24},footer:{color:'#9a5a00',fontSize:12,textAlign:'center'}});
