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

// Format time as H:MM
export function formatTime(hours: number, minutes: number): string {
  return `${hours}:${minutes.toString().padStart(2, "0")}`;
}

// Generate random clock times based on level of difficulty (1 to 4)
export function generateRandomTime(difficulty: number): ClockTime {
  const hours = Math.floor(Math.random() * 12) + 1; // 1 to 12
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
export function generateMultipleChoiceOptions(correctTime: ClockTime, count: number = 4): string[] {
  const correctStr = formatTime(correctTime.hours, correctTime.minutes);
  const options = new Set<string>();
  options.add(correctStr);

  while (options.size < count) {
    // Generate an option within similar range
    const randHour = Math.floor(Math.random() * 12) + 1;
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

    const optionStr = formatTime(randHour, randMin);
    options.add(optionStr);
  }

  // Shuffle options
  return Array.from(options).sort(() => Math.random() - 0.5);
}
