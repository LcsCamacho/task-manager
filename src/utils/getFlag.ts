export const getCountryFlagEmoji = (location: string): string => {
  const cleanLocation = location.trim().toLocaleLowerCase();

  const country = countryList.find((country) => {
    return cleanLocation.includes(country.name.toLowerCase());
  });

  return country?.flagEmoji || "";
};

export const getFlagEmoji = (countryCode: string) => {
  return countryCode
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join();
};

export const countryList = [
  {
    flagEmoji: "🇦🇫",
    name: "Afghanistan",
    phoneCode: "+93",
    code: "AF",
    flag: "https://flagcdn.com/h40/af.png",
  },
  {
    flagEmoji: "🇧🇷",
    name: "Brazil",
    phoneCode: "+55",
    code: "BR",
    flag: "https://flagcdn.com/h40/br.png",
  },
  {
    flagEmoji: "🇺🇸",
    name: "United States",
    phoneCode: "+1",
    code: "US",
    flag: "https://flagcdn.com/h40/us.png",
  },
  {
    flagEmoji: "🇩🇪",
    name: "Germany",
    phoneCode: "+49",
    code: "DE",
    flag: "https://flagcdn.com/h40/de.png",
  },
  {
    flagEmoji: "🇮🇳",
    name: "India",
    phoneCode: "+91",
    code: "IN",
    flag: "https://flagcdn.com/h40/in.png",
  },
  {
    flagEmoji: "🇯🇵",
    name: "Japan",
    phoneCode: "+81",
    code: "JP",
    flag: "https://flagcdn.com/h40/jp.png",
  },
  {
    flagEmoji: "🇫🇷",
    name: "France",
    phoneCode: "+33",
    code: "FR",
    flag: "https://flagcdn.com/h40/fr.png",
  },
  {
    flagEmoji: "🇰🇷",
    name: "South Korea",
    phoneCode: "+82",
    code: "KR",
    flag: "https://flagcdn.com/h40/kr.png",
  },
  {
    flagEmoji: "🇲🇽",
    name: "Mexico",
    phoneCode: "+52",
    code: "MX",
    flag: "https://flagcdn.com/h40/mx.png",
  },
  {
    flagEmoji: "🇦🇷",
    name: "Argentina",
    phoneCode: "+54",
    code: "AR",
    flag: "https://flagcdn.com/h40/ar.png",
  },
];
