export interface ClockTime {
  hours: number;
  minutes: number;
}

// Convert minutes to degrees (0 - 360)
export function getMinuteAngle(minutes: number): number {
  return (minutes / 60) * 360;
}

// Convert hours and minutes to degrees (0 - 360)
export function getHourAngle(hours: number, minutes: number): number {
  const baseHourAngle = ((hours % 12) / 12) * 360;
  const minuteOffset = (minutes / 60) * 30; // 30 degrees per hour
  return baseHourAngle + minuteOffset;
}

// Calculate the snapped minutes from an SVG angle
// SVG Angle starts at 12 o'clock (0 degrees) and rotates clockwise
export function getMinutesFromAngle(angleDeg: number, snapTo: number = 5): number {
  let normalizedAngle = (angleDeg % 360 + 360) % 360;
  let rawMinutes = (normalizedAngle / 360) * 60;
  let snappedMinutes = Math.round(rawMinutes / snapTo) * snapTo;
  if (snappedMinutes >= 60) {
    snappedMinutes = 0;
  }
  return snappedMinutes;
}

// Calculate the hours from an SVG angle
export function getHoursFromAngle(angleDeg: number): number {
  let normalizedAngle = (angleDeg % 360 + 360) % 360;
  let rawHours = (normalizedAngle / 360) * 12;
  let hours = Math.round(rawHours);
  if (hours === 0) {
    hours = 12;
  }
  return hours;
}

// Format time as H:MM (12-hour) or HH:MM (24-hour, zero-padded hour).
export function formatTime(
  hours: number,
  minutes: number,
  is24h: boolean = false
): string {
  const mm = minutes.toString().padStart(2, "0");
  if (is24h) {
    return `${hours.toString().padStart(2, "0")}:${mm}`;
  }
  return `${hours}:${mm}`;
}

// Convert an analog hour position (1–12) to its on-clock label.
// Works for any input via modulo, mapping 0/24 → 12.
export function toAnalogHour(hours: number): number {
  const h = hours % 12;
  return h === 0 ? 12 : h;
}

// Whether a 24-hour time falls in the AM (first) or PM (second) half of the day.
// Used to disambiguate the analog face in 24-hour mode (e.g. 3 o'clock = 03:00 vs 15:00).
export function getDayPeriod(hours: number): "am" | "pm" {
  return hours % 24 < 12 ? "am" : "pm";
}

// Generate random clock times based on level of difficulty (1 to 4).
// In 24-hour mode hours span 0–23; otherwise the analog-friendly 1–12.
export function generateRandomTime(
  difficulty: number,
  is24h: boolean = false
): ClockTime {
  const hours = is24h
    ? Math.floor(Math.random() * 24) // 0 to 23
    : Math.floor(Math.random() * 12) + 1; // 1 to 12
  let minutes = 0;

  switch (difficulty) {
    case 1:
      // Level 1: Full hours (1:00, 2:00, etc.)
      minutes = 0;
      break;
    case 2:
      // Level 2: Half hours (1:00, 1:30, etc.)
      minutes = Math.random() < 0.5 ? 0 : 30;
      break;
    case 3:
      // Level 3: Quarter hours (1:00, 1:15, 1:30, 1:45)
      const quarters = [0, 15, 30, 45];
      minutes = quarters[Math.floor(Math.random() * quarters.length)];
      break;
    case 4:
    default:
      // Level 4: 5-minute intervals (1:00, 1:05, ..., 1:55)
      minutes = Math.floor(Math.random() * 12) * 5;
      break;
  }

  return { hours, minutes };
}

// Generate a set of unique wrong choices for Multiple Choice game
export function generateMultipleChoiceOptions(
  correctTime: ClockTime,
  count: number = 4,
  is24h: boolean = false
): string[] {
  const correctStr = formatTime(correctTime.hours, correctTime.minutes, is24h);
  const options = new Set<string>();
  options.add(correctStr);

  while (options.size < count) {
    // Generate an option within similar range
    const randHour = is24h
      ? Math.floor(Math.random() * 24)
      : Math.floor(Math.random() * 12) + 1;
    // Generate minutes based on the same kind of intervals as the correct answer
    let randMin = 0;
    if (correctTime.minutes === 0) {
      randMin = 0;
    } else if (correctTime.minutes % 30 === 0) {
      randMin = Math.random() < 0.5 ? 0 : 30;
    } else if (correctTime.minutes % 15 === 0) {
      const optionsArray = [0, 15, 30, 45];
      randMin = optionsArray[Math.floor(Math.random() * optionsArray.length)];
    } else {
      randMin = Math.floor(Math.random() * 12) * 5;
    }

    const optionStr = formatTime(randHour, randMin, is24h);
    options.add(optionStr);
  }

  // Shuffle options
  return Array.from(options).sort(() => Math.random() - 0.5);
}
