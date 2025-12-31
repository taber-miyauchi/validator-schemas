# validator-schemas

## Project Structure

```
├── validator-core/           ← The foundation
│   ├── package.json
│   ├── src/
│   │   ├── index.ts          ← Re-exports all types
│   │   ├── types.ts          ← ValidationResult, ValidationError
│   │   └── validator.ts      ← Validator<T> interface
│   └── README.md
│
├── validator-schemas/        ← Implementation (you are here)
│   ├── package.json          ← depends on validator-core
│   ├── src/
│   │   ├── email-validator.ts    ← EmailValidator implements Validator
│   │   ├── phone-validator.ts    ← PhoneValidator implements Validator
│   │   └── url-validator.ts      ← URLValidator implements Validator
│   └── README.md
│
└── validator-service/        ← Consumer/API
    ├── package.json          ← depends on both
    ├── src/
    │   ├── index.ts          ← Express server using validators
    │   └── middleware.ts     ← Generic validation middleware
    └── README.md
```

## Overview

Concrete validator implementations for common data types. Each class implements the `Validator<T>` interface from `validator-core`.

## Types

- **`EmailValidator`** - Validates email addresses using regex pattern matching
- **`PhoneValidator`** - Validates phone numbers (international format support)
- **`URLValidator`** - Validates URLs using the built-in `URL` constructor

## Dependencies

- `@taber-miyauchi/validator-core` - For `Validator<T>` interface, `ValidationResult`, and `ValidationError` types

## Testing Precise Code Navigation

Open this repo in Sourcegraph and try the following:

### 1. Go to Definition (cross-repo type)

Jump from a type usage to its definition in another repository.

- In `email-validator.ts`, click on `ValidationResult` (line 9) → **Go to Definition**
- → Highlights `ValidationResult` interface (line 14) in `validator-core/src/types.ts`

**Benefit:** Navigate directly from your implementation to the shared types you depend on - to understand the contract without leaving your editor or manually searching another repo.

### 2. Find References (cross-repo class)

Locate all usages of an exported class across repository boundaries.

- In `email-validator.ts`, click on `EmailValidator` class (line 8) → **Find References**
- → Highlights `EmailValidator` (line 9) usage in `validator-service/src/index.ts`

**Benefit:** See exactly which services consume your implementation—essential for gauging adoption and planning breaking changes to your API.
