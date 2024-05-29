## Assignment 02

**Objective:** Develop a Express application with TypeScript as the programming language, integrating MongoDB with Mongoose for effective data management. Ensure data integrity through validation using Joi/Zod.

### How to Run Locally

### Prerequisites

- Node.js installed
- pnpm package manager installed
- MongoDB instance running (local or remote)
- nodemon package installed globally

**1. Clone the repository:**

```
git clone https://github.com/sajalxdev/assignment-02
cd assignment-02
```

**2. Install Dependencies:**

```
pnpm install
```

**3. Set Up Environment Variables**
Create a .env file in the root directory and add your environment variables:

```
PORT=5000
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.04sww6i.mongodb.net/<dbname>?retryWrites=true&w=majority
```

**4. Run the Applocation**

```
pnpm start
```

#### Available Scripts:

`pnpm start`: Starts the complied JavaScript application
`pnpm dev`: Compiles TypeScript files into JavaScript and runs the application in development mode using `concurrently` package
