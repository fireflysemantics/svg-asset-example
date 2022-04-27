import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

export interface Asset {
  name: string;
  url: string;
}

export interface KeyAsset {
  [key: string]: Asset;
}

export const SVG: KeyAsset = {
  FS_LOGO: {
    name: 'fs_logo',
    url: 'https://raw.githubusercontent.com/fireflysemantics/logo/master/l1.svg',
  },
};

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    {
      Object.keys(SVG).forEach((k) => {
        this.matIconRegistry.addSvgIcon(
          SVG[k].name,
          this.domSanitizer.bypassSecurityTrustResourceUrl(SVG[k].url)
        );
      });
    }
  }
}
