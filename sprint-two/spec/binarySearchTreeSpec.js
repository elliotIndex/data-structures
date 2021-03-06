describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5,2,3]);
  });

  it('should execute a callback on every value in a tree using "ascendingLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(4);
    binarySearchTree.insert(10);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(20);
    binarySearchTree.ascendingLog(func);
    expect(array).to.eql([3,4,5,7,10,20]);
    var sortedTree = binarySearchTree.toSortedList();
  });

  it('should be able to balance itself', function(){
    for (var i = 2; i < 10; i++) {
      binarySearchTree = binarySearchTree.insert(i);
    }
    expect(binarySearchTree.value).to.eql(6);
    expect(binarySearchTree.left.left.left.value).to.eql(2);
    expect(binarySearchTree.right.left.value).to.eql(7);    
  });

  it('depth of tree values', function(){
    binarySearchTree.insert(4);
    binarySearchTree.insert(10);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(20);
    expect(binarySearchTree.minDepth).to.eql(2);
    expect(binarySearchTree.maxDepth).to.eql(3);  
  });
});
