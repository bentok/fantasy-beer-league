import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './services/auth.guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FblNavComponent } from './fbl-nav/fbl-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { FblDashboardComponent } from './fbl-dashboard/fbl-dashboard.component';
import { FblLoginComponent } from './fbl-login/fbl-login.component';

import { AuthService } from './services/auth.service';
import { RegisterService } from './services/register.service';
import { FblRegisterComponent } from './fbl-register/fbl-register.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    FblDashboardComponent,
    FblLoginComponent,
    FblNavComponent,
    FblRegisterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['localhost:3000/user/login']
      }
    })
  ],
  providers: [
    AuthGuard,
    AuthService,
    RegisterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
