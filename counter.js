export function setupCounter(element) {
  let counter = 0
  const setCounter = (counter) => {
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(++counter))
  setCounter(0)
}
