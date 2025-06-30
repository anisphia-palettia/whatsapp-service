export function buildTargetId(phoneNumber: string, isGroup: boolean = false): string {
    if (phoneNumber.includes("@")) return phoneNumber;
    return `${phoneNumber}${isGroup ? "@g.us" : "@s.whatsapp.net"}`;
}