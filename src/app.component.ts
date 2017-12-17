import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    `
})
// 使用变量初始化方式
export class AppComponent {
    title = 'Tour of Heroes';
    myHero = 'Windstorm';
}