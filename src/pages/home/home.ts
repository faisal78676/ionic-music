
import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import { MusicsProvider } from './../../providers/musics/musics';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public allMusic:any = [];
  constructor(public navCtrl: NavController,
    private musicProvider:MusicsProvider,
    private loadingController: LoadingController,
    private actionSheet:ActionSheetController,
    private socialSharing: SocialSharing
  ) {
    
  }
  public shareSong(music){
    let shareSongActionSheet = this.actionSheet.create({
      title:'Share Song',
      buttons:[
        {
          text:'Facebook',
          icon:'logo-facebook',
          handler:()=>{
            this.socialSharing.shareViaFacebook(music.name,music.image,music.music_url)
          }
        },
        {
          text:'Twitter', 
          icon:'logo-twitter',
          handler:()=>{
            this.socialSharing.shareViaTwitter(music.name,music.image,music.music_url)
          }
        },{
          text:'Share',
          icon:'share',
          handler:()=>{
            this.socialSharing.share(music.name,"",music.image,music.music_url)
          }
        },
        {
          text:'Cancel',
          role:'distructive'
        }
      ]
    });
    shareSongActionSheet.present();
  }
ionViewDidLoad(){
  let allMusicLoadingController = this.loadingController.create({
    content:'Getting Your Songs From Server'
  });
  allMusicLoadingController.present();
  this.musicProvider.getMusic()
  .subscribe((musicList) =>{ 
    allMusicLoadingController.dismiss();
    this.allMusic = musicList;
  });
}

}
