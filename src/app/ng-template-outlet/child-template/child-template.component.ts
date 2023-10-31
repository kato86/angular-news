import {AfterViewInit, Component, Input, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-child-template',
  templateUrl: './child-template.component.html',
  styleUrls: ['./child-template.component.scss']
})
export class ChildTemplateComponent implements AfterViewInit{
  @Input() customTemp!: TemplateRef<HTMLElement>
  @ViewChild('parentTemp2') myTemp!: TemplateRef<HTMLElement>;

  ngAfterViewInit() {
    console.log(this.myTemp)
  }
}
