const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true
    // simulate fake async
    setTimeout(callback, 100)
  },
  singout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false
    // simulate fake async
    setTimeout(callback, 100)
  },
}

export default { fakeAuthProvider }
