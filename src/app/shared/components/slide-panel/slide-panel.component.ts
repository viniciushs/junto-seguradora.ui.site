import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

type PaneType = 'left' | 'center' | 'right';

@Component({
  selector: 'app-slide-panel',
  templateUrl: './slide-panel.component.html',
  styleUrls: ['./slide-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(25%)' })),
      state('center', style({ transform: 'translateX(0%)' })),
      state('right', style({ transform: 'translateX(-25%)' })),
      transition('* => *', animate(300))
    ])
  ]
})
export class SlidePanelComponent {
  @Input() activePane: PaneType = 'center';
}
