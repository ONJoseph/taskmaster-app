// contact.js
export async function sendMessage(name, email, message) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
    return response.ok;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}
