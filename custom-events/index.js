// 1. Event

const testEvent = new Event("test-event");

const element = document.getElementById("element");

element.addEventListener("test-event", (event) => {
  console.log(`Event received: ${event.type}`);
});

element.addEventListener("test-custom-event", (event) => {
  console.log(`Event received: ${event.detail.user}`);
});

element.dispatchEvent(testEvent);

// 2. Custom Event
// The advantage of this event is passing more data (details) with the event

const testCustomEvent = new CustomEvent("test-custom-event", {
  detail: {
    user: "Basel Issa",
  },
});

element.dispatchEvent(testCustomEvent);

// 3. EventTarget and dispatchEvent (without DOM elements)

const eventTarget = new EventTarget();

eventTarget.addEventListener("test-custom-event", (event) => {
  console.log(`EventTarget received an event: ${event.detail.user}`);
});

eventTarget.dispatchEvent(testCustomEvent);
