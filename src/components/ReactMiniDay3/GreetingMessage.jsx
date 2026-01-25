function GreetingMessage() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return <h2>Good Morning 🌅</h2>;
  }

  if (hour < 18) {
    return <h2>Good Afternoon ☀️</h2>;
  }

  return <h2>Good Evening 🌙</h2>;
}

export default GreetingMessage;
