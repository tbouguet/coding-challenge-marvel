import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TableCharactersComponent } from './components/table-characters/table-characters.component';
import { TableTeamComponent } from './components/table-team/table-team.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  {
    path: 'members',
    component: TableTeamComponent
  },
  { path: 'characters',
  component: TableCharactersComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TableCharactersComponent,
    TableTeamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
