export function padWithZeros(num: number, length: number) {
    return num.toString().padStart(length, '0');
}