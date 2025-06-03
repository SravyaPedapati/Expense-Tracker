import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  register() {
    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };
  
    // 🔐 Save to localStorage
    localStorage.setItem('user', JSON.stringify(user));
  
    alert('Registration successful!');
    this.router.navigate(['/login']);
  }
  
}
