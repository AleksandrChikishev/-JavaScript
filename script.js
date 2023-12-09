<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Калькулятор</title>
</head>
<body>

<script>
    // Функция для сложения
    function add(x, y) {
        return x + y;
    }

    // Функция для вычитания
    function subtract(x, y) {
        return x - y;
    }

    // Функция для умножения
    function multiply(x, y) {
        return x * y;
    }

    // Функция для деления
    function divide(x, y) {
        if (y !== 0) {
            return x / y;
        } else {
            return "Деление на ноль невозможно";
        }
    }

    // Получаем знак операции от пользователя
    let operation = prompt("Выберите операцию (+, -, *, /):");

    // Получаем ввод двух чисел от пользователя
    let num1 = parseFloat(prompt("Введите первое число:"));
    let num2 = parseFloat(prompt("Введите второе число:"));

    // Выполняем операцию в зависимости от выбора пользователя
    let result;
    switch (operation) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = "Неверный знак операции";
    }

    // Выводим результат
    alert("Результат: " + result);
</script>

</body>
</html>
