import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type EnglishMonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

const monthMap: Record<EnglishMonth, string> = {
  January: "មករា",
  February: "កុម្ភៈ",
  March: "មីនា",
  April: "មេសា",
  May: "ឧសភា",
  June: "មិថុនា",
  July: "កក្កដា",
  August: "សីហា",
  September: "កញ្ញា",
  October: "តុលា",
  November: "វិច្ឆិកា",
  December: "ធ្នូ",
};

function convertMonthToKhmer(monthName: string): string {
  // If not in the list, return the original
  if (monthName in monthMap) {
    return monthMap[monthName as EnglishMonth];
  }
  return monthName;
}

export function convertNumberToKhmer(number: string | number) {
  const khmerDigits = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];
  return number
    .toString()
    .split("")
    .map((digit) => khmerDigits[parseInt(digit)])
    .join("");
}

export function formatDate(dateString: string, lang: string = "en") {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  //To not having commas after day (ex: 22,) for lang = "en"
  const parts = new Intl.DateTimeFormat("en", options).formatToParts(date);

  const day = parts.find((p) => p.type === "day")?.value || "";
  const monthName = parts.find((p) => p.type === "month")?.value || "";
  const year = parts.find((p) => p.type === "year")?.value || "";

  if (lang === "km") {
    const formattedDate = new Intl.DateTimeFormat("en", options).format(date);
    const [monthName, day, year] = formattedDate.split(" ");

    // Convert month to Khmer
    const khmerMonth = convertMonthToKhmer(monthName);

    // Convert day and year to Khmer digits
    const khmerDay = convertNumberToKhmer(day); // Remove comma from day
    const khmerYear = convertNumberToKhmer(year);

    return `${khmerDay} ${khmerMonth}, ${khmerYear}`;
  } else {
    return `${day} ${monthName}, ${year}`;
  }
}

export const formatDistanceToNow = (date: Date | number): string => {
  const now = new Date();
  const targetDate = new Date(date);
  const seconds = Math.floor((now.getTime() - targetDate.getTime()) / 1000);

  let interval = Math.floor(seconds / 31536000); // Years
  if (interval >= 1) {
    return interval === 1 ? "1 year ago" : `${interval} years ago`;
  }

  interval = Math.floor(seconds / 2592000); // Months
  if (interval >= 1) {
    return interval === 1 ? "1 month ago" : `${interval} months ago`;
  }

  interval = Math.floor(seconds / 86400); // Days
  if (interval >= 1) {
    return interval === 1 ? "1 day ago" : `${interval} days ago`;
  }

  interval = Math.floor(seconds / 3600); // Hours
  if (interval >= 1) {
    return interval === 1 ? "1 hour ago" : `${interval} hours ago`;
  }

  interval = Math.floor(seconds / 60); // Minutes
  if (interval >= 1) {
    return interval === 1 ? "1 minute ago" : `${interval} minutes ago`;
  }

  return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
};

export function formatDuration(isoDuration: string): string {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "";

  const hours = match[1] ? `${match[1]}:` : "";
  const minutes = match[2] ? `${match[2]}:` : "0:";
  const seconds = match[3] ? match[3].padStart(2, "0") : "00";

  return `${hours}${minutes}${seconds}`;
}
