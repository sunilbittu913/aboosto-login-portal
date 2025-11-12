# API Integration Guide

This document explains how to connect the Aboosto authentication system to your backend API at `http://123.176.35.22:8081`.

## Authentication Endpoints

Update the following files to integrate with your actual API endpoints:

### 1. Login Page (`src/pages/Login.tsx`)

Replace the simulated API call in the `handleSubmit` function (around line 45) with:

```typescript
const response = await fetch('http://123.176.35.22:8081/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username, password }),
});

if (!response.ok) {
  throw new Error('Login failed');
}

const data = await response.json();
// Store authentication token if provided
localStorage.setItem('authToken', data.token);
```

### 2. Signup Page (`src/pages/Signup.tsx`)

Replace the simulated API call (around line 54) with:

```typescript
const response = await fetch('http://123.176.35.22:8081/api/auth/signup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: formData.username,
    email: formData.email,
    password: formData.password,
  }),
});

if (!response.ok) {
  throw new Error('Signup failed');
}

const data = await response.json();
```

### 3. Forgot Password Page (`src/pages/ForgotPassword.tsx`)

Replace the simulated API call (around line 34) with:

```typescript
const response = await fetch('http://123.176.35.22:8081/api/auth/forgot-password', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email }),
});

if (!response.ok) {
  throw new Error('Failed to send reset link');
}
```

## API Documentation

To find the exact endpoint URLs and request/response formats:

1. Visit your Swagger documentation at: `http://123.176.35.22:8081/swagger-ui/index.html#/`
2. Look for authentication-related endpoints
3. Update the fetch URLs in the code accordingly

## Security Notes

- **CORS**: Ensure your backend API allows requests from your frontend domain
- **HTTPS**: Consider using HTTPS for production to encrypt credentials in transit
- **Token Storage**: Store authentication tokens securely (consider httpOnly cookies)
- **Input Validation**: The forms already include client-side validation using Zod schemas
