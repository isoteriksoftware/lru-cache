class node<K, V> {
  public data?: V;
  public key?: K;
  public prev?: node<K, V> = undefined;
  public next?: node<K, V> = undefined;

  constructor(data?: V) {
    this.data = data;
  }
}

export default node;
