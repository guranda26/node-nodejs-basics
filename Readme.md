# Node.js basics

## How to Run the Project

You can run each task either:

- Using **npm scripts** (recommended)
- Using **node** directly

---

## 1. Running with npm scripts

If a script is defined in `package.json`, you can run:

```bash
npm run <script-name>

### Example
Given this in package.json:

```
{
  "scripts": {
    "fs:create": "node src/fs/create.js"
  }
}

To run:

npm run fs:create

