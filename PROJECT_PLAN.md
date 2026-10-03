# Personal Expense Tracker — Learning Roadmap

If the goal is to **actually master JavaScript + React + Express**, this project is simple enough to finish but forces repeated use of the important concepts.

## Project: Personal Expense Tracker

Build a web app to record and manage spending.

### Architecture

```text
React frontend
      │
      │ HTTP / JSON
      ▼
Express API
      │
      ▼
Database
```

### Features

- Create an expense
- Edit an expense
- Delete an expense
- View all expenses
- Filter by category
- Filter by date
- Search expenses
- See total spending
- See spending by category
- Create an account + log in
- Export expenses as CSV

---

## Why this is a good project

It looks simple, but it naturally forces most of the important full-stack concepts.

| Concept | You'll practice |
|---|---|
| JavaScript | arrays, objects, functions, async/await |
| React | components, props, state, hooks |
| React | forms and controlled inputs |
| React | conditional rendering |
| React | `useEffect` |
| React | API calls |
| Express | routing |
| Express | middleware |
| Express | controllers |
| Express | error handling |
| Express | validation |
| REST API | GET/POST/PATCH/DELETE |
| Database | CRUD |
| Authentication | sessions/JWT |
| HTTP | status codes |
| Git | branches/commits |
| Deployment | frontend + backend |

---

## Build it in stages

Don't start with authentication, Docker, charts, etc.

### Phase 1 — React only

Start with fake data:

```js
const expenses = [
  {
    id: 1,
    description: "Lunch",
    amount: 12.50,
    category: "Food",
    date: "2026-10-01"
  },
  {
    id: 2,
    description: "Grab",
    amount: 8.00,
    category: "Transport",
    date: "2026-10-01"
  }
];
```

Component structure:

```text
App
├── ExpenseForm
├── ExpenseList
│   └── ExpenseCard
├── FilterBar
└── Summary
```

Learn, in order:

```text
props
   ↓
state
   ↓
event handlers
   ↓
forms
   ↓
derived data
```

Example of derived data:

```js
const total = expenses.reduce(
  (sum, expense) => sum + expense.amount,
  0
);
```

This stage teaches **JavaScript through React**, rather than just memorizing React syntax.

---

### Phase 2 — Build the Express API

Replace the fake React data with an API.

Backend structure:

```text
server/
├── app.js
├── routes/
│   └── expenseRoutes.js
├── controllers/
│   └── expenseController.js
├── middleware/
│   └── errorHandler.js
└── db/
    └── ...
```

Endpoints:

```http
GET    /api/expenses
GET    /api/expenses/:id
POST   /api/expenses
PATCH  /api/expenses/:id
DELETE /api/expenses/:id
```

Request flow:

```text
React
  │
  │ GET /api/expenses
  ▼
Express
  │
  ▼
Database
  │
  ▼
Express
  │
  │ JSON
  ▼
React
```

This is where you'll really start understanding **how frontend and backend communicate**.

---

### Phase 3 — Database

Use **PostgreSQL** for real-world skills.

Table:

```text
expenses

id
description
amount
category
date
created_at
```

Full CRUD flow:

```text
User clicks "Add"
       ↓
React form
       ↓
POST /api/expenses
       ↓
Express route
       ↓
Controller
       ↓
Database INSERT
       ↓
JSON response
       ↓
React updates UI
```

Repeat this flow enough times and CRUD becomes second nature.

---

### Phase 4 — Make the frontend actually good

Add:

**Filtering**

```text
Category: [All ▼]
Date: [This month ▼]
Search: [____________]
```

**Sorting**

```text
Newest
Oldest
Highest amount
Lowest amount
```

**Dashboard**

```text
┌─────────────────────────────────────┐
│ Total spent       RM 1,245.50       │
│ This month        RM   430.20       │
│ Transactions            37          │
└─────────────────────────────────────┘

Food          RM 520
Transport     RM 230
Shopping      RM 310
Other         RM 185
```

Now you'll need to think about **derived state**, an important React skill.

---

### Phase 5 — Authentication

Only after CRUD works.

Add:

```text
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
```

Update the database:

```text
users
-----
id
email
password_hash

expenses
--------
id
user_id
description
amount
category
date
```

Then learn an extremely important backend concept:

```text
Request
   ↓
Authentication middleware
   ↓
Who is this user?
   ↓
Controller
   ↓
Only access THEIR expenses
```

---

### Phase 6 — Error handling

Deliberately make things fail. For example:

```http
POST /api/expenses
```

with:

```json
{
  "amount": "hello"
}
```

The API should return something like:

```json
{
  "error": "Amount must be a number"
}
```

React should display:

```text
⚠ Amount must be a number
```

Learn to distinguish status codes:

```text
400 → bad request
401 → not authenticated
403 → not allowed
404 → not found
409 → conflict
500 → server error
```

This is one of the areas that separates a tutorial project from something closer to production.

---

### Phase 7 — Advanced JavaScript

Once the basic application works, deliberately refactor parts of it.

**Array methods**

```js
.map()
.filter()
.reduce()
.find()
.some()
.every()
.sort()
```

**Async JavaScript**

```js
async function getExpenses() {
  const response = await fetch("/api/expenses");
  const data = await response.json();

  return data;
}
```

**Destructuring**

```js
const { amount, category, date } = expense;
```

**Spread**

```js
setExpenses(prev => [
  ...prev,
  newExpense
]);
```

**Optional chaining**

```js
user?.profile?.name
```

**Modules**

```js
import express from "express";
```

The goal isn't to artificially use every JavaScript feature — it's to encounter them naturally while building.

---

## Final architecture

```text
                 ┌─────────────────┐
                 │   React / Vite  │
                 │                 │
                 │ Components      │
                 │ State           │
                 │ Forms           │
                 │ API client      │
                 └────────┬────────┘
                          │
                       HTTP/JSON
                          │
                          ▼
                 ┌─────────────────┐
                 │    Express      │
                 │                 │
                 │ Routes          │
                 │ Middleware      │
                 │ Controllers     │
                 │ Validation      │
                 │ Auth            │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │   PostgreSQL    │
                 │                 │
                 │ users           │
                 │ expenses        │
                 └─────────────────┘
```

## The important rule

**Don't follow a tutorial from beginning to end.**

Instead:

> **Build → get stuck → investigate → fix → refactor → repeat.**

Suggested pacing:

- **Week 1:** React + JavaScript
- **Week 2:** Express + REST API
- **Week 3:** PostgreSQL + authentication
- **Week 4:** validation, errors, testing, deployment

Don't add AI, Redis, Kafka, microservices, WebSockets, etc. until the basic app is genuinely solid.

If you can build this **from an empty folder without copying a tutorial**, you'll have practiced a very large portion of the JavaScript/React/Express fundamentals needed for the next projects.
