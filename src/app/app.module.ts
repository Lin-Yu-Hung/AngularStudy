import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/Header.component';
import { UserComponent } from './user/user.component';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/card/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent], // 僅用於導入ngModule組件，不適用獨立組件
  bootstrap: [AppComponent], // 告知angular要啟用哪個為主元件，可以傳入多個但通常只會有一個
  imports: [RouterOutlet, TasksModule, SharedModule, BrowserModule], // 適用獨立組件、或NgModule
})
export class AppModule {}
