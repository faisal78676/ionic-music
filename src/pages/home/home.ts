
import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import { MusicsProvider } from './../../providers/musics/musics';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public allMusic:any = [];
  constructor(public navCtrl: NavController,
    private musicProvider:MusicsProvider,
    private loadingController: LoadingController,
    private actionSheet:ActionSheetController) {
    
  }
  public shareSong(){
    let shareSongActionSheet = this.actionSheet.create({
      title:'Share Song',
      buttons:[
        {
          text:'Facebook',
          icon:'logo-facebook'
        },
        {
          text:'Twitter', 
          icon:'logo-twitter'
        },{
          text:'Share',
          icon:'share'
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
