/**
 * A setup with data and view fixtures.
 */
export class SetupFixtures<DATA, VIEW> {
  /**
   *
   * @param data represents data (fixtures)
   * @param view represents view (fixture)
   */
  constructor(public data?: DATA, public view?: VIEW) {}

  setView(view: VIEW) {
    this.view = view;
    return this;
  }

  setData(data: DATA) {
    this.data = data;
    return this;
  }
}
