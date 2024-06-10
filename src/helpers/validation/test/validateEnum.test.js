import { describe, it, expect } from 'vitest';
import { validateEnum } from '../validateEnum';

describe('validateEnum', () => {
    describe('Given a valid status value', () => {
        it('should returns true for valid status value', () => {
            const validNote = {
                status: 'completed',
            };
            expect(validateEnum(validNote)).toBe(true);
        });
    });

    describe('Given an invalid status value', () => {
        it('should returns false for invalid status value', () => {
            const invalidNote = {
                status: ['in progress', 'pending'],
            };
            expect(validateEnum(invalidNote)).toBe(false);
        });
    });
});
