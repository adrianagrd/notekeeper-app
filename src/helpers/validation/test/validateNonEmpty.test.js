import { describe, it, expect } from 'vitest';
import { validateNonEmpty } from '../validateNonEmpty';

describe('validateNonEmpty', () => {
    describe('Given a non-empty name and description', () => {
        it('should returns true if non-empty name and description', () => {
            const validNote = {
                name: 'Meeting',
                description: 'Planning project updates',
            };
            expect(validateNonEmpty(validNote)).toBe(true);
        });
    });

    describe('Given an empty name or description', () => {
        it('should returns false for empty name or description', () => {
            const invalidNote = {
                name: '',
                description: 'Planning project updates',
            };
            expect(validateNonEmpty(invalidNote)).toBe(false);
        });
    });
});
