globalThis.IS_REACT_ACT_ENVIRONMENT = true;

class IntersectionObserverMock {
  constructor(callback, options) {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

global.IntersectionObserver = IntersectionObserverMock;