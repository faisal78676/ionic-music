import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,Platform } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';

/**
 * Generated class for the MusicPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-music-player',
  templateUrl: 'music-player.html',
})
export class MusicPlayerPage {
  
  this: any;
  public music = {};
  public songMedia:MediaObject = null;
  public isMusicPaused = false;
  public isMusicPlay = false;
  constructor(
    private media:Media,private loading: LoadingController,
    private platform: Platform,
    public navCtrl: NavController, public navParams: NavParams) {
      this.music = this.navParams.get("music");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicPlayerPage');
  }
  public stopMusic(){
    if(this.songMedia!==null){
      this.songMedia.stop();
      this.songMedia.release();
      this.songMedia = null;
    }    
  }
  public playMusic(){
    this.isMusicPlay = true;
    if(this.songMedia===null){
      this.platform.ready().then(() => {
        //code here such that:
        this.songMedia = this.media.create(this.music['music_url']);
      });
      
      this.songMedia.play();      
      this.songMedia.onSuccess.subscribe(() =>{ 
        console.log('Action is successful')        
      });
    }else{
      if(this.isMusicPaused == true){
        this.songMedia.play();
        this.isMusicPaused = false;
      }
    }
    
  }
  public pauseMusic(){
    this.isMusicPlay = false;
    if(this.songMedia!==null){
      this.songMedia.pause();
      this.isMusicPaused = true;      
    }
  }

}
