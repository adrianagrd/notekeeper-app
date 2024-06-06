import { describe, it, expect } from 'vitest';
import { validateType } from '../validateType';

describe('validateType', () => {
    describe('Given type string', () => {
        it('should return true for valid note object', () => {
            const validNote = {
                name: 'Meeting',
                description: 'Discuss project updates',
                important: true,
                status: 'pending',
                due_date: '2024-05-20',
            };
            expect(validateType(validNote)).toBe(true);
        });
    });

    describe('Given type number', () => {
        it('should return false for invalid note object', () => {
            const invalidNote = {
                name: 'Meeting',
                description: 'Discuss project updates',
                important: true,
                status: 'pending',
                due_date: 12345,
            };
            expect(validateType(invalidNote)).toBe(false);
        });
    });
});
