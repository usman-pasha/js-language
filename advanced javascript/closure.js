
// lexical scoping 

const { log } = require("console")

// const data = () => {
//     let dataName = 'Usman Pasha';
//     const test = () => {
//         console.log("test one", dataName);
//     }
//     const testData = () => {
//         console.log("test two", dataName);
//     }
//     return  test, testData 
// }

// const d = data();
// d()


const testing = () => {
    let name = 'test'
    return {
        one: () => {
            name = "first"
            console.log("one method", name);
        },
        two: () => {
            name = "second"
            console.log("two method", name);
        }
    }
}

const data = testing();
data.one()
data.one()
data.two()