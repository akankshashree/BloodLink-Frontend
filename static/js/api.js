const API_BASE_URL = "https://bloodlink-backend-4htr.onrender.com/api";

async function apiRequest(endpoint, options = {}) {
    const token = localStorage.getItem("bloodlink_token");
    const headers = {
        "Content-Type": "application/json",
        ...(options.headers || {})
    };

    if (token) headers["Authorization"] = `Token ${token}`;

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers
    });

    let data = {};
    try { data = await response.json(); } catch (_) {}

    if (!response.ok) {
        throw new Error(data.error || data.detail || "Something went wrong.");
    }
    return data;
}

async function loginUser(username, password) {
    const data = await apiRequest("/login/", {
        method: "POST",
        body: JSON.stringify({ username, password })
    });
    localStorage.setItem("bloodlink_token", data.token);
    localStorage.setItem("bloodlink_user", JSON.stringify(data.user));
    return data;
}

async function registerUser(userData) {
    const data = await apiRequest("/register/", {
        method: "POST",
        body: JSON.stringify(userData)
    });
    localStorage.setItem("bloodlink_token", data.token);
    localStorage.setItem("bloodlink_user", JSON.stringify(data.user));
    return data;
}

async function getCurrentUser() { return apiRequest("/me/"); }

async function logoutUser() {
    try { await apiRequest("/logout/", { method: "POST" }); }
    finally {
        localStorage.removeItem("bloodlink_token");
        localStorage.removeItem("bloodlink_user");
    }
}

async function getDonorProfile() { return apiRequest("/donor-profile/"); }

async function saveDonorProfile(profileData) {
    return apiRequest("/donor-profile/", {
        method: "POST",
        body: JSON.stringify(profileData)
    });
}

async function getDashboard() { return apiRequest("/dashboard/"); }

async function getBloodRequests() { return apiRequest("/blood-requests/"); }

async function getBloodRequest(id) { return apiRequest(`/blood-requests/${id}/`); }

async function createBloodRequest(data) {
    return apiRequest("/blood-requests/", {
        method: "POST",
        body: JSON.stringify(data)
    });
}

async function cancelBloodRequest(id) {
    return apiRequest(`/blood-requests/${id}/cancel/`, { method: "POST" });
}

async function getMatches() { return apiRequest("/matches/"); }

async function acceptMatch(id) {
    return apiRequest(`/matches/${id}/accept/`, { method: "POST" });
}

async function declineMatch(id) {
    return apiRequest(`/matches/${id}/decline/`, { method: "POST" });
}

async function getNotifications() { return apiRequest("/notifications/"); }

async function markNotificationRead(id) {
    return apiRequest(`/notifications/${id}/read/`, { method: "POST" });
}

async function markAllNotificationsRead() {
    return apiRequest("/notifications/read-all/", { method: "POST" });
}

async function getDonations() { return apiRequest("/donations/"); }

async function addDonation(data) {
    return apiRequest("/donations/", {
        method: "POST",
        body: JSON.stringify(data)
    });
}

function requireAuth(role = null) {
    const token = localStorage.getItem("bloodlink_token");
    const user = JSON.parse(localStorage.getItem("bloodlink_user") || "null");

    if (!token || !user) {
        window.location.href = "/login.html";
        return null;
    }

    if (role && user.role !== role) {
        window.location.href = user.role === "DONOR"
            ? "/donor-dashboard.html"
            : "/requester-dashboard.html";
        return null;
    }
    return user;
}

function dashboardUrl() {
    const user = JSON.parse(localStorage.getItem("bloodlink_user") || "null");
    return user?.role === "DONOR"
        ? "/donor-dashboard.html"
        : "/requester-dashboard.html";
}

function showMessage(id, message, type = "danger") {
    const el = document.getElementById(id);
    if (!el) return;
    el.className = `alert alert-${type} mb-4`;
    el.textContent = message;
    el.style.display = "block";
}
