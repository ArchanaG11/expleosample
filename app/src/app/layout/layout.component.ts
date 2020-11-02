import { Component } from '@angular/core';
import { NLocalStorageService,NLoginService, NTokenService } from 'neutrinos-seed-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>
             <n-snackbar></n-snackbar>`
})
export class LayoutComponent {
  constructor(private nLocalstorage: NLocalStorageService,
    private loginservice: NLoginService, private nTokenService: NTokenService,private router: Router) { }
  ngOnInit() {
    if (this.nLocalstorage.getValue('accessToken')) {
      this.nTokenService.updateSessionStorage();
    }
    let login = this.loginservice.isLoggedIn().then(result => {
      if (result) {
        this.router.navigate(['/home']);
      }

    })

  }
}
