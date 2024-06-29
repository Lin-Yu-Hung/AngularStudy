import { Component, signal, computed, Input, input, Output, EventEmitter, output } from '@angular/core';
import { User } from './dummy-user';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  imports: [CommonModule, CardComponent]
})

export class UserComponent {
  // @Input({ required: true }) onSelect: boolean = false
  onSelect = input.required<boolean>();
  userData = input.required<User>();
  @Output() select = new EventEmitter<User>()
  // select = output<string>();
  imagePath = computed((): string => 'assets/users/' + this.userData().avatar)
  onSelectUser(event: MouseEvent) {
    // 發送emit事件，事件名稱為上方@Ouput建立的變數名稱
    this.select.emit(this.userData())
  }
}
