# @taber-miyauchi/validator-schemas

Validator implementations for common data types. Part of the cross-repository SCIP navigation demo.

## Installation

```bash
npm install @taber-miyauchi/validator-schemas
```

## Usage

```typescript
import { EmailValidator, PhoneValidator, URLValidator } from '@taber-miyauchi/validator-schemas';

const emailValidator = new EmailValidator();
const result = emailValidator.validate('user@example.com');

if (result.valid) {
  console.log('Valid email:', result.value);
} else {
  console.log('Errors:', result.errors);
}
```

## Validators

| Class | Validates | Example |
|-------|-----------|---------|
| `EmailValidator` | Email addresses | `user@example.com` |
| `PhoneValidator` | Phone numbers | `+1-555-123-4567` |
| `URLValidator` | URLs | `https://example.com` |

## Dependencies

- `@taber-miyauchi/validator-core` — Core interfaces (`Validator<T>`, `ValidationResult`, `ValidationError`)

## Testing Precise Code Navigation

After SCIP indexing, test these navigation features in Sourcegraph:

### Go to Definition
- Click on `Validator<string>` → should jump to `validator-core`
- Click on `ValidationResult` → should jump to `validator-core`

### Find References
- Click on `EmailValidator` → should show usages in `validator-service`

### Find Implementations
- From `validator-core`, click "Find Implementations" on `Validator<T>` → should show `EmailValidator`, `PhoneValidator`, `URLValidator`

## Development

```bash
npm install
npm run build
```

## License

MIT
