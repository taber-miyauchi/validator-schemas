import { Validator, ValidationResult, ValidationError } from '@taber-miyauchi/validator-core';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates email addresses.
 */
export class EmailValidator implements Validator<string> {
  validate(input: unknown): ValidationResult<string> {
    const errors: ValidationError[] = [];

    if (typeof input !== 'string') {
      errors.push({
        field: 'email',
        message: 'Email must be a string',
        code: 'INVALID_TYPE'
      });
      return { valid: false, errors };
    }

    if (!EMAIL_REGEX.test(input)) {
      errors.push({
        field: 'email',
        message: 'Invalid email format',
        code: 'INVALID_EMAIL'
      });
      return { valid: false, errors };
    }

    return { valid: true, value: input, errors: [] };
  }
}
