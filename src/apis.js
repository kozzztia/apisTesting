
// class Shape {
//     constructor(color){
//         this.color = color;
//     }
//     getColor(){
//         return this.color;
//     }
// }
//
// class Rectangle extends Shape{
//     constructor(color,width,height){
//         super(color)
//         this.width = width;
//         this.height = height;
//     }
//     getArea(){
//         return this.width*this.height
//     }
// }
// export const Rect = new Rectangle("red", 100,100);
//
//
// export const fetchImages = () => {
//
// }

const arr = [
    "one", "two" , "three"
]

export function fetchImages () {
    const json = JSON.stringify(arr)
    console.log(json)

    const newArr = JSON.parse(json)
    console.log(newArr)

}


