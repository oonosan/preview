// Business details used across the page. Fill these in and redeploy.
// Anything left empty is hidden or falls back to neutral copy, so the
// page never shows placeholders or invented claims.

export const site = {
  /** First name of the person behind Newcomer, e.g. "María". Shown in the hero and the chat. */
  ownerName: '',
  /** WhatsApp number in international format, digits only, e.g. "5491112345678". */
  whatsappNumber: '',
  email: 'contact@newcomer.ar',
  city: 'Buenos Aires, Argentina',
};

/**
 * Link for every "chat with us" button. With a WhatsApp number it opens a chat
 * (optionally with a pre-filled message); without one it falls back to the contact form.
 */
export function chatLink(text?: string): { href: string; external: boolean } {
  const number = site.whatsappNumber.replace(/\D/g, '');
  if (!number) return { href: '#contact', external: false };
  const query = text ? `?text=${encodeURIComponent(text)}` : '';
  return { href: `https://wa.me/${number}${query}`, external: true };
}

export const hasWhatsApp = site.whatsappNumber.replace(/\D/g, '').length > 0;
