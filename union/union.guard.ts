// 定义一个evaluatePrice方法，该方法用于根据车辆的类型、容量和评估因子来计算价格。具体如下

// const EVALUATION_FACTOR = Math.PI; 

// function evaluatePrice(vehicle: Vehicle) {
//   return vehicle.capacity * EVALUATION_FACTOR;
// }

// const myTruck: Truck = { vType: "truck", capacity: 9.5 };
// evaluatePrice(myTruck);

// function evaluatePrice(vehicle: Vehicle) {
//   switch(vehicle.vType) {
//     case "car":
//       return vehicle.transmission * EVALUATION_FACTOR;
//     case "truck":
//       return vehicle.capacity * EVALUATION_FACTOR;
//     case "motorcycle":
//       return vehicle.make * EVALUATION_FACTOR;
//   }
// }

// 当一个interface中没有一个属性的时候会报错。
// 这个时候就可以用类型守卫，从呢人确保在xx方法中我们可以安全的方位对象中所包含的属性。来正确计算车辆的价格。
