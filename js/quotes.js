const quotes = [
    {
        quote : "하고자 하는 자는 방법을 찾고, 하기 싫어하는 자는 핑계를 찾는다",
        author : "-unknown-",
    },
    {
        quote : "자신감은 전염된다. 자신감의 부족도 마찬가지다.",
        author : "-빈스 롬바르디(Vince Lombardi)-",
    },
    {
        quote : "No pain, no gain",
        author : "-unknown-",
    },
    {
        quote : "아는 만큼 보이고, 보이는 만큼 느끼고, 느끼는 만큼 사랑한다.",
        author : "-초등학교 역사 선생님-",
    },
    {
        quote : "Sometimes Life is going to hit you in the head with a brick. Don't lose faith.",
        author : "-Steve Jobs-",
    },
    {
        quote : "Quality is more important than quantity. One home run is much better than two doubles.",
        author : "-Steve Jobs-",
    },
    {
        quote : "The people who are crazy enough to think they can change the world are the ones who do.",
        author : "-Steve Jobs-",
    },
    {
        quote : "훌륭한 사람과 어리석은 사람의 차이는 불과 한 걸음 차이다.",
        author : "-나폴레옹-",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;