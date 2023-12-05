class Item {
  constructor(id, content) {
    this.id = id;
    this.content = content;
    this.createdAt = new Date();
  }
}

module.exports = Item;
