class LocalStorage {
  setAssessToken(token) {
    localStorage.setItem("accessToken", token);
  }

  setRefreshToken(token) {
    localStorage.setItem("refreshToken", token);
  }
  getAssessToken() {
    return localStorage.getItem("accessToken");
  }

  removeAssessToken() {
    localStorage.removeItem("accessToken");
  }

  getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }
}

export default new LocalStorage();
