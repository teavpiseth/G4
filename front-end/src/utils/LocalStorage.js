class LocalStorage {
  setAssessToken(token) {
    localStorage.setItem("accessToken", token);
  }
  getAssessToken() {
    return localStorage.getItem("accessToken");
  }

  removeAssessToken() {
    localStorage.removeItem("accessToken");
  }
}

export default new LocalStorage();
