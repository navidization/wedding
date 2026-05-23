export function openExternalUrl(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export function createWhatsAppUrl(phone: string, message: string) {
  const normalizedPhone = phone.replace(/[^\d]/g, "");
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}
