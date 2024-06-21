import { Component } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QrCodes';
  // elementType=NgxQrcodeElementTypes.URL;
  // correctionLevel=NgxQrcodeErrorCorrectionLevels.HIGH;
  // value='https://www.youtube.com/watch?v=mw8-E0BTkGo';
}
