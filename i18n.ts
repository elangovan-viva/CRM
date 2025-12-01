import { getRequestConfig } from "next-intl/server";
const locale='en';
export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./locales/en.json`)).default,
  timeZone: "Asia/Kolkata",
}));
