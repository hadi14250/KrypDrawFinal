import { baseUrl } from "@/lib/utils";

export const resetPassword = async (password: string, id: string) => {
  const response = await fetch(`${baseUrl}/api/auth/password-recovery/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(await response.json());
  }
};

export const fetchUser = async (token: string) => {
  const res = await fetch(`${baseUrl}/api/user`, {
    headers: {
      "Content-Type": "application",
      Authorization: `Bearer ${token}`,
    },
  });
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(await res.json());
  }
};

export const fetchActiveCampaigns = async (page: number) => {
  const res = await fetch(`${baseUrl}/api/campaign/paginate/true`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ page: page, take: 10, order: "ASC" }),
  });

  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(await res.json());
  }
};

export const fetchInActiveCampaigns = async (page: number) => {
  const res = await fetch(`${baseUrl}/api/campaign/paginate/false`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ page: page, take: 10, order: "ASC" }),
  });
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(await res.json());
  }
};

export const fetchEntries = async (page: number, token: string) => {
  const res = await fetch(`${baseUrl}/api/entry/paginate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ page: page, take: 10, order: "ASC" }),
  });

  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(await res.json());
  }
};

export const fetchTransactions = async (page: number, token: string) => {
  const res = await fetch(`${baseUrl}/api/transaction/paginate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ page: page, take: 10, order: "ASC" }),
  });

  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(await res.json());
  }
};
