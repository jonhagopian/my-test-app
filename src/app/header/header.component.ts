import { Component, EventEmitter, Output } from '@angular/core';
import { emit } from 'cluster';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  onSelectNav(feature: string) {
    console.log("will emit");
    this.featureSelected.emit(feature);
  }
}
