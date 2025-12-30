import { Validator, ValidationResult, ValidationError } from '@taber-miyauchi/validator-core';

const PHONE_REGEX = /^\+?[\d\s\-()]{10,}$/;

/**
 * Validates phone numbers.
 */
export class PhoneValidator implements Validator<string> {
  validate(input: unknown): ValidationResult<string> {
    const errors: ValidationError[] = [];

    if (typeof input !== 'string') {
      errors.push({
        field: 'phone',
        message: 'Phone must be a string',
        code: 'INVALID_TYPE'
      });
      return { valid: false, errors };
    }

    if (!PHONE_REGEX.test(input)) {
      errors.push({
        field: 'phone',
        message: 'Invalid phone format',
        code: 'INVALID_PHONE'
      });
      return { valid: false, errors };
    }

    return { valid: true, value: input, errors: [] };
  }
}
