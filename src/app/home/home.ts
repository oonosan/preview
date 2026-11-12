import { ViewportScroller } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private scroller = inject(ViewportScroller);
  private fb = inject(FormBuilder);

  readonly currentYear = new Date().getFullYear();
  readonly status = signal<SubmitStatus>('idle');

  // Field names must match the hidden static form in src/index.html,
  // which is what Netlify parses at deploy time to register the form.
  readonly contactForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]],
    subject: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(5000)]],
    'bot-field': [''], // honeypot: real users never fill this
  });

  scrollToSection(id: string) {
    this.scroller.scrollToAnchor(id);
  }

  showError(field: 'name' | 'email' | 'subject' | 'message'): boolean {
    const control = this.contactForm.controls[field];
    return control.invalid && (control.touched || control.dirty);
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.status.set('sending');
    const body = new URLSearchParams({
      'form-name': 'contact-newcomer',
      ...this.contactForm.getRawValue(),
    });

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      this.status.set('success');
      this.contactForm.reset();
    } catch {
      this.status.set('error');
    }
  }
}
