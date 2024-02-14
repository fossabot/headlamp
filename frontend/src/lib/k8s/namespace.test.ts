import Namespace from './namespace';

// const namespaceInfo = {
//   apiVersion: 'v1',
//   kind: 'Namespace',
//   metadata: {
//     name: 'namespace',
//     uid: '1',
//     creationTimestamp: '2020-01-01T00:00:00Z',
//   },
//   status: {
//     phase: 'Active',
//   },
// };

// const namepsaceTest = new Namespace(namespaceInfo);

// console.log('namespaceTest', namepsaceTest);

describe('Namespace testing', () => {
  describe('test working isValidNamespaceFormat', () => {
    it('should return true for valid namespace', () => {
      expect(Namespace.isValidNamespaceFormat('valid-namespace')).toBe(true);
    });

    it('should return false for namespace longer than 63 characters', () => {
      const longNamespace = 'a'.repeat(64);
      expect(Namespace.isValidNamespaceFormat(longNamespace)).toBe(false);
    });

    it('should return false for namespace with invalid characters', () => {
      expect(Namespace.isValidNamespaceFormat('invalid_namespace')).toBe(false);
    });

    it('should return true for empty namespace', () => {
      expect(Namespace.isValidNamespaceFormat('')).toBe(true);
    });
  });
});
