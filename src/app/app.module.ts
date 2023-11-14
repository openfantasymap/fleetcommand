import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { ThemeDirective } from './theme.directive';
import { IMqttMessage, MqttModule, IMqttServiceOptions } from 'ngx-mqtt';
import { ShipcontrolsModule } from './shipcontrols/shipcontrols.module';
import { SessionModule } from './session/session.module';
import { ModelslistComponent } from './modelslist/modelslist.component';
import { ShiplistComponent } from './shiplist/shiplist.component';
import { ShipmasterComponent } from './shipmaster/shipmaster.component';
import { ModelmasterComponent } from './modelmaster/modelmaster.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { QInterceptorService } from './qinterceptor.service';
import { DebugComponent } from './debug/debug.component';
import { MetricsComponent } from './metrics/metrics.component';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'mqtt.fantasymaps.org',
  port: 9001,
  protocol: "wss",
  wsOptions:{rejectUnauthorized:false},
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ThemeDirective,
    ModelslistComponent,
    ShiplistComponent,
    ShipmasterComponent,
    ModelmasterComponent,
    DebugComponent,
    MetricsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    ShipcontrolsModule,
    SessionModule,
    HttpClientModule,

  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: QInterceptorService, 
      multi: true 
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
