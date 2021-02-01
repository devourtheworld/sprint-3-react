// tasks/sprint-3_5.png

function mapCreator(keys, values){
    const map = new Map();
    for (let i of keys){
        if (typeof values[i-1] === "string"){
            map.set(i, values[i-1]);
        }
    }
    return map;
}

const map2 = mapCreator([1,2,3,4,5],["A", "B", "C", "D", "E"]);
// console.log(mapCreator([1,2,3,4,5],["A", "B", "C", "D", "E"]));
console.log(map2.size);
console.log(map2.get(1));