import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      const user = JSON.parse(storedUser);

      if (this.email === user.email && this.password === user.password) {
        alert('Login successful!');
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid email or password');
      }
    } else {
      alert('No registered user found. Please register first!');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
