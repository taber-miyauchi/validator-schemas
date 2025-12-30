import { Validator, ValidationResult, ValidationError } from '@taber-miyauchi/validator-core';

/**
 * Validates URLs.
 */
export class URLValidator implements Validator<string> {
  validate(input: unknown): ValidationResult<string> {
    const errors: ValidationError[] = [];

    if (typeof input !== 'string') {
      errors.push({
        field: 'url',
        message: 'URL must be a string',
        code: 'INVALID_TYPE'
      });
      return { valid: false, errors };
    }

    try {
      new URL(input);
    } catch {
      errors.push({
        field: 'url',
        message: 'Invalid URL format',
        code: 'INVALID_URL'
      });
      return { valid: false, errors };
    }

    return { valid: true, value: input, errors: [] };
  }
}
