import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AssetService } from './svg-assets.service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  providers: [AssetService],
  imports: [CommonModule, HttpClientModule, MatIconModule],
  exports: [],
})
export class AssetsModule {
  constructor(private a: AssetService) {}
}
