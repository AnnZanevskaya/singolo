# singolo
RS School Singolo task

Сверстать страницу, согласно макету:

PSD:

**[Singolo. Part 1. PSD](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-2/singolo/part-1/singolo1.psd)**

PNG:

**[Singolo. Part 1. PNG](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-2/singolo/part-1/singolo1.png)**

Ключевым моментом является полное соответствие макету. Это достигается совпадением 2 изображений при наложении слоя с картинкой поверх готовго решения с использованием расширения Pixel Perfect. Уделите внимание следующим важным и распространенным моментам:
- Основные блоки должны быть идеально расположены на заданной ширине экрана (1020px).
- Изображения, логотипы, если таковые имеются, должны быть идеально расположены в рамках логического контейнера.
- Иконки должны сохранять идеальное расстояние до соответствующего им текста.
- Если применяется правильный шрифт, проверьте высоту текста - он должен соответствовать исходнику. Ширина может варьироваться. Но общепринятой практикой является добавление свойства межбуквенного интервала (letter-spacing) к соответствующему тексту в заголовках, девизе или цитате.
- Если в строке несколько объектов, а их ширина выглядит одинаково, то блоки, содержащие их, должны быть равны по ширине. Разница в несколько пикселей не имеет значения, важно совпадение размеров.
- Если вы используете тени, есть два решения, которые можно использовать. 1. Сначала необходимо объединить слои в графическом редакторе и использовать изображение в качестве фонового. 2. Добавить тень как box-shadow, и затем ее визуально обработать и придать необходимый вид.

*[Разрешение PerfectPixel для Google Chrome](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=en)*

Поддержка браузеров: **Google Chrome, Mozilla Firefox, Microsoft Edge**. Это означает, что сначала мы разрабатываем для Google Chrome и используем Pixel Perfect для проверки соответствия приложения. Затем мы проверяем, не рушат ли Mozilla Firefox, Microsoft Edge наши стили.


## Формат сдачи

Создайте репозиторий *singolo* в **вашем** Github аккаунте и загрузите файлы HTML (singolo1.html) и CSS (singolo1.css).


## Критерии оценки

Если задание выполнено полностью, и проверяющий не обнаружил никаких дефектов, вы получаете **100 баллов**. Это касается разметки и использования HTML и CSS.

У вас должен быть только один HTML-файл и только один CSS-файл (или два CSS-файла, где второй содержит отдельную коллекцию правил *@font-face*) в вашем решении. Сами шрифты и изображения должны размещаться локально в папке «assets».

1. За сдачу не вовремя, вы можете потерять **до 40 баллов** от общего результата!
2. Несоблюдение стандартов кода или требований синтаксиса может привести к потере **до 20 баллов**.
3. Несоблюдение шаблона PSD (за исключением нюансов со шрифтами) может привести к потере **до 40 баллов**.
4. Невыполнение какого-либо из технических требований может привести к потере **от 3 до 10 баллов**.


## Технические требования

«Интерактивный» - означает, что у элемента присутствует визуальный эффект или анимация в зависимости от действий пользователя, например, при наведении курсора или нажатии. Это может отражаться в свойствах:
- pointer: cursor,
- background,
- underline,
- color.

1. Header (`<header>` содержит только логотип и панель навигации)
- Интерактивная панель навигации.
- Логотип содержит 2 разных текстовых элемента, белый и красный.
- На странице обязательно должен присутствовать один элемент `<h1>`. Расположить на свое усмотрение.
- Внизу есть небольшая линия другого цвета, будьте внимательны.

2. Slider block
- Стрелки должны быть интерактивными. При нажатии ничего происходить не должно.
- Есть 3 варианта сделать картинки. Выберете один:
- a. Создайте изображения с наложением нескольких слоев, используя z-index. Элементы должны быть в position: absolute.
- b. Создайте полные изображения вертикального и горизонтального телефонов с помощью графического редактора (фотошоп или аналог).
- c. Объедините оба варианта и создайте 3 элемента изображения: тень, контейнер телефона, внутреннее изображение. В таком случае изображение телефона и тени можно просто повернуть на 90 градусов.
- Внизу есть небольшая линия другого цвета, будьте внимательны.

3. Our Services block
- 3-х колоночный макет снизу. Лучше использовать [flexbox](https://habr.com/ru/post/467049/) или [grid](https://tuhub.ru/posts/css-grid-complete-guide).
- Изображения можно использовать как иконки и круги вокруг. Или просто как иконки, а круги - это свойство border-radius.
- Если в текстовой ячейке больше текста, чем она вмещает, и он начинает выходить за границы элемента, то излишний текст должен быть скрыт.
- Внизу есть небольшая линия другого цвета, будьте внимательны.


## Полезные ссылки

Шрифты можно найти здесь:  
[Lato, google](https://fonts.google.com/specimen/Lato)  
[Lato, fontsquirrel](https://www.fontsquirrel.com/fonts/lato)  
Если вы не можете найти или скачать нужный шрифт, просто замените его шрифтом с тем же типом засечек.


## Если у вас нет Photoshop для работы с файлами .psd
Есть хороший инструмент для дизайна: [Photopea](https://www.photopea.com/)
Регистрация не требуется, просто нажмите кнопку «Открыть» или перетащите загруженный шаблон PSD. Да, его функциональность довольно ограничена, но он отлично подходит для работы со слоями.
Если вам нужно извлечь изображение, доступна функция «download .png» или «download .svg».
Он отвечает требованиям для этого домашнего задания.