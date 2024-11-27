import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
 
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvestmentComponent } from './investment/investment.component';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
export const routes: Routes = [
    {
        path:'dashboard',component:DashboardComponent,
        
        pathMatch:'full'
    },
    {
        path:'investment',component:InvestmentComponent,
        
        pathMatch:'full'
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes), MatCardModule,
        MatGridListModule,FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule],
    exports: [RouterModule],
    
  })
  export class AppModule {}
