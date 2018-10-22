import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ParentComponent } from './components/parent/parent.component';
import { InputComponent } from './components/input/input.component';
// import { ListComponent } from './components/list/list.component';
import { CommonService } from './services/common.service';
import { RouterModule,Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { APipe } from './a.pipe';
import { RenwudaohangComponent } from './components/renwudaohang/renwudaohang.component';
import { WeiwanchengComponent } from './components/weiwancheng/weiwancheng.component';
import { YiwanchengComponent } from './components/yiwancheng/yiwancheng.component';
import { YiwanjieComponent } from './components/yiwanjie/yiwanjie.component';
import { CoursetailComponent } from './components/coursetail/coursetail.component';
import { KechengComponent } from './components/kecheng/kecheng.component';
import { QieshuoComponent } from './components/qieshuo/qieshuo.component';
import { TongzhiComponent } from './components/tongzhi/tongzhi.component';
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ParentComponent,
    InputComponent,
    // ListComponent,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    TongbudetailComponent,
    APipe,
    RenwudaohangComponent,
    WeiwanchengComponent,
    YiwanchengComponent,
    YiwanjieComponent,
    CoursetailComponent,
    KechengComponent,
    QieshuoComponent,
    TongzhiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,children:[//子路由
        {path:'todolist',component:TodolistComponent,children:[
          {path:'weiwancheng',component:  WeiwanchengComponent},
          {path:'yiwancheng',component:YiwanchengComponent},
          {path:'yiwanjie',component:YiwanjieComponent},
          {path:'',redirectTo:'weiwancheng',pathMatch:'full'},
        ]},
        {path:'parent',component:ParentComponent},
        {path:'kecheng',component:KechengComponent},
        {path:'qieshuo',component: QieshuoComponent},
        {path:'tongzhi',component: TongzhiComponent},
        {path:'',redirectTo:'todolist',pathMatch:'full'},//子路由的重定向，跳转到首页组件时默认todolist组件显示
      ]},
      {path:'tongbu',component:TongbuComponent},
      // {path:'tongbu/:courseId',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbudetailComponent},
      {path:'course',component:CourseComponent},
      {path:'shequ',component:ShequComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:ShequComponent},
    ]),
    HttpClientModule,
  ],
  providers: [{provide:CommonService,useClass:CommonService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
