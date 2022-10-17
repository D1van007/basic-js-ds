class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  remove(valueEnter) {
    let current = this

    while (current.next) {
      if (current.next.value == valueEnter) {
        current.next = current.next.next
      } else { current = current.next }
    }

  }
}

//   removeAt(position) {

//     if (position < 0 || this.length <= position) {
//       return null
//     }
//     let current = this.head;
//     if (position == 0) {
//       this.head = current.next
//     } else {
//       let prev = null
//       let index = 0
//       while (index < position) {
//         prev = current
//         current = current.next
//         index++
//       }
//       prev.next = current.next
//     }
//     this.length--
//     return current.value
//   }

//   indexOf(el) {
//     let current = this.head;
//     let index = 0;
//     while (current) {
//       if (current.value == el) {
//         return index
//       }
//       current = current.next;
//       index++
//     }
//     return -1
//   }

//   remove(el) {
//     this.removeAt(this.indexOf(el))
//   }
// }


module.exports = {
  ListNode
};
