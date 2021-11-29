import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //signedin = false;

  /**
   * Esto es otra de las maneras de comprobar que es usuario se 
   * registro
   */
  signedin$: BehaviorSubject<boolean>

  constructor(private authService: AuthService) {
    this.signedin$ = this.authService.signedin$;
  }

  ngOnInit() {
    /**
     * Esto es una de las maneras de comprobar que el usuario se registro
     * se utiliza la variable declara de signedin
     */
    // this.authService.signedin$.subscribe((signedin)=>{
    //   this.signedin = signedin;
    // });

    this.authService.checkAuth().subscribe(() => {
      
    });
  }
}
