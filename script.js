

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtFirst(data) {
    this.head = new Node(data, this.head);
  }

  printData() {
    let current = this.head;
    let currentSec = this.head;
    while (current && currentSec) {
      document.getElementById('demo1').innerHTML = "The values in first Linked List are : " + current.data
      document.getElementById('demo2').innerHTML = "The values in second Linked List are : " + currentSec.data
      current = current.next;
    }
  }



}


const final = []
const secFinal = []
function getTheValue() {
  getfirst = Number(document.getElementById("first").value);
  getsecond = Number(document.getElementById("second").value)
  if (getfirst == "" && getsecond == '') {
    alert("You must insert a value in inputbox.")
  }
  else {
    final.push(getfirst);
    secFinal.push(getsecond);

    const ll = new LinkedList()
    ll.insertAtFirst(final);
    ll.insertAtFirst(secFinal);

    ll.printData()
  }
}
let pairs = []

function check() {


  let x = Number(document.getElementById('c').value)
  if (x <= 0) {
    alert("The sum of two number cannot be zero. Provide a valid numbers")
  } else {

    function countPairs(head1, head2, x) {
      var count = 0;
      for (var itr1 of head1) {
        for (var itr2 of head2) {
          if ((itr1 + itr2) == x)
            count++;

        }
      }

      return count;
    }
    document.getElementById("finalResult").innerHTML = "Total pairs  is : " + countPairs(final, secFinal, x)

  }
}