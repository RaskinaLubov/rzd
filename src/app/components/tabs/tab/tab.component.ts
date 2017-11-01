import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input('tabTitle') tabTitle: string;
  @Input() active = false;

  // @ViewChild('tabDiv') tabDiv: ElementRef;
  constructor() { }

  ngOnInit() {
  }

}
