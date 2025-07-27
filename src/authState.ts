// Auth context/state - in a real app, this would be more sophisticated
export const authState = {
  isAuthenticated: false,
  user: null as { id: string; name: string; email: string } | null,
  login: (email: string, password: string) => {
    // Simulate login - in a real app, this would make an API call
    if (email && password) {
      authState.isAuthenticated = true;
      authState.user = { id: "1", name: "Dragon Farmer", email };
      return true;
    }
    return false;
  },
  logout: () => {
    authState.isAuthenticated = false;
    authState.user = null;
  },
};
