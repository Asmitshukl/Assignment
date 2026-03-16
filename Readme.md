# Team Task Manager API
> Backend Developer Intern — Screening Task | Collabzz

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white)

---

## Getting Started
```bash
git clone https://github.com/Asmitshukl/Assignment.git
cd Assignment
code .
npm install
npm run dev
```

![Server Running](screenshots/Screenshot%20from%202026-03-16%2015-47-33.png)

---

## API Endpoints

### 🔐 Authentication

#### POST /auth/register
Register a new user with name, email, and password. Password is hashed with bcrypt before storing.

**Request Body:**
```json
{
  "name": "asmit",
  "email": "asmit@gmail.com",
  "password": "@12345As"
}
```

![Register](screenshots/Screenshot%20from%202026-03-16%2015-49-52.png)

---

#### POST /auth/login
Login and return a JWT token. Include this token in the `Authorization` header for all protected routes.

**Request Body:**
```json
{
  "email": "asmit@gmail.com",
  "password": "@12345As"
}
```

![Login](screenshots/Screenshot%20from%202026-03-16%2015-50-09.png)

---

### ✅ Task Management

> All routes below require the header:
> `Authorization: Bearer <your_token>`

---

#### POST /tasks
Create a new task. Status must be one of: `todo`, `in-progress`, `done`.

**Request Body:**
```json
{
  "title": "to do assignment",
  "description": "started the project",
  "status": "Done"
}
```

![Create Task](screenshots/Screenshot%20from%202026-03-16%2015-52-03.png)

---

#### GET /tasks
Get all tasks. Supports optional filtering by status.

**Optional Filter Body:**
```json
{
  "status": "Done"
}
```

![Get Tasks](screenshots/Screenshot%20from%202026-03-16%2015-52-44.png)

---

#### GET /tasks/:id
Get a single task by its ID.

![Get Task By ID](screenshots/Screenshot%20from%202026-03-16%2015-53-13.png)

---

#### PUT /tasks/:id
Update a task. Only the task creator can update it.

**Request Body:**
```json
{
  "description": "assignment completed"
}
```

![Update Task](screenshots/Screenshot%20from%202026-03-16%2015-54-12.png)

---

#### DELETE /tasks/:id
Delete a task. Only the task creator can delete it.

![Delete Task](screenshots/Screenshot%20from%202026-03-16%2015-54-38.png)

---

## Data Models

### User
| Field | Type | Notes |
|-------|------|-------|
| name | String | Required |
| email | String | Required, unique |
| password | String | Required, bcrypt hashed |

### Task
| Field | Type | Notes |
|-------|------|-------|
| title | String | Required |
| description | String | Optional |
| status | String | `todo` / `in-progress` / `done` |
| user | ObjectId | Ref: User |

---

## Schema Validation with Zod

All incoming request bodies are validated using [Zod](https://zod.dev) before reaching the controller logic. This ensures invalid or malformed data is rejected early with a clear error message rather than causing a database or runtime error.

**What Zod enforces:**
- `name`, `email`, `password` are required and correctly typed on register
- `email` must be a valid email format
- `status` on tasks is restricted to `todo`, `in-progress`, or `done`
- Missing required fields return a `400 Bad Request` with a descriptive message

---

## Authorization Rules

- Users can only **view** their own tasks
- Users can only **update** tasks they created
- Users can only **delete** tasks they created

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js + TypeScript | Runtime & type safety |
| Express.js | Routing & middleware |
| MongoDB + Mongoose | Database & schema |
| JWT | Authentication |
| bcrypt | Password hashing |
| Zod | Request body schema validation |