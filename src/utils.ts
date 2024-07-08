/**
 * @param duration = 65
 * @returns hour = 1
 */
export function hourOfDuration(duration: number): number {
    if (duration < 0) { return 0 }
    return Math.floor(duration / 60)
}

/**
 * @param duration = 65
 * @returns minute = 5
 */
export function minOfDuration(duration: number): number {
    if (duration < 0) { return 0 }
    return duration % 60
}

export function percentage(current: number, total: number): number {
    switch (total) {
        case -1:    // Endless
            return -1;
        case 0:     // Undefined
            return 0;
        default:    // Defined
            if (current >= total) {
                return 100;
            } else {
                return Math.round((current / total) * 100);
            }
    }
}

export function rating(num: string): string {
    switch (num) {
        case '10':
            return '10: Perfect'
        case '9':
            return '9: Excellent'
        case '8':
            return '8: Fantastic'
        case '7':
            return '7: Great'
        case '6':
            return '6: Good'
        case '5':
            return '5: Fine'
        case '4':
            return '4: Not Satisfied'
        case '3':
            return '3: Boring'
        case '2':
            return '2: Bad'
        case '1':
            return '1: Trash'
        default:
            return ''
    }
}