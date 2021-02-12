import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 *
 * @param form
 */
function passwordsMatchValidator(form: { get: (arg0: string) => any }) {
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');
  if (password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordsMatch: true });
  } else {
    confirmPassword.setErrors(null);
  }
}

/**
 * if the data is valid return null else return an object
 * control = regusterForm.get('password)
 */
function symbolValidator(control: { hasError: (arg0: string) => any; value: string | string[] }) {
  if (control.hasError('required')) return null;
  if (control.hasError('minlength')) return null;

  if (control.value.indexOf('@') > -1) {
    return null;
  } else {
    return { symbol: true };
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }
  register() {
    console.log(this.registerForm.value);
  }
  buildForm() {
    this.registerForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required],
        password: ['', [Validators.required, symbolValidator, Validators.minLength(4)]],
        confirmPassword: '',
      },
      {
        validators: passwordsMatchValidator,
      }
    );
  }
}
