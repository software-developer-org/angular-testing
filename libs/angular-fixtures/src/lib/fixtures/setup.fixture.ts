export class SetupFixtures<T, V> {
  view: V;

  /**
   * 
   * @param fixtures represents (data) fixtures
   * @param viewFn represents view fixture
   */
  constructor(
    public fixtures?: T,
    public viewFn?: (fixture: SetupFixtures<T, V>) => V
  ) {
    if (viewFn) {
      this.view = viewFn(this);
    }
  }
}
