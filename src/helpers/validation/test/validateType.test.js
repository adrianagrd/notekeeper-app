import { describe, it, expect } from 'vitest';
import { validateType } from '../validateType.js';

describe('validateType', () => {
    it('return true for the correct types', () => {
        const note = { title: 'Note 1', content: 'Content 1', important: true, status: 'active', dueDate: new Date() };
        const expectedTypes = { title: 'string', content: 'string', important: 'boolean', status: 'string', dueDate: 'object' };
        expect(validateType(note, expectedTypes)).toBe(true);
    });

    it('return false for the incorrect types', () => {
        const note = { title: 'Note 1', content: 123, important: 'yes', status: 'active', dueDate: '2022-12-31' };
        const expectedTypes = { title: 'string', content: 'string', important: 'boolean', status: 'string', dueDate: 'object' };
        expect(validateType(note, expectedTypes)).toBe(false);
    });
});