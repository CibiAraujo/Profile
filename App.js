import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, SafeAreaView, Text, Pressable, Linking } from 'react-native';
 
const colorGitHub = '#010409';
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/106084301?v=4';
const colorfontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';
const urlToMyGithub = 'https://github.com/CibiAraujo';




const App = () => {
  const handlePressGoToGitHub = async () =>{
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if(res) {
      console.log('Link aprovado');
      console.log('Abrindo link...');
      await Linking.openURL(urlToMyGithub);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor= {colorGitHub} barStyles='light-content'/> 
      <View style={styles.content}>
       <Image accessibilityLabel='Rosto de Cibi com um quadro na parece ao fundo' style={styles.avatar} source={{uri: imageProfileGitHub}}/>
       <Text accessibilityLabel='Nome: Cibelly Araújo' style={[styles.defaultText, styles.name]}>Cibelly Araújo</Text>
       <Text accessibilityLabel='Nickname: Cibi Araújo' style={[styles.defaultText, styles.nickname]}>Cibi Araújo</Text>
       <Text accessibilityLabel='Descrição: Estudante Dev Decola Tec-Dio' style={[styles.defaultText, styles.description]}>Estudante Dev Decola Tech</Text>
       
       
       <Pressable onPress={handlePressGoToGitHub}>
        <View style={styles.button}>
         <Text style={[styles.defaultText, styles.textButton]}> Open in GitHub</Text>
        </View>
       </Pressable> 
      </View>

    </SafeAreaView>
  );  
};

export default App; 

const styles = StyleSheet.create({
  container: {
    flex: 1, //expandor para a tela inteira
    backgroundColor: colorGitHub,
    alignItems: 'center',
    justifyContent: 'center',
  },

  defaultText: {
    color: colorfontGitHub,
  },
  
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },

  nickname:{
    fontSize: 18,
    color: colorDarkFontGitHub,
  },
  
  description: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  content:{
    alignItems: 'center',
    padding: 20,
  },


  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'orange',
    borderWidth: 2,
  },

  button: {
    backgroundColor: colorDarkFontGitHub,
    borderRadius: 10,
    padding: 20,
    marginTop: 30,
  }, 
  
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
 

});

