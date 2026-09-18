# BloodLink Vercel Frontend

This folder is the static frontend for the BloodLink Django/DRF backend.

## Deploy
Upload this folder to the existing BloodLink-Frontend GitHub repository. Vercel can serve the root HTML files directly.

## Pages
- index.html
- login.html
- register.html
- donor-profile.html
- donor-dashboard.html
- requester-dashboard.html
- create-request.html
- my-requests.html
- request-detail.html
- matches.html
- notifications.html
- donation-history.html

## API base
https://bloodlink-60zw.onrender.com/api

## Important
The frontend expects the backend API endpoints documented by the functions in `static/js/api.js`. Authentication uses DRF TokenAuthentication and the token is stored in localStorage.
