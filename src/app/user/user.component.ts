import { Component, signal, computed, Input, input, Output, EventEmitter, output } from '@angular/core';
import { User } from './dummy-user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent {
  userData = input.required<User>();
  @Output() select = new EventEmitter<User>()
  // select = output<string>();
  imagePath = computed((): string => 'assets/users/' + this.userData().avatar)
  onSelectUser(event: MouseEvent) {
    // 發送emit事件，事件名稱為上方@Ouput建立的變數名稱
    this.select.emit(this.userData())
  }
}
