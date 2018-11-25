// Modulos
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Otros
import { ActivatedRoute, Router } from '@angular/router';

// Componentes
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,

    ],
    exports: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        FormsModule,
    ]
})

export class LoginModule { }
