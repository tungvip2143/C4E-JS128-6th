// let foo = {
//     a: 'hello',
//     b: 'world',
// };

// let qux = 'hello';

// function bar(argument1, argument2) {
//     argument1.a = 'hi';
//     argument2 = 'hi';
// }

// bar(foo, qux);

// console.log(foo.a);
// console.log(qux);

// // Kết quả ra hi và hello
// -------------------

// Setup
const contacts = [{
        firstName: "Van",
        lastName: "Nguyen",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Pho"],
    },
    {
        firstName: "Son",
        lastName: "Trinh",
        number: "0994372684",
        likes: ["Cheese", "Donut", "Apple"],
    },
    {
        firstName: "Trong",
        lastName: "Le",
        number: "0487345643",
        likes: ["Beer", "King Crab"],
    },
    {
        firstName: "Tong",
        lastName: "Vo",
        number: "unknown",
        likes: ["Tiger", "Sword", "Wine"],
    },
];

function lookUpProfile(name, prop) {
    // Chỉ code phía dưới này
    for (let lookUpProfil of contacts)
        if (name = "Tong", prop = lastName) {
            console.log("Vo")
        }
        // Chỉ code phía trên này
}

lookUpProfile("Van", "likes");