## USER AUTH CONFIG

---
### ENV VARIABLES FOR USER AUTH
| ENVIROMNET VARIABLE | VALUE | DEFAULT |
| ------------------- | ----- | ------- |
| PORT_USER_AUTH      | 21801 | 3000    |
| PORT_SERVICE_AUTH   | 21802 | 3001    |

---
### API Routes
| Route             | Method | Description                             |
| ----------------- | ------ | --------------------------------------- |
| auth/registration | POST   | Register user details                   |
| auth/login        | POST   | Login User                              |
| auth/logout       | POST   | Logout and destroy current user session |
