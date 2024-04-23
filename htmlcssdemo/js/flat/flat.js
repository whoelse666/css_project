// 数组中flat方法
let data = {
    type1:[
        {id:1,title:'title1',value:"value1"},
        {id:2,title:'title2',value:"value2"},
    ],
    type2:[
        {id:5,title:'title5',value:"value5"},
        {id:6,title:'title6',value:"value6"},
    ]
}

let values = Object.values(data);
console.log(values)


let flatArr = values.flat();
console.log(flatArr);

let id = 5;



let result = flatArr.find(item => item.id == id);
console.log(result)

