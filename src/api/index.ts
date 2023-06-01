export const slowApi = (delay = 5000) => fetch(`http://localhost:8000/api/slow?delay=${delay}`).then(res => res.json());

export const slowImage = (delay = 5000) => fetch(`http://localhost:8000/api/slow-img?delay=${delay}`);
