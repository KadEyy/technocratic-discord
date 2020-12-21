export const convertSecondsToTime = (s: number) => {
    const hours = Math.floor(s / 3600);
    s %= 3600;
    const minutes = Math.floor(s / 60);
    const seconds = s % 60;
    return `${hours}:${minutes}:${seconds}`
}