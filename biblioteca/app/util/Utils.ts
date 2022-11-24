export class Utils {
  static isNullOrUndefinedOrEmpty(data: any): boolean {
    if (data === undefined || data === null || data === '' || data == 'null') {
      return true;
    }
    return false;
  }
}
