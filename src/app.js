import App from './app.html'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

const app = new App({
  target: document.body,
})

export default app
