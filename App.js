import { StyleSheet, View, ImageBackground} from 'react-native';
import React from "react";
import { Button, Input, Text } from 'react-native-elements';

export default function App() {

  return (
  <View style={styles.container}>
   
     <ImageBackground
       source={require('./assets/universo1.jpg')}
       style={styles.ImageBackground}
       resizeMode="cover" // Esta propriedade garante que a imagem cubra todo o espaço disponível
     >
   
     <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"  fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
       <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
       <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
     </svg>
   
<Text>{'\n'}</Text>

    <Text h4 
     style={styles.Text}
     >Login
    </Text>

<Text>
  {'\n'}
  {'\n'}
  {'\n'}
</Text>

    <Input 
     style={styles.Input}
     placeholder='E-mail:'
     keyboardType='e-mail address '
     leftIcon={{type: 'font-awesome', name:'envelope', color:'white'}}

     />
    

    <Input 
     style={styles.Input}
     placeholder='senha:'
     keyboardType='Digite sua Senha'
     leftIcon={{type: 'font-awesome', name:'lock', color:'white'}}
     />

<Text>
  {'\n'}
  {'\n'}
  {'\n'}
</Text>


          <Button
              title="Entrar"
              buttonStyle={{
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: 'bold' }}
            />
     
     </ImageBackground>
    
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  ImageBackground: {
    flex:1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
   
  },

 Text:{
  color:'Black',
 
 }

 
});
