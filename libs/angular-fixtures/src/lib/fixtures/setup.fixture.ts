export class SetupFixtures<T, V> {
  /**
   *
   * @param fixtures represents (data) fixtures
   * @param viewFn represents view fixture
   */
  constructor(public fixtures?: T, public view?: V) {}

  setView(view: V) {
    this.view = view;
    return this;
  }
}
