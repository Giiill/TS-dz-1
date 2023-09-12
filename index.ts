// Написать тип User с полями: 
// email
// username
// name, 
//surname, 
//age (сделать валидацию по типу от 1 до 100), 
//permission (разрешенные поля: 'admin', 'user', 'editor'), 
// createdAt
// updatedAt
//isOnline, 
//hobbies
// password

// сделать тип для словаря пользователей, где ключ - это id, а значение это тип User

// аналогично с полем User сделать поля для Меssage и Messages 
// (тоже давай сделаем словарь. когда будем рендеринг проходить, объясню почему они лучше массивов)
// (Это нам понадобится когда мы будем совместно писать чат)

// Написать тип Hobby
// написать тип для регистрации и логина. (Register и Login). 
// Важно!!! Не создавать новый тип с нуля, а взять необходимые поля из типа  User
// пользуйся utility types https://www.typescriptlang.org/docs/handbook/utility-types.html
// для типа Login мы оставляем только email и password
// для типа Register  убираем поле  hobbies, isOnline, permission, createdAt, updatedAt и добавляем поле comparePassword

// Ну и дополнительно. подумай какие типы нам еще будут нужны для соц сети и реализуй их.
// Сейчас с ходу в голову приходит что нам нужны будут типы для Menu, Friend и Friends, Likes (для определения кто кому лайк поставил)
// старайся максимально задействовать уже описанные типы.
// это позволит унифицировать работу ts.

// ====================================================================================================







type User = {
    email: string,
    username: string,
    name: string,
    surname: string,
    age: number,
    permission: 'admin' | 'user' | 'editor',
    createdAt: string,
    updatedAt: string,
    isOnline: boolean,
    hobbies: string[],
    password: string
    messages: Record<string, Message>
};

type Message = {
    id: string,
    senderId: string,
    text: string,
    timeStamp: string
}

type Register = {
    comparePassword: string
} & Pick<User, 'email' | 'username' | 'name' | 'surname' | 'age'>;

type Login = Pick<User, 'email' | 'password'>;

// валидация по типу user, и сразу же добавление в словарь
const createUser =
    (email: string,
        username: string,
        name: string,
        surname: string,
        age: number,
        permission: 'admin' | 'user' | 'editor',
        createdAt: string,
        updatedAt: string,
        isOnline: boolean,
        hobbies: string[],
        password: string,
        messages: {}
    ): User => {
        if (age < 1 || age > 100) {
            console.log('Invalid age. Age must be between 1 and 100.');
        };
        const user: User = {
            email,
            username,
            name,
            surname,
            age,
            permission,
            createdAt,
            updatedAt,
            isOnline,
            hobbies,
            password,
            messages

        };
        users[user.email] = user;
        return user;
    };
// создания словаря через утилиту Record
const users: Record<string, User> = {};


