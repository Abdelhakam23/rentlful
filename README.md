<div align="center">

# 🏠 RENTIFUL
**The frontend, one foundation at a time.**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-149ECA?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![AWS Amplify](https://img.shields.io/badge/AWS%20Amplify-FF9900?style=for-the-badge&logo=awsamplify&logoColor=white)

A rental-property platform in development, connecting a welcoming landing experience with the foundations of tenant and manager accounts.

[Backend repository](https://github.com/Abdelhakam23/rentiful-api)

</div>

---

## 📖 Table of contents

- [The idea](#the-idea)
- [Current scope](#current-scope)
- [Stack](#stack)
- [Local development](#local-development)
- [Project map](#project-map)
- [Scripts](#scripts)
- [Next milestones](#next-milestones)

---

> **Work in progress.** This repository currently contains the landing experience and early authentication/API foundations. Property discovery and account dashboards are not complete yet.

---

<a id="the-idea"></a>

## 📌 The idea

Rentiful is being built around two sides of the rental journey: tenants discovering a place to live, and managers organizing their properties. This repository is the web client; the Express/Prisma API lives separately.

---

<a id="current-scope"></a>

## ✨ Current scope

### Implemented in source

- A component-based landing page with hero, discovery, features and call-to-action sections.
- Responsive layout classes, shared navigation and reusable UI components.
- Amplify configuration for Cognito, with customized sign-in/sign-up UI and tenant/manager role selection.
- A Redux store with typed hooks and RTK Query middleware.
- An authenticated-user query that reads the Cognito session, attaches its ID token and requests profile data from the API.
- Zod schemas for future property, application and settings forms.

### Foundations, not completed flows

The auth wrapper is connected to the application providers, but dedicated sign-in/sign-up page routes and dashboards still need to be added. The landing search currently has no search action. The client anticipates manager profiles, while the companion API currently exposes tenant routes only.

These are development milestones, not advertised working features.

---

<a id="stack"></a>

## 🧰 Stack

| Layer | In use |
| --- | --- |
| Application | Next.js App Router, React, TypeScript |
| Styling | Tailwind CSS, reusable UI primitives |
| Motion | Framer Motion |
| Client state | Redux Toolkit, React Redux |
| API state | RTK Query |
| Identity integration | AWS Amplify, Cognito |
| Validation definitions | Zod |

Map and file-upload packages are installed, but completed map browsing and upload workflows are not part of the current scope.

---

<a id="local-development"></a>

## 🚀 Local development

You will need Node.js/npm, a configured Cognito user pool/client and the companion API for profile requests. Choose a Node.js version supported by the checked-in Next.js release.

```bash
git clone https://github.com/Abdelhakam23/rentlful.git
cd rentlful
npm ci
```

Create `.env.local` in the project root:

```dotenv
NEXT_PUBLIC_API_BASE_URL=http://localhost:3002
NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID=
NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID=
```

Set the two Cognito values to your development pool/client identifiers. The auth configuration expects a `custom:role` attribute with `tenant` or `manager`. Values prefixed with `NEXT_PUBLIC_` are visible in the browser; never put private keys or client secrets there.

```bash
npm run dev
```

Open `http://localhost:3000`; the root redirects to `/landing`.

> Development setup depends on a correctly configured Cognito pool and a running companion API. Complete integration testing before deployment.

---

<a id="project-map"></a>

## 📂 Project map

```text
app/
  (auth)/          Cognito auth wrapper and custom auth UI
  (nondashboard)/  Landing route and its components
  providers.tsx   Redux and authentication providers
components/       Navigation and reusable UI
state/            Store, typed hooks and API definitions
lib/              Constants, helpers and validation schemas
types/prisma/     Generated types from the companion API
```

The backend generation script copies Prisma types into this repository when both projects are sibling directories. See the backend README before regenerating them.

---

<a id="scripts"></a>

## ⚙️ Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve a completed production build |
| `npm run lint` | Run ESLint |

No automated test script is currently defined.

---

<a id="next-milestones"></a>

## 🗺️ Next milestones

- [ ] Complete sign-in/sign-up routes and profile creation.
- [ ] Finish one tenant journey from sign-in to property discovery.
- [ ] Connect search, property details and saved favorites to real API operations.
- [ ] Add manager API support before enabling manager dashboards.
- [ ] Add loading/error states and integration tests around the completed journey.
- [ ] Verify backend token validation and record-level permissions before deployment.

---

<div align="center">

**A place-finding experience, built step by step.**

Frontend: [`rentlful`](https://github.com/Abdelhakam23/rentlful) · Backend: [`rentiful-api`](https://github.com/Abdelhakam23/rentiful-api)

</div>
