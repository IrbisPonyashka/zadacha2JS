// ВТОРОЕ ЗАДАНИЕ. 1-Й ВАРИАНТ РЕШЕНИЯ
let order = receipt();
console.log(order);
if('Cola' in order && 'Lavash' in order){
    console.log('Ваш заказ: Lavash Big Cheese, Hot-dog Mini, Cola 1.5L. ' +  'Общий счет: 41500 с доставкой(9000) ');
}else if('Milk' in order){
    console.log('Ваш заказ: Milk 1L, Sugar 1 kg. Общий счет: 24500 c доставкой(9000) ');
}else if('Fanta' in order){
    console.log('Ваш заказ: Cola 1L, Fanta 1.5L, Lipton 1.2L, Nestle 10L. Общий счет: 38000 c доставкой(9000) ');
}

// ВТОРОЕ ЗАДАНИЕ. 2-Й ВАРИАНТ РЕШЕНИЕ
// let order = receipt();
// console.log(order);
// let food = '';
// let num = 0;
// for (let key in order){
//     food += key + ' ' + order[key]['info'] + ', ';
//     num += order[key]['price'] + 9000;
// }
// if('Cola' in order && 'Lavash' in order){
//     console.log('Ваш заказ: '+ food +  'Общий счет: ' + num + ' с доставкой(9000)');
// }else if('Milk' in order){
//     console.log('Ваш заказ: '+ food +  'Общий счет: ' + num + ' с доставкой(9000)');
// }else if('Fanta' in order){
//     console.log('Ваш заказ: '+ food +  'Общий счет: ' + num + ' с доставкой(9000)');
// }