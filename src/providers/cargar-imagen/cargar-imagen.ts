import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs'; 
import { finalize } from 'rxjs/operators';
import { ToastController } from 'ionic-angular';
import {storage} from 'firebase';
/*
  Generated class for the CargarImagenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CargarImagenProvider {

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  mensaje:any;

  constructor(private storage: AngularFireStorage,
              public toastCtrl: ToastController) {
              //initializeApp(environment);
    console.log('Hello CargarImagenProvider Provider');
  }
  uploadFile(imagen) {
    //const file = imagen;
    //const filePath = '/platillos/';
    console.log("imagen a subir: "+imagen);
    const pictures = storage().ref('platillos/');
    pictures.putString(imagen, 'data_url');
    //const fileRef = this.storage.ref(filePath);
    //const task = this.storage.upload(filePath, file);
    /*this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
        
     )
    .subscribe()
    this.toast(this.downloadURL);
    console.log(this.downloadURL);*/
     
  }

  toast(mensaje){

    const toast = this.toastCtrl.create({
      message:mensaje,
      duration:2000
    })
  }

}
