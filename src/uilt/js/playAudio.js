
import welcome from '../../assets/audio/welcome.mp3'
export default function playAudio(scenes){
    let buttonAudio = document.getElementById('eventAudio');
    if(scenes=='首页'){
        buttonAudio.setAttribute('src',welcome)
        buttonAudio.play()
    }
}