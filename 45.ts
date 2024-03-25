//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


function car_info(manufacturer: string, model: string, ...options: string[]) {
    let car: any = {
        manufacturer: manufacturer,
        model: model
    };
    for (let option of options) {
        let [key, value] = option.split(':');
        car[key.trim()] = value.trim();
    }
    return car;
  }
  
  console.log(car_info('Toyota', 'Corolla', 'Color: Red', 'Year: 2022', 'Sunroof: Yes'));
  console.log(car_info('Honda', 'Civic', 'Color: Blue', 'Year: 2021', 'Sunroof: No', 'Navigation: Yes'));