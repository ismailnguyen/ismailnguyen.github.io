const memoryCache = new Map(); // key -> { value, ts }

function cacheKey(resource, parameter) {
    return parameter ? `${resource}:${parameter}` : `${resource}`;
}

function fromSession(key) {
    try {
        const raw = sessionStorage.getItem(`works:${key}`);
        if (!raw) return null;
        return JSON.parse(raw);
    } catch (_) {
        return null;
    }
}

function toSession(key, value) {
    try {
        sessionStorage.setItem(`works:${key}`, JSON.stringify(value));
    } catch (_) {}
}

function buildUrl(resource, parameter) {
    const base = import.meta.env.VITE_WORKS_API_URL;
    const url = new URL(resource + '/', base);
    if (parameter) url.pathname = `${url.pathname}${encodeURIComponent(parameter)}`;
    return url.toString();
}

async function fetchWithRetry(url, { timeoutMs = 10000, retries = 2 } = {}) {
    let attempt = 0;
    let lastErr;
    while (attempt <= retries) {
        const controller = new AbortController();
        const t = setTimeout(() => controller.abort(), timeoutMs);
        try {
            const res = await fetch(url, { signal: controller.signal, headers: { 'accept': 'application/json' } });
            clearTimeout(t);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return await res.json();
        } catch (e) {
            lastErr = e;
            clearTimeout(t);
            if (attempt === retries) break;
            await new Promise(r => setTimeout(r, 500 * Math.pow(2, attempt)));
            attempt++;
        }
    }
    throw lastErr;
}

async function getCached(resource, parameter) {
    const key = cacheKey(resource, parameter);
    // memory first
    if (memoryCache.has(key)) return memoryCache.get(key).value;
    // then session
    const ses = fromSession(key);
    if (ses) {
        memoryCache.set(key, { value: ses, ts: Date.now() });
        return ses;
    }
    // fetch and cache
    const url = buildUrl(resource, parameter);
    const data = await fetchWithRetry(url);
    memoryCache.set(key, { value: data, ts: Date.now() });
    toSession(key, data);
    return data;
}

export default class WorksService {
    async getAllPages() {
        return getCached('pages');
    }

    async getPage(pageId) {
        return getCached('page', pageId);
    }

    async getPageImages(pageId) {
        return getCached('pageImages', pageId);
    }
}
