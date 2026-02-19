export class formatDate {
  #date: Date;
  constructor(date: Date | string) {
    if (date instanceof Date) this.#date = date;
    else if (typeof date === "string") this.#date = new Date(date);
    else this.#date = new Date(date);
  }

  /**
   * yyyy/mm/dd に整形する
   * @returns yyyy/mm/dd
   */
  toJpDateString = () => {
    const year = this.#date.getFullYear();
    const month = String(this.#date.getMonth() + 1).padStart(2, "0");
    const day = String(this.#date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  /**
   * yyyy/mm/dd ddd に整形する
   * @returns yyyy/mm/dd ddd
   */
  toJpDateWithWeek = () => {
    const week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const dayOfWeek = week[this.#date.getDay()];
    if (this.#date === undefined || dayOfWeek === undefined) return "ー";
    return `${this.toJpDateString()} ${dayOfWeek}`;
  };
}
